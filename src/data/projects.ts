// Project data for portfolio
export interface ProjectInfo {
  name: string;
  description: string;
  tech: string[];
  repo: string;
}

export const projects: ProjectInfo[] = [
  {
    name: "MindGuard — Real-Time Mental Fatigue Detection",
    description: "Detect mental fatigue in real time using webcam and AI models.",
    tech: ["React", "TensorFlow.js", "Node.js"],
    repo: "https://github.com/SahanaK17/Real-Time-Mental-Fatigue-Detection",
  },
  {
    name: "Amazon E-Commerce Business Intelligence",
    description: "BI dashboards for Amazon sales data analysis.",
    tech: ["Python", "PowerBI", "Pandas"],
    repo: "https://github.com/SahanaK17/Amazon-ECommerce-Business-Intelligence",
  },
  {
    name: "Coffee Fruit Prediction",
    description: "Predict coffee fruit yield using machine learning.",
    tech: ["Python", "Scikit-learn"],
    repo: "https://github.com/SahanaK17/Coffee_Fruit_Prediction",
  },
  {
    name: "Pet Disease Prediction",
    description: "Classify pet diseases from symptoms.",
    tech: ["Python", "TensorFlow"],
    repo: "https://github.com/SahanaK17/pet_disease",
  },
  {
    name: "Hand Gesture Recognition",
    description: "Real‑time hand‑gesture recognition via webcam.",
    tech: ["OpenCV", "MediaPipe", "React"],
    repo: "https://github.com/SahanaK17/hand-gesture-recognition",
  },
];
