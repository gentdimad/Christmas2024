import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import top_of_tree from './assets/top-of-tree.jpg'
import part_1 from './assets/part-1.jpg'
import part_2 from './assets/part-2.jpg'
import part_3 from './assets/part-3.jpg'
import part_4 from './assets/part-4.jpeg'
import part_5 from './assets/part-5.avif'
import song from './assets/music.mp3'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  const myRefname= useRef(null);

  const handleClick = () => {
    myRefname.current?.play();
  }

  useEffect(() => {
    document.addEventListener('scroll', function(e) {
        handleClick();
     });
  },[]);

  return (
    <div id="main">
      <button className="hidden" onClick={handleClick}>Play</button>
      <audio ref={myRefname} loop>
        <source src={song} type="audio/mp3"/>
      </audio>
      <div className="division">
        <p> </p>
      </div>
      <div className="header-box" data-aos='fade-up' data-aos-duration='1500'>
        <p className="header-text-1 poppins-semibold">
          Hi,
        </p>
        <p className="header-text poppins-semibold">
          Love.
        </p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">It's already Christmas, and it still feels like I met you just yesterday, my Trina.</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Although it's a shame that I can't come to see you in person and celebrate this magic with you, I decided to do a little something and put in some effort to show you something pretty.</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Since we couldn't set up a Christmas tree, I thought why don't we use this digital Christmas tree as a trip down memory lane, and look at our relationship.</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div id="img-top" data-aos='fade-left' data-aos-duration='1000'>
        <img className="image" src={top_of_tree} alt="image description"/>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div id="img-1" data-aos='fade-right' data-aos-duration='1000'>
        <img className="image" src={part_1} alt="image description"/>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div id="img-2" data-aos='fade-up' data-aos-duration='1000'>
        <img className="center-image" src={part_2} alt="image description"/>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div id="img-3" data-aos='fade-up' data-aos-duration='1000'>
        <img className="image" src={part_3} alt="image description"/>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div id="img-4" data-aos='fade-up' data-aos-duration='1000'>
        <div className="image-4"></div>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div id="img-5" data-aos='fade-up' data-aos-duration='1000'>
        <img className="center-image" src={part_5} alt="image description"/>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Without further ado, let's start with the top of the tree- the star!</p>
      </div>
      <div className="content-box" data-aos='fade-up' data-aos-duration='1000'>
        <p className="content-text poppins-light">Thank you for being the best gift this Christmas, my love, my Trina Chloe Estrella Tompong.</p>
      </div>
      <div className="footer">
        <p> </p>
      </div>
    
    </div>
  )
}

export default App
