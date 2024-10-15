import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/slices/ThemeSlice'

const Theme = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state)=> state.theme.mode);
  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <div className='theme'>
      <h1>5. ToggleTheme with Redux</h1>
     <button className="btn-theme" onClick={() => dispatch(toggleTheme())}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
     </button>
      </div>
   
   </div>
  )
}

export default Theme
