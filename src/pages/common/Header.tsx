import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Header : FC = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };
  return (
    <AppBar position="static" className="bg-lv-blue-200">
      <Toolbar className="px-4">
        <Box className="container">
          <Typography variant="h6" className="text-white">
            {t('app.title')}
          </Typography>
        </Box>
        <Button onClick={switchLanguage} className="ml-auto">
            {i18n.language === 'en' ? '🇫🇷' : '🇬🇧'}
        </Button>
        
      </Toolbar>
    </AppBar>
  )
}

export default Header;