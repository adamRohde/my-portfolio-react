import React from "react"
import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
//Pages

// Components
import Header from "../components/Header"
import Work from "../components/Projects"
import About from "../components/About"
import Promotion from "../components/Promotion"
import ContactInfo from "../components/ContactInfo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Adam's Portfolio" />
      <Header></Header>
      <About></About>
      <Work></Work>
      <Promotion></Promotion>
      <ContactInfo></ContactInfo>
    </Layout>
  </>
)

export default IndexPage
