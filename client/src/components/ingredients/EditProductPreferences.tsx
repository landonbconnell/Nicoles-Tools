import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductView from './ProductView';
import StyledButton from 'components/misc/StyledButton';

const EditProductPreferences = ({
  ingredient,
  products,
  setProducts,
  setSelectedProducts,
  setEditingProductPreferences,
}) => {
  const reset = () => {
    setProducts([]);
    setSelectedProducts([]);
    setEditingProductPreferences(false);
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
            {ingredient}
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
              product={product}
              setSelectedProducts={setSelectedProducts}
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
            <StyledButton label='Cancel' onClick={reset} />
          </Grid>
          <Grid item>
            <StyledButton
              label='Save'
              onClick={() => {
                reset();
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default EditProductPreferences;
