'use client'
import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { InstructorData } from '@/InstructorData';
import RatingIcons from '@/app/components/RatingIcons';
import FeedBack from '@/app/components/FeedBack';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { languages } from '@/app/languages';
import ResponsiveAppBar from '@/app/components/navBar';
import Footer from '@/app/components/Footer';

interface Params {
  id: string;
}

const Page: React.FC<{ params: Params }> = ({ params }) => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en;
  
  const [id, setId] = useState<string | null>(null);

  // Use React.use() to unwrap the params
  const unwrappedParams = React.use(params);

  useEffect(() => {
    if (unwrappedParams) {
      setId(unwrappedParams.id);
    }
  }, [unwrappedParams]);

  if (!id) {
    return <div>Loading...</div>; // Handle loading state if params are not available yet
  }

  const dataID = Number(id);
  const instructorData = InstructorData.find(item => item.id === dataID);
  const reviews = instructorData?.reviews;


  return (
    <>
      <ResponsiveAppBar />
      <div className='flex justify-center gap-5 bg-slate-800 p-5 text-white'>
        <Container className='flex justify-center gap-5 text-center p-7'>
          <div>
            <img className='rounded-full' width={400} height={400} style={{ border: '1px solid gray' }} src={instructorData?.imgUrl} alt="instructor_img" />
          </div>

          <div>
            <Typography variant='h2' fontWeight={900}>{instructorData?.instructorName}</Typography>
            <Typography variant='h4' fontWeight={900} sx={{ padding: '20px 0px' }}>{instructorData?.specialist}</Typography>
            <Typography variant='h6' fontWeight={900}>{instructorData?.rating} <RatingIcons /></Typography>
            <Typography variant='h6' fontWeight={900} sx={{ padding: '10px 0px' }}>{t.education} : {instructorData?.education}</Typography>
            <Typography variant='h6' fontWeight={900}>{t.university} : {instructorData?.university}</Typography>
            <Typography variant='h6' fontWeight={900}> {instructorData?.students} Students</Typography>
            <Typography variant='h6' fontWeight={900}> {instructorData?.courses} Courses</Typography>
          </div>
        </Container>
      </div>

      <Container className='my-20'>
        <Typography variant='h6' fontWeight={500} style={{ padding: '20px 0px', marginTop: '30px' }}>{t.feedback}</Typography>
        <FeedBack data={reviews} />
      </Container>
      <Footer />
    </>
  );
}

export default Page;
