import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header : FC = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static" className="bg-lv-blue-200">
      <Toolbar className="px-4">
        <Box className="container">
          <Typography variant="h6" className="text-white">
            {t('app.title')}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;