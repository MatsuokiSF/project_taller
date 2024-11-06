// src/pages/Login.tsx
import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import uachImage from '../assets/uach.jpg';
import AuthChecker from '../context/AuthChecker';
const Login: React.FC = () => {
  return (
    <AuthChecker>
      <div className="max-h-screen overflow-hidden bg-cream">
        <div className="flex flex-col lg:grid lg:grid-cols-[63%_2%_35%] gap-0">
          <div className="flex justify-center min-h-screen bg-cream p-20 pt-[20%]">
            <LoginForm />
          </div>
          <div className="flex justify-center bg-white">
            <div className="h-full w-full ml-auto bg-login"></div>
          </div>
          <div className="hidden lg:block bg-gray-200 h-full w-full">
            <img src={uachImage} alt="Login background" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </AuthChecker>
  );
}
export default Login;