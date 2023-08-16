import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductView from './ProductView';
import StyledButton from 'components/misc/StyledButton';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { newIngredientSelector } from 'redux/selectors/ingredientSelectors';
import { resetNewIngredient } from 'redux/reducers/ingredientSlice';

const NewIngredient = () => {
  const dispatch = useDispatch();
  const newIngredient = useSelector(newIngredientSelector);
  const { name, selectedProducts, products } = newIngredient;

  const save = () => {
    const data = {
      name,
      products: selectedProducts,
    };

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/kroger/products/setPreferred`,
        data
      )
      .then(() => {
        dispatch(resetNewIngredient);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='100%' boxShadow={3} bgcolor='grey.300'>
          <Typography variant='h5' p='0.5rem 0 0.5rem 1rem' gutterBottom>
            {name}
          </Typography>
        </Box>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          {products.map((product, index) => (
            <ProductView key={index} product={product} />
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
            <StyledButton label='Save' onClick={save} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NewIngredient;
