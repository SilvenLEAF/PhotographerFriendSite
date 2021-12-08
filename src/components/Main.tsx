import React from 'react'
import Landing from './main/Landing'

export default function Main() {
  return (
    <main>

      <Landing />


      <div className="mainContent">


        <div className="flexInfoHolder">

          <div className="flexDataHolder">
            <h2 id="about" className="scrollspy">What we do <i className="fa fa-rocket"></i></h2>
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
            <h2 id="education" className="scrollspy">See our works <i className="fa fa-graduation-cap"></i></h2>
            
          </div>
        </div>




        <div className="flexInfoHolder">
          {/* <div className="flexImageHolder">
            <img src="/images/worldathand.svg" alt="" />
          </div> */}

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
        </div>
      </div>

    </main>

  )
}
