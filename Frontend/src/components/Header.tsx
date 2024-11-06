// src/components/Header.tsx
import React, { useState } from 'react';
import logouach from '../assets/logo_uach.svg'; // Asegúrate de que la ruta sea correcta
import logoinfor from '../assets/logo-infor.png'; // Asegúrate de que la ruta sea correcta


interface HeaderProps {
  handleLogout: () => Promise<void>;
  isLoggingOut: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleLogout, isLoggingOut }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white text-black p-2">
      {/* Logos */}
      <div className="flex gap-10 pl-20">
        <a href="https://www.uach.cl/admision/valdivia/ingenieria-civil-en-informatica">
          <img 
            src={logouach}
            className="w-14" 
            alt="Logo UACH"
          />
        </a>
        <a href="https://www.infor.cl/">
          <img 
            src={logoinfor}
            className="w-14" 
            alt="Logo Infor" 
          />
        </a>
      </div>

      {/* User Profile and Logout */}
      <div className="flex items-center relative">
        <div 
          className="flex items-center cursor-pointer mr-4"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <h1 className="text-2xl font-bold p-2">Usuario</h1>
          <svg 
            className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 top-full">
            <button
              onClick={handleLogout}
              className={`block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left ${isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoggingOut}
            >
              {isLoggingOut ? 'Logging out...' : 'Cerrar sesión'}
            </button>
          </div>
        )}
        <img 
          alt="Foto de perfil" 
          className="w-12 h-12 rounded-full object-cover mr-4 border border-gray-500"
        />
      </div>
    </header>
  );
};

export default Header;
