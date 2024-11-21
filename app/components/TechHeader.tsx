'use client'
import { Typography } from '@mui/material';
import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';
import Link from 'next/link';
const TechHeader = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  return (
    <>
      <div className='container grid lg:grid-cols-2 md:grid-cols-1 px-20 sm:grid-cols-1 justify-around'>
        <div className='flex flex-col justify-center'>
          <Typography variant='h2' style={{color:'#673ab7' , fontWeight:'bold'}}>{t.comeTech}</Typography>
          <Typography variant='h5' style={{color:'gray'}}>{t.BecomeTech}<br/> — including your own</Typography>
        </div>
        <div>
          <img src="/imgs/3728642.webp" width={700} height={700} alt="HeaderImg" />
        </div>
      </div>
      
    </>
  );
}

export default TechHeader;
