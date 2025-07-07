import Project01 from "/src/assets/project_thum_01.png";
import Project02 from "/src/assets/project_thum_02.png";
import Project03 from "/src/assets/project_thum_03.png";
import Project04 from "/src/assets/project_thum_04.png";
import Project05 from "/src/assets/project_thum_05.png";
import Project06 from "/src/assets/project_thum_06.png";
import Project07 from "/src/assets/project_thum_07.png";

const projectList = [
  {
    id: 1,
    title: "Aeronautical Block",
    subtitle: "(BSA, University)",
    image: Project01,
    location: "Chennai",
    year: 2012,
    size: "9,000 sqft",
    description: "Aeronautical block project for BSA University.",
    fullDescription: `This academic project explores the intersection of aeronautics and architecture through two building masses. One block emphasizes “form follows function,” while the other embraces a reverse philosophy: “function follows form.” The Aeronautical block is anchored by a central public courtyard, supporting a program of classrooms, labs, and even an aircraft hangar as a learning space. The Architecture block promotes natural ventilation and visual porosity, encouraging interaction and movement.`,
    highlights: [
      "Central plaza promotes social interaction and connectivity",
      "Aircraft hangar repurposed as an exhibition space",
      "Passive design strategies for comfort and sustainability",
    ],
    impact: [
      "Foundation for architectural thinking and narrative-driven design",
      "Introduced passive climatic strategies and public realm integration",
    ],
  },
  {
    id: 2,
    title: "Dr.Agarwal's",
    subtitle: "Corporate Office",
    image: Project02,
    location: "Chennai",
    year: 2014,
    size: "3,700 sqft",
    description: "Corporate office space for Dr. Agarwal's group.",
    fullDescription: `The design transforms a linear office layout into a series of “homes” for each department, connected by interactive “courtyards.” These zones act as informal meeting areas, equipped with whiteboard walls to foster impromptu collaboration. Materiality and spatial rhythm support team identity, while shared zones like the pantry promote cross-team synergy.`,
    highlights: [
      "Departmental 'homes' with shared courtyards",
      "Whiteboard walls for agile and visual brainstorming",
      "Open-plan layout supporting retreat and interaction",
    ],
    impact: [
      "Encouraged cross-department communication via spatial strategies",
      "Improved team engagement and sense of belonging",
    ],
  },
  {
    id: 3,
    title: "Architecture School",
    subtitle: "(BSA, University)",
    image: Project03,
    description: "Modern design for architecture school at BSA University.",
    // You can replicate the format used for project 1
  },
  {
    id: 4,
    title: "Beatriz Furest",
    subtitle: "Retail Window Display",
    image: Project04,
    location: "Barcelona",
    year: 2024,
    size: "6 sqm",
    description: "Fashion store project for Beatriz Furest.",
    fullDescription: `This immersive window display was a poetic tribute to the Mediterranean sunset. Spanning 6 sqm, it evolved over 60 days with fabric and paper gradients to reflect the shifting sky. A modular stone system showcased over 30 products, promoting flexibility and customer interaction. It was delivered on time, under budget, and celebrated for its visual storytelling.`,
    stats: [
      { label: "Foot Traffic Increase", value: 22, unit: "%" },
      { label: "Cost Savings", value: 18, unit: "%" },
      { label: "Budget", value: 450, unit: "€" },
    ],
    highlights: [
      "Evolving window display over 60 days",
      "Modular stone display for 30+ products",
      "Minimalist materials: soft fabric, gradient paper",
    ],
    impact: [
      "Boosted store visits",
      "Reduced VM costs via reusable materials",
      "Encouraged product engagement",
    ],
    recognition: [
      "🏆 Best Project in Class",
      "🥈 2nd Place – Beatriz Furest Brand Awards",
    ],
  },
  {
    id: 5,
    title: "Ikea Z!",
    subtitle: "Project",
    image: Project05,
    location: "Barcelona",
    year: 2023,
    size: "430 sqm",
    description: "Innovative design showcase for Ikea Z!",
    fullDescription: `This Gen Z-focused concept store blends retail with content creation, personalization, and sustainability. Moving away from traditional IKEA maze layouts, it offers a modular, experiential design based on the 4 C’s: Collection, Categorization, Conceptualization, and Circulation. The design includes social zones, personalization spaces, and curated youth-driven products.`,
    highlights: [
      "Zoned layout for Gen Z exploration",
      "Modular interaction zones",
      "Tech-integrated and curated storytelling",
    ],
    impact: [
      "Pushed boundaries of traditional IKEA layout",
      "Encouraged movement, discovery, and personalization",
    ],
  },
  {
    id: 6,
    title: "Spotify Street",
    subtitle: "Activation",
    image: Project06,
    location: "Barcelona",
    year: 2024,
    description: "Street activation and pop-up for Spotify.",
    fullDescription: `La Rambla Music Hunt was an interactive street activation turning a chaotic street into a musical game. Passersby collected music based on locations using the Spotify app. The project used augmented reality to trigger songs, pause movement, and encourage urban engagement, with playful design that supported social interactions and cultural storytelling.`,
    highlights: [
      "AR triggers at city landmarks",
      "Interactive playlist building",
      "Designed for quick deployment",
    ],
    stats: [
      { label: "Participants", value: 200, unit: "+" },
    ],
    impact: [
      "Recognized as Best Interactive Street Activation in Class",
      "Sparked dance, social sharing, and engagement",
    ],
  },
  {
    id: 7,
    title: "House of Three Walls",
    subtitle: "Chennai",
    image: Project07,
    description: "Minimalist home design in Chennai.",
    fullDescription: `This furniture-first home prototype focused on storage-integrated walls and dynamic forms. Built with birch ply and soft-close finishes, the layout emphasized function and flexibility in compact living—demonstrating the power of joinery, simplicity, and spatial rhythm in a small footprint.`,
    highlights: [
      "Wall-integrated furniture and storage",
      "Compact layout with angular geometries",
    ],
    impact: [
      "Maximized function in small space",
      "Promoted modular living and craft awareness",
    ],
  },
];

export default projectList;
