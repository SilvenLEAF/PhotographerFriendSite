import React from 'react'

export default function Landing() {
  return (
    <div className="landingSection">
      <div className="landingImageHolder">
        <div id="top" className="landingImage scrollspy" style={{ background: "url('/photos/landing.jpg') center/cover" }}></div>
      </div>

      <div className="landingTextHolder">
        <div className="hi">Hi, I'm</div>
        <h1 className="landingMainText">
          SatyamROY
        </h1>
        <div className="landingSubText">The Photographer</div>
      </div>
    </div>
  )
}
