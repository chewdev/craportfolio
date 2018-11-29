import budgIt from "../components/imgs/budg-it.jpg";
import yelpCamp from "../components/imgs/yelp-camp.jpg";
import indecisionApp from "../components/imgs/indecision-app.jpg";
import colorGuessingGame from "../components/imgs/color-guessing-game.jpg";
import devConnector from "../components/imgs/developerconnectornew.jpg";
import passion from "../components/imgs/passion.jpg";
import nowBrewing from "../components/imgs/now-brewing.jpg";
import portfolio from "../components/imgs/portfolioAboutMe.jpg";
import liveWorkCreate from "../components/imgs/live-work-create.jpg";
import covenantJobTracker from "../components/imgs/covenantjobtrackeraddproject.jpg";

const projects = [
  {
    imgSrc: portfolio,
    alt: "Screenshot of this portfolio's homepage",
    title: "Portfolio",
    description:
      "This site was built from scratch using Node, React, Express and MySQL. I built a strong foundation in responsive web design with HTML and CSS while developing this site. Used Google's Gmail API and Nodemailer to connect contact form to email and practiced form validation. Most importantly, this site was essential in building my comfort level with working on the full stack without help or guidance. I designed it, built the frontend and backend from scratch and deployed to Digital Ocean Droplet. Working with a DO Droplet gave me a good experience in learning to SSH into a server, set up an environment and deploy on Ubuntu.",
    tools: [
      "Node",
      "MongoDB",
      "Express",
      "JavaScript",
      "HTML5",
      "CSS3",
      "MySQL"
    ],
    link: "/",
    channelName: "CEP"
  },
  {
    imgSrc: covenantJobTracker,
    alt: "Screenshot of Covenant Job Tracking App",
    title: "Covenant Job Tracking App",
    description:
      "Covenant Job Tracker is a platform for a small company to track, schedule and update projects. Built using the MERN stack, I created this platform from scratch and continue to update as requirements change. Creating MongoDB database schema, adding routes to the Node API backend, designing the dashboard UI and building the client side pages in React are just a few of the aspects that went into building this app. Google's distance matrix API is also implemented to determine that an employee is within range of a project location before allowing employee to check in.",
    tools: [
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Bootstrap",
      "Google API"
    ],
    link: "https://lit-spire-35756.herokuapp.com/",
    channelName: "CJT"
  },
  {
    imgSrc: devConnector,
    alt: 'Screenshot of Dev Connector App"',
    title: "Dev Connector App",
    description:
      "Dev connector is a full stack application utilizing the MERN stack. Built in Node with Express, the API backend connects the MongoDB database to the frontend React app. Application level state is held in the Redux store. This SPA utilizes React Router for smooth and fast page transitions. Bootstrap styling smooths out the frontend.",
    tools: ["React", "Redux", "Node", "Express", "MongoDB", "Bootstrap"],
    link: "https://tranquil-tundra-60568.herokuapp.com/",
    channelName: "DCA"
  },
  {
    imgSrc: budgIt,
    alt: "Screenshot of Budg-It project homepage",
    title: "React Budg-It App",
    description:
      "Budg-It App is an application allowing users to input expenses and incomes to help determine a budget. Users can login using Google Auth from Firebase in order to store their data in the database and access it later. Utilizied Redux to hold application state in React. Built upon existing skills while building this app including: testing with Jest and Enzyme, working with webpack, using Sass CSS preprocessor, BEM CSS convention, using Firebase, deploying to Heroku and much more.",
    tools: ["React", "Redux", "Firebase", "JavaScript (ES6)", "HTML5", "CSS3"],
    link: "https://react-budg-it.herokuapp.com",
    channelName: "RBA"
  },
  {
    imgSrc: yelpCamp,
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
      "Mongoose"
    ],
    link: "https://polar-ridge-72654.herokuapp.com",
    channelName: "YCA"
  },
  {
    imgSrc: indecisionApp,
    alt: "Screenshot of Indecision App project",
    title: "Indecision App",
    description:
      "Indecision App is a simple CRUD application that allows a user to add and remove items to a list. User can then allow the app to make a decision for them. This app was built as a basic intro to React and implementing of Local Storage.",
    tools: ["React", "JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/chewdev/react-indecision-app",
    channelName: "IDA"
  },
  {
    imgSrc: colorGuessingGame,
    alt: "Screenshot of Color Guessing Game project",
    title: "Color Guessing Game",
    description:
      "Color guessing game is a simple game for practicing your RGB colors. Built with Vanilla JavaScript, HTML and CSS with Bootstrap.",
    tools: ["Bootstrap", "JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/chewdev/color-game",
    channelName: "CGG"
  },
  {
    imgSrc: nowBrewing,
    alt: 'Sign with text "Now Brewing"',
    title: "Coming Soon",
    description: "Always working on new projects. More to come!",
    tools: [],
    link: "#",
    channelName: "CS1"
  },
  {
    imgSrc: passion,
    alt: '"PASSION LED US HERE" written on the ground',
    title: "Coming Soon",
    description: "Always working on new projects. More to come!",
    tools: [],
    link: "#",
    channelName: "CS3"
  },
  {
    imgSrc: liveWorkCreate,
    alt: '"LIVE, WORK, CREATE" written on a wall',
    title: "Coming Soon",
    description: "Always working on new projects. More to come!",
    tools: [],
    link: "#",
    channelName: "CS4"
  }
];

export default projects;
