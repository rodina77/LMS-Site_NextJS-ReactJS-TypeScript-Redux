'use client'
import React, { useState, useEffect } from 'react';
import ProfileLogo from '../components/ProfileLogo';
import { Input } from "@chakra-ui/react";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { Field } from "@/components/ui/field";
import { Container, Typography } from "@mui/material";
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/navBar';

const Page = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  useEffect(() => {
    const fullName = localStorage.getItem('fullName');

    if (fullName) {
      const nameParts = fullName.split(' ');
      setFirstName(nameParts[0]);
      setLastName(nameParts.slice(1).join(' ')); 
    }
  }, []);

  return (
    <>
    <ResponsiveAppBar/>
    <Container>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4 py-10 border px-5 my-8">
        <ProfileLogo />
        <div className="border p-10 w-full">
          <Typography textAlign={"center"} variant="h4">
            Public profile
          </Typography>
          <Typography textAlign={"center"} style={{ paddingBottom: '20px' }}>
             Information about yourself.
          </Typography>
          <hr style={{ padding: '10px 0px' }} />
          <Field label="Basics">
            <Input
              className="border"
              value={firstName}  
              readOnly
            />
          </Field>
          <Field className='my-3'>
            <Input
              className="border"
              value={lastName} 
              readOnly
            />
          </Field>
          <Field className='my-3' helperText="Add a professional headline like, 'Instructor at Udemy' or 'Architect.'">
            <Input
              className="border"
              placeholder="Headline"
            />
          </Field>
          <Field className='border'>
            <NativeSelectRoot>
              <NativeSelectField items={["English(US)", "Option 2", "Option 3"]} />
            </NativeSelectRoot>
          </Field>
          <hr />
      
        </div>
      </div>
    </Container>
    <Footer/>
    </>
  );
};

export default Page;
