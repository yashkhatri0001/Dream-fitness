import React from 'react'
import {BiPhoneCall} from "react-icons/bi"

export const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "JOIN",
    link: "/#join",
  },
];


const Navbar = () => {
  return (
    <>
    <nav className="shadow-md w-full bg-zinc-950 text-white ">
      <div className="container"><div className="flex items-center justify-between">
        <div className="flex items-center gap-2 group">
          <BiPhoneCall className="text-2xl text-orange-500 animate-pulse group-hover:scale-105 duration-200"/>
          <span>+91-839-894-9808</span>


        </div>
        <div>
          <img src="images/logo.png" alt="" className='w-20 sm:w-26 m-2'></img>


        </div>
        <div>
          <ul className="flex items-center  gap-8">
            {Navlinks.map((link)=>(
              <li key={link.id}>
                <a href={link.link} className="inline-block text-lg font-semibold hover:bg-amber-500 duration-200">{link.name}</a>
              </li>
            ))}
            
            
            

            
          </ul>


        </div>
      </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar