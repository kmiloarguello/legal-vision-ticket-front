import 'tailwindcss/tailwind.css';

import _ from 'lodash';
import Header from 'pages/common/Header';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLVDispatch } from 'store/hooks';
import { addTask } from 'store/reducers/taskSlice';
import { Task } from 'types';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, TextField } from '@mui/material';

const schema = yup.object().shape({
  title: yup.string().required(),
  done: yup.boolean(),
});

const defaultValues: Task = {
  id: _.uniqueId(),
  title: "",
  done: false,
};

const NewTaskPage: FC = () => {
  const { t } = useTranslation(); 
  const navigate = useNavigate();
  const { control, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useLVDispatch();
  const { isValid, errors } = formState;

  const onSubmit = (data: any) => {
    const newTask = { ...data, id: _.uniqueId() };
    dispatch(addTask(newTask));
    navigate("/");
    // API.addTask(data);
  };

  return (
    <Box>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <Box className="flex flex-row gap-x-4">
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t("task.label")}
                  variant="outlined"
                  error={!!errors.title}
                  helperText={errors.title && t("task.required")}
                  className="w-64"
                />
              )}
            />
            <Controller
              name="done"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />
          </Box>
          
          <Button
            type="submit"
            variant="contained"
            className="w-full"
            disabled={!isValid}
          >
            {t("task.add")}
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default NewTaskPage;
