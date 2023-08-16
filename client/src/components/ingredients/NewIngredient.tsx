import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductView from './ProductView';
import StyledButton from 'components/misc/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { newIngredientSelector } from 'redux/selectors/ingredientSelectors';
import { resetNewIngredient } from 'redux/reducers/ingredientSlice';
import { setPreferredProducts } from 'api/kroger/products';

const NewIngredient = () => {
  const dispatch = useDispatch();
  const newIngredient = useSelector(newIngredientSelector);
  const { name, selectedProducts, products } = newIngredient;

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
            gutterBottom
            variant='h5'
            p='0.5rem 0 0.5rem 1rem'
            color='secondary.main'
          >
            Select your preferred products for '{name}'
          </Typography>
        </Box>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          {products.map((product, index) => (
            <ProductView
              key={index}
              selectedProducts={selectedProducts}
              product={product}
            />
          ))}
        </Grid>

        <Grid
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
            <StyledButton
              label='Save'
              onClick={() => {
                setPreferredProducts(name, products);
                dispatch(resetNewIngredient());
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NewIngredient;
