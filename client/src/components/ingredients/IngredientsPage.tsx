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
import {
  addSavedIngredient,
  setSavedIngredientProducts,
} from 'redux/reducers/ingredientSlice';
import Header from '../Header';
import { getProductsById } from 'api/kroger/products';

const IngredientsPage = () => {
  const dispatch = useDispatch();
  const savedIngredients = useSelector(savedIngredientsSelector);
  const newIngredient = useSelector(newIngredientSelector);

  const fetchProductData = async (name, productIds) => {
    const products = await getProductsById(productIds);
    dispatch(setSavedIngredientProducts({ name, products }));
  };

  // call the async function getIngredients() on mount
  useEffect(() => {
    if (savedIngredients.length === 0) {
      getIngredients().then((ingredients) => {
        ingredients.forEach((ingredient) => {
          dispatch(addSavedIngredient(ingredient));

          const { name, productIds, products } = ingredient;
          fetchProductData(name, productIds);
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
