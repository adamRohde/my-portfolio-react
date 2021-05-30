import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import About from "../components/Home-Page/About"
import WorkPages from "../pages/work"
import ContactPage from "../pages/contact"
import Navbar from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"
import ContactInfo from "../components/Home-Page/ContactInfo"
import { layoutContext } from "../../provider"
import { BrowserRouter, Route } from "react-router-dom"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              <BrowserRouter>
                {context.changeLayout("MAIN")}
                <SEO title="Adam's Portfolio" />
                <Navbar />
                {/* About */}

                <Route path="/" exact render={() => <About />} />
                <Route path="/work" exact render={() => <WorkPages />} />
                <Route path="/contact" exact render={() => <ContactInfo />} />

                {/* <MyWork></MyWork> */}
                {/* <ContactInfo></ContactInfo> */}
                <Footer />
              </BrowserRouter>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default IndexPage
