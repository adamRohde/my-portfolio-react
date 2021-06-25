import React from "react"
import WebAppsCard from "../../../components/Web-Apps/web-apps-card"
// import { layoutContext } from "../../../provider"

const WebApps = () => {
  // console.log("layoutContext  ", layoutContext)
  return (
    <section className="webapps" id="webapps">
      <h2>
        {/* <span style={{ color: "red" }}>W</span>eb
        <span style={{ color: "red" }}>A</span>pps */}
        Web Apps
      </h2>

      <p>
        These are small fun apps I created when attending Andy Sterkowitz's Web
        Bootcamp. These apps were my introduction to HTML, CSS and Javascript.{" "}
        <strong style={{ color: "black" }}>
          All of them were written by me and me alone. No tutorials were
          followed.{"  "}
        </strong>
        Despite the simplicity I am still proud of this work. We all have
        beginnings, these simple apps were mine :).
      </p>

      <WebAppsCard />
    </section>
  )
}

export default WebApps
