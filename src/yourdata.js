// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
//import codepenIcon from "./images/codepen.svg"

import myface from "./images/mi-face.jpg"
import hola from "./images/hola.jpg"
import workprojects from "./images/work-projects.jpg"
import webapps from "./images/web-apps.jpg"

import expensetracker from "./images/expensetracker.jpg"
import rockpaperscissors from "./images/rock-paper-scissors.jpg"
import snakegame from "./images/snake-game.jpg"
import calc from "./images/calculator.jpg"
import todo from "./images/to-do.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  name: "Adam",
  headerTagline: ["", "", ""],

  headerParagraph:
    "This page is a showcase of my work programming. I have been writing code for nearly 10 years working in the field of industrial automation. Recently I have gotten more into web development and have become passionate about honing my skills within this discipline.",

  contactEmail: "adamrohde@outlook.com",

  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Random Spanish",
      para: "",
      imageSrc: hola,
      target: "_blank",
      url: "randomspanish.com",
      btn_text: "Go to site",
      setLayout: "0",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Web Apps",
      para: "",

      imageSrc: webapps,
      target: "",
      url: "/webapps",
      btn_text: "Learn More",
      setLayout: "1",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Work Projects",
      para: "",
      imageSrc: workprojects,
      target: "",
      url: "/workprojects",
      btn_text: "Learn More",
      setLayout: "1",
    },
  ],

  webapps: [
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "React Expense Tracker",
      para: "say something",
      imageSrc: expensetracker,
      target: "_blank",
      url: "",
      btn_text: "See the app",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Rock-Paper-Scissors",
      para: "",
      imageSrc: rockpaperscissors,
      target: "_blank",
      url: "",
      btn_text: "See the app",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Snake Game",
      para: "",
      imageSrc: snakegame,
      target: "_blank",
      url: "",
      btn_text: "See the app",
    },
    {
      id: 7, //DO NOT CHANGE THIS (Please)😅
      title: "Calculator",
      para: "",
      imageSrc: calc,
      target: "_blank",
      url: "",
      btn_text: "See the app",
    },
    {
      id: 8, //DO NOT CHANGE THIS (Please)😅
      title: "Todo",
      para: "",
      imageSrc: todo,
      target: "_blank",
      url: "",
      btn_text: "See the app",
    },
  ],

  aboutParaOne:
    "This page is a showcase of my work programming. I have been writing code for nearly 10 years working in the field of industrial automation. Recently I have gotten more into web development and have become passionate about honing my skills within this discipline.",
  aboutParaTwo: "",
  aboutParaThree: "",
  aboutImage: myface,

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para: "",
    },
    {
      id: 2,
      img: cssIcon,
      para: "",
    },
    {
      id: 3,
      img: jsIcon,
      para: "",
    },
    {
      id: 4,
      img: reactIcon,
      para: "",
    },
    {
      id: 5,
      img: designIcon,
      para: "",
    },
    {
      id: 6,
      img: codeIcon,
      para: "",
    },
  ],

  promotionHeading: "",
  promotionPara: "",
  // End Promotion Section -----------------

  //   Contact Section --------------
  contactSubHeading: "Reach out! Lets collaborate on your next project!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/adamRohde" },
  ],

  // End Contact Section ---------------
}
