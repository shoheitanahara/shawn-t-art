import React from 'react';

const ComingSoonBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-300 p-4">
      <h2 className="text-2xl font-bold mb-4">CryptoStars for Made By Apes.</h2>
      <div className="flex space-x-4">
        <img src="/images/waiting/stef.png" alt="Image 1" className="w-72 h-72 object-cover" />
        <img src="/images/waiting/neymar.png" alt="Image 2" className="w-72 h-72 object-cover" />
      </div>
      <p className="text-2xl font-bold m-4">Coming Soon...</p>
    </div>
  );
};

export default ComingSoonBanner;
