import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
//Pages

// Components
import Header from "../components/Header"
import Work from "../components/Projects"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import ContactInfo from "../components/ContactInfo"

const IndexPage = () => (
  <>
    <Layout>
      <Navbar></Navbar>
      <SEO title="Adam's Portfolio" />
      <Header></Header>
      <About></About>
      <Work></Work>
      <Promotion></Promotion>
      <ContactInfo></ContactInfo>
      <Footer></Footer>
    </Layout>
  </>
)

export default IndexPage
