
import React from "react";

const ApparelPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-24 pb-6">
      <h2 className="text-2xl font-bold text-center mb-4">Apparel</h2>
      <div className="w-full lg:w-2/3 mb-16">
        <div>
          <h3 className="text-lg font-bold">2025 SS Turip Tee</h3>
          <p>price: NOT FOR SALE</p>
          <div className="flex flex-col lg:flex-row mt-4 bg-white">
            <img src="/images/apparel/tee1.png" alt="Apparel" className="w-full h-auto mb-4" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 mb-16">
        <div>
          <h3 className="text-lg font-bold">2025 SS Turip Tee 2</h3>
          <p>price: NOT FOR SALE</p>
          <div className="flex flex-col lg:flex-row mt-4 bg-white">
            <img src="/images/apparel/tee2_1.png" alt="Apparel" className="w-full lg:w-1/2 h-auto mb-4" />
            <img src="/images/apparel/tee2_2.png" alt="Apparel" className="w-full lg:w-1/2 h-auto mb-4" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 mb-16">
        <div>
          <h3 className="text-lg font-bold">2025 SS Turip Photo Tee</h3>
          <p>price: NOT FOR SALE</p>
          <div className="flex flex-col lg:flex-row mt-4 bg-white">
            <img src="/images/apparel/tee3.png" alt="Apparel" className="w-full h-auto mb-4" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 mb-16">
        <div>
          <h3 className="text-lg font-bold">2025 AW Turip Sweatshirt 1</h3>
          <p>price: NOT FOR SALE</p>
          <div className="flex flex-col lg:flex-row mt-4 bg-white">
            <img src="/images/apparel/sweat1.png" alt="Apparel" className="w-full h-auto mb-4" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 mb-16">
        <div>
          <h3 className="text-lg font-bold">2025 AW Turip Sweatshirt 2</h3>
          <p>price: NOT FOR SALE</p>
          <div className="flex flex-col lg:flex-row mt-4 bg-white">
            <img src="/images/apparel/sweat2_1.png" alt="Apparel" className="w-full lg:w-1/2 h-auto mb-4" />
            <img src="/images/apparel/sweat2_2.png" alt="Apparel" className="w-full lg:w-1/2 h-auto mb-4" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApparelPage;

