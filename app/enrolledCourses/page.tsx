import React from 'react';
import EnrolledCourses from '../enrolledPage/page';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';

const EnrolledCoursesPage = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <EnrolledCourses/>
    <Footer/>
    </>
  );
}

export default EnrolledCoursesPage;
