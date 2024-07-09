import React from 'react'

const PricingData = [
  {
    name: "Gold Card",
    price: 1000,
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "1 month",
    aosDelay: "0",
  },
  {
    name: "Flexible Card",
    price: 2500,
    link: "#",
    description: [
      "Quaterly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "3 months",
    aosDelay: "500",
  },
  {
    name: "Platinum Card",
    price: 5000,
    link: "#",
    description: [
      "Yearly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "12 month",
    aosDelay: "1000",
  },
];

const Pricing = () => {
  return (
    <div className='my-0 py-12 bg-black'>
      <div className="pl-40 container">
        <h1 className='text-white text-3xl text-center sm:text-5xl font-extrabold py-6'>Why <span className="text-amber-500">choose</span> Us?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
          {PricingData.map((data,index)=>(
            <div key={index} className='space-y-3 text-center bg-zinc-950 text-white sm:py-16 rounded-lg group-shadow-2xl hover:bg-amber-400 duration-200'>
              <h1 className='text-3xl font-bold'>{data.name}</h1>
              <h1 className='text-4xl font-semibold text-amber-500'>{data.price}</h1>
              {data.description.map((description)=>(<p className='font-sans'>{description}</p>))}
              <p className='font-semibold text-2xl py-3'>Duration:{data.duration}</p>
              <button class="bg-amber-500 hover:bg-amber-300 text-white font-bold py-2 px-4 border border-amber-500 rounded">Learn more</button>
              </div>))}
          
        </div>
        



      </div>

    </div>
  )
}

export default Pricing