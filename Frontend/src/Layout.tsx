// src/Layout.tsx
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { signOut } from 'firebase/auth';
import { auth } from './services/firebase';

const Layout: React.FC = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header handleLogout={handleLogout} isLoggingOut={isLoggingOut} />

      {/* Navigation */}
      <Navigation />

      {/* Contenido principal */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>

      {/* Footer (opcional) */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2024 Tu aplicación
      </footer>
    </div>
  );
};

export default Layout;
