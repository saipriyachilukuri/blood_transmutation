
export interface CareerStep {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  achievements: string[];
  color: string;
}

export interface CareerPath {
  name: string;
  steps: CareerStep[];
}

export const careerPaths: CareerPath[] = [
  {
    name: "Software Development",
    steps: [
      {
        id: "sd1",
        title: "Junior Developer",
        company: "TechStart Inc.",
        period: "2018-2019",
        description: "Started career in software development working on front-end applications",
        skills: ["HTML", "CSS", "JavaScript", "React Basics"],
        achievements: ["Developed 3 customer-facing features", "Reduced bug count by 15%"],
        color: "career-blue"
      },
      {
        id: "sd2",
        title: "Mid-level Developer",
        company: "GrowthTech Solutions",
        period: "2019-2021",
        description: "Expanded skills to include full-stack development and team collaboration",
        skills: ["React", "Node.js", "Express", "MongoDB", "Git"],
        achievements: ["Led development of company's flagship product", "Mentored 2 junior developers"],
        color: "career-teal"
      },
      {
        id: "sd3",
        title: "Senior Developer",
        company: "Enterprise Solutions Ltd.",
        period: "2021-2023",
        description: "Focus on architecture, performance optimization, and technical leadership",
        skills: ["System Design", "Performance Optimization", "Technical Leadership", "CI/CD"],
        achievements: ["Implemented microservice architecture", "Reduced loading time by 40%"],
        color: "career-indigo"
      },
      {
        id: "sd4",
        title: "Lead Developer",
        company: "Innovation Tech",
        period: "2023-Present",
        description: "Leading development teams and driving technical decisions",
        skills: ["Team Leadership", "Project Management", "Architecture Design", "Strategic Planning"],
        achievements: ["Oversee 3 development teams", "Implemented company-wide coding standards"],
        color: "career-purple"
      }
    ]
  },
  {
    name: "Data Science",
    steps: [
      {
        id: "ds1",
        title: "Data Analyst",
        company: "DataFirst Analytics",
        period: "2018-2019",
        description: "Analyzing business data and creating reports",
        skills: ["SQL", "Excel", "Power BI", "Basic Statistics"],
        achievements: ["Created executive dashboards", "Improved reporting efficiency by 25%"],
        color: "career-blue"
      },
      {
        id: "ds2",
        title: "Data Scientist",
        company: "PredictTech",
        period: "2019-2021",
        description: "Building predictive models and implementing machine learning solutions",
        skills: ["Python", "Pandas", "Scikit-learn", "Statistical Modeling"],
        achievements: ["Developed customer churn model", "Increased prediction accuracy by 30%"],
        color: "career-teal"
      },
      {
        id: "ds3",
        title: "Senior Data Scientist",
        company: "AI Innovations",
        period: "2021-2023",
        description: "Leading ML projects and implementing advanced AI solutions",
        skills: ["Deep Learning", "NLP", "Computer Vision", "MLOps"],
        achievements: ["Implemented recommendation system", "Reduced infrastructure costs by 35%"],
        color: "career-indigo"
      },
      {
        id: "ds4",
        title: "Lead Data Scientist",
        company: "FutureTech AI",
        period: "2023-Present",
        description: "Setting data strategy and leading multiple data science teams",
        skills: ["Team Leadership", "AI Strategy", "Research Management", "Business Translation"],
        achievements: ["Leading team of 8 data scientists", "Secured $2M funding for AI research"],
        color: "career-purple"
      }
    ]
  }
];
