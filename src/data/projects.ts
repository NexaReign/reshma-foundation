export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "palm-seed-plantation",
    title: "Palm seed plantation for drought relief",
    description: "Planting 200,000 palm seeds across Tamil Nadu to combat drought and prevent soil erosion through sustainable reforestation initiatives.",
    image: "/images/projects/palm-seed-plantation.jpg"
  },
  {
    id: "transgender-empowerment",
    title: "Transgender empowerment and job placement",
    description: "Empowering the transgender community through job placement in companies like Ola, Uber, and Rapido, and by providing entrepreneurial resources.",
    image: "/images/projects/transgender-empowerment.jpg"
  },
  {
    id: "visually-challenged-support",
    title: "Support for the visually challenged",
    description: "Providing comprehensive support including job placement, marriage arrangements, and household essentials for the visually challenged community.",
    image: "/images/projects/visually-challenged-support.jpg"
  },
  {
    id: "hunger-relief",
    title: "Hunger relief with food distribution",
    description: "Partnering with the Lions Club to distribute essential food items to orphanages, elderly homes, and the homeless across Tamil Nadu.",
    image: "/images/projects/hunger-relief.jpg"
  },
  {
    id: "medical-aid",
    title: "Medical aid for dialysis and cancer care",
    description: "Providing financial aid for dialysis, cancer treatment, and pediatric care at government hospitals throughout the state.",
    image: "/images/projects/medical-aid.jpg"
  },
  {
    id: "school-support",
    title: "Re-enrollment and school support",
    description: "Re-enrolling students who dropped out during the pandemic and providing books, uniforms, and bags to underprivileged school children.",
    image: "/images/projects/school-support.jpg"
  },
  {
    id: "youth-entrepreneurship",
    title: "Youth entrepreneurship training",
    description: "Providing training and resources to help young people start their own businesses and achieve economic independence.",
    image: "/images/projects/youth-entrepreneurship.jpg"
  },
  {
    id: "community-shelter",
    title: "Community shelter and clothing support",
    description: "Offering shelter and clothing support to communities in need, ensuring basic necessities are met.",
    image: "/images/projects/community-shelter.jpg"
  },
  {
    id: "disaster-response",
    title: "Disaster response and relief kits",
    description: "Providing immediate relief and support during natural disasters and emergencies across Tamil Nadu.",
    image: "/images/projects/disaster-response.jpg"
  },
  {
    id: "health-awareness",
    title: "Public health awareness campaigns",
    description: "Running campaigns to educate communities about public health issues and promote healthy living practices.",
    image: "/images/projects/health-awareness.jpg"
  }
];

export interface PearlProject {
  id: string;
  title: string;
  description: string;
  impact: string;
  partners: string;
  image: string;
}

export const pearlProjects: PearlProject[] = [
  {
    id: "nature-conservation",
    title: "Nature Conservation",
    description: "Planting 200,000 palm seeds across Tamil Nadu to combat drought and prevent soil erosion through sustainable reforestation initiatives.",
    impact: "Protecting water resources, preventing desertification, and creating sustainable agricultural practices for future generations.",
    partners: "Local communities, government forestry departments, and environmental NGOs.",
    image: "/images/pearl-projects/nature-conservation.jpg"
  },
  {
    id: "marginalized-communities",
    title: "Marginalized Communities",
    description: "Empowering the transgender and visually challenged communities through job placement in companies like Ola, Uber, and Rapido, and by providing entrepreneurial resources.",
    impact: "Creating economic independence, social inclusion, and breaking down barriers to employment for marginalized groups.",
    partners: "Corporate partners, disability rights organizations, and community leaders.",
    image: "/images/pearl-projects/marginalized-communities.jpg"
  },
  {
    id: "hunger-relief",
    title: "Hunger Relief",
    description: "Partnering with the Lions Club to distribute essential food items to orphanages, elderly homes, and the homeless across Tamil Nadu.",
    impact: "Ensuring no one goes hungry, providing nutritional support, and building community resilience during times of need.",
    partners: "Lions Club International, local food banks, and charitable organizations.",
    image: "/images/pearl-projects/hunger-relief.jpg"
  },
  {
    id: "medical-support",
    title: "Medical Support",
    description: "Providing financial aid for dialysis, cancer treatment, and pediatric care at government hospitals throughout the state.",
    impact: "Making healthcare accessible to those who cannot afford treatment, reducing medical poverty, and improving health outcomes.",
    partners: "Government hospitals, medical professionals, and healthcare NGOs.",
    image: "/images/pearl-projects/medical-support.jpg"
  },
  {
    id: "education",
    title: "Education",
    description: "Re-enrolling students who dropped out during the pandemic and providing uniforms, books, and bags to underprivileged school children.",
    impact: "Ensuring educational continuity, reducing dropout rates, and creating equal opportunities for academic success.",
    partners: "Schools, teachers, educational foundations, and local governments.",
    image: "/images/pearl-projects/education.jpg"
  }
];
