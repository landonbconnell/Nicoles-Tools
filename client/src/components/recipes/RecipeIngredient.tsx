import React from 'react';
import SelectIngredient from './SelectIngredient';
import { Grid, useTheme, useMediaQuery } from '@mui/material';
import SelectUnit from './SelectUnit';

import SetQuantity from './SetQuantity';

interface RecipeIngredientProps {
  index: number;
}

const RecipeIngredient = ({ index }: RecipeIngredientProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <Grid container justifyContent='center'>
      {isMobile ? (
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={1}
        >
          <Grid item width={'calc(100% - 4rem)'}>
            <SelectIngredient index={index} />
          </Grid>

          <Grid
            item
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={1}
            width={'calc(100% - 3.5rem)'}
          >
            <Grid item xs={6}>
              <SetQuantity index={index} />
            </Grid>
            <Grid item xs={6}>
              <SelectUnit index={index} />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          maxWidth='30rem'
          spacing={3}
        >
          <Grid item xs={6}>
            <SelectIngredient index={index} />
          </Grid>
          <Grid item xs={3}>
            <SetQuantity index={index} />
          </Grid>
          <Grid item xs={3}>
            <SelectUnit index={index} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default RecipeIngredient;
