// Large Images
import portfolioLarge from "../components/imgs/portfolioContact.jpg";
import covenantLarge from "../components/imgs/covenantDashboardLarge.jpg";
import devConnectorLarge from "../components/imgs/devConnectorLarge.jpg";
import budgItLarge from "../components/imgs/budgItLarge.jpg";
import yelpCampLarge from "../components/imgs/yelpCampLarge.jpg";
import indecisionAppLarge from "../components/imgs/indecisionAppLarge.jpg";
import colorGameLarge from "../components/imgs/colorGameLarge.jpg";
import passionLarge from "../components/imgs/passionLarge.jpg";
import nowBrewing from "../components/imgs/now-brewing.jpg";
import liveWorkCreate from "../components/imgs/live-work-create.jpg";

// Large 2x Images
import covenantLarge2x from "../components/imgs/covenantDashboardLarge2x.jpg";
import devConnectorLarge2x from "../components/imgs/devConnectorLarge2x.jpg";
import budgItLarge2x from "../components/imgs/budgItLarge2x.jpg";
import yelpCampLarge2x from "../components/imgs/yelpCampLarge2x.jpg";
import indecisionAppLarge2x from "../components/imgs/indecisionAppLarge2x.jpg";
import colorGameLarge2x from "../components/imgs/colorGameLarge2x.jpg";
import passionLarge2x from "../components/imgs/passionLarge2x.jpg";

// Small Images
import portfolioSmall from "../components/imgs/portfolioContactSmall.jpg";
import covenantSmall from "../components/imgs/covenantDashboardSmall.jpg";
import devConnectorSmall from "../components/imgs/devConnectorSmall.jpg";
import budgItSmall from "../components/imgs/budgItSmall.jpg";
import yelpCampSmall from "../components/imgs/yelpCampSmall.jpg";
import indecisionAppSmall from "../components/imgs/indecisionAppSmall.jpg";
import colorGameSmall from "../components/imgs/colorGameSmall.jpg";
import passionSmall from "../components/imgs/passionSmall.jpg";

// Small 2x Images
import covenantSmall2x from "../components/imgs/covenantDashboardSmall2x.jpg";
import devConnectorSmall2x from "../components/imgs/devConnectorSmall2x.jpg";
import budgItSmall2x from "../components/imgs/budgItSmall2x.jpg";
import yelpCampSmall2x from "../components/imgs/yelpCampSmall2x.jpg";
import indecisionAppSmall2x from "../components/imgs/indecisionAppSmall2x.jpg";
import colorGameSmall2x from "../components/imgs/colorGameSmall2x.jpg";
import passionSmall2x from "../components/imgs/passionSmall2x.jpg";

const projects = [
  {
    imgSrc: portfolioLarge,
    imgSrcSmall: portfolioSmall,
    alt: "Screenshot of portfolio's contact section",
    title: "Portfolio",
    description:
      "This site is built using Node.js, React, Sass, Express and MySQL. The site is built to be responsive for devices of all sizes. Form validation is implemented on both client and server side and uses an API on the backend to send email. I built this site from scratch on top of the Express framework in Node.js and React framework on the frontend. Designing, building and deploying this application gave me the realization of just how much goes into building even the smallest of custom applications.",
    tools: [
      "Node",
      "MongoDB",
      "Express",
      "JavaScript",
      "HTML5",
      "CSS3",
      "MySQL",
    ],
    link: "/",
    channelName: "CEP",
  },
  {
    imgSrc: covenantLarge,
    imgSrcSmall: covenantSmall,
    imgSrc2x: covenantLarge2x,
    imgSrcSmall2x: covenantSmall2x,
    alt: "Screenshot of Covenant Job Tracking App",
    title: "Covenant Job Tracking App",
    description:
      "Covenant Job Tracker is a platform for a small company to track, schedule and update projects. Built using the MERN stack, I created this platform on top of the Express and React frameworks and continue to update as requirements change. Creating MongoDB database schema, adding routes to the Node API backend, designing the dashboard UI and building the client side pages in React are just a few of the aspects that went into building this app. Google's distance matrix API is also implemented to determine that an employee is within range of a project location before allowing employee to check in.",
    tools: [
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Bootstrap",
      "Google API",
    ],
    link: "https://lit-spire-35756.herokuapp.com/",
    channelName: "CJT",
  },
  {
    imgSrc: devConnectorLarge,
    imgSrcSmall: devConnectorSmall,
    imgSrc2x: devConnectorLarge2x,
    imgSrcSmall2x: devConnectorSmall2x,
    alt: 'Screenshot of Dev Connector App"',
    title: "Dev Connector App",
    description:
      "Dev connector is a full stack application utilizing the MERN stack. Built in Node with Express, the API backend connects the MongoDB database to the frontend React app. Application level state is held in the Redux store. This SPA utilizes React Router for smooth and fast page transitions. Bootstrap styling smooths out the frontend. This application was built following a course based on the MERN stack by Brad Traversy on Udemy and was extended by me, including fixing issues found while building it.",
    tools: ["React", "Redux", "Node", "Express", "MongoDB", "Bootstrap"],
    link: "https://chewdevconnector.herokuapp.com/",
    channelName: "DCA",
  },
  {
    imgSrc: budgItLarge,
    imgSrcSmall: budgItSmall,
    imgSrc2x: budgItLarge2x,
    imgSrcSmall2x: budgItSmall2x,
    alt: "Screenshot of Budg-It project homepage",
    title: "React Budg-It App",
    description:
      "Budg-It App is an application allowing users to input expenses and incomes to help determine a budget. Users can login using Google Auth from Firebase in order to store their data in the database and access it later. Redux was used to hold application state in React. Built upon existing skills while building this app including: testing with Jest and Enzyme, working with webpack, using Sass CSS preprocessor, BEM CSS convention, using Firebase, deploying to Heroku and much more. This application was built following a course based on React on Udemy by Andrew Mead. I extended the app to include both incomes and expenses instead of just expenses, added an option to use app without login, changed the styling, and more.",
    tools: ["React", "Redux", "Firebase", "JavaScript (ES6)", "HTML5", "CSS3"],
    link: "https://chewdevbudgit.herokuapp.com/",
    channelName: "RBA",
  },
  {
    imgSrc: yelpCampLarge,
    imgSrcSmall: yelpCampSmall,
    imgSrc2x: yelpCampLarge2x,
    imgSrcSmall2x: yelpCampSmall2x,
    alt: "Screenshot of Yelp Camp project homepage",
    title: "Yelp Camp App",
    description:
      "Yelp Camp is an app for posting and commenting on campgrounds. Users can sign up and login to add campgrounds and comments that are stored in the MongoDB database. This app was built following a course on Udemy by Colt Steele. This course advanced my knowledge across the Full Stack using HTML, CSS, JavaScript, Node, Express, Passport, MongoDB and Mongoose.",
    tools: [
      "Node",
      "MongoDB",
      "Express",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Passport",
      "Mongoose",
    ],
    link: "https://chewdevcamp.herokuapp.com",
    channelName: "YCA",
  },
  {
    imgSrc: indecisionAppLarge,
    imgSrcSmall: indecisionAppSmall,
    imgSrc2x: indecisionAppLarge2x,
    imgSrcSmall2x: indecisionAppSmall2x,
    alt: "Screenshot of Indecision App project",
    title: "Indecision App",
    description:
      "Indecision App is a simple CRUD application that allows a user to add and remove items to a list. User can then allow the app to make a decision for them. This app was built as a basic intro to React and practicing the implementation of Local Storage.",
    tools: ["React", "JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/chewdev/react-indecision-app",
    channelName: "IDA",
  },
  {
    imgSrc: colorGameLarge,
    imgSrcSmall: colorGameSmall,
    imgSrc2x: colorGameLarge2x,
    imgSrcSmall2x: colorGameSmall2x,
    alt: "Screenshot of Color Guessing Game project",
    title: "Color Guessing Game",
    description:
      "Color guessing game is a simple game for practicing your RGB colors. Built with Vanilla JavaScript, HTML and CSS with Bootstrap.",
    tools: ["Bootstrap", "JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/chewdev/color-game",
    channelName: "CGG",
  },
  {
    imgSrc: nowBrewing,
    alt: 'Sign with text "Now Brewing"',
    title: "Coming Soon",
    description: "Always working on new projects. More to come!",
    tools: [],
    link: "#",
    channelName: "CS1",
  },
  {
    imgSrc: passionLarge,
    imgSrcSmall: passionSmall,
    imgSrc2x: passionLarge2x,
    imgSrcSmall2x: passionSmall2x,
    alt: '"PASSION LED US HERE" written on the ground',
    title: "Coming Soon",
    description: "Always working on new projects. More to come!",
    tools: [],
    link: "#",
    channelName: "CS3",
  },
  {
    imgSrc: liveWorkCreate,
    alt: '"LIVE, WORK, CREATE" written on a wall',
    title: "Coming Soon",
    description: "Always working on new projects. More to come!",
    tools: [],
    link: "#",
    channelName: "CS4",
  },
];

export default projects;
