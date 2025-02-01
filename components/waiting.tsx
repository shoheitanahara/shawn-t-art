import React from 'react';
import Image from 'next/image';

const ComingSoonBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-300 p-4">
      <h2 className="text-2xl font-bold mb-4">CryptoStars for Made By Apes.</h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
        <Image src="/images/waiting/stef.png" alt="Image 1" width={288} height={288} className="object-cover" />
        <Image src="/images/waiting/neymar.png" alt="Image 2" width={288} height={288} className="object-cover" />
      </div>
      <p className="text-2xl font-bold m-4">Coming Soon...</p>
    </div>
  );
};

export default ComingSoonBanner;
