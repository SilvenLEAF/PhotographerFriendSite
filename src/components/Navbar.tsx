import React, { useEffect } from 'react'

export default function Navbar() {
  useEffect(() => {
    const overlay = document.querySelector('.overlay')!;
    const mobileNav = document.querySelector('.mobileNav')!;
    const hamburger = document.querySelector('.hamburger')!;
    const body = document.querySelector('body')!;
    const sideNavClose = document.querySelectorAll('.sidenavClose')!;



    hamburger.addEventListener('click', e => comeMyNav());
    overlay.addEventListener('click', e => comeMyNav());


    for (let i = 0; i < sideNavClose.length; i++) {
      sideNavClose[i].addEventListener('click', e => comeMyNav());
    }



    function comeMyNav() {
      overlay.classList.toggle('open');
      mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open');
      body.classList.toggle('noscroll');
    }
  },[])
  return (
    <>
      <div className="overlay"></div>
      <header>
        <div className="hamburger hideOnPC">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="brandLogo"><a href="#top" className="logo">SatyamROY</a></div>

        <ul className="PCNav hideOnMobile">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#maths">Maths</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <nav className="mobileNav hideOnPC">
        <div>
          <li><a className="sidenavClose" href="#about"><i className="far fa-grin-beam"></i> About</a></li>
          <li><a className="sidenavClose" href="#education"><i className="fa fa-graduation-cap"></i> Education</a></li>
          <li><a className="sidenavClose" href="#skills"><i className="fa fa-paint-brush"></i> Skills</a></li>
          <li><a className="sidenavClose" href="#projects"><i className="fab fa-git-alt"></i> Projects</a></li>
          <li><a className="sidenavClose" href="#hobbies"><i className="fa fa-magic"></i> Hobbies</a></li>
          <li><a className="sidenavClose" href="#maths"><i className="fa fa-cubes"></i> Maths</a></li>
          <li><a className="sidenavClose" href="#contact"><i className="fa fa-envelope"></i> Contact</a></li>
          <li>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </li>
        </div>
      </nav>
    </>
  )
}
