import { Button, Container, Link, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';

interface IProps
{
  title: string;
  coursesCount:string;
}
const EmptyCart = ({title, coursesCount}:IProps) => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  return (
    <>
    <div>
      <Container sx={{padding:'30px 0px'}}>
      <Typography variant='h3' style={{fontWeight:'500'}}>{title}</Typography>
      <Typography variant='h6' style={{fontWeight:'500'}}>{coursesCount}</Typography>
      <div className='flex flex-col justify-center align-middle border text-center p-40'>
        <img width={200} height={200} style={{display:'block' , margin:'auto'}} src="/imgs/empty-shopping-cart-v2.jpg" alt="empty_cart" />
        <Typography variant='h6'>{t.keepShopping}</Typography>
        <Button style={{backgroundColor:'#673ab7' , color:'white' , width:'200px' , display:'block', margin:'auto' , marginTop:'30px'}}>
          <Link href="/homePage" style={{color:'white'}}>{t.KeepBtn}</Link>
          </Button>
      </div>
      </Container>
    </div>
    </>
  );
}

export default EmptyCart;
