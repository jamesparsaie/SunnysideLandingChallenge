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
          <p className='mr-10 font-bold mt-2 hover:cursor-pointer'>About</p>
          <p className='mr-10 font-bold mt-2 hover:cursor-pointer'>Services</p>
          <p className='mr-10 font-bold mt-2 hover:cursor-pointer'>Project</p>
          <button className='bg-[#fcffff] text-black pl-4 pr-4 pt-2 pb-2 rounded-[2rem] font-bold'>Contact</button>
        </div>
      </div>

      <br></br>
      <br></br>
      <h1 className='relative text-center text-[4rem] font-bold z-10'>WE ARE CREATIVES</h1>
      <div className='relative'>
        <img src='src\assets\images\icon-arrow-down.svg' className='absolute z-10' style={{top: '50vh', left: '50vw', transform: 'translateX(-50%)'}}></img>
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
      <div className='relative z-20 flex -mt-[2.7rem] max-h-1/6'>
        <div className='w-[50%]'>
          <img src='src/assets/images/desktop/image-stand-out.jpg' className='w-full h-[33rem] object-cover'></img>
        </div>
        <div className='bg-white w-3/6 p-[10rem] text-black h-[33rem]'>
          <h1 className='text-[2rem] font-bold'>Stand out to the right audience</h1>
          <br></br>
          <p className='text-gray-500'>We are a full-service creative agency specializing in<br></br> helping brands grow fast. Engage your clients through <br></br>compelling visuals that do most of the marketing for you</p>
          <br></br>
          <br></br>
          <button className='font-bold underline decoration-[#fae18f] decoration-4'>LEARN MORE</button>
        </div>
      </div>

      <div className='flex'>
        <div className='w-1/2 relative'>
          <img src='src/assets/images/desktop/image-graphic-design.jpg' className='w-full h-[35rem] object-cover'></img>
          <div className='flex flex-col absolute top-[24rem] left-[12rem] text-center'>
            <p className='text-[#255A4F] font-extrabold text-lg'>Graphic Design</p>
            <br></br>
            <p className='text-[#255A4F]'>Great design makes you memorable. We deliver<br></br> artwork that underscores your brand message<br></br> and captures potential clients'attention</p>
          </div>
        </div>
        <div className='w-1/2 relative'>
          <img src='src/assets/images/desktop/image-photography.jpg' className='w-full h-[35rem] object-cover'></img>
          <div className='flex flex-col absolute top-[24rem] left-[12rem] text-center'>
            <p className='text-[#255A4F] font-extrabold text-lg'>Photography</p>
            <br></br>
            <p className='text-[#255A4F]'>Increase your credability by getting the most<br></br> stunning, high-quality photos that improve your<br></br> buisiness image</p>
          </div>
        </div>
      </div>

      <div className='bg-white p-20'>
        <br></br>
        <h1 className='text-center text-[#A7A9AA] tracking-widest text-[2rem]'>Client Testimonals</h1>
        <br></br>
        <div className='flex justify-around mt-10'>
          <img src='src/assets/images/image-emily.jpg' className='rounded-full w-[6rem] h-[6rem]'/>
          <img src='src/assets/images/image-thomas.jpg' className='rounded-full w-[6rem] h-[6rem]'/>
          <img src='src/assets/images/image-jennie.jpg' className='rounded-full w-[6rem] h-[6rem]'/>
        </div>
        <div className='flex justify-around mt-[4rem] text-[#757678]'>
          <p>We put our trust in Sunnyside and they<br></br> delivered, making sure our needs were met<br></br> and deadlines were always hit.</p>
          <p>Sunnyside's enthusiasm coupled with their<br></br> keen interest in our brand's successmade it<br></br> a satisfying and enjoyable experience.</p>
          <p>Incredible end result! Our sales increased<br></br> over 400% when we worked with Sunnyside.<br></br> Highly reccomended!</p>
        </div>
        <div className='flex justify-around mt-[3rem] text-l text-[#29333E] font-extrabold'>
          <p>Emily R.</p>
          <p>Thomas S.</p>
          <p>Jennie F.</p>
        </div>
        <div className='flex justify-around mt-[1rem] mr-[1.1rem] text-[#B4B3B4]'>
          <p>Marketing Director</p>
          <p>Chief Operating Officer</p>
          <p>Buisiness Owner</p>
        </div>  
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className='flex'>
        <img src='src/assets/images/desktop/image-gallery-milkbottles.jpg' className='flex-1 max-w-sm object-cover h-auto'></img>
        <img src='src/assets/images/desktop/image-gallery-orange.jpg' className='flex-1 max-w-sm object-cover h-auto'></img>
        <img src='src/assets/images/desktop/image-gallery-cone.jpg' className='flex-1 max-w-sm object-cover h-auto'></img>
        <img src='src/assets/images/desktop/image-gallery-sugarcubes.jpg' className='flex-1 max-w-sm object-cover h-auto'></img>
      </div>
      <div className='flex flex-col bg-[#90D4C5] p-20'>
        <p className='text-center text-[2rem] text-[#307867] font-extrabold'>Sunnyside</p>
        <div className='flex flex-row justify-center text-[#307867] space-x-20 ml-4 mt-8'>
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
        </div>
        <div className='flex justify-center mt-20 space-x-10'>
          <img src='src/assets/images/icon-facebook.svg'></img>
          <img src='src/assets/images/icon-instagram.svg'></img>
          <img src='src/assets/images/icon-twitter.svg'></img>
          <img src='src/assets/images/icon-pinterest.svg'></img>
        </div>
      </div>
    </div>
  )
}

export default App
