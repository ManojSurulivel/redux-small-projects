

//Ex: 1
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { login, logout } from '../redux/slices/AuthSlice'

// const Authentication = () => {
//     const isAuthenticated = useSelector((state)=> state.authInfo.isAuthenticated)
//     const dispatch = useDispatch()

//   return (
//     <div>
//       {isAuthenticated ? (<div>
//         <h1>Welcome User!</h1>
//         <button onClick={()=> dispatch(logout)}>Logout</button>
//       </div>) : (<div>
//         <h1>ThankYou User!</h1>
//         <button onClick={()=> dispatch(login)}>Login</button>
//       </div>)}
//     </div>
//   )
// }

// export default Authentication


//Ex: 2
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/slices/AuthSlice'; // import the login and logout actions

function Authentication() {
  const isAuthenticate = useSelector((state) => state.authInfo.isAuthenticated); // Get isAuthenticated state from Redux
  const dispatch = useDispatch(); // Create a dispatch function

  const handleClick = () => {
    isAuthenticate ? dispatch(logout()) : dispatch(login()); 
  };

  return (
    <div className='auth'>

        <h1>4. Login & Logout Authentication with Redux</h1>
        
        <div className='auth-display'>
        {isAuthenticate ? (
        <div>
          <h2 className='login'>Welcome, User!</h2> 
          <button onClick={handleClick}>Logout</button> 
        </div>
      ) : (
        <div>
            <h2 className='logout'>ThankYou, User!</h2>
          <button onClick={handleClick}>Login</button>
        </div>
      )}
        </div>
      
    </div>
  );
}

export default Authentication;
