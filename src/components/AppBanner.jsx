import React from 'react'
const bannerImg = {
  backgroundImage: `url(images/dumbell.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <div className='bg-black'>
      <div className="container text-white pl-40">
        <div style={bannerImg} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
          <div>
            <div className='space-y-6 max-w-xl mx-auto'>
              <h1 className='text-2xl text-center sm:text-4xl font-semibold'>Our Social Media Accounts</h1>
              <p className='text-center sm:px-20'>"Welcome to our gym's social hub! Stay motivated with workout tips, success stories, exclusive offers, and community events. Join us in our fitness journey and share your progress. #FitFam"</p>
              <div className='flex justify-center items-center gap-4'>
                <a href="https://www.facebook.com/share/r6gBxDJzjao93jFG/?mibextid=qi2Omg">
                  <img src="images/facebook.png" className='rounded-md max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'></img>
                </a>
                <a href="https://www.instagram.com/dreamfitnesspurkhas?igsh=MzRlODBiNWFlZA==">
                  <img src="images/instagrambtn.jpeg" className='rounded-md max-w-[90px] sm:max-w-[100px] md:max-w-[150px]'></img>
                </a>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AppBanner