import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const ContactInfo = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Original template created by{" "}
            <a href="https://www.chetanverma.com/">Chetan Verma</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
