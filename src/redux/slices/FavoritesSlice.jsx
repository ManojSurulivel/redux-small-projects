import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
}

const FavoritesSlice = createSlice({
   name: "favorites",
   initialState,
   reducers :{
    addFavorite: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.favorites.find(
            (item) => item.id === newItem.id
        );
        if(!existingItem){
             state.favorites.push(newItem)
        }
    },
    removeFavorite: (state, action) => {
        const id = action.payload;
        state.favorites = state.favorites.filter((item) => item.id !== id)
    },

   }
})

export const {addFavorite, removeFavorite} = FavoritesSlice.actions;

export default FavoritesSlice.reducer