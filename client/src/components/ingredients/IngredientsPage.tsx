import React, { useEffect } from 'react';
import AddIngredientButtons from './AddIngredientButtons';
import NewIngredient from './NewIngredient';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  newIngredientSelector,
  savedIngredientsSelector,
} from 'redux/selectors/ingredientSelectors';
import SavedIngredient from './SavedIngredient';
import { getIngredients } from 'api/database/ingredients';
import { addSavedIngredient } from 'redux/reducers/ingredientSlice';
import Header from '../Header';

const IngredientsPage = () => {
  const dispatch = useDispatch();
  const savedIngredients = useSelector(savedIngredientsSelector);
  const newIngredient = useSelector(newIngredientSelector);

  // call the async function getIngredients() on mount
  useEffect(() => {
    if (savedIngredients.length === 0) {
      getIngredients().then((ingredients) => {
        ingredients.forEach((ingredient) => {
          dispatch(addSavedIngredient(ingredient));
        });
      });
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'secondary.main',
        overflowX: 'hidden',
      }}
    >
      {newIngredient.name ? (
        <NewIngredient />
      ) : (
        <>
          <Header />

          {savedIngredients.map((ingredient, index) => (
            <SavedIngredient key={index} ingredient={ingredient} />
          ))}

          <AddIngredientButtons />
        </>
      )}
    </Box>
  );
};

export default IngredientsPage;
