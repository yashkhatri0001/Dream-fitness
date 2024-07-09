import React from 'react'

const BgStyle = {
  backgroundImage: `url(images/pushups.png)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <div style={BgStyle} className='dark:bg-black dark:text-white duration-200 '>
      <div className="bg-black/80">
        <div className='container min-h-620px flex items-center'>
          <div className="w-full md:w-550 mx-auto text-center space-y-5" >
            <p className="text-amber-500 text-4xl font-bold"><br></br>Start Your Fitness Journey</p>
            <h1 className='text-5xl md:text-7xl font-bold text-white'>Your Finess Journey Begins!Here</h1>
            <p data-aos="fade-up" data-aos-delay="500" className='text-white text-2xl'>"DreamFitness gym "
              ,Purkhas ,Sonipat 
            </p>
            <button class="bg-amber-500 hover:bg-amber-300 text-white font-bold py-2 px-4 border border-amber-500 rounded">
  Get Started
</button>
            </div> 
            </div>
      </div>

    </div>
  )
}

export default Hero;