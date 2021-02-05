//import "../../styles/Layouts/layout-webapps.scss"
import "../../styles/mains.scss"
import React from "react"
import { layoutContext } from "../../../provider"
import Navbar from "../Navbar"
import Footer from "../Footer"

const LayoutWebApps = ({ children }) => {
  console.log("Current LAYOUT page number is ", layoutContext)

  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}
export default LayoutWebApps
