import "../../styles/mains.scss"
import React from "react"
import { layoutContext } from "../../../provider"

const Layout = ({ children }) => {
  console.log("Current LAYOUT page number is ", layoutContext)

  return (
    <div>
      <React.Fragment>
        <main>{children}</main>
      </React.Fragment>
    </div>
  )
}
export default Layout
