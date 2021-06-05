import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Contact from "./Contact"
import { layoutContext } from "../../../provider"
import Navbar1 from "../../components/Layout/navbar/MyNavbar"
import Navbar2 from "../../components/Layout/navbartest/NavbarTest"
import Footer from "../../components/Layout/Footer"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("MAIN")}
              <SEO title="Adam's Portfolio" />
              <Navbar1 />
              <div className="section-main" style={{ height: "85vh" }}>
                <Contact />
              </div>
              <Footer />
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}
export default IndexPage
