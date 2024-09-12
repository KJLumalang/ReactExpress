import React from 'react';
import Header from './Header'; // Correct for this file structure

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
      </div>
    </div>
  );
}

export default LandingPage;
