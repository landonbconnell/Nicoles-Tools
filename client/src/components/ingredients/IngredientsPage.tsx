import React, { useState, useEffect } from 'react';
import AddIngredientButtons from './AddIngredientButtons';
import EditProductPreferences from './EditProductPreferences';
import { Typography } from '@mui/material';
import ProductView from './ProductView';

const IngredientsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [editingProductPreferences, setEditingProductPreferences] =
    useState(false);
  const [addIngredientInput, setAddIngredientInput] = useState('');

  useEffect(() => {
    console.log(selectedProducts);
  }, [selectedProducts]);

  return (
    <>
      <Typography variant='h5' sx={{ marginBottom: '1rem' }}>
        Ingredients
      </Typography>

      {products.map((product, index) => (
        <ProductView
          key={index}
          product={product}
          setSelectedProducts={setSelectedProducts}
        />
      ))}

      {editingProductPreferences && (
        <EditProductPreferences
          ingredient={addIngredientInput}
          setEditingProductPreferences={setEditingProductPreferences}
          products={products}
        />
      )}
      <AddIngredientButtons
        editingProductPreferences={editingProductPreferences}
        setEditingProductPreferences={setEditingProductPreferences}
        addIngredientInput={addIngredientInput}
        setAddIngredientInput={setAddIngredientInput}
        setProducts={setProducts}
      />
    </>
  );
};

export default IngredientsPage;
