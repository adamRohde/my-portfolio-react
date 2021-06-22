import React from "react"
import Layout from "../../components/Layout/layout"
import WebAppsCard from "../../components/Web-Apps/web-apps-card"
import { layoutContext } from "../../../provider"

const webapps = () => {
  console.log("layoutContext  ", layoutContext)
  return (
    <section className="webapps" id="webapps">
      <h2>
        {/* <span style={{ color: "red" }}>W</span>eb
        <span style={{ color: "red" }}>A</span>pps */}
        Web Apps
      </h2>

      <div>
        <p>
          These are a few small fun apps I created when attending Andy
          Sterkowitz's Web Bootcamp. These apps were my introduction to HTML,
          CSS and Javascript. All of{" "}
          <strong style={{ color: "black" }}>
            these apps were written by me and me alone. No tutorials were
            followed.{"  "}
          </strong>
          Despite the simplicity I am still proud of this work. We all have
          beginnings, these apps were mine :).
        </p>
      </div>

      <WebAppsCard />
    </section>
  )
}

export default webapps
