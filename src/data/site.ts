import {
  BadgeCheck,
  Clapperboard,
  Compass,
  Edit3,
  Layers3,
  Megaphone,
  MonitorPlay,
  Palette,
  PenTool,
  Printer,
  Sparkles,
  Video,
} from "lucide-react";

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/diartis" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/diartis/" },
  { label: "Behance", href: "https://www.behance.net/diartis" },
];

export const workCategories = [
  {
    title: "Branding",
    description: "Identity systems, visual language, and brand worlds built for clarity.",
    tone: "paper",
    images: ["Identity system", "Brand grid", "Stationery study"],
  },
  {
    title: "Social Media Design",
    description: "Campaign-ready layouts shaped for rhythm, recognition, and conversion.",
    tone: "screen",
    images: ["Launch post", "Carousel frame", "Story sequence"],
  },
  {
    title: "Motion Design",
    description: "Kinetic systems, animated identities, and expressive visual transitions.",
    tone: "motion",
    images: ["Logo motion", "Title sequence", "Kinetic frame"],
  },
  {
    title: "Video Editing",
    description: "Narrative edits, pacing, and post-production for digital storytelling.",
    tone: "film",
    images: ["Edit timeline", "Color frame", "Promo cut"],
  },
  {
    title: "Advertising",
    description: "Premium visual concepts for launches, promotions, and commercial stories.",
    tone: "ad",
    images: ["Campaign key visual", "OOH layout", "Digital placement"],
  },
  {
    title: "Logo Design",
    description: "Sharp, memorable marks and typography-first brand signatures.",
    tone: "logo",
    images: ["Wordmark", "Symbol study", "Lockup system"],
  },
  {
    title: "Campaign Design",
    description: "Flexible campaign systems across social, digital, print, and motion.",
    tone: "campaign",
    images: ["Campaign system", "Visual route", "Content suite"],
  },
  {
    title: "Print Design",
    description: "Tactile layouts, editorial systems, packaging, and production-ready print.",
    tone: "print",
    images: ["Poster study", "Editorial spread", "Printed collateral"],
  },
];

export const services = [
  { title: "Brand Identity", icon: BadgeCheck },
  { title: "Logo Design", icon: PenTool },
  { title: "Social Media Design", icon: MonitorPlay },
  { title: "Motion Graphics", icon: Sparkles },
  { title: "Video Editing", icon: Video },
  { title: "Advertising Design", icon: Megaphone },
  { title: "Print Design", icon: Printer },
  { title: "Marketing Design", icon: Layers3 },
  { title: "Creative Direction", icon: Compass },
];

export const experience = [
  {
    period: "9+ years",
    title: "Multidisciplinary Designer",
    detail:
      "Developing visual identities, campaign systems, social media content, motion graphics, advertising, and edited video for businesses and digital brands.",
  },
  {
    period: "Brand and campaign work",
    title: "Graphic Design Lead",
    detail:
      "Creating consistent design systems across logo, print, digital, and marketing touchpoints with a focus on memorable communication.",
  },
  {
    period: "Motion and video",
    title: "Motion Designer and Video Editor",
    detail:
      "Building animated visual stories, launch assets, reels, promos, and polished edits with strong pacing and narrative flow.",
  },
];

export const processSteps = [
  { title: "Discover", icon: Edit3, text: "Clarify message, audience, format, and the visual standard the work needs to meet." },
  { title: "Design", icon: Palette, text: "Create restrained, distinctive systems that carry across still, motion, and print." },
  { title: "Deliver", icon: Clapperboard, text: "Prepare clean final assets for social, web, advertising, video, and production use." },
];
