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
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "transgender-empowerment",
    title: "Transgender empowerment and job placement",
    description: "Empowering the transgender community through job placement in companies like Ola, Uber, and Rapido, and by providing entrepreneurial resources.",
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "visually-challenged-support",
    title: "Support for the visually challenged",
    description: "Providing comprehensive support including job placement, marriage arrangements, and household essentials for the visually challenged community.",
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "hunger-relief",
    title: "Hunger relief with food distribution",
    description: "Partnering with the Lions Club to distribute essential food items to orphanages, elderly homes, and the homeless across Tamil Nadu.",
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "medical-aid",
    title: "Medical aid for dialysis and cancer care",
    description: "Providing financial aid for dialysis, cancer treatment, and pediatric care at government hospitals throughout the state.",
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "school-support",
    title: "Re-enrollment and school support",
    description: "Re-enrolling students who dropped out during the pandemic and providing books, uniforms, and bags to underprivileged school children.",
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "youth-entrepreneurship",
    title: "Youth entrepreneurship training",
    description: "Providing training and resources to help young people start their own businesses and achieve economic independence.",
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "community-shelter",
    title: "Community shelter and clothing support",
    description: "Offering shelter and clothing support to communities in need, ensuring basic necessities are met.",
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "disaster-response",
    title: "Disaster response and relief kits",
    description: "Providing immediate relief and support during natural disasters and emergencies across Tamil Nadu.",
    image: "/images/hero/foundationWelcome.jpeg"
  },
  {
    id: "health-awareness",
    title: "Public health awareness campaigns",
    description: "Running campaigns to educate communities about public health issues and promote healthy living practices.",
    image: "/images/hero/foundationWelcome.jpeg"
  }
];

export interface PearlProject {
  id: string;
  title: string;
  sections: {
    image: string;
    title: string;
    content: string;
  }[];
}

export interface GalleryProject {
  id: string;
  title: string;
  description: string;
  image: string;
  sections: {
    image: string;
    title: string;
    content: string;
  }[];
}

// Import individual pearl project JSON files
import natureConservationData from './pearl-projects/nature-conservation.json';
import marginalizedCommunitiesData from './pearl-projects/marginalized-communities.json';
import hungerReliefData from './pearl-projects/hunger-relief.json';
import medicalSupportData from './pearl-projects/medical-support.json';
import educationData from './pearl-projects/education.json';

// Import gallery project JSON files
import palmSeedPlantationData from './gallery/palm-seed-plantation.json';
import transgenderEmpowermentData from './gallery/transgender-empowerment.json';
import visuallyChallengedSupportData from './gallery/visually-challenged-support.json';

export const pearlProjects: PearlProject[] = [
  natureConservationData,
  marginalizedCommunitiesData,
  hungerReliefData,
  medicalSupportData,
  educationData
];

export const galleryProjects: GalleryProject[] = [
  palmSeedPlantationData,
  transgenderEmpowermentData,
  visuallyChallengedSupportData
];
