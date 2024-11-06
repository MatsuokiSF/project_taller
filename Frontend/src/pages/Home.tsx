// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-cream min-h-screen p-6'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Home</h1>
        <p className='text-center'>Bienvenido a la página de inicio. Aquí puedes encontrar información relevante y funcionalidades de la aplicación.</p>
      </div>
    </div>
  );
};

export default Home;
