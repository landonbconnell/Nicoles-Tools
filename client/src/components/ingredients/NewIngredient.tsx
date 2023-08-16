import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductView from './ProductView';
import StyledButton from 'components/misc/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { newIngredientSelector } from 'redux/selectors/ingredientSelectors';
import {
  addSavedIngredient,
  resetNewIngredient,
  setSavedIngredientProducts,
} from 'redux/reducers/ingredientSlice';
import { setPreferredProducts } from 'api/kroger/products';

const NewIngredient = () => {
  const dispatch = useDispatch();
  const newIngredient = useSelector(newIngredientSelector);
  const { name, selectedProducts, products } = newIngredient;

  const save = () => {
    const selectedProductData = products.filter((product) =>
      selectedProducts.includes(product.id)
    );
    setPreferredProducts(name, selectedProducts);
    dispatch(addSavedIngredient({ name, productIds: selectedProducts }));
    dispatch(
      setSavedIngredientProducts({
        name,
        products: selectedProductData,
      })
    );
    dispatch(resetNewIngredient());
  };

  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='100%' boxShadow={3} bgcolor='primary.dark'>
          <Typography
            variant='h5'
            p='1rem'
            color='secondary.main'
            textAlign='center'
          >
            Select your preferred products for '{name}':
          </Typography>
        </Box>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          {products.map((product, index) => (
            <Grid item key={index}>
              <ProductView
                selectedProducts={selectedProducts}
                product={product}
              />
            </Grid>
          ))}
        </Grid>

        <Grid
          mb='2rem'
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={5}
        >
          <Grid item>
            <StyledButton
              label='Cancel'
              onClick={() => dispatch(resetNewIngredient())}
            />
          </Grid>
          <Grid item>
            <StyledButton label='Save' onClick={save} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NewIngredient;
