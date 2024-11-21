import React from 'react';
import { items, recommendedItems, RatingItems, ViewedItems, ShortVideos, newWebItems, PersonalRecommend, TopCourses } from '@/coursesData'; 
import DetailsPageHeader from '@/app/components/DetailsPageHeader';
import DataList from '@/app/components/DataList';
import { Container, Typography } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccordionComponent from '@/app/components/Accordion'; 
import ResponsiveAppBar from '@/app/components/navBar';
import Footer from '@/app/components/Footer';

export const allCourses = [
  ...items,
  ...recommendedItems,
  ...RatingItems,
  ...ViewedItems,
  ...ShortVideos,
  ...newWebItems,
  ...PersonalRecommend,
  ...TopCourses,
];

interface Params {
  id: string; 
}

const CourseDetails: React.FC<{ params: Params }> = ({ params }) => {
  const { id } = params; 
  const courseId = Number(id);

  const course = allCourses.find(item => item.id === courseId);
  if (!course) {
    return <div>Course not found.</div>; 
  }
  
  const data = course.learningContent || []; 
  const courseContent = course.courseContent; 

  return (
    <>
    <ResponsiveAppBar/>
      <DetailsPageHeader videoID={course.id} title={`${course.title}`} description={`${course.description}`} rating={`${course.rating}`} price={`${course.price}`} imgSrc={`${course.image}`} details={`${course.details}` }/>
      <Container>
        <Typography variant='h3' style={{ padding: '20px 0px' }}>Description</Typography>
        <Typography variant='body2'>{course.fullDescription}</Typography>
        <DataList learningData={data} />

        <Typography variant='h4' style={{ padding: '20px 0px' }}>Requirements</Typography>
        <Typography variant='body2'>
          <FactCheckIcon sx={{ color: '#673ab7', margin: '0px 10px' }} />
          {course.requirements}
        </Typography>

        <Typography variant='h4' style={{ padding: '10px 0px', paddingTop:'40px' }}>Course Content</Typography>
        <AccordionComponent courseContent={courseContent} /> 
      
      </Container>
      <Footer/>
    </>
  );
};

export default CourseDetails;
