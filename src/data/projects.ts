export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: string;
  file: string;
  url?: string;
  repo?: string;
  type: ("web" | "mobile" | "ai")[];
  status?: string;
}

export const projectsDescription =
  "Here are some of the projects I've worked on — a curated selection of web apps, mobile applications, and fine-tuned ML models built with React, React Native, PyTorch, and modern tooling.";

export const projects: Project[] = [
  {
    id: "eid-together",
    title: "Eid Together",
    category: "Social",
    description:
      "A global celebration wall for Eid with multilingual support across 8 languages (English, Hausa, Igbo, Yoruba, Arabic, French, Turkish, Indonesian). Share wishes and explore messages from around the world.",
    tags: ["REACT", "I18N", "MULTILINGUAL"],
    icon: "globe",
    file: "EID.WALL",
    url: "https://eid-wall.netlify.app/",
    repo: "https://github.com/A-Rahiym/Eid-celebration",
    type: ["web"],
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    category: "Wellness",
    description:
      "A personal habit tracking app to build and maintain daily routines. Features include progress tracking, streak counting, and a clean, minimal interface.",
    tags: ["REACT", "TRACKER", "UX"],
    icon: "chart",
    file: "HABIT.BIN",
    url: "https://habittracker000.netlify.app/",
    repo: "https://github.com/A-Rahiym/habit-tracker",
    type: ["web"],
  },
  {
    id: "invoice-app",
    title: "Invoice App",
    category: "Productivity",
    description:
      "A full-featured invoice management app with CRUD operations, status tracking (paid/pending/draft), filtering, and invoice creation with detailed itemized billing.",
    tags: ["REACT", "FORMS", "STATE MANAGEMENT"],
    icon: "document",
    file: "INVOICE.APP",
    url: "https://invoice-app-0.netlify.app/",
    repo: "https://github.com/A-Rahiym/Invoice-App",
    type: ["web"],
  },
  {
    id: "e-clothing",
    title: "E-Clothing",
    category: "E-Commerce",
    description:
      "A modern React-based e-commerce platform with Redux state management, Firebase authentication, and real-time product inventory updates.",
    tags: ["REACT", "REDUX", "FIREBASE"],
    icon: "cart",
    file: "ECOMMERCE.SPA",
    url: "https://lzappstore.netlify.app/",
    repo: "https://github.com/A-Rahiym/E_clothing",
    type: ["web"],
  },
  {
    id: "lifegate-mobile",
    title: "LifeGate Mobile",
    category: "Healthcare",
    description:
      "A cross-platform healthcare mobile application connecting patients with licensed professionals for consultations and health monitoring.",
    tags: ["REACT NATIVE", "EXPO", "HEALTHCARE"],
    icon: "medical",
    file: "LIFEGATE.APK",
    repo: "https://github.com/A-Rahiym",
    type: ["mobile"],
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis Transformer",
    category: "NLP",
    description:
      "Fine-tuned DistilBERT on product reviews and social media text for multi-class sentiment classification. Achieved 92% accuracy on validation set with optimized inference pipeline.",
    tags: ["PYTORCH", "TRANSFORMERS", "NLP"],
    icon: "chart",
    file: "SENTIMENT.PT",
    repo: "https://github.com/A-Rahiym",
    type: ["ai"],
  },
  {
    id: "air-quality-analysis",
    title: "Air Quality Big Data Analysis",
    category: "ML / Data",
    description:
      "Built regression models on large-scale air quality sensor data using PyTorch. Included feature engineering, time-series forecasting, and model deployment for real-time predictions.",
    tags: ["PYTORCH", "BIG DATA", "TIME SERIES"],
    icon: "globe",
    file: "AIR_QUALITY.PT",
    repo: "https://github.com/A-Rahiym",
    type: ["ai"],
  },
  {
    id: "crems",
    title: "Crems",
    category: "E-Commerce",
    description:
      "A modern e-commerce platform designed for premium skincare and cosmetic products. Features include product browsing, cart management, and a seamless checkout experience.",
    tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
    icon: "cart",
    file: "CREMS.WIP",
    type: ["web"],
    status: "currently building",
    repo: "https://github.com/A-Rahiym",
  },
];

export const projectFilters = [
  { id: "all", label: "ALL" },
  { id: "web", label: "WEB APPS" },
  { id: "mobile", label: "MOBILE" },
  { id: "ai", label: "AI" },
];
