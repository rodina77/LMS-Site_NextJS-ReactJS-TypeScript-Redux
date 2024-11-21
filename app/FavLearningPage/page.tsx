import React from 'react';
import { Container } from '@mui/material';
import Favorites from '../favouritesPage/page';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';

const FavCourses = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Container>
    <div className='flex gap-3 my-10'>
     <Favorites/>
    </div>
    </Container>
    <Footer/>
    </>
  );
}

export default FavCourses;
