import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BiSolidGraduation } from "react-icons/bi";
import swiftWheelsImg from "@/public/swiftWheels.png";
import aplusEssayImg from "@/public/aplusEssay.png";
import emojimamaImg from "@/public/emojimama.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Account Servicing Executive",
    location: "Hong Kong",
    company: "New iMedia Solutions ",
    description: [
      {
        duties:
          "Accounts Served: B.M.W Concessionaires (H.K.), Blue Girl Beer, Crocs, Columbia, Cath Kidston, UGG, Dell Technologies.",
      },
      {
        duties: `Managed and nurtured a diverse portfolio of 20+ accounts across various industries including Retails, Beauty, Skincare, Finance,
          Technology, Education, Logistics sectors.`,
      },
      {
        duties:
          "Revamped Watson’s Wine and Fortress apps, modernizing the interface, resulting in a 20% increase in user retention.",
      },
      {
        duties: `Formulated strategic plans and executed various advertising campaigns with an annual budget of over CAD 3M and an average of CAD
          250k per month.`,
      },
      {
        duties: `Conducted comprehensive data analysis to optimize campaign performance for clients, resulting in a remarkable 300% increase in the
          conversion rate of landing pages across the company. Moreover, achieved an impressive 10X ROAS for both online and offline events.`,
      },
      {
        duties: `Engaged in meticulous planning and thorough evaluation of clients' social media profiles, covering areas such as web design, SEO, Copy
          writing and Google Analytics. Capitalized on user behavior insights and market trends to steer strategic decision-making.`,
      },
    ],
    icon: React.createElement(CgWorkAlt),
    date: "03-2021 - 03-2022",
  },
  {
    title: "MicroMaster in A.I. & Programming",
    location: "Hong Kong",
    company: "Tecky Academy ",
    description: [
      {
        duties:
          "16-week intensive program designed to equip individuals from diverse backgrounds with the skills to become Full Stack Developers.",
      },
      {
        duties: `Web Fundamentals with JS: JavaScript, HTML, CSS, Data Structures & Algorithms.`,
      },
      {
        duties:
          "Web Server Programming: Node, Typescript, Express, PostgreSQL.",
      },
      {
        duties: `Backend & AI Development: Jest, Knex, DevOps, Python, Tensorflow.`,
      },
      {
        duties: `Frontend Development: React, React Native, Ionic, Redux, Docker`,
      },
    ],
    icon: React.createElement(BiSolidGraduation),
    date: "03-2022 - 07-2022",
  },
  {
    title: "Software Developer",
    location: "Hong Kong",
    company: "A.S Watson Group",
    description: [
      {
        duties: `Successfully developed and launched Watsons applications across 8 countries in App Store and Google Play
        (Malaysia, Philippines, Singapore, Taiwan, Hong Kong, Indonesia, Vietnam, and India), 
        securing an impressive 10 million+ downloads across diverse regions and platforms. contributing to monthly revenue of $1 billion.
      `,
      },
      {
        duties:
          "Leveraged React Native, Objective C, and Kotlin to ensure seamless cross-platform performance and exceptional user experiences.",
      },
      {
        duties:
          "Revamped Watson’s Wine and Fortress apps, modernizing the interface, resulting in a 20% increase in user retention.",
      },
      {
        duties:
          "Integrated multiple third-party systems with the escrow platform, including Alipay, PayMe by HSBC, LINE Pay, etc.",
      },
      {
        duties:
          "Engineered an efficient deployment process by refining and optimizing configuration YAML files",
      },
    ],
    icon: React.createElement(CgWorkAlt),
    date: "07-2022 - 07-2023",
  },
  {
    title: "Software Developer",
    location: "Hong Kong (Remote) - Freelance",
    company: "Playsmart",
    description: [
      {
        duties:
          "Crafted custom themes, templates, and plugins for precise project alignment, fostering scalability and innovation.",
      },
      {
        duties:
          "Set industry benchmarks with code quality, adhering to best practices for resilient and maintainable websites.",
      },
      {
        duties:
          "Pioneered WordPress advancements, driving cutting-edge solutions that elevated projects and workflows",
      },
      {
        duties:
          "Optimized for speed and SEO, translating into exceptional user experiences and remarkable organic growth.",
      },
      {
        duties:
          "Transformed complex project requirements into captivating web interfaces, enhancing engagement and satisfaction.",
      },
    ],
    icon: React.createElement(CgWorkAlt),
    date: "07-2023 - Current",
  },
  {
    title: "Digital Marketing and Software Developer",
    location: "Toronto, ON",
    company: "Caviar Centre",
    description: [
      {
        duties:
          "Led email marketing automation, boosting open rates by 64%, doubling orders, and increasing average order values by 138%.",
      },
      {
        duties:
          "Directed a comprehensive website redesign that resonated with the audience, as evidenced by a surge in subscription rates of over 100%, achieving 1,280 new subscribers in a mere two weeks, signaling increased market engagement.",
      },
      {
        duties:
          "Utilized Google Analytics to dissect user behavior, reducing bounce rates by 25% through informed website enhancements.",
      },
      {
        duties:
          "Revamped Google Ads campaigns, achieving a commendable 90% average increase in optimization scores and a 242% rise in conversion rates from 3.8% to 13% through the strategic use of Performance Max and Dynamic Search Ads, coupled with a Maximum Conversion bidding strategy—all while adeptly reallocating the existing budget based on performance metrics.",
      },
      {
        duties:
          "Built pages, templates, troubleshoot issues, develop workarounds, recommend design tweaks and UX enhancements, and find or enhance appropriate plugins to best display content.",
      },
      {
        duties:
          "Resolved complex technical issues impacting SEO performance, such as improving site speed and mobile responsiveness, which led to a 40% improvement in search engine rankings for key sections of the site.",
      },
      {
        duties:
          "Collaborated with cross-functional teams to refine content strategy, integrating SEO best practices and keyword research that improved page rankings for 80% of targeted keywords, significantly enhancing online presence and lead generation.",
      },
    ],
    icon: React.createElement(CgWorkAlt),
    date: "10-2023 - Current",
  },
] as const;

export const projectsData = [
  {
    title: "Swift Wheel",
    description:
      "The platform offers a convenient and user-friendly website where individuals can access a range of rental car services.",
    tags: ["React", "Next.js", "React ", "Tailwind", "Tailwind "],
    sourceCode: "https://github.com/KeenoLee/swift-wheels",
    liveDemo: "https://swift-wheels.vercel.app/",
    imageUrl: swiftWheelsImg,
  },
  {
    title: "A Plus Essay",
    description:
      "A mobile app that connects students to tutors for instant private learning sessions.",
    tags: [
      "React Native ",
      "React",
      "Typescript",
      "NativeBase",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "AWS EC2",
      "AWS S3",
    ],
    sourceCode: "https://github.com/KeenoLee/a-plus-essay",
    liveDemo: "",
    imageUrl: aplusEssayImg,
  },
  {
    title: "Emoiji Mama",
    description: `An AI mini-game project where the AI attempts to identify objects based on what it 'sees', helping locate the emoji 
      displayed in the real world using the camera on your phone or laptop. Have Fun!`,
    tags: [
      "Javascript",
      "Typescript",
      "Python",
      "YOLOv5",
      "Playwright",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "AWS EC2",
      "AWS S3",
    ],
    sourceCode: "https://github.com/KeenoLee/emoji-mama",
    liveDemo: "",
    imageUrl: emojimamaImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Three.js",
  "React Native ",
  "Flutter",
  "Objective-C",
  "Node",
  "Express",
  "Python",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "CI/CD",
  "DevOps",
  "Jest",
  "Unit Testing",
  "Tensorflow",
  "YOLOv5",
  "Firebase",
  "Fastlane",
  "AWS S3",
  "AWS EC2",
  "Git",
  "Jira",
  "Google Analytic ",
  "Google Tag Manager",
  "Google Ads",
  "Locker Studio",
  "SEMrush",
  "Arefs",
  "Hotjar",
  "Figma",
] as const;
