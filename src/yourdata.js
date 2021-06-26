// import myface from "./images/4.jpg"
import myface from "./images/mi-mustache-face.png"

import industrialautomation from "./images/work-projects.jpg"
import expensetracker from "./images/expensetracker.jpg"
import rockpaperscissors from "./images/rockpaperscissors.jpg"
import calc from "./images/calc.jpg"
import githubImage from "./images/icons/github.png"
import translate_gif from "./images/rs-translate.jpg"
import testYourself from "./images/rs-test.jpg"
import savePhrases from "./images/rs-save.jpg"

let dummy

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  name: "Adam",
  headerTagline: ["", "", ""],
  contactEmail: "adamrohde@outlook.com",

  mywork: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "RandomSpanish.com",
      para: "",
      imageSrc: dummy,
      target: "",
      url: "/portfolio/random-spanish",
      btn_text: "Go to site",
      setLayout: "0",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Web",
      para: "",
      imageSrc: dummy,
      target: "",
      url: "/portfolio/web-apps",
      btn_text: "Learn More",
      setLayout: "1",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Industrial Automation",
      para: "",
      imageSrc: industrialautomation,
      target: "",
      url: "/portfolio/industrial-automation",
      btn_text: "Learn More",
      setLayout: "1",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Mobile",
      para: "",
      imageSrc: dummy,
      target: "",
      url: "/portfolio/mobile",
      btn_text: "Learn More",
      setLayout: "1",
    },
  ],

  WebApps: [
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "React Expense Tracker",
      para:
        "Simple app that allows you to save your expenses.  This was app was my introduction to React and the power had using a language that takes care of state automagically!",
      technologies: [
        "React",
        "Functional Components",
        "AWS Amplify",
        "Bootstrap",
        "Localstorage",
      ],

      imageSrc: expensetracker,
      target: "_blank",
      repo_url: "https://github1s.com/adamRohde/expense-tracker",
      app_url: "https://main.d1zr4sutdwcexh.amplifyapp.com/",
      app_btn_text: "See the app",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Rock-Paper-Scissors",
      para:
        "Mobile friendly rock, paper, scissors game. Used CSS grid, and Flex-box to try and make responsive.",
      technologies: [
        "vanilla Javascript",
        "CSS Grid",
        "Flexbox",
        "dark and light themes",
        "settings page for customization",
        "Localstorage",
      ],
      imageSrc: rockpaperscissors,
      target: "_blank",
      repo_url: "https://github1s.com/adamRohde/rock-paper-scissors-responsive",
      app_url: "https://adamrohde.github.io/rock-paper-scissors-responsive/",
      app_btn_text: "Play!",
    },

    {
      id: 7, //DO NOT CHANGE THIS (Please)😅
      title: "Calculator",
      para:
        "Simple calculator app using vanilla js. The app also incorporates a dark or light theme.",
      technologies: [
        "vanilla Javascript",
        "NO EVAL FUNCTION",
        "dark and light theme",
      ],
      imageSrc: calc,
      target: "_blank",
      repo_url: "https://github1s.com/adamRohde/calculator",
      app_url: "https://adamrohde.github.io/calculator/",
      app_btn_text: "See the app",
    },
  ],

  randomSpanishCards: [
    {
      id: 12,
      text: "Translate phrases",
      src: translate_gif,
    },
    {
      id: 13,
      text: "Test yourself",
      src: testYourself,
    },
    {
      id: 14,
      text: "Save your phrases",
      src: savePhrases,
    },
  ],

  aboutParaMain:
    "Hello!  Welcome to my site, I'm Adam!  This site is designed to be a showcase for coding projects I've built recently while learning full stack web development " +
    "and also for projects I've created over the years working in the field of industrial automation " +
    "  This is where I started my programming career programming machines.  The language used in this field is call" +
    " IEC611-31 (not the best name) but the syntax is derived from the language Pascal." +
    " Over the years there has a been a trend to start using higher level languages to program machines." +
    " More recently, web-based technologies.  This has lead me down the path of expanding ",

  aboutParaRandomSpanish: "Randomspanish.com",
  aboutWorkProjects:
    "This page showcases some of the work I've done programming over the past 13 years.  I also discuss some basics of Industrial Automation to give some context.  ",

  aboutImage: myface,
  randomSpanishImage: dummy,
  workProjectsImage: dummy,

  //################################################ Skills  ################################################
  //################################################ Skills  ################################################
  //################################################ Skills  ################################################

  skills: [
    {
      id: 1,
      img: dummy,
      para: "",
    },
    {
      id: 2,
      img: dummy,
      para: "",
    },
    {
      id: 3,
      img: dummy,
      para: "",
    },
    {
      id: 4,
      img: dummy,
      para: "",
    },
    {
      id: 5,
      img: dummy,
      para: "",
    },
    {
      id: 6,
      img: dummy,
      para: "",
    },
  ],

  promotionHeading: "",
  promotionPara: "",
  // End Promotion Section -----------------

  //   Contact Section --------------
  contactSubHeading: "",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubImage, url: "https://github.com/adamRohde" },
  ],

  // End Contact Section ---------------
}
