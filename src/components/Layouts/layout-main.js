//import "../../styles/Layouts/layout-main.scss"
import "../../styles/mains.scss"
import React from "react"
import { layoutContext } from "../../../provider"
import Navbar from "../Navbar"
import Footer from "../Footer"

const LayoutMain = ({ children }) => {
  console.log("Current LAYOUT page number is ", layoutContext)

  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}
export default LayoutMain
