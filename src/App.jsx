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
      <p>hello</p>
    </div>
  )
}

export default App
