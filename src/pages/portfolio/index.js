import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
// import Work from "./Work"
import { layoutContext } from "../../../provider"
import Navbar1 from "../../components/Layout/navbar/Navbar"
import Navbar2 from "../../components/Layout/navbar2/Navbar2"
import Footer from "../../components/Layout/Footer"
import Carousel from "../../components/Carousel/CCarousel"

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
              <div className="container-center ">
                <Carousel />
              </div>
              <div className="section-main-portfolio"></div>
              <Footer />
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}
export default IndexPage
