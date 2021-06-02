import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Contact from "./Contact"
import { layoutContext } from "../../../provider"
import Navbar from "../../components/Layout/Navbar"
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
              <Navbar />
              <div className="section-main-about">
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
