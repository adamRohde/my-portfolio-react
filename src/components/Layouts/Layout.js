/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import "../../styles/mains.scss"
import React from "react"
import { layoutContext } from "../../../provider"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }) => {
  console.log("Current LAYOUT page number is ", layoutContext)

  return (
    <layoutContext.Consumer>
      {context => (
        <React.Fragment>
          <Navbar layout={context.layout} />
          <main>{children}</main>
          <Footer />
        </React.Fragment>
      )}
    </layoutContext.Consumer>
  )
}
export default Layout
