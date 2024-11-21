import { Typography } from '@mui/material';
import React from 'react';

interface IProps{
  imgSrc: string;
  title: string;
  description: string;
}
const Awards = ({imgSrc, title,description}:IProps) => {
  return (
    <>
    <div className='text-center p-6'>
      <img style={{display:'block', margin:'auto'}} src={imgSrc} alt="Award_image" />
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='body2'>{description}</Typography>
    </div>
      
    </>
  );
}

export default Awards;
