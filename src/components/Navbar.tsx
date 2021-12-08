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
          <li><a href="#whatWeDo">What we do?</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <nav className="mobileNav hideOnPC">
        <div>
          <li><a className="sidenavClose" href="#whatWeDo"><i className="fa fa-rocket"></i> What we do?</a></li>
          <li><a className="sidenavClose" href="#works"><i className="fa fa-graduation-cap"></i> Works</a></li>
          <li><a className="sidenavClose" href="#about"><i className="fa fa-info-circle"></i> About</a></li>
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
