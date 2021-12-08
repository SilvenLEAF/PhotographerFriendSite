import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <svg className="headerSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1"
          d="M0,0L30,42.7C60,85,120,171,180,208C240,245,300,235,360,192C420,149,480,75,540,80C600,85,660,171,720,192C780,213,840,171,900,138.7C960,107,1020,85,1080,74.7C1140,64,1200,64,1260,80C1320,96,1380,128,1410,144L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
        </path>
      </svg>
      <Navbar />
      <Main />
      <svg className="footerSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1"
          d="M0,128L48,117.3C96,107,192,85,288,106.7C384,128,480,192,576,186.7C672,181,768,107,864,90.7C960,75,1056,117,1152,117.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>

      <Footer />
    </div>
  );
}

export default App;
