import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    upt,
    seal,
    balitas,
    phicos,
    adonisjs,
    aws,
    codeigniter,
    java,
    kotlin,
    laravel,
    php,
    python,
    springboot,
    pytorch,
    sdsurakarta,
    balitasweb,
    covid19,
    enderest,
    sipp,
    diffbatik
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Mobile Developer",
      icon: backend,
    },
    {
      title: "AI Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Code Igniter",
      icon: codeigniter,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Adonis JS",
      icon: adonisjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "AWS",
      icon: aws,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "UPT. TIK UNS",
      icon: upt,
      iconBg: "#282828",
      date: "July 2019 - July 2020",
      points: [
        "Help build a website in UNS with the Laravel framework.",
        "Assist in device maintenance at UPT TIK UNS.",
        "Become part of the UPT TIK UNS helpdesk team.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "PT. Phicos Cipta Media",
      icon: phicos,
      iconBg: "#ffffff",
      date: "Jan 2021 - March 2021",
      points: [
        "Designing the front‑end of the Surakarta SD Distribution website with Leafet.js.", 
        "Create a cashier website for the org with the CodeIgniter framework.", 
        "Create an admin dashboard on the Surakarta Covid‑19 Info website with the CodeIgniter framework.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Balai Penelitian Tanaman Pemanis dan Serat",
      icon: balitas,
      iconBg: "#ffffff",
      date: "July 2022 - Aug 2022",
      points: [
        "Lead the website development process.", 
        "Build a website for this institute with Laravel Framework.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Social Economic Accelerator Lab",
      icon: seal,
      iconBg: "#ffffff",
      date: "Aug 2022 - Dec 2022",
      points: [
        "Developing SIPP apps for DLH Batu.", 
        "Working using Agile Scrum method.", 
        "Collaborate with other felds such as Systems analysts, UI/UX Designers, and Front End Developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Online Store Enderest",
      description:
        "A Web-based platform to help users by clothes with Midtrans payments, RajaOngkir shipping, WhatsApp alerts. Seamless shopping experience for trendy fashion.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "codeigniter",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: enderest,
      source_code_link: "https://github.com/octadion/toko-online-ci",
    },
    {
      name: "SD Surakarta Distribution",
      description:
        "Web-based platform that allows users to use an interactive school map to explore schools, location, info, and news for enhanced educational insights and updates.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "codeigniter",
          color: "green-text-gradient",
        },
        {
          name: "leafletjs",
          color: "pink-text-gradient",
        },
      ],
      image: sdsurakarta,
      source_code_link: "https://github.com/",
    },
    {
      name: "Info Covid-19 Surakarta",
      description:
        "Web application that enables users to get stay informed with updates, news, and vital details about Covid-19. Empowering you with accurate pandemic information.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "codeigniter",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: covid19,
      source_code_link: "https://github.com/",
    },
    {
      name: "Balittas Website",
      description:
        "A Web-based platform that allows users to explore insights, news, and services about Balittas. Empowering knowledge through reliable information and efficient services.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: balitasweb,
      source_code_link: "https://github.com/octadion/balittas-laravel",
    },
    {
      name: "SIPP Apps",
      description:
        "A Platform about Environmental Management to identify and monitor environmental capacity growth with monitoring, and assessment for DLH Batu.",
      tags: [
        {
          name: "adonisjs",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: sipp,
      source_code_link: "https://sipp-dev.vercel.app/",
    },
    {
      name: "Diffbatik Model",
      description:
        "Generative AI model to synthesis new batik patterns with Diffusion-Generative Adversarial Networks. Explore creativity with AI-driven designs.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "green-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
      ],
      image: diffbatik,
      source_code_link: "https://github.com/octadion/diffusion-stylegan2-ada-pytorch",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };