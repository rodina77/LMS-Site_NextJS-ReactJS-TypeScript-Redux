import { Container, Typography } from '@mui/material';
import React from 'react';

interface IProps
{
  title:string;
  subTitle:string;
  question:string;
  description:string;
  imgSrc:string;

}
const TechNavigationContent = ({title,subTitle,question,description ,imgSrc}:IProps) => {
  return (
    <>
    <Container>
      <div className='flex'>
        <div className='p-10'>
          <Typography variant='body2' style={{padding:'20px 0px'}}>{title}</Typography>
      
          <Typography variant='body2'>{subTitle}</Typography>
      
          <Typography variant='h6'  style={{padding:'20px 0px'}}>{question}</Typography>
        
          <Typography variant='body2'>{description}</Typography>
      
        </div>

        <div>
          <img src={imgSrc} width={500} height={500} alt="nav_img" />
        </div>

      </div>
    </Container>
      
    </>
  );
}

export default TechNavigationContent;
