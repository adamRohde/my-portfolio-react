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
import sanmiguel from "./images/streets-of-san-miguel.jpg"

import workprojects from "./images/work-projects.jpg"
import equipmentImage from "./images/equipment-pic.jpg"

import webapps from "./images/web-apps.jpg"
import expensetracker from "./images/expensetracker.jpg"
import rockpaperscissors from "./images/rock-paper-scissors.jpg"
import snakegame from "./images/snake-game.jpg"
import calc from "./images/calculator.jpg"
import todo from "./images/to-do.jpg"

import XML_Parser from "./images/XML_Parser.mp4"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  name: "Adam",
  headerTagline: ["", "", ""],
  contactEmail: "adamrohde@outlook.com",

  //################################################ My Work Main  ################################################
  //################################################ My Work Main  ################################################
  //################################################ My Work Main  ################################################
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

  //################################################ Web Apps  ################################################
  //################################################ Web Apps  ################################################
  //################################################ Web Apps  ################################################

  WebApps: [
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

  //################################################ Work Equipment  ################################################
  //################################################ Work Equipment  ################################################
  //################################################ Work Equipment  ################################################

  workProjectsEquipment: [
    {
      id: 9,
      name: "1) PLC (Programmable Logic Controller)",
      description:
        "It is the brains for most industrial machinery. Code is written to this device so that the machine becomes automated. The languages used for PLCs varies from vendor to vendor. I have the most experience with a language called Structured Text which is definied within the IEC 61131. This language borrows it's syntax from Pascal.",
    },
    {
      id: 10,
      name: "2) HMI (Human Machine Interface)",
      description:
        "It is the interface for the operator of the machine. Historically the GUIs for HMIs have been written with native development environments created by the vendor of the HMI. Recently there has been a trend towards using more open source web technologies to create these interfaces.",
    },
    {
      id: 11,
      name: "3) Servo Drive/Amplifier",
      description:
        "These are used to control electric servo motors (4) which are capable of following precise motion trajectories. Position data is fead back to them via the orange cable so the drive knows exactly where the motor is at all times.",
    },
    {
      id: 12,
      name: "4) Servo Motor",
      description:
        "These motors allow for precise motion control. They are used in robotics, machines tool (CNC) and web handling applications",
    },
  ],

  //################################################ Carousel Vids  ################################################
  //################################################ Carousel Vids  ################################################
  //################################################ Carousel Vids  ################################################
  carouselVids: [
    {
      id: 13,
      name: "Parsing XML data in VBA",
      src: XML_Parser,
    },
    {
      id: 14,
      name: "C# application for automating machine startup",
      src: workprojects,
    },
    {
      id: 15,
      name: "Android app for polling data",
      src: webapps,
    },
    {
      id: 16,
      name: "C programming for machine diagnostics",
      src: hola,
    },
  ],

  //################################################ About Sections  ################################################
  //################################################ About Sections  ################################################
  //################################################ About Sections  ################################################
  aboutParaMain:
    "Hello, my name is Adam!  My background is in the field of Industrial Automation. " +
    "  This is where I started my programming career programming machines.  The language used in this field is call" +
    " IEC611-31 (not the best name) but the syntax is derived from the language Pascal." +
    " Over the years there has a been a trend to start using higher level languages to program machines." +
    " More recently, web-based technologies.  This has lead me down the path of expanding ",

  aboutParaRandomSpanish: "Randomspanish.com",
  aboutWorkProjects:
    "This page showcases some of the work I've done programming over the past 13 years.  I also discuss some basics of Industrial Automation to give some context.  ",

  aboutImage: myface,
  randomSpanishImage: sanmiguel,
  workProjectsImage: equipmentImage,

  //################################################ Skills  ################################################
  //################################################ Skills  ################################################
  //################################################ Skills  ################################################

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
