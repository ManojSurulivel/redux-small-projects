import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from '../../../redux/slices/LanguageSlice';
// import  "./App.css";

const Language = () => {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1>12. Language Switcher</h1>
      <h2>{language === 'English' ? 'Welcome' : 'வரவேற்கிறோம்'}</h2>
      <p>{language === 'English' ? 'This is a demo app.' : 'இது ஒரு டெமோ செயலி.'}</p>
      <button onClick={() => dispatch(toggleLanguage())}>
        {language === 'English' ? 'Switch to Tamil' : 'Switch to English'}
      </button>
    </div>
  );
};

export default Language;
