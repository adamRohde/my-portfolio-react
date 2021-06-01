import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Work from "./Work"
import Navbar2 from "../../components/Layout/Navbar2"
import { layoutContext } from "../../../provider"
import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import Carousel from "../../components/Carousel/MyCarousel"

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
              <Navbar2 />
              {/* <div style={{ paddingTop: "10vh" }}>
                <Carousel />
              </div> */}
              <div className="section-main">
                <Carousel />
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
