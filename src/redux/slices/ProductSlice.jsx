import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', category: 'Electronics', price: 100 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 50 },
    { id: 3, name: 'Product 3', category: 'Electronics', price: 200 },
    { id: 4, name: 'Product 4', category: 'Books', price: 20 },
    { id: 5, name: 'Product 5', category: 'Clothing', price: 490 },
  ],
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default ProductSlice.reducer;
