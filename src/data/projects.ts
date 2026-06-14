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
  summary: string;
  description: string;
  images: string[];
}

export interface GalleryProject {
  id: string;
  title: string;
  description: string;
  images: string[];
}

// Import individual pearl project JSON files
import Palm_treeData from './pearl-projects/Palm_tree.json';
import MarginalizedData from './pearl-projects/Marginalized.json';
import HungerData from './pearl-projects/Hunger.json';
import Blind_and_medicalData from './pearl-projects/Blind_and_medical.json';
import TransgenderData from './pearl-projects/Transgender.json';

// Import gallery project JSON files
import MediaGalleryData from './gallery/Media.json';
import SchoolGalleryData from './gallery/School.json';

export const pearlProjects: PearlProject[] = [
  Palm_treeData,
  MarginalizedData,
  HungerData,
  Blind_and_medicalData,
  TransgenderData
];

export const galleryProjects: GalleryProject[] = [
  MediaGalleryData,
  SchoolGalleryData
];
