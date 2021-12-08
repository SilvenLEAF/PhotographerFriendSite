import React from 'react'

export default function Main() {
  return (
    <main>

      <div className="landingSection">
        <div className="landingImageHolder">
          <div id="top" className="landingImage scrollspy"></div>
        </div>

        <div className="landingTextHolder">
          <div className="hi">Hi, I'm</div>
          <h1 className="landingMainText">
            SatyamROY
          </h1>
          <div className="landingSubText">The Photographer</div>
        </div>
      </div>


      <div className="mainContent">


        <div className="flexInfoHolder">
          <div className="flexDataHolder">
            <h2 id="about" className="scrollspy">About ME <i className="far fa-grin-beam"></i></h2>
            <p>
              Ahoy Stranger! Well what can I say? I'm a FrontEND Developer with 3+ years of solid experience in this
              field. I am a technology enthusiast, designer, coder and nature lover, born at Kakrirpar, in Dharmanagar,
              North Tripura, NorthEast India. I give more importance to be creative and unique. I have a strong interest
              in the field of Maths. I like to know how different tech works. I'm a person who likes to constantly upgrade
              myself and contribute to the tech industry.
            </p>
          </div>
        </div>

        <div className="flexInfoHolder">
          <div className="flexImageHolder">
            <img src="/images/education.svg" alt="" />
          </div>
          <div className="flexDataHolder">
            <h2 id="education" className="scrollspy">Education <i className="fa fa-graduation-cap"></i></h2>
            <p>
              I'm a College student with Maths (hons) as my major in the Dharmanagar Govt College. I've passed my High
              School from Bir Bikram Institution on 2020. I've always been an ardent lover of Maths, Science and Tech.
              Being highly obsessed with Coding and Tech, I've been coding for the last 3+ years on my own.
            </p>
          </div>
        </div>




        <div className="flexInfoHolder">
          <div className="flexImageHolder">
            <img src="/images/worldathand.svg" alt="" />
          </div>

          <div className="flexDataHolder">
            <h2 id="skills" className="scrollspy">Skills <i className="fa fa-paint-brush"></i></h2>
            <p>
              <strong>
                HTML5, CSS3, JavaScript, React, SASS, Materialize, Context API, NodeJS, PassportJS, ExpressJS, MongoDB
                etc.
              </strong>
              I can create Websites, WebAPPs, PWA's, API's, Serverside and Clientside programming, improving UI and UX. I
              develop websites that allow businesses to obtain a big market on the internet and expand their customer
              base.
            </p>
          </div>
        </div>








        <div className="flexInfoHolder">
          <div className="flexImageHolder">
            <img src="/images/developer.svg" alt="" />
          </div>

          <div className="flexDataHolder">
            <h2 id="projects" className="scrollspy">Projects <i className="fab fa-git-alt"></i></h2>
            <p>
              I have completed several Web development projects for local and International clients. Created amazing
              Websites, WebAPPs, PWA's, Servers, API's, handled Clientside and Serverside programming, handled security
              and database issues, improved UI and UX, and created "Ah-HA" moments.
            </p>
          </div>
        </div>



        <div className="flexInfoHolder">
          <div className="flexImageHolder">
            <img src="/images/hobby.svg" alt="" />
          </div>

          <div className="flexDataHolder">
            <h2 id="hobbies" className="scrollspy">Hobbies <i className="fa fa-magic"></i></h2>
            <p>
              I'm highly obsessed with Programming. I love creating web applications and exploring more about Tech. I'm
              manaical for Maths. I'm interested in playing Cricket, roaming about, hanging out with friends in my free
              time, and I really love eating "panipuris".
            </p>
          </div>
        </div>


        <div className="flexInfoHolder">
          <div className="flexImageHolder">
            <img src="/images/maths.svg" alt="" />
          </div>

          <div className="flexDataHolder">
            <h2 id="maths" className="scrollspy">Maths ME <i className="fa fa-cubes"></i></h2>
            <p>
              I'm a SUPER ULTRA ULTIMATE CRAZY MANIAC of Maths. I'v always been super crazy for Maths. I like to think the
              world is full of unknown adventures of maths for me to explore. I love to know more about it. I really like
              problem solving and playing with the magics of Numbers. I love all about Maths, especially Trigonometry. And
              Did I forget to mention that I'm a SUPER MANAIC of Cricket?!
            </p>
          </div>
        </div>



        <div className="flexInfoHolder">
          <div className="flexImageHolder">
            <img src="/images/contact.svg" alt="" />
          </div>

          <div className="flexDataHolder contactHolder">
            <h2 id="contact" className="scrollspy">Contact <i className="fa fa-envelope"></i></h2>
            <div>
              <div>
                <i className="fa fa-envelope"></i> SirMrinmoy@gmail.com
              </div>
              <div>
                <i className="fab fa-whatsapp"></i> WhatsAPP No. +91 7638934807
              </div>
              <div>
                <i className="fa fa-phone fa-rotate-180"></i> Moblie No. +91 7638934807
              </div>
              <div>
                <i className="fab fa-telegram"></i> Telegram No. +91 7638934807
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>

  )
}
