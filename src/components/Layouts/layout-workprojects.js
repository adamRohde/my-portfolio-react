//import "../../styles/Layouts/layout-workprojects.scss"
import "../../styles/mains.scss"
import React from "react"
import { layoutContext } from "../../../provider"
import Navbar from "../Navbar"
import Footer from "../Footer"

const LayoutWorkProjects = ({ children }) => {
  console.log("Current LAYOUT page number is ", layoutContext)

  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}
export default LayoutWorkProjects
