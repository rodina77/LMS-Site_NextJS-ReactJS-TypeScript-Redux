'use client'
import { Container, Typography } from '@mui/material';
import React from 'react';
import { CardHorizontal } from '../components/FlexBoxCard';
import { InstructorData } from '@/InstructorData';
import RatingIcons from '../components/RatingIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';

const Page = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  
  const renderInstructorData = InstructorData.map((data)=> <CardHorizontal key={data.id} id={data.id} students={data.students} courses={data.courses} cardTitle={data.instructorName} child={<RatingIcons/>} description={data.description} imgUrl={data.imgUrl}/>
)

  return (
    <>
    <ResponsiveAppBar/>
    <div className='bg-slate-800 h-80 text-center text-white flex flex-col justify-center'>
      <Typography variant='h2' fontWeight={900}>{t.meetInstructors}</Typography>
      <Typography variant='h6' fontWeight={100}>{t.instructorDes}</Typography>
    </div>

    <Container className='grid lg:grid-cols-2 gap-3 my-10'>

      {renderInstructorData}

  </Container>
  <Footer/>
      
    </>
  );
}

export default Page;
