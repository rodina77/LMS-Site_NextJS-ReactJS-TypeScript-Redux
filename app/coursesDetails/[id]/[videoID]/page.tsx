import React from 'react';
import CourseVideo from '../../../components/CourseVideo';
import { allCourses } from '../page';
import ResponsiveAppBar from '@/app/components/navBar';
import Footer from '@/app/components/Footer';

interface Params {
  id: string; 
}

const Page : React.FC<{ params: Params }> = ({ params }) => {
  const { id } = params; 
  const courseId = Number(id);

  const course = allCourses.find(item => item.id === courseId);
  const video = course?.video; 
  const courseContent= course?.courseContent;
  
  return (
    <>
    <ResponsiveAppBar/>
      <CourseVideo courseContent={courseContent} video={video}/>
      <Footer/>
    </>
  );
}

export default Page;
