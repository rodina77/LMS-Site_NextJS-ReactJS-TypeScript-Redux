import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../store/languageSlice';
import { RootState } from '../store/store'; 
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as 'en' | 'it';
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <>
    <LanguageIcon/>
    <select style={{backgroundColor:'transparent' , color:'white'}} value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="it">Italian</option>
    </select>
    </>
  );
};

export default LanguageSelector;
