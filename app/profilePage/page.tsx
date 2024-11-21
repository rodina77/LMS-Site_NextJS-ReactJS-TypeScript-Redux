'use client'
import { Avatar, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EnrolledCourses from '../enrolledPage/page';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [fullName, setFullName] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [firstLetter, setFirstLetter] = useState<string>('');

  useEffect(() => {
    const storedFullName = localStorage.getItem('fullName');
    const storedUsername = localStorage.getItem('username');
    
    if (storedFullName && storedUsername) {
      setFullName(storedFullName);
      setUsername(storedUsername);
      setFirstLetter(storedUsername.charAt(0).toUpperCase());
    }
  }, []);

  if (!fullName || !username) {
    return (
      <div className="bg-slate-900 text-white">
        <Container>
          <Typography variant="h3" fontWeight={900} paddingY={6}>
            User data is not available. Please log in.
          </Typography>
        </Container>
      </div>
    );
  }

  return (
    <>
    <ResponsiveAppBar/>
      <div className="bg-slate-900 text-white">
        <Container>
          <Typography variant="h3" fontWeight={900} paddingY={6}>
            {fullName}
          </Typography>
        </Container>
      </div>
      <div>
        <Container>
          <Avatar className="bg-slate-900" sx={{ bgcolor: 'black', padding: '50px', fontSize: '25px', marginTop: '20px' }}>
            {firstLetter}
          </Avatar>
          <EnrolledCourses />
        </Container>
      </div>
      <Footer/>
    </>
  );
};

export default ProfilePage;
