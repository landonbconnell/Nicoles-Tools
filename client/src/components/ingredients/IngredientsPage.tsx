import React from 'react';
import AddIngredientButtons from './AddIngredientButtons';
import NewIngredient from './NewIngredient';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  newIngredientSelector,
  savedIngredientsSelector,
} from 'redux/selectors/ingredientSelectors';

const IngredientsPage = () => {
  const savedIngredients = useSelector(savedIngredientsSelector);
  const newIngredient = useSelector(newIngredientSelector);

  return (
    <>
      <Typography variant='h5' sx={{ marginBottom: '1rem' }}>
        Ingredients
      </Typography>

      {newIngredient.name ? <NewIngredient /> : <AddIngredientButtons />}
    </>
  );
};

export default IngredientsPage;
