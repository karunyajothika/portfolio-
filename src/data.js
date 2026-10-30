// All portfolio content lives here. Edit this file to update the site.
export const asset = (p) => import.meta.env.BASE_URL + p

export const profile = {
  name: 'Karunya Jothika Selvarajan',
  headline: 'Computer Science Graduate | Technology Enthusiast | Adaptable Problem Solver',
  intro:
    'I am a Computer Science graduate with hands-on internship experience and exposure to technology projects, data handling, automation, reporting and web development. I enjoy learning new technologies, understanding real-world requirements and contributing to practical solutions. I am open to suitable entry-level opportunities where I can apply my knowledge, develop my skills and grow professionally.',
  email: 'karunyajothikaselvarajan@gmail.com',
  phone: '8825957744',
  showPhone: true, // set to false to hide the phone number everywhere
  location: 'Tamil Nadu, India',
  photo: 'assets/profile.jpg', // add your photo here (see README)
  resume: 'assets/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/karunya-jothika-30bb733b2/',
  github: 'https://github.com/karunyajothika',
  drive: 'https://drive.google.com/drive/folders/1RjIfNA0dRWv-Ymi1wNjiiWDDXb7SuE8n?usp=sharing',
}

export const education = {
  degree: 'B.E. Computer Science and Engineering',
  college: 'Nadar Saraswathi College of Engineering and Technology (NSCET)',
  year: '2026',
  cgpa: '8.5 / 10',
}

export const interests = [
  'Software and IT roles', 'Data handling and reporting', 'Automation',
  'Quality assurance', 'Technical support', 'Project and operations support',
]

export const experience = [
  {
    org: 'Bosch Mobility Platform and Solutions India Pvt. Ltd.',
    role: 'Data Analyst Intern', period: 'Feb 2026 – Jul 2026', primary: true,
    project: 'AWS Billing Reconciliation and Automation',
    tech: ['Python', 'Pandas', 'Excel & OpenPyXL', 'Streamlit', 'PDF processing', 'ETL', 'AWS EC2'],
    points: [
      'Developed AWS billing reconciliation dashboards for the Europe and India regions.',
      'Automated invoice processing and consumption comparison, with Excel-based reporting and data validation.',
      'Deployed the Streamlit application on an Amazon EC2 instance for operational use.',
      'Designed a variance-validation mechanism for the India reconciliation system to flag billing discrepancies.',
      'Also worked on a lead-generation and follow-up automation platform and a service-performance KPI dashboard.',
    ],
    cert: 'certificates/bosch.pdf',
  },
  {
    org: 'Athena Solutions', role: 'Full Stack Developer Intern', period: '25 Jun 2025 – 25 Jul 2025',
    project: 'Quick Room Booking using AI',
    points: ['Worked on an intelligent room reservation system focused on improving booking accuracy, availability prediction and user experience.'],
    cert: 'certificates/athena.jpg',
  },
  {
    org: 'Hazzino Technologies', role: 'Web Development Intern', period: '5 Mar 2024 – 10 Mar 2024',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    points: ['Worked on web development using HTML, CSS, Bootstrap and JavaScript.'],
    cert: 'certificates/hazzino-internship.jpg',
  },
]

export const skills = {
  applied: [
    { title: 'Programming', items: ['Python', 'JavaScript'] },
    { title: 'Data & Automation', items: ['Pandas', 'NumPy', 'Excel', 'OpenPyXL', 'ETL', 'Data validation', 'Reporting'] },
    { title: 'Web Development', items: ['HTML', 'CSS', 'Bootstrap', 'React.js', 'Node.js', 'MERN stack'] },
    { title: 'Database', items: ['MongoDB'] },
    { title: 'Dashboards & Tools', items: ['Streamlit', 'Plotly', 'Excel automation', 'Jupyter Notebook', 'VS Code'] },
    { title: 'Cloud & Deployment', items: ['AWS EC2'] },
  ],
  training: ['Java (NPTEL course)', 'Laravel', 'Salesforce Developer', 'Generative AI (IBM SkillsBuild)', 'MongoDB data modeling', 'Mobile app development (workshop)'],
}

export const projects = [
  { name: 'AWS Billing Reconciliation Platform', tag: 'Bosch internship',
    text: 'Automated platform for AWS invoice and consumption reconciliation across regional billing environments: invoice extraction, currency conversion, validation and report generation. Deployed on Amazon EC2.',
    tech: ['Python', 'Pandas', 'OpenPyXL', 'Streamlit', 'AWS EC2'], featured: true },
  { name: 'Lead Generation & Follow-up Automation', tag: 'Bosch internship',
    text: 'Automated lead collection, hot/cold segmentation and email follow-up workflows.' },
  { name: 'AMNIC Service Performance Dashboard', tag: 'Bosch internship',
    text: 'Dashboard that automates monthly KPI reporting and performance analysis.' },
  { name: 'eCommerce Application', tag: 'MERN capstone',
    text: 'Capstone project built during the MERN Stack program at Hazzino Technologies.', tech: ['MongoDB', 'Express', 'React', 'Node.js'] },
  { name: 'Quick Room Booking using AI', tag: 'Athena Solutions internship',
    text: 'Intelligent room reservation system focused on booking accuracy and availability prediction.' },
  { name: 'EchoSnap', tag: 'Academic / personal', text: 'Civic issue reporting platform.' },
  { name: 'Tail of Time', tag: 'Academic / personal', text: 'E-commerce application.' },
  { name: 'Room Allocation & Library Management Systems', tag: 'Academic / personal', text: 'Management applications built as academic projects.' },
]

const c = (title, issuer, date, file, thumb) => ({ title, issuer, date, file: `certificates/${file}`, thumb: `certificates/thumbs/${thumb}.jpg` })
export const certificates = [
  { group: 'Internship Certificates', items: [
    c('Internship Completion: AWS Billing Reconciliation', 'Bosch Mobility Platform and Solutions India', '12 Aug 2026', 'bosch.pdf', 'bosch'),
    c('Internship Completion: Quick Room Booking using AI', 'Athena Solutions', '26 Jul 2025', 'athena.jpg', 'athena'),
    c('Internship Certificate: Web Development', 'Hazzino Technologies', '4 Apr 2024', 'hazzino-internship.jpg', 'hazzino-internship'),
  ]},
  { group: 'Technical Courses & Certifications', items: [
    c('MERN Stack Development Program', 'Hazzino Technologies', '24 Dec 2025', 'mern.pdf', 'mern'),
    c('Training for MongoDB Associate Data Modeler Exam', 'MongoDB Inc.', '22 May 2026', 'mongodb.pdf', 'mongodb'),
    c('Programming in Java', 'NPTEL, IIT Kharagpur', 'Jul–Oct 2024', 'nptel-java.jpg', 'nptel-java'),
    c('Salesforce Developer', 'Naan Mudhalvan, Tamil Nadu Skill Development Corporation', '10 Dec 2025', 'salesforce.pdf', 'salesforce'),
    c('Generative AI in Action', 'IBM SkillsBuild', '13 Aug 2025', 'ibm-genai.pdf', 'ibm-genai'),
    c('Building Model Web Application in Laravel', 'TM Innovations', '10 Feb 2025', 'laravel.jpg', 'laravel'),
  ]},
  { group: 'Workshops & Achievements', items: [
    c('NSCET Hackathon 2024: Certificate of Appreciation', 'Nadar Saraswathi College of Engineering & Technology', '19–20 Sep 2024', 'nscet-hackathon.jpg', 'nscet-hackathon'),
    c('INNOHACK 36-Hour Hackathon: Participation', 'New Prince Shri Bhavani College of Engineering and Technology', '', 'innohack.jpg', 'innohack'),
    c('Mobile Application Development Workshop', 'Kongu Engineering College', '10 May 2024', 'kongu-workshop.jpg', 'kongu-workshop'),
  ]},
]
