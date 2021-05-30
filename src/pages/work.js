import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Navbar2 from "../components/Layout/Navbar2"
import MyWork from "../components/Home-Page/MyWork"
import { layoutContext } from "../../provider"

// const WorkPage = () => {
//   return (
//     <>
//       <Layout>
//         <layoutContext.Consumer>
//           {context => (
//             <>
//               {context.changeLayout("MAIN")}
//               <SEO title="Adam's Portfolio" />
//               {/* <Navbar2></Navbar2> */}
//               <MyWork></MyWork>
//             </>
//           )}
//         </layoutContext.Consumer>
//       </Layout>
//     </>
//   )
// }
// export default WorkPage

const WorkPage = () => {
  return (
    <>
      <>
        <SEO title="Adam's Portfolio" />
        {/* <Navbar2></Navbar2> */}
        <MyWork></MyWork>
      </>
    </>
  )
}
export default WorkPage
