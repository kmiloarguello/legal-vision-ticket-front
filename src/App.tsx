import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import theme from './config/theme';
import { Error404, TaskListPage } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
