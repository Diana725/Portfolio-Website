import farmerImg1 from "/src/assets/images/farmer1.png";
import farmerImg2 from "/src/assets/images/farmers2.png";
import buyerImg from "/src/assets/images/buyers1.png";
import adliteImg1 from "/src/assets/images/adlite1.png";
import adliteImg2 from "/src/assets/images/adlite2.png";
import ifs_1 from "/src/assets/images/ifs_1.png";
import ifs_2 from "/src/assets/images/ifs_2.png";
import ifs_3 from "/src/assets/images/ifs_3.png";
import ifs_4 from "/src/assets/images/ifs_4.png";
import ss_1 from "/src/assets/images/ss_1.jpeg";
import ss_2 from "/src/assets/images/ss_2.jpeg";
import ss_3 from "/src/assets/images/ss_3.jpeg";

export const projects = [
  {
    title: "Sara Stories App (Little Stories)",
    description: "Sara Stories is a mobile-first storytelling app designed for young children and their families. The app allows users to access a curated collection of children's books, subscribe for full access, and even record themselves reading stories aloud. These recordings can be played back for kids, creating a personal, familiar reading experience. Built using modern web and mobile tools, the app delivers a seamless, subscription-based experience tailored for offline or online storytime.",
    images: [
      ss_1,
      ss_2,
      ss_3
    ],
    technologies: [
      "React",
      "Capacitor",
      "Laravel",
      "MySQL",
      "Bootstrap",
      "IntaSend API"
    ],
    technicalDetails: {
      frontend: ["React", "Bootstrap"],
      backend: ["Laravel (PHP)", "MySQL"],
      mobileApp: ["Capacitor", "Android Emulator (Physical Device)"],
      payments: ["IntaSend API"],
      authentication: ["Token-based with Laravel Sanctum"],
      deployment: ["Bluehost for backend", "Capacitor for Android builds"]
    },
    features: [
      {
        title: "Subscription Access",
        description: "Users can unlock all books via a monthly or yearly subscription powered by IntaSend, with pricing based on location (KES/USD)."
      },
      {
        title: "Story Recording & Playback",
        description: "Adults can record themselves reading books. These personalized recordings can then be played back for children anytime."
      },
      {
        title: "Book Library & Locking System",
        description: "Books are displayed with cover images, and those locked due to subscription status have a lock icon until unlocked."
      },
      {
        title: "Offline-Friendly Mobile Experience",
        description: "Built with Capacitor, the app runs natively on Android devices and was tested and developed using a real phone emulator."
      },
      {
        title: "Localized Pricing",
        description: "Detects user region and shows pricing in KES or USD accordingly, without requiring users to set their country manually."
      }
    ],
    challenges: [
      {
        title: "Cross-Platform Development",
        description: "Ensured smooth mobile performance using Capacitor with native Android builds, testing on physical device instead of Android Studio emulator."
      },
      {
        title: "Audio Recording & Playback",
        description: "Handled client-side audio recording with seamless playback syncing across sessions while maintaining lightweight performance."
      },
      {
        title: "Token-based Auth without Emails",
        description: "Implemented secure token-based user tracking without traditional login forms to keep the experience child-friendly."
      }
    ],
    futureEnhancements: [
      "iOS build support using Capacitor",
      "Downloadable audio books for offline listening",
      "In-app storytelling games and interactive content"
    ],
    impact: [
      "Helped kids hear stories in the voices of their loved ones",
      "Offered a screen-light way for kids to engage with books",
      "Enabled affordable digital storytelling for families with limited access to books"
    ],
    githubLink: "https://github.com/Diana725/little-stories-app",
    demoLink: "https://play.google.com/store/apps/details?id=com.sarastories.app" // or replace with your actual link
  },  
  {
    title: "Impact Stories Fund",
    description: "Impact Stories Fund is a fundraising platform built to collect donations and transparently show how the contributions are making a difference. The platform features real stories shared via embedded YouTube videos, giving donors direct insight into the impact of their support. It includes a donation form with customizable amounts and frequency, secure payment integration, and a clean, responsive interface tailored for trust and simplicity.",
    images: [
      ifs_1,
      ifs_2,
      ifs_3,
      ifs_4
    ],
    technologies: [
      "React",
      "Bootstrap",
      "Laravel",
      "MySQL",
      "REST API",
      "IntaSend API"
    ],
    technicalDetails: {
      frontend: ["React", "Bootstrap"],
      backend: ["Laravel (PHP)", "MySQL"],
      authentication: ["Email Verification (Laravel Sanctum)"],
      deployment: ["Bluehost"]
    },
    features: [
      {
        title: "Donation System",
        description: "Users can donate with flexible options (daily, weekly, monthly, yearly) through a clean and easy-to-use form integrated with IntaSend."
      },
      {
        title: "Impact Videos",
        description: "Real-time impact storytelling through a curated gallery of embedded YouTube videos from beneficiaries and program managers."
      },
      {
        title: "Responsive Design",
        description: "Fully mobile-friendly design with Bootstrap components and modern layout for ease of use across devices."
      },
      {
        title: "Admin Content Management",
        description: "Custom Laravel admin panel to manage programs, stories, FAQs, and donation records."
      }
    ],
    challenges: [
      {
        title: "Payment Integration",
        description: "Seamlessly integrating IntaSend's API with secure handling of different payment frequencies and donation records."
      },
      {
        title: "Storytelling Layout",
        description: "Designing a layout that keeps users emotionally engaged while providing clarity on how funds are used."
      }
    ],
    futureEnhancements: [
      "User dashboard to track personal donations",
      "Automated receipts and thank-you emails",
      "Multi-currency support and donor region detection"
    ],
    impact: [
      "Increased donor trust through transparent storytelling",
      "Streamlined donation process with flexible options",
      "Enabled small organizations to collect and manage funds digitally"
    ],
    githubLink: "https://github.com/Diana725/Impact-Stories",
    demoLink: "https://impactstoriesfund.org"
  },
  
    {
      title: "E-commerce Platform for Farmers",
      description: "This platform streamlines the agricultural supply chain by directly connecting farmers with buyers, removing the need for intermediaries. Buyers can easily access fresh, locally sourced products, while farmers benefit from increased control over pricing and distribution, enhancing their income. With features like a user-friendly interface, secure payments, and flexible delivery options, the platform ensures a seamless shopping experience. Direct connection between buyers and farmers fosters transparency, allowing for personalized orders and delivery. Ultimately, the platform empowers local farmers and provides consumers with healthy, farm-fresh food options.",
      images: [
        farmerImg1,
        farmerImg2,
        buyerImg
      ],
      technologies: [
        "React",
        "Redux",
        "Laravel",
        "MySQL",
        "REST API",
        "Laravel Sanctum",
        "Bootstrap",
        "AWS EC2"
      ],
      technicalDetails: {
        frontend: ["React", "Redux", "Bootstrap"],
        backend: ["Laravel (PHP)", "MySQL"],
        authentication: ["Laravel Sanctum"],
        deployment: ["AWS EC2"]
      },
      features: [
        {
          title: "Dual Interface System",
          description: "Separate frontends for farmers and buyers, each tailored to their specific needs and use cases."
        },
        {
          title: "Secure Authentication",
          description: "Robust authentication system using Laravel Sanctum with separate flows for farmers and buyers."
        },
        {
          title: "Advanced Product Management",
          description: "Comprehensive system for farmers to manage products, track inventory, and handle orders while buyers can browse, search, and purchase items."
        },
        {
          title: "Smart Delivery System",
          description: "Custom-built delivery zone management with dynamic pricing based on location."
        }
      ],
      challenges: [
        {
          title: "Payment System",
          description: "Built a custom payment confirmation system that tracks payment statuses for direct farmer-to-buyer transactions."
        },
        {
          title: "Scalability",
          description: "Designed the backend and database structure to handle growing numbers of products, users, and transactions."
        }
      ],
      futureEnhancements: [
        "Machine Learning Integration for price prediction",
        "Improved Delivery Coordination with GPS tracking",
        "USSD Service for areas with limited internet"
      ],
      impact: [
        "Eliminated middlemen, giving farmers more control",
        "Provided direct access to fresh produce",
        "Supported rural economies"
      ],
      githubLink: "https://github.com/Diana725/Ecommerce-Project",
      demoLink: "https://www.buyer.maizeai.me/"
    },
    {
      title: "AdLite Media Website",
      description: "The AdLite Media website showcases innovative taxi advertising solutions that help businesses increase visibility through dynamic, mobile campaigns. It offers a modern, responsive design that allows potential clients to explore advertising options with ease. The site highlights various services such as digital taxi tops and in-car ads, with case studies demonstrating their effectiveness. This sleek and intuitive website reflects AdLite Media's expertise and builds trust with potential clients through a professional, user-friendly experience.",
      images: [
        adliteImg1,
        adliteImg2
      ],
      technologies: [
        "React",
        "Laravel",
        "Bootstrap",
        "AWS EC2",
        "MySQL",
        "Responsive Design"
      ],
      technicalDetails: {
        frontend: ["React", "Bootstrap"],
        backend: ["Laravel", "MySQL"],
        authentication: ["None Required"],
        deployment: ["AWS EC2"]
      },
      features: [
        {
          title: "Advertising Solutions Showcase",
          description: "Comprehensive presentation of car-top displays, in-car ads, and coordinated swarm campaigns."
        },
        {
          title: "Interactive Media Gallery",
          description: "Dynamic gallery showcasing real-world examples of advertising campaigns."
        },
        {
          title: "Client Testimonials",
          description: "Showcase of successful campaigns and client feedback."
        }
      ],
      challenges: [
        {
          title: "Mobile Optimization",
          description: "Optimized all the pages and features of this website to be able to display and function correctly on small screens."
        }
      ],
      futureEnhancements: [
        "Payment Feature Integration",
        "Implement an online booking functionality",
      ],
      impact: [
        "Provided centralized visibility for my client's business as well as his contact details",
        "Showcasing innovative taxi advertising solutions offered by the business",
      ],
      githubLink: "https://github.com/Diana725/Advert-website",
      demoLink: "https://www.adlitemedia.com/"
    }
  ];