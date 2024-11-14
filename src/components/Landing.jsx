import React from 'react';

const Landing = ({ handleIsClicked }) => {
  return (
    <div className='w-full bg-cover bg-center bg-[url("bg.jpg")] min-h-screen flex flex-col gap-10 items-center justify-center text-center px-4'>
      <h1 className='text-5xl md:text-6xl lg:text-xl text-white font-extrabold drop-shadow-lg'>
        Welcome to the Personal Bio Data Form
      </h1>
      <p className='text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl font-light drop-shadow-sm'>
        Effortlessly create, manage, and store your personal information with ease. Begin by clicking below to quickly capture all your essential details and keep them organized securely.
      </p>
      <button
        className='bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105'
        onClick={handleIsClicked}
      >
        Get Started
      </button>
    </div>
  );
};

export default Landing;
