import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


import {
  buttonI,
  mb20
} from './style'

const SocialMediaBar = () => {
  return (
    <>
      <section className={mb20}>
        <div className="wrapper">
          {/* <div className="button">
            <div className="icon">
              <i clclassNameass="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </div> */}

          <div className="button facebook">
            <div className="icon">
              <i className="fa fa-facebook"></i>
            </div>
            <span>Facebook</span>
          </div>

          {/* <div className="button">
            <div className="icon">
              <i className="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
          </div> */}

          <div className="button linkedin">
              <i className="fa fa-linkedin"></i>
            <span>LinkedIn</span>
          </div>

          <div className="button envelope">
            <i className="fa fa-envelope"></i>
            <span>Email</span>
          </div>

          <div className="button gitHub">
            {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
            {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
            <i className="fa fa-github"></i>
            <span>Github</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default SocialMediaBar