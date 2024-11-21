'use client';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Card } from 'antd';
import { Container, Typography } from '@mui/material';
import EmptyCart from '../EmptyCartPage/page';
import { languages } from '../languages';

const EnrolledCourses = () => {
  const enrolledCourses = useSelector((state: RootState) => state.enrolled.items);
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en;

  // Local state to track whether the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // Set `isMounted` to true after the component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering of enrolled courses content during SSR (on the server)
  if (!isMounted) return null;

  return (
    <Container>
      <Typography variant="h6" marginY={3}>{t.EnrolledCourses}</Typography>
      <div className="flex flex-wrap justify-between">
        {enrolledCourses.length === 0 ? (
          <EmptyCart title={t.EnrolledCourses} coursesCount={"0 courses enrolled."} />
        ) : (
          enrolledCourses.filter(course => course.id && course.title && course.imgSrc && course.price).map(course => (
            <Card 
              key={course.id}
              style={{ margin: '10px', border: '1px solid black', flex: '1 1 300px', maxWidth: '300px' }} // Flex properties
            >
              <img 
                src={course.imgSrc} 
                style={{ display: 'block', margin: 'auto' }} 
                width={200} 
                height={200} 
                alt={course.title} 
              />
              <Typography variant="h6" textAlign={'center'}>{course.title}</Typography>
              <Typography variant="body2" color={'gray'} textAlign={'center'}>${course.price}</Typography>
            </Card>
          ))
        )}
      </div>
    </Container>
  );
};

export default EnrolledCourses;
