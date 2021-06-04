import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Contact = () => {
  return (
    <>
      <>
        <div className="contact-container">
          <Fade bottom cascade>
            <h2>Contact</h2>
            <h4>{data.contactSubHeading}</h4>
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
        </div>
      </>
    </>
  )
}

export default Contact
