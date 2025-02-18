import React, { useEffect, useState } from 'react'


function ColourTherapy() {

  const [clr, setClr] = useState('#633784');


  const colours = [
    '#ec1c2c', '#eb1c24', '#e91d26', '#f26f21', '#eb5a23', '#e85424', '#f9b432', '#f59e1d', '#6f773c', '#fecf07', '#699442', '#007e47',
    '#61a945', '#608d4b', '#008244', '#039ba6', '#008f9f', '#6264e6', '#20488d', '#202183', '#334c8e', '#303183', '#734c9f', '#603f98',
    '#633784', '#b096c6', '#b46292', '#872c35', '#f49195', '#862c36', '#a92f34', '#a71f23', '#ab2e34', '#a9403c', '#a71e25', '#a91e25'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomClr = colours[Math.floor(Math.random() * colours.length)];
      setClr(randomClr);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to prevent re-triggering

  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center transition-colors duration-500 ease-linear " style={{background : clr}}>
      {/* {colours.map((clr)=><div key={clr} className='m-2 p-0.5 '>
        <div className='border h-16 w-16' style={{background : clr}}>{clr}</div>
      </div>)} */}
      <span className=' p-3 w-32 bg-white text-2xl font-semibold rounded-md ' style={{color : clr}}>{(clr).toUpperCase()}</span>
    </div>
  )
}

export default ColourTherapy