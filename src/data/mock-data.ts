export const mockAnalysisData = {
  scores: {
    overall: 78,
    keywords: 82,
    experience: 75
  },
  findings: [
    {
      type: "positive",
      title: "Consistent job titles",
      description: "Your job titles match well between LinkedIn and resume, providing a consistent professional narrative."
    },
    {
      type: "positive",
      title: "Strong skill representation",
      description: "Core technical skills are well represented in both documents."
    },
    {
      type: "negative",
      title: "Experience description mismatch",
      description: "Your resume has more detailed job descriptions than your LinkedIn profile."
    },
    {
      type: "negative",
      title: "Missing keywords",
      description: "Several industry-relevant keywords are missing from your resume."
    }
  ],
  recommendations: [
    {
      title: "Enhance LinkedIn descriptions",
      description: "Add more detailed descriptions to your LinkedIn experience to match the depth in your resume."
    },
    {
      title: "Add missing technical skills",
      description: "Include Docker and AWS in your LinkedIn skills section to match your resume."
    },
    {
      title: "Update job duration format",
      description: "Use consistent date formats across both documents (e.g., 'Jan 2020 - Present')."
    },
    {
      title: "Add quantifiable achievements",
      description: "Include metrics and specific achievements in both documents to strengthen your profile."
    }
  ],
  skills: [
    { name: "JavaScript", linkedin: 90, resume: 95 },
    { name: "React", linkedin: 85, resume: 90 },
    { name: "Node.js", linkedin: 80, resume: 85 },
    { name: "AWS", linkedin: 0, resume: 75 },
    { name: "Python", linkedin: 70, resume: 60 },
    { name: "Docker", linkedin: 0, resume: 65 },
    { name: "MongoDB", linkedin: 60, resume: 70 },
    { name: "Express", linkedin: 50, resume: 75 }
  ],
  keywords: {
    matched: [
      "JavaScript", "React", "Node.js", "Python", "Full-stack", "MongoDB"
    ],
    missing: [
      "Docker", "AWS", "Express", "RESTful API"
    ],
    suggested: [
      "CI/CD", "Agile", "Microservices", "TypeScript", "Redux", "Unit Testing"
    ]
  },
  basicInfo: [
    { field: "Name", linkedin: "Alex Johnson", resume: "Alex Johnson", match: true },
    { field: "Title", linkedin: "Senior Software Engineer", resume: "Senior Software Engineer", match: true },
    { field: "Location", linkedin: "San Francisco, CA", resume: "San Francisco, California", match: true },
    { field: "Email", linkedin: "Not visible", resume: "alex.johnson@example.com", match: true }
  ],
  experience: [
    {
      linkedin: {
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "Jan 2020 - Present",
        description: "Leading development of cloud-based solutions"
      },
      resume: {
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "January 2020 - Present",
        description: "Lead developer for cloud-based enterprise solutions. Implemented microservices architecture using Node.js and Docker."
      },
      analysis: {
        match: true,
        notes: "Job titles and companies match, but resume has more detailed description. Consider enhancing LinkedIn description."
      }
    },
    {
      linkedin: {
        title: "Software Engineer",
        company: "WebDev Experts",
        duration: "Mar 2017 - Dec 2019",
        description: "Full-stack development using React and Node.js"
      },
      resume: {
        title: "Software Developer",
        company: "WebDev Experts",
        duration: "March 2017 - December 2019",
        description: "Developed responsive web applications using React and Redux. Implemented RESTful APIs with Express.js."
      },
      analysis: {
        match: false,
        notes: "Job title mismatch ('Engineer' vs 'Developer'). Consider using consistent titles across platforms."
      }
    }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      school: "University of California, Berkeley",
      linkedin: "2015 - 2017",
      resume: "2017",
      match: true
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Stanford University",
      linkedin: "2011 - 2015",
      resume: "2015",
      match: true
    }
  ]
};
