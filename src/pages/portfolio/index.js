import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
// import Work from "./Work"
import { layoutContext } from "../../../provider"
import Navbar1 from "../../components/Layout/navbar/Navbar"
import Navbar2 from "../../components/Layout/navbar2/Navbar2"
import Footer from "../../components/Layout/Footer"
import Carousel from "../../components/Carousel/CCarousel"
import { Container } from "semantic-ui-react"

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
              <Navbar2 />

              <div className="section-main" style={{ height: "85vh" }}></div>
              <Footer />
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}
export default IndexPage
