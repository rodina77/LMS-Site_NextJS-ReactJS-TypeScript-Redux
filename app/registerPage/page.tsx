import React from 'react';
// import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
const Page = () => {
  return (
    <>
     <div className="bg-purple-600 h-screen w-full flex items-center justify-center">
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>

        <RegisterForm/>

      </div>
    </div>
    </>
  );
}

export default Page;
