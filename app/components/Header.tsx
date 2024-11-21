'use client'
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { Typography } from '@mui/material';
import CarouselSection from './Carousel';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';

const Header = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 

  const username= localStorage.getItem('username');
  const firstLetter = username ? username.charAt(0).toUpperCase() : ''; 

  return (
    <>
      <div className='flex container-lg mt-5 gap-3'>
        <div> <Avatar sx={{ bgcolor: deepPurple[500] }}>{firstLetter}</Avatar></div>
        <div> 
          <Typography variant='h6'>{t.welcomeBack}, {username}</Typography>
          <p>{t.start}</p>
        </div>
      </div>

      <CarouselSection />
    </>
  );
}

export default Header;
