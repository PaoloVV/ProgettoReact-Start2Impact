import { Link } from 'react-router-dom'
import './Home.css'
import Navbar from '../assets/components/navbar/Navbar'
import { IoSearchSharp } from "react-icons/io5";
import { FaRandom } from "react-icons/fa";
import { BiFork } from "react-icons/bi";
import { FaSpoon } from "react-icons/fa6";
import { RiKnifeFill } from "react-icons/ri";
import React, { useEffect } from 'react'
import Footer from '../assets/components/footer/Footer';


function Home() {
useEffect(()=>{
  console.log(import.meta.env.VITE_API_KEY)
}, [])

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <div className='h-screen text-center p-2'>

        <div className='flex md:flex-row flex-col justify-around items-center'>

          <div>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold text-white'>VegBook</h1>
            <h3 className='md:text-3xl sm:text-xl text-lg font-bold text-white'>Sviluppo</h3>
          </div>
          
          <div className='bg-white bg-opacity-60 border-2 rounded-xl self-center max-w-80 p-2'>
            <ul className='text-green-600 font-bold md:text-lg text-sm '>
              <li className='flex flex-col items-center'><BiFork /> Search your Vegetarian Recipe</li>
              <li className='flex flex-col items-center'><FaSpoon />Add filters to optimize your search</li>
              <li className='flex flex-col items-center'><RiKnifeFill className='rotate-90' />Follow the instructions and cook your favorite dishes</li>
            </ul>
          </div>

        </div>
        

        <div className='flex flex-col items-center min-h-60 justify-evenly'>
            
          <div>
            <h3 className='sm:text-xl text-md  font-bold text-white flex flex-row justify-center'> -- Search <IoSearchSharp className='ml-3 self-center' /> -- </h3>
            {/* <Searchbar /> */}
          </div>

          <div className='flex sm:flex-row flex-col items-center'>
            <Link className='mx-5 flex flex-col sm:h-32 h-24 sm:justify-between justify-center items-center text-white' to={"/advanced"}>
              <button className='sm:text-xl text-lg border-2 rounded-md p-2 bg-green-800 text-white flex flex-col items-center w-52'>Advanced search</button>
              <p className='text-sm'>Search your recipes by name and by setting filters</p>
            </Link> 
              <Link className='mx-5 flex flex-col sm:h-32 h-24 sm:justify-between justify-center items-center text-white' to={"/random"}>
              <button className='sm:text-xl text-lg border-2 rounded-md p-2 bg-green-800 text-white flex flex-col items-center w-52'>RANDOM! <FaRandom /></button>
              <p className='text-sm'>Check out 6 totally random recipes</p>
            </Link>
          </div>

        </div>

        <Footer></Footer>
        
      </div>
    </>
    
  )
}

export default Home;
