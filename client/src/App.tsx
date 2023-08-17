import React from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import IngredientsPage from 'components/ingredients/IngredientsPage';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import './styles/App.css';
import RecipesPage from 'components/recipes/RecipesPage';
import CakeCostsPage from 'components/cakeCosts/CakeCostsPage';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      //mobile: 829,
      sm: 650,
      md: 960,
      lg: 1275,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      light: '#ddc9c4',
      main: '#cbaca2',
      dark: '#937a74',
      contrastText: '#303030',
    },
    secondary: {
      light: '#ffffff',
      main: '#f3ebe8',
      dark: '#f5efed',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Nunito',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/ingredients' element={<IngredientsPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/cake-costs' element={<CakeCostsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
