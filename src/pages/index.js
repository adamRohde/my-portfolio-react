import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Adam's Portfolio" />
    <Header></Header>
    <About></About>
    <Work></Work>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
