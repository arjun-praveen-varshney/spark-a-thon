import React from 'react';

const Hero = () => {
  return (
    <div className="bg-dark-blue h-screen flex flex-col justify-center items-center text-white">
      <h1 className="poppins-title tracking-[3%]">SPARK-A-THON</h1>
      <h2 className="text-[#FF5055] poppins-year tracking-[10%]">2024-2025</h2>
      
      <p className="max-w-lg text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo quam, mollis iaculis sapien et, lobortis dictum lectus. 
        Suspendisse in orci dui. Nunc scelerisque, ex id efficitur imperdiet, felis velit elementum eros, in elementum leo odio non lectus.
      </p>

      <button className="button">
        Register Now
      </button>
    </div>
  );
}

export default Hero;
