import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Navbar from "../components/Layout/Navbar"
import ContactInfo from "../components/Home-Page/ContactInfo"
import { layoutContext } from "../../provider"

// const ContactPage = () => {
//   return (
//     <>
//       <Layout>
//         <layoutContext.Consumer>
//           {context => (
//             <>
//               {context.changeLayout("MAIN")}
//               <SEO title="Adam's Portfolio" />
//               <Navbar />
//               <ContactInfo></ContactInfo>
//             </>
//           )}
//         </layoutContext.Consumer>
//       </Layout>
//     </>
//   )
// }

// export default ContactPage

const ContactPage = () => {
  return (
    <ContactInfo>
      <SEO title="Adam's Portfolio" />
      <Navbar />
      <ContactInfo></ContactInfo>
    </ContactInfo>
  )
}

export default ContactPage
