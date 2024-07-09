import React from 'react'

const Contact = () => {
  return (
    <div className='bg-zinc-950 '>
      <div className="pl-96 container bg-black py-14 rounded-lg  ">
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div className='col-spam-2'>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'><span className='text-primary'>Sweat now, shine later</span>. Your body is a reflection of your lifestyle choices.

            </h1>
          </div>
          <div className='text-center grid place-items-center'>
            <button class="bg-amber-500 hover:bg-amber-300 text-white font-bold py-2 px-4 border border-amber-300 rounded">
              <a href="https://g.co/kgs/qQWGpe7">Our Address</a>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact