import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Website header */}
      <div className='flex p-10 relative z-30'>
        <h1 className='font-bold text-[1.5rem]'>Sunnyside</h1>
        <div className='ml-auto flex'>
          <p className='mr-10 font-bold mt-2'>About</p>
          <p className='mr-10 font-bold mt-2'>Services</p>
          <p className='mr-10 font-bold mt-2'>Project</p>
          <button className='bg-[#fcffff] text-black pl-4 pr-4 pt-2 pb-2 rounded-[2rem] font-bold'>Contact</button>
        </div>
      </div>

      <br></br>
      <br></br>
      <h1 className='relative text-center text-[4rem] font-bold z-10'>WE ARE CREATIVES</h1>
      <div className='relative'>
        <img src='src\assets\images\icon-arrow-down.svg' className='absolute z-10' style={{top: '53vh', left: '50vw', transform: 'translateX(-50%)'}}></img>
        <img src='src\assets\images\desktop\image-header.jpg' alt='header' className='-mt-[20rem] z-0' style={{transform: 'scale(0.8)'}}></img>
      </div>
      <div className='relative z-20 flex -mt-[6.7rem] max-h-1/6'>
        <div className='bg-white w-3/6 p-[10rem] text-black'>
          <h1 className='text-[2rem] font-bold'>Transform your brand</h1>
          <br></br>
          <p className='text-gray-500'>We are a full-service creative agency specializing in<br></br> helping brands grow fast. Engage your clients through <br></br>compelling visuals that do most of the marketing for you</p>
          <br></br>
          <br></br>
          <button className='font-bold underline decoration-[#fae18f] decoration-4'>LEARN MORE</button>
        </div>
        <div className='w-[50%]'>
          <img src='src\assets\images\desktop\image-transform.jpg' className='w-full h-[33rem] object-cover'></img>
        </div>
      </div>
    </div>
  )
}

export default App
