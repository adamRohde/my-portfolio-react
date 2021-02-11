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
import equipmentImage from "./images/equipment-pic.jpg"

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

  contactEmail: "adamrohde@outlook.com",

  mywork: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "randomspanish.com",
      para: "",
      imageSrc: hola,
      target: "",
      url: "/random-spanish",
      btn_text: "Go to site",
      setLayout: "0",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Web apps",
      para: "",
      imageSrc: webapps,
      target: "",
      url: "/web-apps",
      btn_text: "Learn More",
      setLayout: "1",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Work projects",
      para: "",
      imageSrc: workprojects,
      target: "",
      url: "/work-projects",
      btn_text: "Learn More",
      setLayout: "1",
    },
  ],

  webapps: [
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "React Expense Tracker",
      para:
        "Simple app that allows you to save your expenses.  This was app was my introduction to React.",
      technologies: [
        "React",
        "Functional Components",
        "Hosted on Heroku",
        "Bootstrap",
        "Localstorage",
      ],

      imageSrc: expensetracker,
      target: "_blank",
      repo_url: "https://github.com/adamRohde/expense-tracker",
      app_url: "https://expense-tracker-2020-12-30.herokuapp.com/",
      app_btn_text: "See the app",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Rock-Paper-Scissors",
      para:
        "Mobile friendly rock, paper, scissors game. Used CSS grid, and Flex-box to try and make responsive.",
      technologies: [
        "Vanilla Javascript",
        "CSS Grid and Flexbox",
        "Dark and light themes",
        "Settings page for customization",
        "Localstorage",
      ],
      imageSrc: rockpaperscissors,
      target: "_blank",
      repo_url: "https://github.com/adamRohde/rock-paper-scissors-responsive",
      app_url: "https://adamrohde.github.io/rock-paper-scissors-responsive/",
      app_btn_text: "Play!",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Snake Game",
      para:
        "My rendition of the simple game snake, where you try to eat the apple without also eating your tail or going out of bounds.",
      technologies: [
        "Vanilla Javascript",
        "IEFE Functions",
        "Localstorage to save high score",
      ],
      imageSrc: snakegame,
      target: "_blank",
      repo_url: "https://github.com/adamRohde/snake",
      app_url: "https://adamrohde.github.io/snake/",
      app_btn_text: "Play!",
    },
    {
      id: 7, //DO NOT CHANGE THIS (Please)😅
      title: "Calculator",
      para:
        "Simple calculator app using vanilla js. The app also incorporates a dark or light theme.",
      technologies: [
        "Vanilla Javascript",
        "No use of eval function",
        "Dark and light theme",
      ],
      imageSrc: calc,
      target: "_blank",
      repo_url: "https://github.com/adamRohde/calculator",
      app_url: "https://adamrohde.github.io/calculator/",
      app_btn_text: "See the app",
    },
    {
      id: 8, //DO NOT CHANGE THIS (Please)😅
      title: "Todo",
      para: "",
      technologies: ["Vanilla Javascript", "Localstorage"],
      imageSrc: todo,
      target: "_blank",
      repo_url: "https://github.com/adamRohde/to-do-app",
      app_url: "https://adamrohde.github.io/to-do-app/",
      app_btn_text: "See the app",
    },
  ],

  aboutParaMain:
    "This page is a showcase of my work programming. I have been writing code for nearly 10 years working in the field of industrial automation. Recently I have gotten more into web development and have become passionate about honing my skills within this discipline.",
  aboutParaRandomSpanish:
    "This app I created to help myself and family learn Spanish.  I wanted to a simple site that would allow users to save their own person phrases that they could later be tested on",
  aboutWorkProjects:
    "This page showcases some of the work I've done programming over the past 13 years.  I also discuss some basics of Industrial Automation to give some context.  ",

  aboutImage: myface,
  randomSpanishImage: "",
  workProjectsImage: equipmentImage,

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
