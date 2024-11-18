import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } from '../redux/slices/CartSlice';

const products = [
  { id: 1, name: 'Shirts👔', price: 100 },
  { id: 2, name: 'Pants👖', price: 200 },
  { id: 3, name: 'Shoes🥾', price: 300 },
];


function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);  // Access cart items from Redux state
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);  // Access total item count
  const totalPrice = useSelector((state) => state.cart.totalPrice);  // Access total price
  const dispatch = useDispatch();  // Create dispatch function to dispatch actions

  return (
    <div className='cart'>
      <h1>6. Shopping Cart App with Redux</h1>

      <h2 style={{color:"red"}}> Products ⬇️</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button className='add-btn'  onClick={() => dispatch(addItemToCart(product))}>Add to Cart</button>
        </div>
      ))}

      <h2 style={{color:"green"}}>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{color:"blue",margin:"20px"}}>
                {item.name} - ${item.price} x {item.quantity} = ${item.totalPrice}
                <button  className='btn-cart-inc' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button className='btn-cart-dec' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <button className='btn-cart-remove' onClick={() => dispatch(removeItemFromCart(item.id))}>Remove</button>
              </li>
            ))}
          </ul>

          <div className='total'>
            <p style={{color:"green"}}>Total Items: {totalQuantity}</p>
            <p style={{color:"green"}}>Total Price: ${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
