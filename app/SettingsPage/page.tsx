'use client'
import React, { useState, useEffect } from 'react';
import { Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button, Container, Typography } from "@mui/material";
import ProfileLogo from "../components/ProfileLogo";
import toast from "react-hot-toast";
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';

const SettingsPage = () => {
  const [username, setUsername] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = existingUsers.map((user: { username: string, password: string, fullName: string }) => {
      if (user.username === username) {
        return { ...user, password: newPassword };
      }
      return user;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('password', newPassword);
    toast.success("Password changed successfully!");

    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <>
    <ResponsiveAppBar/>
      <Container>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4 py-10 border px-5 my-8">
          <ProfileLogo />
          <div className="border p-10">
            <Typography textAlign={"center"} variant="h4">
              Account
            </Typography>
            <Typography textAlign={"center"} style={{ paddingBottom: '20px' }}>
              Edit your account settings and change your password here.
            </Typography>
            <hr style={{ padding: '10px 0px' }} />
            
            <Field label="UserName">
              <Input
                className="border"
                value={`Your username is ${username}`}
                readOnly
              />
            </Field>
            <hr />
            <Input
              className="border my-3"
              placeholder="Enter New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <Input
              className="border my-3"
              placeholder="Re-Type New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              className="bg-black my-3 text-white"
              onClick={handleChangePassword}
            >
              Change Password
            </Button>
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  );
};

export default SettingsPage;
