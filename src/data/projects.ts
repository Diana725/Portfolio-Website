import farmerImg1 from "/src/assets/images/farmer1.png";
import farmerImg2 from "/src/assets/images/farmers2.png";
import buyerImg from "/src/assets/images/buyers1.png";
import adliteImg1 from "/src/assets/images/adlite1.png";
import adliteImg2 from "/src/assets/images/adlite2.png"

export const projects = [
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