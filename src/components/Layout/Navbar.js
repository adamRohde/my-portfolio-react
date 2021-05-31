import React from "react"
import { Link } from "gatsby"

// const Navbar = () => {
//   console.log("Current Navbar page number is ")
//   return (
//     <layoutContext.Consumer>
//       {context => (
//         <div className="section-nav">
//           {console.log("layout context is ", context.layout)}
//           <div className="navbar-wrapper">
//             {context.layout === "WEB_APPS" ||
//             context.layout === "WORK_PROJECTS" ? (
//               <button
//                 style={{ justifyContent: "flex-start" }}
//                 onClick={() => navigate("/")}
//               >
//                 <h3>Back</h3>
//               </button>
//             ) : null}

//             {context.layout == "MAIN" ? (
//               <div>
//                 <button onClick={() => scrollTo("#header")}>
//                   <h3>About</h3>
//                 </button>
//                 <button onClick={() => scrollTo("#work")}>
//                   <h3>My Work</h3>
//                 </button>
//                 <button onClick={() => scrollTo("#contact")}>
//                   <h3>Contact</h3>
//                 </button>
//               </div>
//             ) : null}
//           </div>
//         </div>
//       )}
//     </layoutContext.Consumer>
//   )
// }
// export default Navbar

const Navbar = () => {
  console.log("Current Navbar page number is ")
  return (
    <div className="section-nav">
      <div className="navbar-wrapper">
        <Link to="/">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}
export default Navbar
