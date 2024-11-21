import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';
const TextSection = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  return (
    <>
    <div className='flex justify-between m-10'>

    <div>
      <img src="/imgs/support-1-v3.jpg" width={700} height={700} alt="img_alt" />
    </div>

      <div className='text-center p-10 flex flex-col justify-center'>
        <Typography variant='h3' style={{fontWeight:'bold'}}>{t.alone}</Typography>
        <Typography>Our Instructor Support Team is here to answer your questions and review your test video, while our Teaching Center gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our online community.</Typography>
        <Typography>You won’t have to do it alone</Typography>
      </div>

      <div>
      <img src="/imgs/support-2-v3.jpg" width={900} height={900} alt="img_alt" />
    </div>

    </div>
      
    </>
  );
}

export default TextSection;
