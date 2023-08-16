import React, { useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import StyledButton from 'components/misc/StyledButton';
import { searchProductsByTerm } from 'api/kroger/products';
import { useDispatch } from 'react-redux';
import { titleCase } from '../../utils/titleCase';
import {
  setNewIngredientName,
  setNewIngredientProducts,
} from 'redux/reducers/ingredientSlice';

const AddIngredientButtons = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [addingIngredient, setAddingIngredient] = useState(false);

  const handleAddButtonToggle = () => {
    setAddingIngredient((previousState) => !previousState);
  };

  const handleAddIngredient = async () => {
    handleAddButtonToggle();
    dispatch(setNewIngredientName(titleCase(input)));
    const { data } = await searchProductsByTerm(input);
    console.log(data);
    dispatch(setNewIngredientProducts(data));
  };

  return addingIngredient ? (
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledButton label='Cancel' onClick={handleAddButtonToggle} />
        </Grid>
        <Grid item xs={6}>
          <StyledButton
            label='Save'
            disabled={input.length === 0}
            onClick={handleAddIngredient}
          />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <StyledButton label='Add Ingredient' onClick={handleAddButtonToggle} />
  );
};

export default AddIngredientButtons;
