'use client'

import React, { useEffect, useState } from 'react';
import TechHeader from '../components/TechHeader';
import Awards from '../components/Awards';
import { Container, Typography } from '@mui/material';
import Statistics from '../components/Statistics';
import { TecTab } from '../components/TechTab';
import TextSection from '../components/TextSection';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';

const Page = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 

  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    setLoaded(true); 
  }, []); 

  if (!loaded) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <ResponsiveAppBar />
      <div>

        <TechHeader />

        <Typography variant='h3' style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: '30px' }}>{t.soManyReasons}</Typography>
        <div className='container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-between p-20'>
          <Awards imgSrc={'/imgs/value-prop-teach-v3.jpg'} title={'Teach your way'} description={'Publish the course you want, in the way you want, and always have control of your own content.'} />
          <Awards imgSrc={'/imgs/value-prop-inspire-v3.jpg'} title={'Inspire learners'} description={'Teach what you know and help learners explore their interests, gain new skills, and advance their careers.'} />
          <Awards imgSrc={'/imgs/value-prop-get-rewarded-v3.jpg'} title={'Get rewarded'} description={'Expand your professional network, build your expertise, and earn money on each paid enrollment.'} />
        </div>

        <Statistics />

        <Container>
          <Typography variant='h3' style={{ fontWeight: 'bold', paddingTop: '40px', marginTop: '40px' }}>{t.HowToBegin}</Typography>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TecTab />
          </div>

        </Container>

        <TextSection />

      </div>
      <Footer />
    </>
  );
}

export default Page;
