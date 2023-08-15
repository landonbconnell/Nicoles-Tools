import React, { useEffect } from 'react';
import { searchProductsByTerm, getProductById } from 'api/kroger/products';

const App = () => {
  useEffect(() => {
    searchProductsByTerm('milk').then((res) => {
      console.log(res);
    });
  }, []);

  return <h1>React App</h1>;
};

export default App;
