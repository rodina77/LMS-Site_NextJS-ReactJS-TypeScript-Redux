'use client'
import { Avatar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const ProfileLogo = () => {
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-center">
        <Avatar
          className="bg-slate-900 m-auto"
          sx={{
            bgcolor: "black",
            padding: "50px",
            fontSize: "25px",
            marginTop: "20px",
          }}
        >
          {firstLetter}
        </Avatar>
        <Typography variant="h4" style={{ paddingTop: '20px' }}>
          {fullName}
        </Typography>
      </div>
    </div>
  );
};

export default ProfileLogo;
