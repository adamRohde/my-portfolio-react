import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"
import emailjs from "emailjs-com"

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_63vdq8b",
        "template_39o72mn",
        e.target,
        "user_ihNOyCdPQRVcfhsayyxiZ"
      )
      .then(
        result => {
          console.log(result.text)
          alert("Message sent!  Adam will be in contact soon!")
        },
        error => {
          console.log(error.text)
          alert("There was an error sending your message.  Please try again")
        }
      )
  }

  return (
    <>
      <>
        <div className="contact-container">
          {/* <Fade bottom cascade> */}
          <h2 style={{ margin: "0rem 0rem 0rem 0rem" }}>Contact</h2>
          <h4>{data.contactSubHeading}</h4>
          {/* </Fade> */}

          {/* <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a> */}
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

          <div className="form-container">
            <form className="contact-form" onSubmit={sendEmail}>
              <div class="mb-3">
                <label>Name</label>
                <input class="form-control" type="text" name="name" required />
              </div>
              <div class="mb-3">
                <label>Email</label>
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div class="mb-3">
                <label>Subject</label>
                <input
                  class="form-control"
                  type="subject"
                  name="subject"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="FormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  class="form-control"
                  id="FormControlTextarea1"
                  placeholder="Message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <input class="btn btn-primary" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </>
    </>
  )
}

export default Contact
