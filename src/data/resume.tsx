import { Icons } from "@/components/icons";
import { FileText, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Sai Ranganath",
  initials: "SR",
  url: "https://sairanganath.github.io/portfolio/",
  location: "United States",
  locationLink: "https://maps.app.goo.gl/",
  description:
    "Senior Software Engineer & Technical Lead specializing in financial technology, credit card platforms, and enterprise-scale solutions. Passionate about mentorship, innovation, and delivering impactful products.",
  summary:
    "I'm a seasoned software engineering leader with deep expertise in financial technology—particularly credit card platforms and banking systems. I thrive at the intersection of technical excellence and team collaboration, having led cross-functional teams to deliver complex products like Small Business Credit Cards and the Choice Credit Cards initiative. My colleagues recognize me for my detailed solutioning skills, system-level thinking, and commitment to mentoring the next generation of engineers. Beyond shipping great software, I focus on building high-performing teams grounded in trust, clarity, and shared purpose.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "AWS",
    "Kubernetes",
    "CI/CD",
    "Credit Card Platforms",
    "Financial Technology",
    "System Design",
    "Technical Leadership",
    "Agile / Scrum",
    "SQL",
    "DevOps",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "#",
      icon: FileText,
      label: "Resume",
    },
  ],
  contact: {
    email: "sairanganath@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sairanganath",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sairanganath/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sairanganath@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  testimonials: [
    {
      name: "Mukta Sharma",
      title: "Senior Manager",
      feedback:
        "Sai has done exceptional work on the Small Business Credit Card project and several other initiatives. His ability to understand complex requirements and translate them into robust technical solutions is outstanding. He consistently delivers high-quality work and goes above and beyond to ensure project success.",
      highlight: "Exceptional work on Small Business Credit Card",
      initials: "MS",
    },
    {
      name: "Sam Roychoudhury",
      title: "Principal Engineer",
      feedback:
        "Sai demonstrates outstanding detailed solutioning skills and a deep understanding of system-level interactions. His ability to think through complex architectural decisions while keeping the broader ecosystem in mind is truly impressive. He is a go-to person for technically challenging problems.",
      highlight: "Detailed solutioning & system-level expertise",
      initials: "SRC",
    },
    {
      name: "Atul Kumar",
      title: "Engineering Manager",
      feedback:
        "Sai has shown exemplary leadership and mentorship throughout his time on our team. He consistently elevates those around him, sharing knowledge generously and guiding junior engineers with patience and clarity. His technical acumen combined with his people skills makes him a rare talent.",
      highlight: "Leadership & mentorship excellence",
      initials: "AK",
    },
    {
      name: "Anne-Marie Twomey",
      title: "Director of Engineering",
      feedback:
        "Sai's dev leadership was instrumental in the successful delivery of the Choice Credit Cards project. He kept the team focused, resolved blockers proactively, and maintained a high standard of technical quality throughout. His ability to bridge business goals with technical execution is exceptional.",
      highlight: "Dev leadership on Choice Credit Cards project",
      initials: "AT",
    },
    {
      name: "Suresh Kumar Galla",
      title: "Technical Lead",
      feedback:
        "Working alongside Sai has been a pleasure. He brings great flexibility and a collaborative spirit to every team he's part of. He is always willing to help teammates, adapt to changing requirements, and contribute beyond his defined scope. His positive attitude elevates the whole team.",
      highlight: "Great team collaboration & flexibility",
      initials: "SG",
    },
    {
      name: "Bhabani Shankar Nayak",
      title: "Senior Manager",
      feedback:
        "Sai consistently demonstrates strong technical capabilities and a willingness to grow. His engagement with management responsibilities has been growing steadily, and I look forward to seeing him continue to develop his leadership presence in addition to his already excellent technical skills.",
      highlight: "Growing technical & management capabilities",
      initials: "BN",
    },
  ],

  awards: [
    {
      title: "Milestone CEO eCard",
      date: "03/08/2024",
      description:
        "Recognized by the CEO for outstanding contributions and milestone achievements. This prestigious eCard reflects exceptional performance and commitment to the company's mission.",
      icon: "🏆",
      category: "CEO Recognition",
    },
    {
      title: "Living Our Company Expectations eCard",
      date: "11/22/2023",
      description:
        "Awarded for exemplifying the company's core values and expectations in day-to-day work. This recognition highlights consistent demonstration of cultural values.",
      icon: "⭐",
      category: "Company Values",
    },
    {
      title: "Team Spotlight Award",
      date: "10/05/2023",
      description:
        "Selected for the Team Spotlight Award, earning 8,000 recognition points for outstanding team contributions, collaboration, and delivering exceptional results.",
      icon: "🌟",
      category: "Team Achievement",
      points: "8,000 Points",
    },
    {
      title: "Living Our Company Expectations eCard",
      date: "04/18/2023",
      description:
        "Awarded for consistently living and embodying the company's expectations and values, inspiring others through actions and attitude.",
      icon: "⭐",
      category: "Company Values",
    },
    {
      title: "Non-Milestone Anniversary Award",
      date: "03/08/2023",
      description:
        "Recognized for continued dedication and service to the company. This award acknowledges loyalty and sustained contributions over time.",
      icon: "🎖️",
      category: "Service Recognition",
    },
  ],

  work: [
    {
      company: "Financial Technology Company",
      href: "#",
      badges: ["Full-Time"],
      location: "United States",
      title: "Senior Software Engineer / Technical Lead",
      logoUrl: "/ib.png",
      start: "2020",
      end: undefined,
      description:
        "Led development of credit card platforms including Small Business Credit Cards and Choice Credit Cards. Architected microservices-based solutions, mentored junior engineers, and drove cross-functional collaboration to deliver complex financial products on schedule.",
    },
  ],

  education: [
    {
      school: "University",
      href: "#",
      degree: "Bachelor of Engineering / Computer Science",
      logoUrl: "/laurier.png",
      start: "2010",
      end: "2014",
    },
  ],

  projects: [
    {
      title: "Small Business Credit Card Platform",
      href: "#",
      dates: "2022 - 2023",
      active: true,
      description:
        "Led end-to-end development of the Small Business Credit Card platform, enabling seamless card issuance, account management, and transaction processing for small business customers.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "AWS",
        "Kubernetes",
        "REST APIs",
        "SQL",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Choice Credit Cards Initiative",
      href: "#",
      dates: "2023 - 2024",
      active: true,
      description:
        "Served as dev lead for the Choice Credit Cards project, overseeing architecture, engineering execution, and cross-team coordination to deliver a next-generation credit card product.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "AWS",
        "CI/CD",
        "Agile",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [],
} as const;
