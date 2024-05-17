import Header from 'pages/common/Header';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLVDispatch, useLVSelector } from 'store/hooks';
import { toggleTask } from 'store/reducers/taskSlice';

import {
    Box, Button, Card, CardActions, CardContent, Checkbox, List, ListItem, ListItemButton,
    ListItemText, Typography
} from '@mui/material';

const TaskListPage: FC = () => {
  const { t } = useTranslation();
  const tasks = useLVSelector((state) => state.task);
  const dispatch = useLVDispatch();
  const [checked, setChecked] = useState(tasks.filter(task => task.done).map((task) => task.id));

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    const taskToToggle = tasks.find(task => task.id === value);
    taskToToggle && dispatch(toggleTask(taskToToggle.id));
    
  };

  return (
    <Box>
      <Header />
      <Card className="container rounded-xl mt-12 mx-auto">
        <CardContent>
          <Typography variant="h5" component="div">
            {t("task.list")}
          </Typography>
          <List
            className="w-full mt-8"
            sx={{ bgcolor: "background.paper" }}
          >
            {tasks.length === 0 && <div>{t('tasks.empty')}</div>}
            {tasks.map((task, index) => {
              const labelId = `checkbox-list-secondary-label-${task.id}`;
              return (
                <ListItem
                  key={task.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(task.id)}
                      checked={checked.indexOf(task.id) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      id={labelId}
                      primary={task.title}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/new-ticket">
            {t("btn.add-task")}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TaskListPage;
