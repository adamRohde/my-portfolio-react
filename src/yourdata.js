import myface from "./images/4.jpg"
import industrialautomation from "./images/work-projects.jpg"
import expensetracker from "./images/expensetracker.jpg"
import rockpaperscissors from "./images/rockpaperscissors.jpg"
import calc from "./images/calc.jpg"
import translate_gif from "./gifs/translate.gif"
import testYourself from "./images/testyourself.png"
import savePhrases from "./images/savephrases.png"

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
      id: 6, //DO NOT CHANGE THIS (Please)😅
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
  ],

  workProjectsEquipment: [
    {
      id: 8,
      name: "1) PLC (Programmable Logic Controller)",
      description:
        "It is the brains for most industrial machinery. Code is written to this device so that the machine becomes automated. The languages used for PLCs varies from vendor to vendor. I have the most experience with a language called Structured Text which is definied within the IEC 61131. This language borrows it's syntax from Pascal.",
    },
    {
      id: 9,
      name: "2) HMI (Human Machine Interface)",
      description:
        "It is the interface for the operator of the machine. Historically the GUIs for HMIs have been written with native development environments created by the vendor of the HMI. Recently there has been a trend towards using more open source web technologies to create these interfaces.",
    },
    {
      id: 10,
      name: "3) Servo Drive/Amplifier",
      description:
        "These are used to control electric servo motors (4) which are capable of following precise motion trajectories. Position data is fead back to them via the orange cable so the drive knows exactly where the motor is at all times.",
    },
    {
      id: 11,
      name: "4) Servo Motor",
      description:
        "These motors allow for precise motion control. They are used in robotics, machines tool (CNC) and web handling applications",
    },
  ],

  randomSpanishCards: [
    {
      id: 12,
      text:
        "User is able to translate phrases from English to Spanish or Spanish to English and save the words/phrases to test themself on at a later time.",
      src: translate_gif,
    },
    {
      id: 13,
      text:
        "The user can this test themself with the computer randomly selecting words/phrases they have previously saved.",
      src: testYourself,
    },
    {
      id: 14,
      text:
        "The user can save as many phrases as they would like after signing up for a account.",
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
  contactSubHeading: "Reach out! Lets collaborate on your next project!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: dummy, url: "https://github.com/adamRohde" },
  ],

  // End Contact Section ---------------
}
