import React, { useState } from 'react';
import { Grid } from '@mui/material';
import SavedIngredientHeader from './SavedIngredientHeader';
import { getProductsById } from 'api/kroger/products';
import { useDispatch } from 'react-redux';
import { setSavedIngredientProducts } from 'redux/reducers/ingredientSlice';
import PreferredProducts from './PreferredProducts';

const SavedIngredient = ({ ingredient }) => {
  const dispatch = useDispatch();
  const { name, productIds, products } = ingredient;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandHeader = async () => {
    setIsExpanded(!isExpanded);
    if (productIds.length > products.length) {
      const products = await getProductsById(productIds);
      dispatch(setSavedIngredientProducts({ name, products }));
    }
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <SavedIngredientHeader
        name={name}
        isExpanded={isExpanded}
        onClick={handleExpandHeader}
      />

      {isExpanded && <PreferredProducts products={products} />}
      {/* Other content that should be shown when expanded can be added here */}
    </Grid>
  );
};

export default SavedIngredient;
