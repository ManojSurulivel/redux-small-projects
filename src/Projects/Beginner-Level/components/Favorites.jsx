import React from 'react'
import { addFavorite, removeFavorite } from '../../../redux/slices/FavoritesSlice';
import { useDispatch, useSelector } from 'react-redux';


const moviesAndBooks = [
    { id: 1, title: "The Matrix 🎬", type: "Movie" },
    { id: 2, title: "The Shawshank Redemption  🎬", type: "Movie" },
    { id: 3, title: "The Hobbit 📕", type: "Book" },
    { id: 4, title: "To Kill a Mockingbird 📕", type: "Book" },
  ];

const Favorites = () => {
    // Access the favorite items from Redux state
    const favoritesItems = useSelector((state) => state.favorites.favorites)
    const dispatch = useDispatch();
   
    
    // Check if an item is already a favorite
    const isFavorite = (itemId) => {
        return favoritesItems.some((item) => item.id === itemId)
    }

  return (
    <div className='fav'>
      <h1 >7. Movies and Books with Redux</h1>
      {moviesAndBooks.map((item)=> (
        <div key={item.id} className='fav-btn'>
            {item.title} ({item.type})
            <button className='remove-or-add' onClick={() => {
                if(isFavorite(item.id)){
                    dispatch(removeFavorite(item.id));
                }else{
                    dispatch(addFavorite(item));
                }
            }}>
                { isFavorite(item.id) ? "Remove from Favorites 🚮" : "Add to Favorites" }
            </button>
        </div>
      ))}

      <h2>Your Favorites Movies and Books ❤️</h2>
      {favoritesItems.length === 0 ? (
        <p>No Favorite Added yet.</p>
      ) : (
        <ul>
            {favoritesItems.map((item) => (
                <li key={item.id}>
                    {item.title} ({item.type})
                </li>
            ))}
        </ul>
      )}
    </div>

  )
}

export default Favorites
