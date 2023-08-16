import React, { useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import StyledButton from 'components/misc/StyledButton';
import { searchProductsByTerm } from 'api/kroger/products';

const AddIngredientButtons = ({
  editingProductPreferences,
  setEditingProductPreferences,
  addIngredientInput,
  setAddIngredientInput,
  setProducts,
}) => {
  const [addingIngredient, setAddingIngredient] = useState(false);

  const handleAddButtonToggle = () => {
    setAddingIngredient((previousState) => !previousState);
  };

  const handleAddIngredient = async () => {
    handleAddButtonToggle();
    setEditingProductPreferences(true);
    const { data } = await searchProductsByTerm(addIngredientInput);
    console.log(data);
    setProducts(data);
  };

  return (
    <>
      {addingIngredient ? (
        <Box width='15rem'>
          <Grid
            container
            spacing={1}
            alignItems='center'
            justifyContent='space-evenly'
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant='outlined'
                label='Ingredient Name'
                value={addIngredientInput}
                onChange={(e) => setAddIngredientInput(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledButton label='Cancel' onClick={handleAddButtonToggle} />
            </Grid>
            <Grid item xs={6}>
              <StyledButton label='Save' onClick={handleAddIngredient} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <StyledButton label='Add Ingredient' onClick={handleAddButtonToggle} />
      )}
    </>
  );
};

export default AddIngredientButtons;
