import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice:0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart:(state,action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else{
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalPrice += newItem.price;
        },

        removeItemFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((item)=> item.id === id);

            if(existingItem){
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        },

        increaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
                state.totalQuantity++;
                state.totalPrice += existingItem.price;
            }
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
      
            if (existingItem && existingItem.quantity > 1) {
              existingItem.quantity--;
              existingItem.totalPrice -= existingItem.price;
              state.totalQuantity--;
              state.totalPrice -= existingItem.price;
            } else if (existingItem && existingItem.quantity === 1) {
              state.cartItems = state.cartItems.filter(item => item.id !== id);
              state.totalQuantity--;
              state.totalPrice -= existingItem.price;
            }
          },

    }
})

export const {
    addItemToCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity
} = CartSlice.actions

export default CartSlice.reducer