"use client"
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-purple-600 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full max-w-4xl px-4">
        <div className="flex justify-center items-center">
          <img 
            src="/imgs/gametiles_com.udemy.android-removebg-preview.png" 
            alt="udemy_logo" 
            className="h-auto w-32 sm:w-28 md:w-40 lg:w-72 xl:w-96" 
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-3/4 lg:w-96 xl:w-96">
          <LoginForm />
        </div>
        
      </div>
    </div>
  );
}
