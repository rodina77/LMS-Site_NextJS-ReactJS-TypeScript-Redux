"use client"
import { Container, Link } from '@chakra-ui/react';
import { Alert, Button, Typography } from '@mui/material';
import React from 'react';

const Page = () => {

  return (
    <div className='h-full bg-white'>
      <Container>
      <Alert sx={{padding:'30px 0px'}} severity="success">You are successfully Logged out.</Alert>
      <div className='grid lg:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <img src="/imgs/logo-ub.svg" width={300} height={300} alt="udemyLogo" />
          <Typography variant='h6' style={{color:'gray'}}>Your company can give you access to our <br/> top 27,000+ business and tech courses.</Typography>
          <Button style={{backgroundColor:'#673ab7', color:'white', width:'400px' , marginTop:'20px'}}>
            <Link href="/">Login</Link> </Button>
        </div>

        <div>
          <img src="/imgs/3728642.webp" width={600} height={600} alt="LogoutHeader" />
        </div>

      </div>
      </Container>
    </div>
  );
}

export default Page;
