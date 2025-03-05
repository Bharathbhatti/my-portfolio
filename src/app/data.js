/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Bookwise",
    description: "Modern library management system",
    tools:"Nextjs,TypeScript,TailwindCss,PostgreSQL,Upstash(Redis)",
    githubLink:"https://github.com/Bharathbhatti/university-library-bhatti",
    demoLink: "https://university-library-bhatti.vercel.app/",
  },
  {
    id: 2,
    name: "ShopperzKart",
    description: "Ecommerce Website",
    tools:"Nextjs,TypeScript,Next-Auth,Stripe",
    githubLink:"https://github.com/Bharathbhatti/ecommerce_website",
    demoLink: "https://shopperzkart.netlify.app/",
  },
  {
    id: 3,
    name: "Crypto Price Tracker",
    description: "A tool to track Crypto prices",
    tools:"React,JavaScript,CoinGecko API,React Google Charts",
    githubLink:"https://github.com/Bharathbhatti/CryptoApi",
    demoLink: "https://crypto-place-gamma.vercel.app/",
  },
  {
    id: 4,
    name: "Bharath-Portfolio",
    description: "My 3D Portfolio",
    tools:"Threejs,Nextjs,FramerMotion,Emailjs",
    githubLink:"https://github.com/Bharathbhatti/My-3D-Portfolio",
    demoLink: "https://bharathbn-portfolio.netlify.app/",
  },
  
  
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Bharathbhatti",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/bharath-b-n-bb272021b/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "LeetCode",
    link: "https://leetcode.com/u/BHARATH_BN/",
    icon: "leetcode",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Bharath BN-Resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


