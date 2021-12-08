import React from 'react'
import Landing from './main/Landing'

export default function Main() {
  return (
    <main>

      <Landing />


      <div className="mainContent">


        <div className="flexInfoHolder">

          <div className="flexDataHolder">
            <h2 id="whatWeDo" className="scrollspy">What we do <i className="fa fa-rocket"></i></h2>
            <p>
              Being unique in a crowd is no less than a dream right? Let's together fulfill it! Our artistic photographers are 24x7 ready to pour their magic on your photos and giving them a natural unique theme you wish for! Avail the fastest service online
            </p>
          </div>
          <div className="flexImageHolder">
            <img src="/images/refreshing.svg" alt="" />
          </div>
        </div>

        <div className="NotflexInfoHolder">
          {/* <div className="flexImageHolder">
            <img src="/images/refreshing.svg" alt="" />
          </div> */}
          <div className="flexDataHolder">
            <h2 id="works" className="scrollspy">See our works <i className="fa fa-graduation-cap"></i></h2>
            <p>Check our some of our wonderful works. We freeze the moments </p>
            <div className="showcaseImagesHolder wrap">
              {
                [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                  return (
                    <div className="imageItem box" key={index}>
                      <div className="boxInner" style={{ background: 'url("/photos/fakeImgW.jpg") center/cover' }}>
                        {/* <img src="/photos/fakeImgW.jpg" /> */}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>





        <div className="flexInfoHolder" style={{ marginLeft: "auto", marginRight: "auto", justifyContent: "center" }}>
          <div className="flexDataHolder contactHolder" style={{ marginRight: "10px" }}>
            <h2 id="about" className="scrollspy">About me <i className="fa fa-envelope"></i></h2>
            <p>
              Hi, Born at Algapur, Dharmanagar, I'm Satyam, a professional photographer.
              I take pictures of people.
              My goal is to show beauty, strength, enthusiasm and passion of people.
              I focus on non-models and place regular people in exaggerate situations that highlight an aspect of who they are.
              I look for a defiance and fortitude in my work.
            </p>
          </div>

          <div className="flexImageHolder">
            <img src="/images/contact.svg" alt="" />
            {/* <img id="QRcode" src="/photos/qrcode.svg" alt="QR Code" /> */}
          </div>
        </div>


        <div className="flexInfoHolder flexNormal" style={{ marginLeft: "auto", marginRight: "auto", justifyContent: "center" }}>
          <div className="flexDataHolder contactHolder" style={{ marginRight: "10px" }}>
            <h2 id="contact" className="scrollspy">Contact Us <i className="fa fa-envelope"></i></h2>
            <div>
              <div>
                <i className="fa fa-envelope"></i> RoySatyamRoy22@gmail.com
              </div>
              <div>
                <i className="fab fa-whatsapp"></i> WhatsAPP +91 98620 95435
              </div>
              <div>
                <i className="fa fa-phone fa-rotate-180"></i> Moblie +91 98620 95435
              </div>
            </div>
          </div>

          <div className="flexImageHolder">
            {/* <img src="/images/contact.svg" alt="" /> */}
            <img id="QRcode" src="/photos/qrcode.svg" alt="QR Code" />
          </div>
        </div>
      </div>

    </main>

  )
}
