import React from 'react'

const About = () => {
  return (
    <div className="py-14 dark:bg-black bg-black duration-300">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
        <div data-aos="fade-up">
          <img
            src="images/vinaydost.jpg"
            alt=""
            className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
          />
        </div>
        <div>
          <div className="space-y-5 sm:p-16 pb-6">
            <div data-aos="zoom-in" className="flex items-center gap-4">
              <div className="text-primary/70 text-7xl ">
                <h1 className="font-bold text-amber-500">01</h1>
              </div>
              <div>
                <p className="text-amber-500">Our trainers</p>
                <h1 className="text-2xl sm:text-4xl font-bold text-white">Sahil Gulia</h1>
              </div>
            </div>
            <p data-aos="fade-up" className="leading-8 tracking-wide text-white">
            Certified gym trainer with 5+ years experience, specializing in strength training, weight loss, and nutrition guidance.
            </p>
            <p data-aos="fade-up" data-aos-delay="300" className='text-white'>
            Dedicated to helping clients achieve their fitness goals effectively and safely.
            </p>
            <button class="bg-transparent hover:bg-amber-300 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded">
            
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About