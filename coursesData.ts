
export interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  details:string;
  rating: number;
  requirements:string;
  learningContent:string[];
  fullDescription:string;
  courseContent: {  
    [key: string]: {
      title: string;
      lessons: string[];
    };
  };
  video:string;

}

const videoOne="/Videos/1771779_social_social media_social network_3840x2160.mp4";
const videoTwo="/Videos/4017225-sd_640_360_30fps.mp4";
const videoThree="/Videos/4860897-sd_960_506_25fps.mp4";
const videoFour="/Videos/856166-sd_640_360_25fps.mp4";

export const items: Item[] = [
  {
    id: 1,
    title: "Complete Bootstrap & React Bootcamp with Hands-On",
    description: "youAccel Training",
    price: 29.99,
    image: "/imgs/https___imgur.com_mZzG0vn.jfif",
    details: "Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!",
    rating: 4.5,
    requirements: "Basic understanding of HTML and CSS. No prior JavaScript knowledge is required.",
    learningContent: [
        "Introduction to Bootstrap and React",
        "Setting up your development environment",
        "Working with Bootstrap components",
        "Building responsive layouts",
        "Understanding React fundamentals",
        "Managing state and props in React",
        "Creating reusable components",
        "Using React Router for navigation",
        "Handling forms and events",
        "Integrating with third-party libraries",
        "Deployment and best practices"
    ],
    fullDescription: "This bootcamp is designed for absolute beginners who want to learn web development using Bootstrap for styling and React for building modern user interfaces. The course covers everything you need to know to start developing applications, from setting up your environment to understanding how to integrate backend services. By the end of this course, you will have built several projects that you can showcase in your portfolio.",
    courseContent: {
        "Module 1": {
            title: "Introduction to Bootstrap",
            lessons: [
                "What is Bootstrap?",
                "Getting started with Bootstrap",
                "Responsive design principles"
            ]
        },
        "Module 2": {
            title: "Introduction to React",
            lessons: [
                "What is React?",
                "Setting up a React project with Create React App",
                "Components and JSX"
            ]
        },
        "Module 3": {
            title: "Advanced React Concepts",
            lessons: [
                "Hooks: useState and useEffect",
                "Context API",
                "React Router for navigation"
            ]
        },
        "Module 4": {
            title: "Final Project",
            lessons: [
                "Building a full-stack application",
                "Integrating with a backend service",
                "Deploying your application"
            ]
        }
    },
    video:"/Videos/1771779_social_social media_social network_3840x2160.mp4"

},

{
  id: 2,
  title: "AWS & React: Deploy an Auto-Scaling E-Commerce App with ELB",
  description: "youAccel Training",
  price: 49.99,
  image: "/imgs/What-is-Bootstrap.webp",
  details: "Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!",
  rating: 3.8,
  requirements: "Basic understanding of React and AWS services.",
  learningContent: [
      "Understanding AWS services",
      "Setting up S3 for static hosting",
      "Configuring EC2 for auto-scaling",
      "Using ELB for load balancing",
      "Integrating React with AWS infrastructure",
      "Deployment strategies"
  ],
  fullDescription: "In this course, you will learn how to deploy a React application on AWS, implementing best practices for scaling and load balancing. You will also gain hands-on experience with various AWS services.",
  courseContent: {
      "Module 1": {
          title: "AWS Basics",
          lessons: [
              "Introduction to AWS",
              "Setting up your AWS account",
              "Understanding AWS architecture"
          ]
      },
      "Module 2": {
          title: "Building with React on AWS",
          lessons: [
              "Creating a React app",
              "Deploying on S3",
              "Configuring a CloudFront distribution"
          ]
      },
      "Module 3": {
          title: "Advanced AWS Features",
          lessons: [
              "Implementing auto-scaling",
              "Using Elastic Load Balancing",
              "Monitoring and logging AWS services"
          ]
      },
      "Module 4": {
          title: "Final Deployment",
          lessons: [
              "Best practices for deployment",
              "Automating deployments with CI/CD",
              "Post-deployment monitoring"
          ]
      }
  },
  video:"/Videos/4017225-sd_640_360_30fps.mp4"
},
{
  id: 3,
  title: "React - Complete Developer Course with Hands-On Projects",
  description: "youAccel Training",
  price: 19.99,
  image: "/imgs/react-bootstrap-cover_hu2473768147339878211.webp",
  details: "Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!",
  rating: 4.2,
  requirements: "Basic understanding of JavaScript.",
  learningContent: [
      "Getting started with React",
      "Component architecture",
      "State management with hooks",
      "Connecting to APIs",
      "Building user interfaces"
  ],
  fullDescription: "This course takes you through the complete process of becoming a React developer. You will work on hands-on projects that simulate real-world applications, enhancing your learning experience.",
  courseContent: {
      "Module 1": {
          title: "Introduction to React",
          lessons: [
              "What is React?",
              "Setting up your environment",
              "Understanding components and props"
          ]
      },
      "Module 2": {
          title: "Working with State",
          lessons: [
              "Using the useState hook",
              "Handling events",
              "Building forms"
          ]
      },
      "Module 3": {
          title: "API Integration",
          lessons: [
              "Fetching data from APIs",
              "Using Axios",
              "Handling responses"
          ]
      },
      "Module 4": {
          title: "Building Projects",
          lessons: [
              "Creating a portfolio site",
              "Building a weather app",
              "Finalizing and deploying applications"
          ]
      }
  },
    video:"/Videos/4860897-sd_960_506_25fps.mp4",
},
{
  id: 4,
  title: "HTML, CSS, React - Certification Course for Beginners",
  description: "youAccel Training",
  price: 39.99,
  image: "/imgs/Untitled design.jpg",
  details: "Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!",
  rating: 4.8,
  video:"/Videos/856166-sd_640_360_25fps.mp4",
  requirements: "No prior knowledge required.",
  learningContent: [
      "Basic HTML and CSS",
      "Introduction to JavaScript",
      "Getting started with React",
      "Building responsive web pages"
  ],
  fullDescription: "This comprehensive course is for absolute beginners who want to dive into web development. Learn the essential skills needed to create beautiful, responsive websites from scratch.",
  courseContent: {
      "Module 1": {
          title: "HTML Basics",
          lessons: [
              "Understanding HTML structure",
              "Creating forms",
              "Using HTML elements"
          ]
      },
      "Module 2": {
          title: "CSS Fundamentals",
          lessons: [
              "Styling with CSS",
              "Working with Flexbox",
              "Responsive design principles"
          ]
      },
      "Module 3": {
          title: "JavaScript Intro",
          lessons: [
              "Variables and types",
              "Control flow",
              "Functions and events"
          ]
      },
      "Module 4": {
          title: "React Basics",
          lessons: [
              "Creating a new React app",
              "Building components",
              "Managing state and props"
          ]
      }
  },
},
];

// Array of recommended items (can use the same structure as items)
export const recommendedItems: Item[] = [
  {
    id: 5,
    title: "Web Development with JavaScript in Complete Crash Course",
    description: "Build powerful web applications",
    price: 39.99,
    image: "/imgs/images.jfif",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    rating: 4.3,
    video:videoOne,
    requirements: "Basic understanding of HTML and CSS. No prior JavaScript knowledge is required.",
    learningContent: [
      "Understanding JavaScript fundamentals",
      "Working with the Document Object Model (DOM)",
      "Handling events in JavaScript",
      "Creating interactive web pages",
      "Using jQuery for DOM manipulation",
      "Making AJAX calls",
      "Introduction to Vue.js",
      "Building a simple application with Vue.js",
      "Deploying web applications",
      "Best practices in web development",
    ],
    fullDescription: "This crash course is designed for beginners who wish to build web applications quickly. With a focus on hands-on learning, students will engage in various projects and exercises. By the end of the course, you will have a solid understanding of how web applications are built and the skills to create your own.",
    courseContent: {
      "Module 1": {
        title: "JavaScript Basics",
        lessons: [
          "What is JavaScript?",
          "Variables and data types",
          "Functions and scope",
        ],
      },
      "Module 2": {
        title: "DOM Manipulation",
        lessons: [
          "Selecting elements",
          "Modifying elements",
          "Event listeners",
        ],
      },
      "Module 3": {
        title: "AJAX and APIs",
        lessons: [
          "Making API requests",
          "Handling responses",
          "Dynamic content loading",
        ],
      },
      "Module 4": {
        title: "Introduction to Vue.js",
        lessons: [
          "What is Vue.js?",
          "Setting up a Vue project",
          "Creating components in Vue",
        ],
      },
    },
  },
  {
    id: 6,
    title: "JavaScript Masterclass for Beginner to Expert: Bootcamp",
    description: "Master JavaScript from beginner to advanced",
    price: 49.99,
    image: "/imgs/Header_pic_1_JS.png",
    details: 'Learn JavaScript, jQuery and Ajax with real-world projects. Includes complete written course material!',
    rating: 4.8,
    video:videoTwo,
    requirements: "Basic understanding of HTML and CSS. No prior JavaScript knowledge is required.",
    learningContent: [
      "Deep dive into JavaScript fundamentals",
      "Advanced functions and scope",
      "Object-oriented JavaScript",
      "Asynchronous programming with callbacks, promises, and async/await",
      "Using jQuery for animations and effects",
      "Making dynamic web applications",
      "Working with APIs",
      "Building projects for your portfolio",
      "Best practices and coding standards",
    ],
    fullDescription: "This masterclass takes you from beginner to advanced concepts in JavaScript. Using hands-on projects, you will learn how to effectively build complex web applications. The course covers everything from fundamentals to advanced topics, preparing you for a career in web development.",
    courseContent: {
      "Module 1": {
        title: "JavaScript Essentials",
        lessons: [
          "Variables and data types",
          "Control flow and conditionals",
          "Functions and scope",
        ],
      },
      "Module 2": {
        title: "Advanced JavaScript Concepts",
        lessons: [
          "This and prototypes",
          "Closures and IIFE",
          "ES6 features and syntax",
        ],
      },
      "Module 3": {
        title: "Asynchronous JavaScript",
        lessons: [
          "Callbacks and promises",
          "Async/Await",
          "Error handling in asynchronous code",
        ],
      },
      "Module 4": {
        title: "Real Projects",
        lessons: [
          "Building an application with a REST API",
          "Creating single-page applications",
          "Deploying your project",
        ],
      },
    },
  },
  {
    id: 7,
    title: "Learn JavaScript by Creating 10 Practical Projects",
    description: "Learn the fundamentals through practical applications",
    price: 29.99,
    image: "/imgs/Unofficial_JavaScript_logo_3.svg.png",
    details: 'Build 10 projects using JavaScript. Includes complete written course material and project files!',
    rating: 4.5,
    video:videoThree,
    requirements: "Basic understanding of HTML, CSS, and JavaScript.",
    learningContent: [
      "Introduction to JavaScript projects",
      "Building a simple calculator",
      "Creating a dynamic to-do list",
      "Developing a weather app using an API",
      "Building a JavaScript game",
      "Handling forms and validation",
      "Creating a simple blog with JavaScript",
      "Working with JSON data",
      "Best practices in project development",
    ],
    fullDescription: "This course focuses on learning JavaScript by creating actual projects you can showcase. By following along and building 10 projects, you will gain the skills needed to tackle your own projects in the future.",
    courseContent: {
      "Module 1": {
        title: "Project 1: Simple Calculator",
        lessons: [
          "Creating the HTML structure",
          "Styling with CSS",
          "JavaScript functionality",
        ],
      },
      "Module 2": {
        title: "Project 2: To-Do List",
        lessons: [
          "Building the UI",
          "Adding tasks dynamically",
          "Saving tasks to local storage",
        ],
      },
      "Module 3": {
        title: "Project 3: Weather App",
        lessons: [
          "Setting up API keys",
          "Fetching data from an API",
          "Displaying weather information",
        ],
      },
      "Module 4": {
        title: "Final Projects",
        lessons: [
          "Build your own project",
          "Integrating multiple technologies",
          "Showcasing your work",
        ],
      },
    },
  },
  {
    id: 8,
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    description: "Become an expert in JavaScript",
    price: 59.99,
    image: "/imgs/What-Is-JavaScript-Used-For.avif",
    details: 'Covers everything from basics to advanced topics with hands-on projects.',
    rating: 4.9,
    video:videoFour,
    requirements: "No prior knowledge required. Just bring your passion for learning.",
    learningContent: [
      "JavaScript basics and advanced topics",
      "Understanding data types and structures",
      "Manipulating the DOM",
      "Asynchronous JavaScript with callbacks and promises",
      "Using ES6 features",
      "Building real-world applications",
      "Working with frameworks like React and Angular",
      "Creating and deploying a full-stack application",
    ],
    fullDescription: "This comprehensive course will take you from beginner to JavaScript expert. Through a variety of hands-on projects and examples, you will be well equipped to tackle problems in web development and beyond.",
    courseContent: {
      "Module 1": {
        title: "JavaScript Fundamentals",
        lessons: [
          "Introduction to programming",
          "Control flow and loops",
          "Functions and scopes",
        ],
      },
      "Module 2": {
        title: "Advanced JavaScript Techniques",
        lessons: [
          "Asynchronous programming",
          "Understanding this and closures",
          "Working with arrays and objects",
        ],
      },
      "Module 3": {
        title: "Building Applications",
        lessons: [
          "Developing a frontend with JavaScript",
          "Connecting to APIs",
          "Deploying your application",
        ],
      },
      "Module 4": {
        title: "Capstone Project",
        lessons: [
          "Creating a complete web application",
          "Integrating with backend services",
          "Project presentation",
        ],
      },
    },
  },
];

export const RatingItems: Item[] = [
  {
    id: 9,
    title: "JavaScript Basics",
    description: "Learn the fundamentals and more.",
    price: 29.99,
    image: "/imgs/Untitled-design-75.webp",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    rating: 5.5,
    video:videoOne,
    requirements: "Basic understanding of HTML and CSS. No prior JavaScript knowledge is required.",
    learningContent: [
      "Understanding JavaScript fundamentals",
      "Working with the Document Object Model (DOM)",
      "Handling events in JavaScript",
      "Creating interactive web pages",
      "Using jQuery for DOM manipulation",
      "Making AJAX calls",
      "Introduction to Vue.js",
      "Building a simple application with Vue.js",
      "Deploying web applications",
      "Best practices in web development",
    ],
    fullDescription: "This course is designed for beginners who wish to build web applications quickly. With hands-on learning, students will engage in projects. By the end of the course, you will understand how web applications are built and have the skills to create your own.",
    courseContent: {
      "Module 1": {
        title: "JavaScript Basics",
        lessons: [
          "What is JavaScript?",
          "Variables and data types",
          "Functions and scope",
        ],
      },
      "Module 2": {
        title: "DOM Manipulation",
        lessons: [
          "Selecting elements",
          "Modifying elements",
          "Event listeners",
        ],
      },
      "Module 3": {
        title: "AJAX and APIs",
        lessons: [
          "Making API requests",
          "Handling responses",
          "Dynamic content loading",
        ],
      },
      "Module 4": {
        title: "Introduction to Vue.js",
        lessons: [
          "What is Vue.js?",
          "Setting up a Vue project",
          "Creating components in Vue",
        ],
      },
    },
  },
  {
    id: 10,
    title: "HTML Essentials",
    description: "An in-depth course on fullstack.",
    price: 49.99,
    image: "/imgs/images (1).jfif",
    details: 'Learn HTML5, CSS3, and JavaScript basics. Includes complete written course material!',
    rating: 3.8,
    video:videoTwo,
    requirements: "Basic understanding of web development. No prior coding skills are required.",
    learningContent: [
      "Introduction to HTML and CSS",
      "Creating your first webpage",
      "Styling with CSS",
      "Responsive web design",
      "Integrating JavaScript into HTML",
      "Building interactive elements",
      "Best practices for web standards",
      "Web accessibility principles",
    ],
    fullDescription: "This comprehensive course teaches you how to create web pages from the ground up. You will gain practical skills by building live projects and learning modern web practices.",
    courseContent: {
      "Module 1": {
        title: "HTML Fundamentals",
        lessons: [
          "HTML structure and syntax",
          "Attributes and elements",
          "Links and images",
        ],
      },
      "Module 2": {
        title: "CSS Basics",
        lessons: [
          "Selectors and properties",
          "Box model and layouts",
          "Colors and backgrounds",
        ],
      },
      "Module 3": {
        title: "JavaScript Integration",
        lessons: [
          "Scripting basics",
          "Using JavaScript in HTML",
          "Creating interactive forms",
        ],
      },
      "Module 4": {
        title: "Project Work",
        lessons: [
          "Building a complete webpage",
          "Applying CSS styles",
          "Integrating JS functionalities",
        ],
      },
    },
  },
  {
    id: 11,
    title: "Responsive Pretty UI",
    description: "Understand the basics.",
    price: 19.99,
    image: "/imgs/What-is-a-Full-Stack-Developer-jpg.webp",
    details: 'Learn to create beautiful user interfaces using HTML and CSS. Includes complete written course material!',
    rating: 4.2,
    video:videoThree,
    requirements: "Basic knowledge of HTML and CSS is recommended.",
    learningContent: [
      "Understanding UI design principles",
      "Creating responsive layouts",
      "Using CSS Flexbox and Grid",
      "Styling techniques for modern UI",
      "Implementing transitions and animations",
      "Best practices for UI/UX design",
    ],
    fullDescription: "In this course, you will learn how to create stunning and responsive user interfaces. With hands-on projects, you will gain practical experience and confidence in web design.",
    courseContent: {
      "Module 1": {
        title: "UI Design Fundamentals",
        lessons: [
          "What is UI design?",
          "Principles of good design",
          "Color theory and typography",
        ],
      },
      "Module 2": {
        title: "Responsive Design Techniques",
        lessons: [
          "Media queries in CSS",
          "Flexbox for layout",
          "CSS Grid for complex layouts",
        ],
      },
      "Module 3": {
        title: "Styling UIs",
        lessons: [
          "Using CSS variables",
          "Creating animations",
          "Incorporating images and icons",
        ],
      },
      "Module 4": {
        title: "Final UI Project",
        lessons: [
          "Designing a complete user interface",
          "Preparing for deployment",
          "Reviewing design principles",
        ],
      },
    },
  },
  {
    id: 12,
    title: "CSS Basics",
    description: "Explore essential CSS concepts.",
    price: 39.99,
    image: "/imgs/0-cl7fc6pt1MHjIF4K.png",
    details: 'Learn CSS from the start with practical examples. Includes complete written course material!',
    rating: 4.8,
    video:videoFour,
    requirements: "No prior knowledge required.",
    learningContent: [
      "Introduction to CSS",
      "Selecting elements",
      "Styling text and font properties",
      "Using colors and backgrounds",
      "Layout techniques",
      "Responsive design concepts",
      "Advanced selectors and properties",
    ],
    fullDescription: "This course is perfect for those who want to start from scratch. You’ll learn how to style websites using CSS with the support of various exercises and projects.",
    courseContent: {
      "Module 1": {
        title: "CSS Fundamentals",
        lessons: [
          "What is CSS?",
          "Understanding selectors",
          "Applying styles to elements",
        ],
      },
      "Module 2": {
        title: "Layout Techniques",
        lessons: [
          "CSS Box Model",
          "Flexbox and Grid",
          "Creating responsive designs",
        ],
      },
      "Module 3": {
        title: "Text and Fonts",
        lessons: [
          "Styling fonts",
          "Using Web Fonts",
          "Text decorations and transformations",
        ],
      },
      "Module 4": {
        title: "CSS Projects",
        lessons: [
          "Building a page with CSS",
          "Applying media queries",
          "Final project presentation",
        ],
      },
    },
  },
];

export const ViewedItems: Item[] = [
  {
    id: 13,
    title: "Node.js Design Patterns",
    description: "Learn the fundamentals of NodeJS",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    price: 29.99,
    image: "/imgs/nodejs_cover_photo_smaller_size.png",
    rating: 5.5,
    video:videoOne,
    requirements: "Basic understanding of JavaScript is recommended.",
    learningContent: [
      "Understanding Node.js fundamentals",
      "Creating and running a basic web server",
      "Working with Node.js modules",
      "Handling file systems",
      "Using npm for package management",
      "Building RESTful APIs",
      "Introduction to Express.js",
      "Deploying Node.js applications",
      "Best practices in Node.js development",
    ],
    fullDescription: "This course is designed for developers who want to dive into Node.js. With hands-on projects, students will learn how to use Node.js to create back-end applications effectively.",
    courseContent: {
      "Module 1": {
        title: "Node.js Basics",
        lessons: [
          "What is Node.js?",
          "Setting up the development environment",
          "First steps with Node.js",
        ],
      },
      "Module 2": {
        title: "Working with Express.js",
        lessons: [
          "Creating an Express server",
          "Setting up routes",
          "Using middleware",
        ],
      },
      "Module 3": {
        title: "Database Integration",
        lessons: [
          "Connecting to databases",
          "CRUD operations",
          "Using MongoDB with Node.js",
        ],
      },
      "Module 4": {
        title: "Deploying Node.js Applications",
        lessons: [
          "Deployment strategies",
          "Using cloud services like Heroku",
          "Project finalization and best practices",
        ],
      },
    },
  },
  {
    id: 14,
    title: "NodeJS for Beginners - The Complete Introduction to JS",
    description: "An in-depth course on NodeJS.",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    price: 49.99,
    video:videoTwo,
    image: "/imgs/66e1760b7dcd5200330d2ae4_Nodejs  Sleep Function.webp",
    rating: 3.8,
    requirements: "Basic knowledge of programming concepts.",
    learningContent: [
      "Introduction to Node.js and JavaScript",
      "Setting up Node.js on your computer",
      "Basics of JavaScript syntax",
      "Creating servers with Node.js",
      "Handling asynchronous operations",
      "Consuming APIs",
      "Building CLI applications with Node.js",
      "Debugging Node.js applications",
      "Real-world project: Building a simple application",
    ],
    fullDescription: "This comprehensive course is perfect for beginners who want to understand Node.js and JavaScript. With practical examples, you'll build multiple applications throughout the course.",
    courseContent: {
      "Module 1": {
        title: "JavaScript Basics",
        lessons: [
          "Variables and data types",
          "Control structures (if, loops)",
          "Functions",
        ],
      },
      "Module 2": {
        title: "Node.js Introduction",
        lessons: [
          "What is Node.js?",
          "Understanding the event loop",
          "First steps with server creation",
        ],
      },
      "Module 3": {
        title: "Working with APIs",
        lessons: [
          "Making HTTP requests",
          "Consuming RESTful APIs",
          "Building a simple API",
        ],
      },
      "Module 4": {
        title: "Final Project",
        lessons: [
          "Putting it all together",
          "Project presentation",
          "Next steps in your learning path",
        ],
      },
    },
  },
  {
    id: 15,
    title: "Become a Certified Web Developer: Backend NodeJS",
    description: "Understand the basic architecture.",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    price: 19.99,
    image: "/imgs/secure-rest-api-in-nodejs.png",
    rating: 4.2,
    video:videoOne,
    requirements: "Basic knowledge of JavaScript and web development concepts.",
    learningContent: [
      "Understanding backend development",
      "Basics of RESTful API design",
      "Working with databases (SQL and NoSQL)",
      "User authentication practices",
      "Handling sessions and cookies",
      "Deployment considerations for Node.js applications",
      "Real-world project: Building a complete application",
    ],
    fullDescription: "This course will take you from junior to proficient web developer level. It provides a complete overview of backend development using Node.js, including databases, authentication, and deployment.",
    courseContent: {
      "Module 1": {
        title: "Introduction to Web Development",
        lessons: [
          "Frontend vs Backend",
          "Overview of web application architecture",
          "Getting started with Node.js",
        ],
      },
      "Module 2": {
        title: "APIs and Databases",
        lessons: [
          "Building RESTful APIs",
          "Using SQL vs NoSQL",
          "CRUD operations in depth",
        ],
      },
      "Module 3": {
        title: "Authentication",
        lessons: [
          "User authentication techniques",
          "Implementing JWT and OAuth",
          "Best practices for secure applications",
        ],
      },
      "Module 4": {
        title: "Deployment",
        lessons: [
          "Overview of deployment options",
          "Deploying on Heroku",
          "Monitoring and maintaining applications post-deployment",
        ],
      },
    },
  },
  {
    id: 16,
    title: "Complete Web Development Course",
    description: "Explore essential techniques.",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    price: 39.99,
    image: "/imgs/NodeJs-framework-Banner2.png",
    rating: 4.8,
    video:videoFour,
    requirements: "Willingness to learn and practice. Basic understanding of HTML and CSS is a plus.",
    learningContent: [
      "Comprehensive understanding of web technologies",
      "Frontend vs Backend development",
      "Using frameworks like React and Node.js",
      "Creating responsive web designs",
      "Integrating APIs",
      "Working with databases",
      "Deployment strategies for fullstack applications",
    ],
    fullDescription: "This all-in-one course is aimed at aspiring web developers to provide a solid foundation in both frontend and backend development, using leading technologies.",
    courseContent: {
      "Module 1": {
        title: "Web Development Fundamentals",
        lessons: [
          "What is web development?",
          "Overview of web technologies",
          "Introduction to HTML, CSS, and JavaScript",
        ],
      },
      "Module 2": {
        title: "Frontend Development",
        lessons: [
          "Building responsive user interfaces",
          "Using CSS frameworks (Bootstrap, Tailwind)",
          "JavaScript frameworks overview (React/Angular)",
        ],
      },
      "Module 3": {
        title: "Backend Development",
        lessons: [
          "Node.js fundamentals",
          "Creating RESTful APIs",
          "Database management and integration",
        ],
      },
      "Module 4": {
        title: "Finalizing Your Fullstack Application",
        lessons: [
          "Deployment techniques",
          "Best practices in development",
          "Portfolio preparation",
        ],
      },
    },
  },
];

export const ShortVideos: Item[] = [
  {
    id: 17,
    title: "Complete MernStack Course, Pro for Essentials Needs",
    description: "Learn the fundamentals and more.",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    price: 29.99,
    image: "/imgs/1_cJlV4R3_D9wQpNq6daQYbg.jpg",
    rating: 5.5,
    video:videoOne,
    requirements: "Basic understanding of JavaScript is recommended.",
    learningContent: [
      "Understanding the fundamentals of MernStack",
      "Creating a basic React application",
      "Building a Node.js backend",
      "Using MongoDB for data storage",
      "Deploying your fullstack application",
      "Handling user authentication",
      "Best practices in MernStack development",
    ],
    fullDescription: "This course provides a comprehensive introduction to MernStack, enabling you to develop fullstack applications using MongoDB, Express.js, React, and Node.js.",
    courseContent: {
      "Module 1": {
        title: "MernStack Basics",
        lessons: [
          "Introduction to MernStack",
          "Setting up a development environment",
          "Building your first application",
        ],
      },
      "Module 2": {
        title: "Front-End Development",
        lessons: [
          "Creating a responsive UI with React",
          "Managing state with hooks",
          "Routing in React applications",
        ],
      },
      "Module 3": {
        title: "Back-End Development",
        lessons: [
          "Building a REST API with Node.js and Express",
          "Connecting to MongoDB with Mongoose",
          "User authentication and validation",
        ],
      },
      "Module 4": {
        title: "Deployment",
        lessons: [
          "Preparing your application for production",
          "Deploying to Heroku",
          "Setting up environment variables",
        ],
      },
    },
  },
  {
    id: 18,
    title: "MernStack Essentials From Zero to Hero",
    description: "An in-depth course on MernStack.",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    price: 49.99,
    image: "/imgs/1.-Best-10-Tools-for-Mern-Stack-Developer.jpg",
    rating: 3.8,
    video:videoThree,
    requirements: "Basic knowledge of programming concepts.",
    learningContent: [
      "Understanding MernStack architecture",
      "Creating RESTful APIs",
      "Frontend and backend integration",
      "Using Redux for state management",
      "Deploying on cloud services",
      "Building responsive applications",
      "Testing and debugging MernStack applications",
    ],
    fullDescription: "This course is a comprehensive guide for those looking to master the MernStack for building modern web applications.",
    courseContent: {
      "Module 1": {
        title: "MernStack Overview",
        lessons: [
          "Introduction to MernStack",
          "Why use MernStack?",
          "Setting up your development environment",
        ],
      },
      "Module 2": {
        title: "Building Frontend with React",
        lessons: [
          "React components and props",
          "State Management",
          "Component lifecycle methods",
        ],
      },
      "Module 3": {
        title: "Backend Development with Node.js",
        lessons: [
          "Setting up Node.js and Express",
          "Creating APIs with Express",
          "Routing and Middleware",
        ],
      },
      "Module 4": {
        title: "Deployment Strategies",
        lessons: [
          "Deploying to Heroku",
          "Managing server settings",
          "Monitoring application health",
        ],
      },
    },
  },
  {
    id: 19,
    title: "100 Days Of Code - 2024 Web Development Bootcamp",
    description: "Understand the basics of building user interfaces",
    price: 19.99,
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    image: "/imgs/images (2).jfif",
    rating: 4.2,
    video:videoTwo,
    requirements: "Willingness to learn and commitment to complete the course.",
    learningContent: [
      "Daily coding challenges",
      "Building projects with real-world applications",
      "Learning HTML, CSS, and JavaScript from scratch",
      "Creating dynamic web applications",
      "Working with APIs",
      "Version control with Git",
      "Best practices in coding",
    ],
    fullDescription: "This immersive bootcamp is designed for anyone looking to develop a solid foundation in web development through a structured 100-day program.",
    courseContent: {
      "Module 1": {
        title: "Basics of Web Development",
        lessons: [
          "HTML and CSS Fundamentals",
          "Introduction to JavaScript",
          "Building your first webpage",
        ],
      },
      "Module 2": {
        title: "Intermediate Web Development",
        lessons: [
          "Responsive Web Design Principles",
          "Using JavaScript for interactivity",
          "Working with forms and validation",
        ],
      },
      "Module 3": {
        title: "Advanced Topics",
        lessons: [
          "Using APIs in your applications",
          "Version control with Git",
          "Project development workflow",
        ],
      },
      "Module 4": {
        title: "Final Project",
        lessons: [
          "Planning and organizing your project",
          "Implementation and debugging",
          "Final presentation and feedback",
        ],
      },
    },
  },
  {
    id: 20,
    title: "MernStack Course Basics",
    description: "Explore essential Basics.",
    price: 39.99,
    image: "/imgs/Copy-of-mern-stack-hotel-booking-website--1-.png",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    rating: 4.8,
    video:videoOne,
    requirements: "Familiarity with JavaScript is helpful.",
    learningContent: [
      "Setting up the MernStack",
      "Understanding components and props",
      "Building RESTful services",
      "Data management with MongoDB",
      "Front-end and back-end development",
      "Deployment of fullstack applications",
    ],
    fullDescription: "This course provides a clear entry point for beginners keen to learn the MernStack and build applications that work efficiently across both the frontend and backend.",
    courseContent: {
      "Module 1": {
        title: "Getting Started with MernStack",
        lessons: [
          "Introduction to the course",
          "Setting up the environment",
          "First steps with Mern technology",
        ],
      },
      "Module 2": {
        title: "Frontend Development",
        lessons: [
          "Creating a React Application",
          "Constructing reusable components",
          "Styling your application",
        ],
      },
      "Module 3": {
        title: "Back-End Development with Node.js",
        lessons: [
          "Creating a basic REST API",
          "Working with MongoDB",
          "Connecting your frontend to the backend database",
        ],
      },
      "Module 4": {
        title: "Finalizing and Deploying Your Application",
        lessons: [
          "Deployment strategies for MernStack apps",
          "Best practices for production applications",
          "Project reviews and feedback",
        ],
      },
    },
  },
];

export const newWebItems: Item[] = [
  {
    id: 21,
    title: "Tailwind Basics, Tailwind Using React Library",
    description: "Learn the fundamentals of Tailwind.",
    details: 'Learn how to create responsive UIs using Tailwind CSS and React. This course includes complete written material!',
    price: 29.99,
    image: "/imgs/card.9e9b9cc2.jpg",
    rating: 5.5,
    video:videoThree,
    requirements: "Basic understanding of CSS is required.",
    learningContent: [
      "Understanding the Tailwind CSS approach",
      "Setting up Tailwind in a React project",
      "Creating responsive designs with utility classes",
      "Using Tailwind to style components",
      "Best practices for organizing a Tailwind project",
    ],
    fullDescription: "This course offers a comprehensive introduction to Tailwind CSS, focusing on building responsive interfaces using React.",
    courseContent: {
      "Module 1": {
        title: "Introduction to Tailwind CSS",
        lessons: [
          "What is Tailwind CSS?",
          "Installing Tailwind CSS",
          "Creating your first Tailwind component",
        ],
      },
      "Module 2": {
        title: "Building Layouts",
        lessons: [
          "Flexbox with Tailwind CSS",
          "Grid layouts with Tailwind CSS",
          "Responsive design principles",
        ],
      },
      "Module 3": {
        title: "Advanced Styling Techniques",
        lessons: [
          "Customizing Tailwind with configuration files",
          "Creating reusable components",
          "Combining Tailwind with other CSS frameworks",
        ],
      },
      "Module 4": {
        title: "Deploying Your Application",
        lessons: [
          "Optimizing Tailwind for production",
          "Setting up build tools",
          "Deploying your application",
        ],
      },
    },
  },
  {
    id: 22,
    title: "React Libraries, Responsive UI Components",
    description: "An in-depth course on building responsive UI components with React.",
    details: 'Explore how to integrate various libraries into your React applications to enhance functionality!',
    price: 49.99,
    image: "/imgs/sddefault.jpg",
    rating: 3.8,
    video:videoTwo,
    requirements: "Familiarity with React is recommended.",
    learningContent: [
      "Integrating third-party libraries in React",
      "Building reusable UI components",
      "Using React Router for navigation",
      "Managing state with context API and hooks",
      "Testing components with popular testing libraries",
    ],
    fullDescription: "Learn how to effectively use React libraries to build user-friendly and responsive components in your projects.",
    courseContent: {
      "Module 1": {
        title: "Getting Started with React Libraries",
        lessons: [
          "Overview of popular React libraries",
          "Setting up a React project",
          "Installing and using libraries",
        ],
      },
      "Module 2": {
        title: "Building UI Components",
        lessons: [
          "Understanding component structure",
          "Props and state management",
          "Creating forms with validation",
        ],
      },
      "Module 3": {
        title: "Routing and Navigation",
        lessons: [
          "Using React Router for navigation",
          "Nested routes and dynamic path matching",
          "Redirects and route protection",
        ],
      },
      "Module 4": {
        title: "Advanced Concepts",
        lessons: [
          "Enhancing performance with memoization",
          "Testing components with Jest",
          "Deploying React applications",
        ],
      },
    },
  },
  {
    id: 23,
    title: "Responsive Pretty UI Library Bootcamp for 20 Days",
    description: "Master the art of building responsive UI libraries.",
    details: 'Dive deep into the principles of UI design and library creation!',
    price: 19.99,
    image: "/imgs/1_fEyeESs-HxVR7Zlr-fdlvw.png",
    rating: 4.2,
    video:videoThree,
    requirements: "Basic understanding of design principles is helpful.",
    learningContent: [
      "UI/UX principles for responsive design",
      "Creating a design system",
      "Using Figma for design prototyping",
      "Building a UI library from scratch",
      "Best practices in UI development",
    ],
    fullDescription: "Over 20 days, this bootcamp provides intensive training in designing and implementing a responsive UI library.",
    courseContent: {
      "Module 1": {
        title: "Introduction to UI/UX Design",
        lessons: [
          "Understanding user needs",
          "Research and planning",
          "Creating user personas",
        ],
      },
      "Module 2": {
        title: "Design Tools and Prototyping",
        lessons: [
          "Figma basics and advanced features",
          "Creating interactive prototypes",
          "User testing and feedback",
        ],
      },
      "Module 3": {
        title: "Building a UI Library",
        lessons: [
          "Structuring your library",
          "Creating reusable components",
          "Documenting your library",
        ],
      },
      "Module 4": {
        title: "Deployment and Maintenance",
        lessons: [
          "Publishing your library",
          "Version control with Git",
          "Maintaining and updating your library",
        ],
      },
    },
  },
  {
    id: 24,
    title: "Ant Design Library for Building Responsive UI Components",
    description: "Learn to build sophisticated UIs using Ant Design.",
    details: 'Comprehensive guide to implementing Ant Design in your projects, from basic to advanced usage.',
    price: 39.99,
    image: "/imgs/hero.png",
    rating: 4.8,
    video:videoTwo,
    requirements: "Basic knowledge of React is beneficial.",
    learningContent: [
      "Integrating Ant Design with React",
      "Utilizing pre-built components",
      "Customizing Ant Design themes",
      "Best practices in UI development",
      "Extending Ant Design functionality",
    ],
    fullDescription: "This course helps you master Ant Design to create rapid and beautiful UI components for your applications.",
    courseContent: {
      "Module 1": {
        title: "Introduction to Ant Design",
        lessons: [
          "What is Ant Design?",
          "Installing Ant Design in React",
          "Overview of core components",
        ],
      },
      "Module 2": {
        title: "Using Ant Design Components",
        lessons: [
          "Creating forms with Ant Design",
          "Layout and grid system",
          "Customizing components",
        ],
      },
      "Module 3": {
        title: "Advanced Topics in Ant Design",
        lessons: [
          "Managing state with Ant Design",
          "Creating responsive designs",
          "Integrating with state management libraries",
        ],
      },
      "Module 4": {
        title: "Final Project",
        lessons: [
          "Implementing a complete project using Ant Design",
          "Deploying your application",
          "Feedback and review session",
        ],
      },
    },
  },
];
export const PersonalRecommend: Item[] = [
  {
    id: 25,
    title: "Next JS- Complete Guide for Frontend Web Development",
    description: "Learn the fundamentals and more.",
    details: 'Learn JavaScript, jQuery, and Ajax from the start + Bonus Intro to Vue JS 3. Includes complete written course material!',
    price: 29.99,
    image: "/imgs/1700570310386.jfif",
    rating: 5.5,
    video:videoFour,
    requirements: "Basic understanding of JavaScript and React is encouraged.",
    learningContent: [
      "Understanding the basics of Next.js",
      "Setting up a Next.js project",
      "Static site generation vs. server-side rendering",
      "API routes in Next.js",
      "Deploying Next.js applications",
    ],
    fullDescription: "This course provides a comprehensive guide to mastering Next.js for frontend development, focusing on the latest features and best practices.",
    courseContent: {
      "Module 1": {
        title: "Introduction to Next.js",
        lessons: [
          "What is Next.js?",
          "Getting started with React",
          "Setting up your first Next.js application",
        ],
      },
      "Module 2": {
        title: "Pages and Routing",
        lessons: [
          "Dynamic routing in Next.js",
          "Customizing the Next.js router",
          "Implementing navigation without refreshing",
        ],
      },
      "Module 3": {
        title: "Building APIs",
        lessons: [
          "Creating API routes in Next.js",
          "Fetching data from APIs",
          "Integrating external APIs",
        ],
      },
      "Module 4": {
        title: "Deployment and Optimization",
        lessons: [
          "Optimizing Next.js applications for performance",
          "Deploying on Vercel",
          "Using analytics to improve performance",
        ],
      },
    },
  },
  {
    id: 26,
    title: "Complete NextJS Developer : React Framework Course",
    description: "An in-depth course.",
    details: 'Learn how to utilize Next.js for building full-stack applications with minimal setup.',
    price: 49.99,
    image: "/imgs/65645bdc4978698bfab1e0c6_next js libraries.png",
    rating: 3.8,
    video:videoThree,
    requirements: "Basic understanding of JavaScript and React is required.",
    learningContent: [
      "Creating server-side rendered applications",
      "Using Next.js for static site generation",
      "Integrating Redux with Next.js",
      "Building forms and handling state",
      "Authentication and authorization with Next.js",
    ],
    fullDescription: "This comprehensive course will take you from simple server-side applications to complex full-stack applications using Next.js.",
    courseContent: {
      "Module 1": {
        title: "Next.js Fundamentals",
        lessons: [
          "Introduction to Next.js",
          "Understanding SSR and SSG",
          "Creating your first app with Next.js",
        ],
      },
      "Module 2": {
        title: "Building Dynamic Applications",
        lessons: [
          "Fetching data with getStaticProps and getServerSideProps",
          "Creating API routes",
          "State management techniques",
        ],
      },
      "Module 3": {
        title: "Deploying Applications",
        lessons: [
          "Deployment strategies for Next.js applications",
          "Using Vercel for deployment",
          "Monitoring and maintaining applications in production",
        ],
      },
      "Module 4": {
        title: "Advanced Concepts",
        lessons: [
          "Implementing authentication",
          "Performance optimization techniques",
          "Using TypeScript with Next.js",
        ],
      },
    },
  },
  {
    id: 27,
    title: "How to Build Full Project Using NextJS",
    description: "Understand the basics of building user interfaces with React, along with component-based architecture.",
    details: 'Comprehensive course on building projects from scratch using Next.js.',
    price: 19.99,
    image: "/imgs/nextjs-logo.jpg",
    rating: 4.2,
    video:videoTwo,
    requirements: "Basic familiarity with React and JavaScript.",
    learningContent: [
      "Understanding project structure in Next.js",
      "Managing state in Next.js applications",
      "Using CSS frameworks with Next.js",
      "Building reusable components",
      "Testing Next.js applications",
    ],
    fullDescription: "This course teaches you how to build full-fledged applications using Next.js, focusing on practical implementations and real-world use cases.",
    courseContent: {
      "Module 1": {
        title: "Project Setup",
        lessons: [
          "Establishing the project structure",
          "Installing dependencies",
          "Building the initial application layout",
        ],
      },
      "Module 2": {
        title: "Routing and Navigation",
        lessons: [
          "Dynamic routing in Next.js",
          "Creating custom routes",
          "Implementing client-side navigation",
        ],
      },
      "Module 3": {
        title: "Working with APIs",
        lessons: [
          "Fetching data with Next.js",
          "Creating your own API endpoints",
          "Handling asynchronous data loading",
        ],
      },
      "Module 4": {
        title: "Finalizing the Project",
        lessons: [
          "Testing and debugging the application",
          "Preparing for deployment",
          "Best practices for Next.js projects",
        ],
      },
    },
  },
  {
    id: 28,
    title: "The Complete 2020 Fullstack Web Developer Course",
    description: "Explore essential CSS techniques and how to build beautiful, responsive layouts.",
    details: 'A comprehensive guide to full-stack development using Next.js and related technologies.',
    price: 39.99,
    image: "/imgs/Difference-Between-Next.js-and-React-1400x700.jpg.webp",
    rating: 4.8,
    video:videoOne,
    requirements: "Familiarity with JavaScript and some knowledge of CSS.",
    learningContent: [
      "Full-stack development principles",
      "Best practices for RESTful APIs",
      "Integrating databases with Next.js applications",
      "Building scalable frontend applications",
      "Deploying full-stack applications with Next.js",
    ],
    fullDescription: "This complete course covers everything you need to start a career as a full-stack developer using Next.js, combining frontend and backend knowledge.",
    courseContent: {
      "Module 1": {
        title: "Introduction to Full-Stack Development",
        lessons: [
          "Understanding full-stack architecture",
          "Setting up your development environment",
          "Learning about client-server interaction",
        ],
      },
      "Module 2": {
        title: "Frontend Development",
        lessons: [
          "Building user-friendly interfaces with Next.js",
          "Using state management libraries",
          "Integrating REST APIs into your app",
        ],
      },
      "Module 3": {
        title: "Backend Development",
        lessons: [
          "Setting up a Node.js server",
          "Creating RESTful services",
          "Interfacing with a database (e.g., MongoDB)",
        ],
      },
      "Module 4": {
        title: "Final Project",
        lessons: [
          "Building a complete full-stack application",
          "Deploying your application to the cloud",
          "Maintaining and scaling your application",
        ],
      },
    },
  },
];

export const TopCourses: Item[] = [
  {
    id: 29,
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript, including variables, control structures, functions, and more.",
    details:'Detailed exploration of ES6 features and best practices for writing clean, efficient JavaScript code.',
    price: 29.99,
    image: "/imgs/lms-learning-management-system-concept-table-keywords-letters-icons-colored-flat-vector-illustration-white-background-119251563.webp",
    rating: 5.5,
    video:videoTwo,
    requirements: "No prior programming experience is needed.",
    learningContent: [
      "Syntax and basic constructs",
      "Functions and scope",
      "Object-oriented programming in JavaScript",
      "Asynchronous JavaScript with callbacks and promises",
      "DOM manipulation",
    ],
    fullDescription: "This course is designed for beginners to learn JavaScript from scratch. It covers everything necessary for building interactive web applications.",
    courseContent: {
      "Module 1": {
        title: "Introduction to JavaScript",
        lessons: [
          "What is JavaScript?",
          "Setting up your development environment",
          "Basic programming concepts",
        ],
      },
      "Module 2": {
        title: "Working with Functions",
        lessons: [
          "Defining and calling functions",
          "Understanding scope and closures",
          "Arrow functions and their uses",
        ],
      },
      "Module 3": {
        title: "Objects and the DOM",
        lessons: [
          "Introduction to objects",
          "Manipulating the DOM with JavaScript",
          "Event handling in the DOM",
        ],
      },
      "Module 4": {
        title: "Asynchronous JavaScript",
        lessons: [
          "What is asynchronous programming?",
          "Using callbacks and promises",
          "Async/Await syntax and error handling",
        ],
      },
    },
  },
  {
    id: 30,
    title: "HTML Essentials",
    description: "An in-depth course on HTML5, covering everything from structure to design.",
    details: 'Master the foundational elements of web development, including semantic markup and accessibility.',
    price: 49.99,
    image: "/imgs/HTML5_logo_and_wordmark.svg.png",
    rating: 3.8,
    video:videoThree,
    requirements: "Basic understanding of web technologies is beneficial.",
    learningContent: [
      "Understanding HTML structure",
      "Working with forms and inputs",
      "Implementing multimedia elements",
      "Best practices for semantic HTML",
      "Accessibility in HTML documents",
    ],
    fullDescription: "This course provides a thorough introduction to HTML5, from basic syntax to advanced concepts such as accessibility and forms.",
    courseContent: {
      "Module 1": {
        title: "Getting Started with HTML",
        lessons: [
          "Introduction to HTML and its role in web development",
          "Basic HTML tags and structure",
          "Creating your first webpage",
        ],
      },
      "Module 2": {
        title: "Forms and Input Elements",
        lessons: [
          "Creating forms for user input",
          "Different input types and their functionalities",
          "Validation techniques for forms",
        ],
      },
      "Module 3": {
        title: "Multimedia in HTML",
        lessons: [
          "Using audio and video tags",
          "Embedding multimedia from external sources",
          "Accessibility considerations for multimedia",
        ],
      },
      "Module 4": {
        title: "Advancing Your HTML Skills",
        lessons: [
          "Creating accessible websites",
          "Best practices for HTML5",
          "Working with APIs in HTML",
        ],
      },
    },
  },
  {
    id: 31,
    title: "Responsive Pretty UI",
    description: "Understand the basics of building user interfaces with React, along with component-based architecture.",
    details: 'Learn how to build modern, responsive, and attractive web interfaces using React and CSS.',
    price: 19.99,
    image: "/imgs/mui-react-component-library.png",
    rating: 4.2,
    video:videoOne,
    requirements: "Basic understanding of HTML and CSS is helpful.",
    learningContent: [
      "Principles of responsive design",
      "Setting up a React project",
      "Using CSS frameworks and libraries",
      "Hands-on projects to apply your skills",
      "Optimizing UI for different devices",
    ],
    fullDescription: "This course covers the principles of responsive UI design focusing on building beautiful interfaces with React and modern CSS techniques.",
    courseContent: {
      "Module 1": {
        title: "Introduction to React",
        lessons: [
          "What is React and why use it?",
          "Getting started with React environment setup",
          "Understanding JSX syntax",
        ],
      },
      "Module 2": {
        title: "Styling in React",
        lessons: [
          "Using inline styles",
          "CSS modules and styled-components",
          "Responsive design techniques",
        ],
      },
      "Module 3": {
        title: "Building UI Components",
        lessons: [
          "Lifecycles of React components",
          "State management in functional components",
          "Creating reusable components",
        ],
      },
      "Module 4": {
        title: "Final Project",
        lessons: [
          "Designing a complete responsive application",
          "Deploying your application to the web",
          "Reviewing your project and getting feedback",
        ],
      },
    },
  },
  {
    id: 32,
    title: "CSS Basics",
    description: "Explore essential CSS techniques and how to build beautiful, responsive layouts.",
    details: 'Learn CSS fundamentals and how to implement them in various web projects.',
    price: 39.99,
    video:videoTwo,
    image: "/imgs/avee3ca8b.webp",
    rating: 4.8,
    requirements: "No prior CSS experience is required; however, familiarity with HTML is recommended.",
    learningContent: [
      "CSS syntax and the box model",
      "Working with flexbox and grid",
      "Responsive design principles",
      "CSS animations and transitions",
      "Debugging CSS in web browsers",
    ],
    fullDescription: "This course provides a deep dive into CSS, tailored for those looking to enhance their web development skills and create visually stunning websites.",
    courseContent: {
      "Module 1": {
        title: "Introduction to CSS",
        lessons: [
          "What is CSS?",
          "CSS selectors and specificity",
          "Inline, internal, and external styles",
        ],
      },
      "Module 2": {
        title: "Flexbox and Grid",
        lessons: [
          "Using Flexbox for layouts",
          "Understanding CSS grid layout",
          "Building responsive layouts with CSS",
        ],
      },
      "Module 3": {
        title: "Enhancing CSS with Animations",
        lessons: [
          "Adding transitions and animations",
          "Using keyframes for CSS animations",
          "Performance considerations for animations",
        ],
      },
      "Module 4": {
        title: "Final Project",
        lessons: [
          "Creating a responsive website from scratch",
          "Implementing best practices in CSS",
          "Presenting your project to the class",
        ],
      },
    },
  },
];
