import { Icons } from "@/components/icons";
import { FileText, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sairanganath",
  initials: "SR",
  url: "https://sairanganath.github.io/portfolio/",
  location: "United States",
  locationLink: "https://maps.app.goo.gl/",
  description:
    "Senior Software Engineer & Tech Lead with expertise in financial technology, credit card systems, and cross-functional team leadership.",
  summary:
    "Experienced software engineer with a strong track record at Wells Fargo, leading development initiatives across Small Business Credit Card, Co-brand Credit Cards, Choice Credit Cards, and OSMP channel projects. Known for exceptional solutioning skills, system-level thinking, and empowering teams through mentorship. Recognized with multiple CEO eCards and Team Spotlight Awards for outstanding collaboration, delivery excellence, and driving impactful technical solutions.",  avatarUrl: "/me.jpeg",
  skills: [
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "SQL",
    "Cloud Architecture",
    "Agile/Scrum",
    "Technical Leadership",
    "System Design",
    "Credit Card Systems",
    "Financial Technology",
    "Team Mentorship",
    "DevOps",
    "CI/CD",
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
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:sairanganath@example.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Wells Fargo",
      href: "https://www.wellsfargo.com/",
      badges: ["Full-time"],
      location: "United States",
      title: "Senior Software Engineer & Tech Lead",
      logoUrl: "/wellsfargo.svg",
      start: "2021",
      end: undefined,
      description:
        "Led development initiatives across Small Business Credit Card, Co-brand Credit Cards, Choice Credit Cards, and OSMP channel projects. Delivered detailed technical solutioning, mentored junior engineers, and collaborated with cross-functional teams to drive successful project outcomes.",
    },
  ],
  education: [
    {
      school: "Bachelor of Engineering / Bachelor of Technology",
      href: "#",
      degree: "Computer Science & Engineering",
      logoUrl: "/ib.png",
      start: "2010",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Small Business Credit Card Platform",
      href: "#",
      dates: "2022 - Present",
      active: true,
      description:
        "Led development of the Small Business Credit Card platform at Wells Fargo, delivering comprehensive financial solutions for business customers with improved onboarding flows and enhanced credit management capabilities.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "SQL",
        "Cloud",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Choice Credit Cards System",
      href: "#",
      dates: "2023 - Present",
      active: true,
      description:
        "Spearheaded the development of the Choice Credit Cards system as a tech lead, working closely with cross-functional teams to architect and implement a scalable, high-performance credit card processing solution.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "CI/CD",
        "DevOps",
        "Agile",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "OSMP Channel Integration",
      href: "#",
      dates: "2022 - 2023",
      active: true,
      description:
        "Architected and implemented the OSMP channel integration, enabling seamless orchestration of credit card services across multiple product lines with improved reliability and reduced latency.",
      technologies: [
        "Java",
        "Microservices",
        "API Gateway",
        "System Design",
        "Integration",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Co-Brand Credit Cards Platform",
      href: "#",
      dates: "2021 - 2022",
      active: true,
      description:
        "Contributed to the Co-Brand Credit Cards platform, delivering robust backend services and collaborating closely with partner teams to ensure seamless integration and high-quality delivery.",
      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "SQL",
        "Agile",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
  testimonials: [
    {
      name: "Bhabani Shankar Nayak",
      title: "Manager",
      company: "Wells Fargo",
      initials: "BN",
      feedback:
        "Sairanganath has shown dedication and a willingness to grow. Areas like management skills and broader leadership responsibilities present great opportunities for further development. Looking forward to seeing continued progress.",
      imageUrl: "/testimonials/image-1.svg",
    },
    {
      name: "Mukta Sharma",
      title: "Senior Manager",
      company: "Wells Fargo",
      initials: "MS",
      feedback:
        "Exceptional work on the Small Business Credit Card project and multiple related initiatives. Sairanganath consistently delivers high-quality solutions and goes above and beyond to ensure project success. A true asset to the team.",
      imageUrl: "/testimonials/image-2.svg",
    },
    {
      name: "Suresh Kumar Galla",
      title: "Tech Lead",
      company: "Wells Fargo",
      initials: "SG",
      feedback:
        "Great team player with remarkable flexibility and collaborative spirit. Sairanganath adapts seamlessly to changing priorities and brings a positive energy to every project, making cross-team collaboration genuinely effective.",
      imageUrl: "/testimonials/image-3.svg",
    },
    {
      name: "Sam Roychoudhury",
      title: "Engineering Manager",
      company: "Wells Fargo",
      initials: "SR",
      feedback:
        "Outstanding detailed solutioning skills and impressive grasp of system-level interactions. Sairanganath demonstrates the ability to think holistically about complex financial systems and delivers well-architected solutions.",
      imageUrl: "/testimonials/image-4.svg",
    },
    {
      name: "Atul Kumar",
      title: "Principal Engineer",
      company: "Wells Fargo",
      initials: "AK",
      feedback:
        "Exemplary leadership and mentorship. Sairanganath consistently elevates the skills of peers and junior engineers, sharing knowledge generously and fostering a culture of continuous improvement within the team.",
      imageUrl: "/testimonials/image-7.svg",
    },
    {
      name: "Anne-Marie Twomey",
      title: "Senior Director",
      company: "Wells Fargo",
      initials: "AT",
      feedback:
        "Phenomenal dev leadership and project delivery on the Choice Credit Cards project. Sairanganath brought clarity, technical rigor, and decisive action that were instrumental to the project's success.",
      imageUrl: "/testimonials/image-8.svg",
    },
    {
      name: "Naveen Kumar Gopireddy",
      title: "Senior Engineer",
      company: "Wells Fargo",
      initials: "NG",
      feedback:
        "Excellent contributions to the OSMP channel and Co-brand Credit Cards work. Sairanganath's expertise and collaborative approach made a significant impact on deliverables, timelines, and overall team performance.",
      imageUrl: "/testimonials/image-9.svg",
    },
  ],
  awards: [
    {
      title: "Milestone CEO eCard",
      date: "03/08/2024",
      category: "CEO Recognition",
      description:
        "Awarded a Milestone CEO eCard in recognition of exceptional performance, outstanding contributions, and exemplifying Wells Fargo's commitment to excellence and innovation.",
      imageUrl: "/awards/image-5.svg",
    },
    {
      title: "Living Our Company Expectations eCard",
      date: "11/22/2023",
      category: "Company Values",
      description:
        "Recognized for consistently living the company's core values and expectations, demonstrating integrity, leadership, and a commitment to both customers and colleagues.",
      imageUrl: "/awards/image-6.svg",
    },
    {
      title: "Living Our Company Expectations eCard",
      date: "04/18/2023",
      category: "Company Values",
      description:
        "Second recognition for embodying Wells Fargo's company expectations and values, highlighting sustained excellence in conduct, collaboration, and customer focus.",
      imageUrl: "/awards/image-10.svg",
    },
    {
      title: "Team Spotlight Award",
      date: "10/05/2023",
      category: "Team Excellence",
      points: "8,000 Points",
      description:
        "Awarded the prestigious Team Spotlight Award with 8,000 recognition points for exceptional teamwork, delivering outstanding results, and making a measurable impact on key projects.",
      imageUrl: "/awards/image-11.svg",
    },
    {
      title: "Non-Milestone Anniversary Award",
      date: "03/08/2023",
      category: "Service Recognition",
      description:
        "Recognized with the Non-Milestone Anniversary Award for continued dedication, loyalty, and sustained high-quality contributions to Wells Fargo's technology organization.",
      imageUrl: "/awards/image-12.svg",
    },
    {
      title: "Wells Fargo Recognition eCard — Collaboration Excellence",
      date: "2023",
      category: "Collaboration",
      description:
        "Received a special recognition eCard highlighting the Small Business Card marketing success, emphasizing Sairanganath's role in fostering cross-functional collaboration and driving measurable business outcomes.",
      imageUrl: "/awards/image-13.svg",
    },
  ],
} as const;
