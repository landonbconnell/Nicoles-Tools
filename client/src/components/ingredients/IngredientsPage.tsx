import React from 'react';
import AddIngredientButtons from './AddIngredientButtons';
import NewIngredient from './NewIngredient';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { newIngredientSelector } from 'redux/selectors/ingredientSelectors';
import SavedIngredients from './SavedIngredients';

const IngredientsPage = () => {
  const newIngredient = useSelector(newIngredientSelector);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'secondary.main',
      }}
    >
      {newIngredient.name ? (
        <NewIngredient />
      ) : (
        <>
          <Typography variant='h5' sx={{ marginBottom: '1rem' }}>
            Ingredients
          </Typography>

          <SavedIngredients />

          <AddIngredientButtons />
        </>
      )}
    </Box>
  );
};

export default IngredientsPage;
