/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tarun's Portfolio",
  description:
    "A results-driven and technically adept full-stack developer with around 5 years of hands-on experience in designing, implementing, and overseeing software programs",
  og: {
    title: "Tarun Jandhyala Portfolio",
    type: "website",
    url: "http://tarunjandhyala.com/",
  },
};

//Home Page
const greeting = {
  title: "Tarun Jandhyala",
  logo_name: "TarunJandhyala",
  nickname: "jvsTarun",
  subTitle:
    "A results-driven and technically adept full-stack developer with around 5 years of hands-on experience in designing, implementing, and overseeing software programs.",
  resumeLink:
    "https://drive.google.com/file/d/19Qzzjdimq7Mou8qCJ-9KrieGNlFPl2IE/view?usp=drive_link",
  portfolio_repository: "https://github.com/Jvstarun25/ImTarun.github.io",
  githubProfile: "https://github.com/Jvstarun25",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Jvstarun25",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/j-v-s-tarun1997",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:jvstarun27@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux, Angular, ensuring optimal user experience and interactivity",
        "⚡ Contribute to full-stack web applications by seamlessly integrating frontend components with robust backend services and APIs.",
        "⚡ Manage databases using SQL (Oracle SQL, MySQL, Postgres) and NoSQL databases, optimizing queries for efficient data retrieval across frontend and backend operations",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          imageSrc: "java.png"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Springboot",
          imageSrc: "springboot.png"
        },
        {
          skillName: "Oracle",
          imageSrc: "oracle.png"
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "fa-database",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hands-on experience with various cloud platforms",
        "⚡ Managing website hosting and database integration on virtual machine instances",
        "⚡ Leveraging cloud services for efficient resource management and scalability",
        "⚡ Establishing streaming data pipelines between databases and servers on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Blockchain Technology",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Implemented a web client to handle Change Requests Member Management for the CBA",
        "⚡ Responsible for integrating a secure wallet system into the blockchain application, which involves handling cryptographic keys and managing transactions securely",
        "⚡ Enhance data security and privacy by providing a decentralized and encrypted data storage solution, reducing the risk of data breaches and unauthorized access",
      ],
      softwareSkills: [
        {
          skillName: "Blockchain Explorer",
          imageSrc: "blockchain.png",
        },
        {
          skillName: "Remix",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Hyperledger Fabrics",
          imageSrc: "hyper.png",
        },
        {
          skillName: "MetaMask",
          imageSrc: "metamask.png",
        },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        {
          skillName: "Truffle Suite",
          imageSrc: "truffle.png",
        },
      ],
    },
    // {
    //   title: "Blockchain",
    //   fileName: "BlockchainImg",
    //   skills: [
    //     "⚡ Implemented a web client to handle Change Requests Member Management for the CBA",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: []
};

const degrees = {
  degrees: [
    {
      title: "University of Houston Clear Lake, Texas",
      subtitle: "M.S. in Computer Science",
      logo_path: "uhcl.png",
      alt_name: "University of Houston Clear Lake",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ I have enrolled in a diverse range of computer science courses, covering areas such as Image Processing, Concurrent Programming, Data Science and Data Structures",
        "⚡ Developed a blockchain-based web application with Tietronix, potentially under consideration for NASA, focusing on Change Requests Member Management CBA using Angular and Express",
        "⚡ During my time at university, I was also associated with International Student's Association. I was actively organizing cultural events, promoting cultural exchange, providing support and assistance to fellow students",
      ],
      website_link: "https://www.uhcl.edu/",
    },
    {
      title: "Gandhi Institute of Technology and Management, Hyderabad",
      subtitle: "B.Tech, Electronics and Communications Engineering",
      logo_path: "gitam1.jpeg",
      alt_name: "GITAM",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have studied electronics and communication subjects like Analog & Digital Communication, Coding & Information Theory, Wireless Networking, and basic software engineering subjects like Data Structures, Algorithms, DBMS, Operating Systems",
        "⚡ Additionally, I have done courses on Full Stack Development, Data Science and Cloud Computing.",
        "⚡ I have received an award from the respected Dean for consistently being in the top 5% of students in college for academic performance.",
      ],
      website_link: "https://www.gitam.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "In my career, I've mastered JavaScript, Java, and Python, crafting cutting-edge web applications with React.js, Angular, and Spring MVC. I've led innovative projects and seamlessly integrated APIs. With expertise in cloud deployment on AWS and database management. I deliver solutions that combine technical excellence with creativity.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Sr. React UI Developer",
          company: "MissionSquare Retirement",
          company_url: "https://www.missionsq.org/",
          logo_path: "msr.jpeg",
          duration: "Jan 2023 - Present",
          location: "Washington D.C, USA",
          description:
            "Responsible for crafting cutting-edge user interfaces using React.js. Integrating frontend components with backend services, optimizing performance, and ensuring robust functionality through comprehensive testing. Deployed applications on AWS for scalability, enhancing the organization's technical processes and user experience",
          color: "#000000",
        },
        {
          title: "Java Full Stack Developer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs1.jpeg",
          duration: "Oct 2020 - Aug 2021",
          location: "Hyderabad, India",
          description:
            "I contributed to the development lifecycle of web applications, notably for clients like Archer Daniels Midland Corporation. My role encompassed frontend and backend development using technologies like Java, Spring, Hibernate, React.js, JavaScript, TypeScript, HTML, and CSS, ensuring seamless integration and optimal user experience. Engaging in Agile SCRUM methodologies, I collaborated with clients, deployed applications, and conducted testing to deliver reliable, high-quality solutions that met business requirements effectively",
          color: "#0879bf",
        },
        {
          title: "JavaScript Full Stack Developer",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/in/en",
          logo_path: "cognizant.jpeg",
          duration: "Oct 2018- Aug 2020",
          location: "Chennai, India",
          description:
            "At Cognizant, I served as a JavaScript Full Stack Developer, spearheading the development of web applications using frameworks like Angular. I optimized the application's performance through code refactoring and implemented responsive design principles for enhanced user experience. Additionally, I played a pivotal role in introducing and streamlining internal operations through the development of innovative applications like the MySpx online Sales Trane Application",
          color: "#9b1578",
        },
        {
          title: "Web Developer",
          company: "SZ Enterprise Private Limited",
          company_url: "",
          logo_path: "sez.jpeg",
          duration: "Apr 2018 - Sep 2018",
          location: "Hyderabad, India",
          description:
            "At SZ Enterprise Private Limited, I functioned as a Web Developer, focusing on interactive user interface design using vanilla JavaScript and asynchronous programming techniques. I implemented optimized Algorithms and Data Structures to enhance application performance while actively contributing to the development of dynamic web applications. My role also involved collaborating with the team to ensure the seamless integration of frontend components and efficient deployment of web solutions.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Fullstack Developer",
          company: "Tietronix Inc.(Project)",
          company_url: "https://www.tietronix.com/",
          logo_path: "teitronix.jpeg",
          duration: "May 2022 - Dec 2022",
          location: "Texas, USA",
          description:
            "Used Blockchain as the backbone for the technical solutions to store the Model Based System Engineering models securely in a distributive manner while enabling a single, real-time source of truth for the system models to eliminate and minimize several sources of errors and inefficiencies.",
          color: "#000000",
        },
        {
          title: "Graduate Engineer Trainee",
          company: "ECIL",
          company_url: "https://www.ecil.co.in/",
          logo_path: "ecil.jpeg",
          duration: "Jan 2018 - Apr 2018",
          location: "Hyderabad, India",
          description: "Developing and maintaining software applications, integrating new technologies into existing systems, and collaborating with senior engineers on various projects. You would also be tasked with testing and debugging software to ensure its reliability, as well as documenting development processes and best practices to maintain high standards in software creation. This role provides a comprehensive experience in both technical and professional skill development within a dynamic industry setting.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "TODO: Volunteerships",
      // experiences: [
      //   {
      //     title: "Google Explore ML Facilitator",
      //     company: "Google",
      //     company_url: "https://about.google/",
      //     logo_path: "google_logo.png",
      //     duration: "June 2019 - April 2020",
      //     location: "Hyderabad, Telangana",
      //     description:
      //       "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
      //     color: "#4285F4",
      //   },
      //   {
      //     title: "Microsoft Student Partner",
      //     company: "Microsoft",
      //     company_url: "https://www.microsoft.com/",
      //     logo_path: "microsoft_logo.png",
      //     duration: "Aug 2019 - May 2020",
      //     location: "Hyderabad, Telangana",
      //     description:
      //       "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
      //     color: "#D83B01",
      //   },
      //   {
      //     title: "Mozilla Campus Captain",
      //     company: "Mozilla",
      //     company_url: "https://www.mozilla.org/",
      //     logo_path: "mozilla_logo.png",
      //     duration: "Oct 2019 - May 2020",
      //     location: "Kurnool, Andhra Pradesh",
      //     description:
      //       "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
      //     color: "#000000",
      //   },
      //   {
      //     title: "Developer Students Club Member",
      //     company: "DSC IIITDM Kurnool",
      //     company_url:
      //       "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
      //     logo_path: "dsc_logo.png",
      //     duration: "Jan 2018 - May 2020",
      //     location: "Kurnool, Andhra Pradesh",
      //     description:
      //       "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
      //     color: "#0C9D58",
      //   },
      //   {
      //     title: "Developer Program Member",
      //     company: "Github",
      //     company_url: "https://github.com/",
      //     logo_path: "github_logo.png",
      //     duration: "July 2019 - PRESENT",
      //     location: "Work From Home",
      //     description:
      //       "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
      //     color: "#181717",
      //   },
      // ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I leverage a wide array of cutting-edge technology tools in my projects, specializing in creating and deploying frontend applications to web platforms using cloud infrastructure",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_tarun.jpeg",
    description:
      "Thank you for visiting my portfolio! I'm excited to connect and discuss how I can contribute to your projects. Whether you have questions, collaboration opportunities, or just want to say hello, feel free to reach out. I'm looking forward to hearing from you!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Fairfax, Virginia, USA",
    locality: "Virginia",
    country: "USA",
    region: "Virginia",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/6srAyEGT41PMA8Jp9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
