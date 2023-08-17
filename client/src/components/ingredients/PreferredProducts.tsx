import React from 'react';
import { Grid } from '@mui/material';
import ProductView from './ProductView';

const PreferredProducts = ({ products }) => {
  return (
    <div
      style={{
        overflowX: 'auto',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <Grid container direction='row' wrap='nowrap'>
        {products.map((product, index) => (
          <Grid item key={index} style={{ display: 'inline-block' }}>
            <ProductView product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PreferredProducts;
