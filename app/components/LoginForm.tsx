'use client'
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface User {
  username: string;
  password: string;
  fullName: string; 
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || '[]');
  
    const user = existingUsers.find((user: User) => user.username === username && user.password === password);
  
    if (user) {
      localStorage.setItem("username", user.username); 
      localStorage.setItem("fullName", user.fullName);
      toast.success('Successfully logged in');
      window.location.href = "/homePage";
    } else {
      toast.error('Wrong username or password');
    }
  };
  
  return (
    <div className="bg-white p-8 mx-auto w-full rounded-lg shadow-lg h-full">
      <h2 className="text-center text-4xl text-violet-500 font-extrabold p-3">Login Form</h2>

      <div className="w-full mb-3">
        <label htmlFor="username" className="block text-sm text-slate-600 mb-1">Username</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-violet-500 hover:border-slate-300 shadow-sm focus:shadow-md"
          placeholder="Type here..."
        />
      </div>
      <div className="w-full mb-3">
        <label htmlFor="password" className="block text-sm text-slate-600 mb-1">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-violet-500 hover:border-slate-300 shadow-sm focus:shadow-md"
          placeholder="Type here..."
        />
      </div>

      <button
        type="button"
        className="bg-violet-500 w-full text-white rounded-md px-4 py-2 my-5 transition duration-300 ease hover:bg-violet-600 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="text-center">
        Do not Have an Account? <Link href="/registerPage">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
