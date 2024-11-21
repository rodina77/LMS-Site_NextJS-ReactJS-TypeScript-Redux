'use client'

import React from 'react';
import { Container } from '@mui/material';
import { RootState } from '../store/store';
import { languages } from '../languages';
import { useSelector } from 'react-redux';
import { Demo } from './Navigation'; 

const LearningHeader = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  
  return (
    <>
      <div className='container mx-auto px-4 bg-slate-800 text-white p-9'>
        <Container>
          <h1 style={{ padding: '40px 0px', fontSize: '50px', fontWeight: 'bold', fontFamily: 'SuisseWorks, Georgia, Times' }}>
            {t.myLearning}
          </h1>
        </Container>
      </div>
      <Container>
        <Demo />  
      </Container>
    </>
  );
};

export default LearningHeader;
