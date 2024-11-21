'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface User {
  username: string;
  password: string;
  fullName: string; 
}

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>(''); 
  const [errors, setErrors] = useState<{ username?: string; password?: string; confirmPassword?: string; fullName?: string }>({});

  const validateForm = () => {
    const newErrors: { username?: string; password?: string; confirmPassword?: string; fullName?: string } = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!fullName) newErrors.fullName = 'Full Name is required'; 
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const newUser: User = { username, password, fullName }; 
      const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');

      if (existingUsers.some(user => user.username === username)) {
        setErrors({ username: 'Username already exists' });
        return;
      }

      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      localStorage.setItem('username', username); 
      localStorage.setItem('fullName', fullName); 

      toast.success("Account Created Successfully");
      window.location.href = '/loginPage';
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <div className="bg-white p-4 max-w-md mx-auto rounded-lg shadow-lg w-screen h-full">
        <h2 className="m-2 py-2 text-center text-4xl text-violet-500 font-extrabold">Register Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="w-full">
            <label htmlFor="fullName" className="block text-sm text-slate-600 mb-1">Full Name</label>
            <input
              id="fullName"
              className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border ${errors.fullName ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-violet-500 hover:border-slate-300 shadow-sm focus:shadow-md`}
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
          </div>

          {/* Username Input */}
          <div className="w-full">
            <label htmlFor="username" className="block text-sm text-slate-600 mb-1">Username</label>
            <input
              id="username"
              className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border ${errors.username ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-violet-500 hover:border-slate-300 shadow-sm focus:shadow-md`}
              placeholder="Type here..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
          </div>

          {/* Password Input */}
          <div className="w-full">
            <label htmlFor="password" className="block text-sm text-slate-600 mb-1">Password</label>
            <input
              id="password"
              type="password"
              className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border ${errors.password ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-violet-500 hover:border-slate-300 shadow-sm focus:shadow-md`}
              placeholder="Type here..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          {/* Confirm Password Input */}
          <div className="w-full mb-2">
            <label htmlFor="confirmPassword" className="block text-sm text-slate-600 mb-1">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border ${errors.confirmPassword ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-violet-500 hover:border-slate-300 shadow-sm focus:shadow-md`}
              placeholder="Type here..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="bg-violet-500 w-full text-white rounded-md px-4 py-2 my-5 transition duration-300 ease hover:bg-violet-600 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-center">Already Have an Account? <Link href="/loginPage">Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterForm;
