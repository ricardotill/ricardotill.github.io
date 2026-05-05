import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Ricardo Tillemans",
  initials: "RT",
  url: "https://ricardotill.nl",
  location: "Gouda, Zuid-Holland, Netherlands",
  locationLink: "https://www.google.com/maps/place/Gouda",
  description:
    "IT Engineer and System Architect at ABN AMRO Bank N.V. Passionate about building scalable systems and modern web applications.",
  summary:
    "I am currently working as a Software Engineer at ABN AMRO Hypotheken Groep. I am a precise, inquisitive, and ambitious professional, proven efficient with an ability to quickly learn and adapt to new frameworks and tools. My expertise spans across .NET, C#, Vue.js, and cloud technologies.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    volunteer: { order: 3, enabled: true, heading: "Volunteer Work" },
    education: { order: 4, enabled: true, heading: "Education" },
    certificates: { order: 5, enabled: true, heading: "Certificates" },
    skills: { order: 6, enabled: true, heading: "Skills" },
    projects: {
      order: 7, enabled: false,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "",
    },
    hackathons: {
      order: 9, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "",
    },
    photos: {
      order: 8, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 10, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? I prefer a LinkedIn message, but you can also send an e-mail or give me a call.",
    },
  },
  photos: [
    // { src: "/photos/photo1.jpg", alt: "Photo 1" },
  ],
  skills: [
    { name: "C#", icon: Csharp },
    { name: ".NET", icon: Icons.globe },
    { name: ".NET MAUI", icon: Icons.globe },
    { name: "Vue.js", icon: Icons.globe },
    { name: "Microsoft Azure", icon: Icons.globe },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Azure DevOps", icon: Icons.globe },
    { name: "Microservices", icon: Icons.globe },
    { name: "Java", icon: Java },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "SQL Server", icon: Icons.globe },
    { name: "Postgres", icon: Postgresql },
    { name: "Python", icon: Python },
    { name: "HTML5", icon: Icons.globe },
    { name: "CSS", icon: Icons.globe },
    { name: "SQL", icon: Icons.globe },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    // { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "me@ricardotill.nl",
    tel: "+316 316 851 88",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ricardotill",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ricardotill",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:me@ricardotill.nl",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      id: "abnamro-vast",
      company: "ABN AMRO Bank N.V.",
      href: "https://www.abnamro.nl",
      badges: ["Fulltime"],
      location: "Gouda, Netherlands",
      title: "IT Engineer | System Architect",
      logoUrl: "https://www.google.com/s2/favicons?domain=abnamro.nl&sz=128",
      start: "July 2023",
      end: undefined,
      description:
        "System Architect since April 2025. Working as a .NET Software Engineer specializing in Microservices, Azure, and Kubernetes. Responsible for designing and implementing scalable backend systems and modernizing the tech stack.",
    },
    {
      id: "abnamro-detavast",
      company: "ABN AMRO Bank N.V.",
      href: "https://www.abnamro.nl",
      badges: ["via Harvest"],
      location: "Gouda, Netherlands",
      title: "IT Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=abnamro.nl&sz=128",
      start: "July 2022",
      end: "July 2023",
      description:
        "Fullstack Software Engineer working on mortgage systems via a Detavast construction offered by Harvest. Developed and maintained robust financial applications.",
    },
    {
      id: "harvest",
      company: "Harvest",
      href: "https://harvest.nl",
      badges: [],
      location: "Netherlands",
      title: "Softwareconsultant",
      logoUrl: "https://www.google.com/s2/favicons?domain=harvest.nl&sz=128",
      start: "July 2022",
      end: "July 2023",
      description:
        "Participated in the Talent-Incubator program and was seconded to ABN AMRO Hypotheken to work on critical software infrastructure.",
    },
    {
      id: "afas-software",
      company: "AFAS Software",
      href: "https://www.afas.nl",
      badges: ["Internship"],
      location: "Leusden, Utrecht, Netherlands",
      title: "Software Developer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=afas.nl&sz=128",
      start: "February 2022",
      end: "June 2022",
      description:
        "Developed synchronization functionality for the Products-Services Catalog, improving data consistency across internal platforms.",
    },
    {
      id: "webroots",
      company: "Webroots.nl",
      href: "https://webroots.nl",
      badges: ["Parttime"],
      location: "Gouda, Zuid-Holland, Netherlands",
      title: "Webdeveloper",
      logoUrl: "https://www.google.com/s2/favicons?domain=webroots.nl&sz=128",
      start: "August 2018",
      end: "February 2022",
      description:
        "Fullstack development for startups and e-commerce platforms. Focused on frontend and backend performance and user experience.",
    },
    {
      id: "solviteers",
      company: "Solviteers",
      href: "https://www.solviteers.nl",
      badges: ["Internship"],
      location: "Houten, Utrecht, Netherlands",
      title: "Software Development Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=solviteers.nl&sz=128",
      start: "March 2021",
      end: "August 2021",
      description:
        "Implemented synchronization between the WIZportaal system and external services, enhancing integration capabilities.",
    },
  ],
  education: [
    {
      school: "Hogeschool Utrecht",
      href: "https://www.hu.nl",
      degree: "Bachelor of Science - BSc, HBO-ICT (Specialisation Backend Development)",
      logoUrl: "https://www.google.com/s2/favicons?domain=hu.nl&sz=128",
      start: "2017",
      end: "2022",
    },
    {
      school: "CSG De Goudse Waarden",
      href: "https://www.degoudsewaarden.nl",
      degree: "HAVO",
      logoUrl: "https://www.google.com/s2/favicons?domain=degoudsewaarden.nl&sz=128",
      start: "2012",
      end: "2017",
    },
  ],
  volunteer: [
    {
      organization: "Scouting Nederland",
      href: "https://scouting.nl",
      location: "Scouting Wilo, Gouda",
      title: "Teamleader Explorers",
      logoUrl: "https://www.google.com/s2/favicons?domain=scouting.nl&sz=128",
      start: "July 2023",
      end: undefined,
      description: "Leading and mentoring explorers (ages 15-18) in various scouting activities and personal development.",
    },
    {
      organization: "Scouting Nederland",
      href: "https://scouting.nl",
      location: "Scouting Wilo, Gouda",
      title: "Teamleader Scouts",
      logoUrl: "https://www.google.com/s2/favicons?domain=scouting.nl&sz=128",
      start: "September 2020",
      end: "September 2023",
      description: "Responsible for the scouts group (ages 11-15), organizing weekly meetings and annual camps.",
    },
    {
      organization: "Scouting Nederland",
      href: "https://scouting.nl",
      location: "Scouting Wilo, Gouda",
      title: "Leader Scouts",
      logoUrl: "https://www.google.com/s2/favicons?domain=scouting.nl&sz=128",
      start: "September 2018",
      end: "September 2023",
      description: "Assisting in leading the scouts group and organizing outdoor activities.",
    },
    {
      organization: "Scouting Nederland",
      href: "https://scouting.nl",
      location: "Scouting Wilo, Gouda",
      title: "Leader Welps",
      logoUrl: "https://www.google.com/s2/favicons?domain=scouting.nl&sz=128",
      start: "April 2016",
      end: "September 2018",
      description: "Organizing playful and educational activities for welps (ages 7-11).",
    },
  ],
  certificates: [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      href: "https://learn.microsoft.com/en-us/users/ricardotill/credentials/c1c5fa89e43c330b",
      logoUrl: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      issued: "September 2023",
    },
    {
      name: "Professional Scrum Master™ I (PSM I)",
      issuer: "Scrum.org",
      href: "https://www.credly.com/badges/cab2e0a9-f70b-457d-9925-1ac8f1478786",
      logoUrl: "https://www.google.com/s2/favicons?domain=scrum.org&sz=128",
      issued: "June 2023",
    },
    {
      name: "Harvest Technical Post-Master Program - Software",
      issuer: "Harvest",
      href: "https://www.credly.com/badges/d5306d64-b71d-484f-9cd8-1cdbed0cf2aa",
      logoUrl: "https://www.google.com/s2/favicons?domain=harvest.nl&sz=128",
      issued: "August 2022",
    },
  ],
  projects: [],
  hackathons: [],
} as const;
