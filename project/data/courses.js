export const courses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React and Node.js in this comprehensive course for beginners to advanced web developers.",
    fullDescription: "This complete web development bootcamp takes you from absolute beginner to professional developer. You'll learn to build responsive websites with HTML5 and CSS3, create interactive web applications with JavaScript, develop powerful Single Page Applications with React, and build backend systems with Node.js and Express. By the end of this course, you'll have the skills to create any web application you can imagine and be ready for a career in web development.",
    price: 99.99,
    discountPrice: 129.99,
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    duration: "12 weeks",
    lessons: 120,
    level: "Beginner to Advanced",
    category: "Web Development",
    rating: 4.8,
    reviewCount: 4750,
    students: 12500,
    instructor: {
      name: "Dr. Angela Williams",
      title: "Senior Web Developer & Educator",
      avatar: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
    },
    learningOutcomes: [
      "Build 25+ websites and web apps using HTML, CSS, JavaScript, React, Node and more",
      "Create responsive, accessible, and beautiful layouts",
      "Handle authentication, user accounts, and security",
      "Implement payment processing with Stripe",
      "Deploy your applications to production",
      "Work with databases like MongoDB and PostgreSQL",
      "Build RESTful APIs and GraphQL servers",
      "Implement real-time features with WebSockets"
    ],
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience needed",
      "A computer with internet access (Mac, Windows or Linux)"
    ],
    targetAudience: "This course is perfect for complete beginners with no programming experience, programmers switching to web development, and designers looking to expand their skills with interactive web development.",
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: [
          { title: "Course Overview", duration: "10 min", type: "video" },
          { title: "Web Development Landscape", duration: "15 min", type: "video" },
          { title: "Setting Up Your Development Environment", duration: "20 min", type: "video" },
          { title: "Your First HTML Page", duration: "25 min", type: "video" },
          { title: "Module Quiz", duration: "10 min", type: "quiz" }
        ]
      },
      {
        title: "HTML Fundamentals",
        lessons: [
          { title: "HTML Document Structure", duration: "18 min", type: "video" },
          { title: "Working with Text", duration: "22 min", type: "video" },
          { title: "Links and Navigation", duration: "20 min", type: "video" },
          { title: "Images and Media", duration: "25 min", type: "video" },
          { title: "Tables and Forms", duration: "30 min", type: "video" },
          { title: "HTML Project: Personal Website", duration: "45 min", type: "project" }
        ]
      },
      {
        title: "CSS Styling",
        lessons: [
          { title: "CSS Syntax and Selectors", duration: "25 min", type: "video" },
          { title: "Colors and Typography", duration: "20 min", type: "video" },
          { title: "Box Model and Layout", duration: "30 min", type: "video" },
          { title: "Flexbox and Grid", duration: "40 min", type: "video" },
          { title: "Responsive Design", duration: "35 min", type: "video" },
          { title: "CSS Animations", duration: "25 min", type: "video" },
          { title: "CSS Project: Portfolio Page", duration: "60 min", type: "project" }
        ]
      }
    ],
    reviews: [
      {
        name: "Jason Kim",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        rating: 5,
        comment: "This is the best web development course I've ever taken. Angela explains everything so clearly, and the projects are challenging but doable. I went from knowing nothing about coding to landing a junior developer job in 3 months!"
      },
      {
        name: "Sarah Martinez",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        rating: 5,
        comment: "Incredibly comprehensive course! The projects are real-world and practical. I especially appreciated the sections on React and Node.js which helped me build my own web app."
      },
      {
        name: "Michael Johnson",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        rating: 4,
        comment: "Great course with tons of content. Sometimes moves a bit fast, but you can always pause and rewatch. The Discord community is super helpful too."
      }
    ]
  },
  {
    id: "2",
    title: "Data Science & Machine Learning Bootcamp",
    description: "Learn Python, NumPy, Pandas, Data Visualization, Machine Learning, and Deep Learning in this comprehensive data science course.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    price: 89.99,
    discountPrice: 119.99,
    duration: "10 weeks",
    lessons: 95,
    level: "Intermediate",
    category: "Data Science",
    rating: 4.7,
    reviewCount: 3200,
    students: 8700,
    instructor: {
      name: "Dr. Robert Chen",
      title: "Data Scientist & AI Researcher",
      avatar: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg"
    },
    learningOutcomes: [
      "Master Python for data science and analytics",
      "Work with libraries like NumPy, Pandas, Matplotlib, and Seaborn",
      "Build and evaluate machine learning models with Scikit-Learn",
      "Develop deep learning models using TensorFlow and Keras",
      "Create data visualizations that tell compelling stories",
      "Work with real-world datasets to solve actual problems",
      "Deploy machine learning models to production"
    ],
    prerequisites: [
      "Basic Python knowledge",
      "High school level math (algebra, basic statistics)",
      "No prior machine learning experience required"
    ],
    curriculum: [
      {
        title: "Python for Data Science",
        lessons: [
          { title: "Python Fundamentals Review", duration: "30 min", type: "video" },
          { title: "NumPy Arrays and Operations", duration: "45 min", type: "video" },
          { title: "Pandas for Data Analysis", duration: "60 min", type: "video" },
          { title: "Data Cleaning and Preprocessing", duration: "50 min", type: "video" },
          { title: "Python Data Project", duration: "90 min", type: "project" }
        ]
      },
      {
        title: "Data Visualization",
        lessons: [
          { title: "Matplotlib Fundamentals", duration: "40 min", type: "video" },
          { title: "Seaborn for Statistical Visualization", duration: "45 min", type: "video" },
          { title: "Interactive Visualization with Plotly", duration: "50 min", type: "video" },
          { title: "Dashboard Creation with Dash", duration: "60 min", type: "video" },
          { title: "Visualization Project", duration: "90 min", type: "project" }
        ]
      }
    ],
    reviews: [
      {
        name: "Emma Wilson",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        rating: 5,
        comment: "This course transformed my career. I was a business analyst and now I'm a data scientist at a tech company with a 45% salary increase. The projects are what make this course stand out."
      },
      {
        name: "Daniel Lee",
        avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        rating: 4,
        comment: "Excellent and comprehensive. The machine learning sections are particularly well explained with the right balance of theory and practice."
      }
    ]
  },
  {
    id: "3",
    title: "iOS App Development with Swift",
    description: "Learn to build beautiful iOS apps for iPhone and iPad using Swift and Xcode. From beginner to App Store.",
    image: "https://images.pexels.com/photos/3803258/pexels-photo-3803258.jpeg",
    price: 79.99,
    duration: "8 weeks",
    lessons: 85,
    level: "Beginner to Intermediate",
    category: "Mobile Development",
    rating: 4.9,
    reviewCount: 2100,
    students: 5400,
    instructor: {
      name: "Sophie Taylor",
      title: "iOS Developer & Former Apple Engineer",
      avatar: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg"
    },
    learningOutcomes: [
      "Build 15+ complete iOS apps using Swift",
      "Master Swift programming language fundamentals",
      "Design beautiful user interfaces with UIKit and SwiftUI",
      "Work with APIs and web services",
      "Implement user authentication and data persistence",
      "Publish your apps to the App Store"
    ],
    curriculum: [
      {
        title: "Swift Fundamentals",
        lessons: [
          { title: "Introduction to Swift", duration: "25 min", type: "video" },
          { title: "Variables, Constants, and Data Types", duration: "30 min", type: "video" },
          { title: "Control Flow and Functions", duration: "35 min", type: "video" },
          { title: "Object-Oriented Programming in Swift", duration: "40 min", type: "video" },
          { title: "Swift Coding Challenge", duration: "60 min", type: "project" }
        ]
      },
      {
        title: "Building User Interfaces",
        lessons: [
          { title: "Introduction to Xcode", duration: "20 min", type: "video" },
          { title: "UIKit Fundamentals", duration: "45 min", type: "video" },
          { title: "Layout with Auto Layout", duration: "50 min", type: "video" },
          { title: "Introduction to SwiftUI", duration: "40 min", type: "video" },
          { title: "Building a Weather App UI", duration: "90 min", type: "project" }
        ]
      }
    ],
    reviews: [
      {
        name: "Tyler Johnson",
        avatar: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg",
        rating: 5,
        comment: "Sophie is an amazing instructor! The course is incredibly well-structured, and I was able to publish my first app to the App Store after just 6 weeks."
      }
    ]
  },
  {
    id: "4",
    title: "UI/UX Design Masterclass",
    description: "Master the principles of user interface and user experience design. Create stunning designs using Figma and Adobe XD.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    price: 69.99,
    duration: "6 weeks",
    lessons: 65,
    level: "All Levels",
    category: "Design",
    rating: 4.6,
    reviewCount: 1800,
    students: 4200,
    instructor: {
      name: "Alex Rodriguez",
      title: "Senior UX Designer & Design Consultant",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
    },
    learningOutcomes: [
      "Understand core UI/UX design principles",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Master Figma and Adobe XD workflows",
      "Conduct user research and usability testing",
      "Create design systems and component libraries",
      "Build a professional design portfolio"
    ],
    curriculum: [
      {
        title: "Design Fundamentals",
        lessons: [
          { title: "Introduction to UI/UX Design", duration: "30 min", type: "video" },
          { title: "Design Thinking Process", duration: "40 min", type: "video" },
          { title: "Color Theory and Typography", duration: "35 min", type: "video" },
          { title: "Layout and Composition", duration: "45 min", type: "video" },
          { title: "Design Challenge: App Redesign", duration: "60 min", type: "project" }
        ]
      }
    ]
  },
  {
    id: "5",
    title: "Complete Python Programming Course",
    description: "Learn Python from scratch. Master Python fundamentals, data structures, algorithms, and popular libraries.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    price: 59.99,
    duration: "8 weeks",
    lessons: 90,
    level: "Beginner",
    category: "Programming",
    rating: 4.7,
    reviewCount: 3800,
    students: 9500,
    instructor: {
      name: "Dr. Michael Johnson",
      title: "Python Developer & Computer Science Professor",
      avatar: "https://images.pexels.com/photos/8353469/pexels-photo-8353469.jpeg"
    }
  },
  {
    id: "6",
    title: "Digital Marketing Mastery",
    description: "Comprehensive guide to SEO, SEM, social media marketing, content marketing, and analytics. Grow your online presence.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
    price: 79.99,
    duration: "10 weeks",
    lessons: 95,
    level: "Intermediate",
    category: "Marketing",
    rating: 4.5,
    reviewCount: 2200,
    students: 6300,
    instructor: {
      name: "Emily Roberts",
      title: "Digital Marketing Strategist",
      avatar: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg"
    }
  },
  {
    id: "7",
    title: "React Native Mobile Development",
    description: "Build cross-platform mobile apps for iOS and Android using React Native and JavaScript. One codebase, multiple platforms.",
    image: "https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg",
    price: 89.99,
    duration: "9 weeks",
    lessons: 80,
    level: "Intermediate",
    category: "Mobile Development",
    rating: 4.8,
    reviewCount: 1600,
    students: 4800,
    instructor: {
      name: "Jason Patel",
      title: "Senior Mobile Developer",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    }
  },
  {
    id: "8",
    title: "Modern JavaScript: From Fundamentals to Expert",
    description: "Master JavaScript from the basics to advanced concepts. Learn ES6+, asynchronous programming, and modern JS frameworks.",
    image: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg",
    price: 69.99,
    duration: "7 weeks",
    lessons: 75,
    level: "All Levels",
    category: "Web Development",
    rating: 4.7,
    reviewCount: 2800,
    students: 7200,
    instructor: {
      name: "Sarah Williams",
      title: "JavaScript Expert & Web Developer",
      avatar: "https://images.pexels.com/photos/5905498/pexels-photo-5905498.jpeg"
    }
  },
  {
    id: "9",
    title: "AWS Certified Solutions Architect",
    description: "Prepare for the AWS Solutions Architect certification. Master cloud architecture, services, and best practices.",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    price: 99.99,
    duration: "12 weeks",
    lessons: 110,
    level: "Advanced",
    category: "Cloud Computing",
    rating: 4.9,
    reviewCount: 1900,
    students: 5100,
    instructor: {
      name: "David Thompson",
      title: "AWS Certified Solutions Architect & Cloud Consultant",
      avatar: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg"
    }
  }
];