DROP TABLE intro_questions;

CREATE TABLE intro_questions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(255) UNIQUE,
    answer TEXT,
    search_terms VARCHAR(255)
);

INSERT INTO intro_questions (question, search_terms, answer)
    VALUES ("What do you do?", "career job do about work full stack developer frontend front end backend back", "I build websites and applications. My experience includes setting up database schema (MongoDB and MySQL), building API backends to interface between the database and client side (Node.js and Express), and building out the front end UI (JavaScript/React, HTML and CSS)."),

    ("How do you keep up with new technology in web development?", "learn study tech technology technologies development studying improve new keep up advance advancement web", "I try my best to keep up with the latest and greatest by following the right people on twitter, reading Medium and dev.to articles and always being enrolled in some online courses through platforms such as Udemy."),

   ("If you could be anywhere right now, where would you be?", "where travel location place now be", "Sitting by the beach in Maui with my laptop, writing code."),

    ("Do you prefer Front End or Back End development?", "frontend backend back front end development web prefer preference full stack", "I truly enjoy both and prefer the variety in working on the full stack. However, I am more focused and comfortable on the front end with a strong foundation in React / JavaScript, HTML and CSS."),

    ("What skill are you hoping to master in the next year?", "technology skill design learn new soon next master proficient study improve year", "Web development is ever changing and there are always multiple libraries, frameworks, new language features and API's I'm looking into and trying to improve at, such as TypeScript and GraphQL right now. However, the skill I want and need to improve the most on is web design."),

    ("Where do you see yourself in five years?", "future plan 5 10 five ten years where advancement goals", "My goal is to be leading a team on a project that truly makes a difference. As software developers, we have the opportunity to make a difference in countless lives. From enabling non-profits to receive the funding they need, to making education more accessible, or simply connecting people and making their lives easier, our opportunities to effect good change is endless and this is where I want to make my mark on society."),

    ("What is the most important aspect of your life?", "most important aspect part life", "Nothing comes before my family and my fiancée. For always being there for me and all the support they have given, I will always be grateful."),

    ("What are your hobbies?", "hobbies do for fun hobby game free time", "Coding is my biggest hobby and has completely replaced my previous love of gaming. I love web development, but also enjoy tinkering with Arduino, embedded systems, electronics and IoT. Outside of tech, I love sports, especially baseball (Let's Go Dodgers!) and traveling. My favorite item currently on my bucket list is visiting all MLB stadiums at least once!"),

    ("What is your favorite food?", "food favorite eat snack meal", "I'll never turn down a good plate of enchiladas and tacos."),

    ("How long have you been coding?", "how long been coding experience time length", "I first started coding in college, learning some Matlab and Labview before moving onto C++ for embedded systems. However, I haven’t touched any of those in a while and have been completely focused on JavaScript development for the past year."),

    ("What is your biggest strength?", "biggest strengths skills abilities ability skill strength best", "I believe my biggest strength is in problem solving. I'm constantly encountering things that are new or foreign to me and I am confident in my ability to learn, understand and solve the problem at hand."),

    ("What is a weakness you have?", "biggest weaknesses weakness worst bad", "Expecting too much out of myself and designing websites."),

    ("What is your ideal work environment?", "ideal work environment job location remote job place","I am looking for an environment that is conducive to learning and improving while remaining productive. Ideally, surrounded by other amazing developers from whom I can absorb knowledge and give back in areas where they may be lacking. As developers, I believe we must all be able to rely on one another to push our best code."),

    ("Do you have any tech interests besides web development?", "tech development interests interested technology engineering", "Having focused in Mechatronics in college, I dipped my feet back into embedded systems with Arduino before picking up web development. I found my passion in web development, but I want to continue to tinker with Arduino, IoT, embedded systems, electronics and home automation on the side."),

    ("What do you enjoy about web development?", "enjoy like web development job career", "I enjoy the daily challenge of finding solutions to difficult problems. Web development is an outlet that allows me to express my creativity by designing, building and iterating. Also, a big bonus is the community of people excited to help each other and collaborate to work toward the common goal of becoming better developers."),

    ("How do you feel about working with tech or languages you haven’t used before?", "new tech languages programming java python c# c++ go golang learn work with haven’t have not used before working learning", "I am constantly working to learn new frameworks and tools to improve my toolset. Some tech is easier to pick up than others, but I always go in knowing that I can learn it and the only question is how long it will take."),

    ("What makes you a good developer?", "", "There are many facets that make a good developer, but some of my strong points include: A persistence to solve difficult problems, knowing when to ask for help and when to lead, a strive to get things done and complete projects, an overall knowledge of the full stack, and most importantly, being easy to work with and having a focus on improving along with others."),

    ("What education have you completed?", "education school learn study complete degree scholar university college", "I graduated from California Polytechnic State University San Luis Obispo with a Bachelors in Mechanical Engineering and a focus in Mechatronics. Having decided that I prefer programming, I chose to become a self-taught developer and have used many of the vast resources available online including courses on Udemy, FreeCodeCamp, CodeCademy, Medium, Youtube, StackOverflow, Google and many more."),

    ("Why did you decide to be self-taught?", "self taught self-taught developer learn own decide decision", "Having received my Bachelors in Mechanical Engineering, I feel confident in my ability to learn. I decided that focusing on web development, instead of the more broad topic of computer science, was the better choice for me. Also, I believe knowing how to teach yourself new topics in development is one of the most important skills a developer can have."),

    ("Why did the JavaScript developer need glasses?", "joke javascript c# programmer humor funny laugh tell me", "He couldn't C#")