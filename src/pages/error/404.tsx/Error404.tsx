import React from 'react';
import { useTranslation } from 'react-i18next';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Container, Typography } from '@mui/material';

const Error404: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="flex flex-col items-center justify-center h-screen text-center">
      <ErrorOutlineIcon style={{ fontSize: '8rem' }} className="text-gray-500 mb-4" />
      <Typography variant="h3" component="h1" className="mb-2">
        {t('error404.title')}
      </Typography>
      <Typography variant="body1">
        {t('error404.description')}
      </Typography>
    </Container>
  );
};

export default Error404;