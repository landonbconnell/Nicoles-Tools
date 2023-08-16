import React from 'react';
import { useSelector } from 'react-redux';
import { savedIngredientsSelector } from 'redux/selectors/ingredientSelectors';

const SavedIngredients = () => {
  const savedIngredients = useSelector(savedIngredientsSelector);

  return <></>;
};

export default SavedIngredients;
