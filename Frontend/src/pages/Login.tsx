//src /pages/Login.tsx
import React from "react";
import AuthContainer from "../context/AuthContainer";

const Login: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <AuthContainer />
    </div>
  );
};

export default Login;