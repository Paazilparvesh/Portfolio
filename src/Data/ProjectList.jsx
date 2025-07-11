import Project01 from "/src/assets/project_thum_01.png";
import Project02 from "/src/assets/project_thum_02.png";
import Project03 from "/src/assets/project_thum_03.png";
import Project04 from "/src/assets/project_thum_04.png";
import Project05 from "/src/assets/project_thum_05.png";
import Project06 from "/src/assets/project_thum_06.png";
import Project07 from "/src/assets/project_thum_07.png";
import Project08 from "/src/assets/project_thum_08.jpg";
import Project09 from "/src/assets/project_thum_09.jpg";

import { projectImages } from "/src/Data/Images.js";

const projectList = [
  {
    id: 1,
    title: "Axel Arigato",
    subtitle: "Inclusive Retail Store",
    image: Project03,
    images: projectImages[3], // all images
    location: "Barcelona",
    year: 2024,
    size: "120 sqm",
    description: "Gallery of tomorrow – Nowness!",
  },
  {
    id: 2,
    title: "Beatriz Furest",
    subtitle: "Retail Window Display",
    image: Project04,
    images: projectImages[4], // all images
    location: "Barcelona",
    year: 2024,
    size: "6 sqm",
    description: "An Ode to the Mediterranean",
    recognition: [
      "🏆 Best Project in Class",
      "🥈 2nd Place – Beatriz Furest Brand Awards",
    ],
  },
  {
    id: 3,
    title: "Spotify",
    subtitle: "La Rambla Music Hunt",
    image: Project06,
    images: projectImages[8], // all images
    location: "Barcelona",
    year: 2024,
    description: "Less Rush, More Fun! Enhancing Everyday Life Through Music",
  },
  {
    id: 4,
    title: "IKEA Z",
    subtitle: "Concept Store for Gen Z",
    image: Project05,
    images: projectImages[7], // all images
    location: "Barcelona",
    year: 2023,
    size: "520 sqm",
    description: "Hej, IKEA Z! A Fresh Take on design trends",
    welcome: {
      topic: "Welcome to IKEAZ project",
      content : `This strategy explores a new retail format centered around curation—crafting an intentional product journey that resonates with the values and lifestyles of Gen Z. Rooted in cultural relevance and digital fluidity, the store becomes more than a transactional space; it becomes a social canvas.The concept is grounded in the urban pulse of New York City, with visual storytelling celebrating inclusivity, self-expression, and tech-native behaviors. By combining tactile elements like curated baskets with digital interfaces, this strategy positions retail as both a lifestyle editor and a cultural bridge.`,
    },
    strategy: {
      topic: "Curated Retail Strategy: Designing for Gen Z in NYC",
      content : `This strategy explores a new retail format centered around curation—crafting an intentional product journey that resonates with the values and lifestyles of Gen Z. Rooted in cultural relevance and digital fluidity, the store becomes more than a transactional space; it becomes a social canvas.The concept is grounded in the urban pulse of New York City, with visual storytelling celebrating inclusivity, self-expression, and tech-native behaviors. By combining tactile elements like curated baskets with digital interfaces, this strategy positions retail as both a lifestyle editor and a cultural bridge.`,
    },
    spine: {
      topic: "The Spine: A Spatial Journey Through Gen Z Needs and IKEA Values",
      content: `The visual represents “The Spine”, a spatial storytelling framework designed around the evolving needs and values of Gen Z living in compact urban settings like NYC. Starting from basic needs such as eating, recycling, and material rentals on the main floor, the journey transitions playfully through a slide—symbolizing a shift into experience-driven spaces. The ground floor continues the narrative by embodying IKEA’s core values: personalization, circular furniture, green living, and inclusivity through kid-friendly and small-space solutions. This path culminates in a flexible auditorium space, reinforcing community, collaboration, and expression. “The Spine” acts as both a literal and conceptual axis that structures not only movement, but also the mindset behind each design zone—blending function, sustainability, and lifestyle into a seamless retail experience tailored for Gen Z.`,
    },
    zoning: {
      topic: "Zoning Strategy – Ground Floor Layout",
      content: `The ground floor zoning plan strategically maps the customer journey, aligning spatial functions with Gen Z needs and IKEA’s values. Anchored along 5th Avenue, the design begins with a welcoming entrance zone that seamlessly guides visitors through intuitive circulation pathways. Key functional clusters—such as grab-and-go food, recycling centers, material rental, and click & collect—are positioned along a clear spine of activity. Interspersed seating pockets offer moments for pause and social interaction, while a central promotional area creates space for seasonal collaborations and immersive brand storytelling. This zoning strategy ensures high-efficiency movement while encouraging dwell time and engagement, balancing practicality with lifestyle-focused spatial experiences.`,
    },
    ground_material: {
      topic: "Material Palette – Ground Floor Aesthetic Strategy",
      content: `The material selection for the ground floor is a thoughtful fusion of texture, tone, and innovation, designed to reflect a modern, youthful aesthetic while supporting functionality and spatial zoning. Key surfaces incorporate La Nena plaster finishes in tones like Catedrais Blue (7031) and Neutral Terrazza (BC001) to visually distinguish zones and enhance wayfinding. Yellow Catedrais 1005 introduces warmth and playfulness, resonating with Gen Z’s vibrant lifestyle. FabBrick white wall tiles add tactile contrast with a sustainable edge, while Alulife panels and perforated mesh metals lend a contemporary industrial touch to ceilings and vertical partitions. This curated palette balances visual interest with durability, creating a cohesive environment that invites engagement and exploration.`,
    },
    first_material: {
      topic: "Material Strategy – Main Floor Identity",
      content: `The main floor material palette creates a dynamic yet harmonious environment that blends functionality with a youthful aesthetic. The foundation is anchored by the rich La Nena Catedrais 7031 Blue finish plaster, which defines circulation paths and injects energy into the space. Complementing this are soft La Nena BC001 Neutro Terrazza and light pink (4300-04) plasters, bringing warmth and contrast to focal areas. La Nena 6019 Green plaster accents soften zones with nature-inspired calm, creating moments of rest. Seastone acoustic terrazzo wall tiles (Project Sea Stone) not only enhance sound control but also add tactile depth and character. Natural wood elements balance the palette, infusing the space with organic warmth, while perforated metal mesh structures add a touch of industrial refinement. This material composition supports spatial zoning while reinforcing the IKEA brand’s commitment to curated, youthful, and sustainable living experiences.`,
    },
  },
  {
    id: 5,
    title: "Aeronautical Block",
    subtitle: "(BSA University)",
    image: Project01,
    images: projectImages[1], // all images
    location: "Chennai",
    year: 2012,
    size: "9,000 sqft",
    description: "Form Follows Function or Function Follows Form?",
  },
  {
    id: 6,
    title: "Dr.Agarwal's",
    subtitle: "Corporate Office",
    image: Project02,
    images: projectImages[2], // all images
    location: "Chennai",
    year: 2014,
    size: "3,700 sqft",
    description: "To Each, His Own – Designing for Belonging and Interaction",
    modular: {
      topic:
        "Modular Zoning Strategy – From Open Space to Interactive Clusters",
      content: `This conceptual zoning diagram illustrates the transformation of an open-plan space into a modular and interactive environment. Initially defined by a simple open layout centered around a service core, the space is restructured through a systematic division of zones into a regular grid. These zones are further refined with clearly defined programs, creating distinct yet collaborative modules that cater to different functions. In the final stage, the expression of zones takes form architecturally, resembling a series of adjoining houses around a shared courtyard. This design approach not only promotes spatial clarity and organization but also fosters community and movement through intentionally placed paths, transitions, and relationships between modules. It reflects a balance of openness and enclosure, making it ideal for adaptive, user-focused environments.`,
    },
    functional: {
      topic: "Functional Spatial Organization – A Balanced Workplace Ecosystem",
      content: `This architectural floor plan illustrates a thoughtfully zoned workplace layout that balances collaboration, privacy, and circulation. Anchored by a central reception lobby (1) and surrounded by courtyards (4) that introduce light and openness, the design supports a dynamic work environment. Workspace zones (3) are strategically grouped in yellow to emphasize areas for productivity and focus, while cabins (5) and meeting rooms (6), shown in dark grey, are distributed to support managerial tasks and collaborative efforts. The inclusion of amenities like conference rooms (2), pantry (8), and executive lounge (7) ensures user comfort and flexibility, enhancing overall work-life integration. The color-coded layout simplifies visual navigation and emphasizes functional clarity. Section A below the plan provides a spatial perspective, highlighting how varying ceiling heights and transparent partitions further enrich the user experience within the office ecosystem.`,
    },
    section: {
      topic: "Section B – Human-Centric Workspace Enclosures",
      content: `This sectional perspective (Section B) showcases a series of thoughtfully designed workspace zones organized into modular enclosures. Each module is shaped like a pitched-roof house, introducing a homely and comfortable visual language within the corporate environment. The variation in ceiling heights and gabled profiles not only enhance spatial identity but also improve acoustics and daylight penetration. Transparent partitions maintain visual connectivity while respecting privacy and focused work. The yellow-highlighted module on the right, likely a meeting or collaborative space, signals hierarchy and function through color zoning. Circulation is seamless, and human figures placed throughout the section emphasize ergonomics and intuitive flow, reinforcing the idea of a user-centered design.`,
    },
    fullDescription: [
      "This office design reimagines departmental zones as homes, connected by informal courtyards for interaction. ",
      "Flexible layouts support focus and collaboration. Whiteboard walls and multi-use nooks enhance creativity.",
    ],
    highlights: [
      "Home-like team zones with shared courtyards",
      "Agile zones with visual brainstorming tools",
      "Balanced layout for collaboration and retreat",
    ],
    impact: [
      "Increased team identity and engagement",
      "Learned principles of spatial rhythm and material impact",
    ],
  },
  {
    id: 7,
    title: "Villamar Show Apartment",
    subtitle: "(Kempinski)",
    image: Project08,
    images: projectImages[9], // all images
    location: "Manama, Bahrain",
    year: 2009,
    size: "180 sqm",
    description: "A Showcase of Values and Visions",
  },
  {
    id: 8,
    title: "Ecoalf",
    subtitle: "Conscious Retail Concept",
    image: Project09,
    images: projectImages[5], // all images
    location: "Madrid",
    year: 2024,
    size: "80 sqm",
    description: "Make Sustainable Fashion Not So Alternative",
  },
  {
    id: 9,
    title: "House of Three Walls",
    subtitle: "Furniture-driven Apartment Concept",
    image: Project07,
    images: projectImages[6], // all images
    description: "Explores furniture as primary design driver",
  },
];

export default projectList;









// const projectList = [
//   {
//     id: 1,
//     title: "Aeronautical Block",
//     subtitle: "(BSA, University)",
//     image: Project01,
//     location: "Chennai",
//     year: 2012,
//     size: "9,000 sqft",
//     description: "Aeronautical block project for BSA University.",
//     fullDescription: `This academic project explores the intersection of aeronautics and architecture through two building masses. One block emphasizes “form follows function,” while the other embraces a reverse philosophy: “function follows form.” The Aeronautical block is anchored by a central public courtyard, supporting a program of classrooms, labs, and even an aircraft hangar as a learning space. The Architecture block promotes natural ventilation and visual porosity, encouraging interaction and movement.`,
//     highlights: [
//       "Central plaza promotes social interaction and connectivity",
//       "Aircraft hangar repurposed as an exhibition space",
//       "Passive design strategies for comfort and sustainability",
//     ],
//     impact: [
//       "Foundation for architectural thinking and narrative-driven design",
//       "Introduced passive climatic strategies and public realm integration",
//     ],
//   },
//   {
//     id: 2,
//     title: "Dr.Agarwal's",
//     subtitle: "Corporate Office",
//     image: Project02,
//     location: "Chennai",
//     year: 2014,
//     size: "3,700 sqft",
//     description: "Corporate office space for Dr. Agarwal's group.",
//     fullDescription: `The design transforms a linear office layout into a series of “homes” for each department, connected by interactive “courtyards.” These zones act as informal meeting areas, equipped with whiteboard walls to foster impromptu collaboration. Materiality and spatial rhythm support team identity, while shared zones like the pantry promote cross-team synergy.`,
//     highlights: [
//       "Departmental 'homes' with shared courtyards",
//       "Whiteboard walls for agile and visual brainstorming",
//       "Open-plan layout supporting retreat and interaction",
//     ],
//     impact: [
//       "Encouraged cross-department communication via spatial strategies",
//       "Improved team engagement and sense of belonging",
//     ],
//   },
//   {
//     id: 3,
//     title: "Architecture School",
//     subtitle: "(BSA, University)",
//     image: Project03,
//     description: "Modern design for architecture school at BSA University.",
//     // You can replicate the format used for project 1
//   },
//   {
//     id: 4,
//     title: "Beatriz Furest",
//     subtitle: "Retail Window Display",
//     image: Project04,
//     location: "Barcelona",
//     year: 2024,
//     size: "6 sqm",
//     description: "An Ode to the Mediterranean",
//     fullDescription: `This immersive window display was a poetic tribute to the Mediterranean sunset. Spanning 6 sqm, it evolved over 60 days with fabric and paper gradients to reflect the shifting sky. A modular stone system showcased over 30 products, promoting flexibility and customer interaction. It was delivered on time, under budget, and celebrated for its visual storytelling.`,
//     stats: [
//       { label: "Foot Traffic Increase", value: 22, unit: "%" },
//       { label: "Cost Savings", value: 18, unit: "%" },
//       { label: "Budget", value: 450, unit: "€" },
//     ],
//     highlights: [
//       "Evolving window display over 60 days",
//       "Modular stone display for 30+ products",
//       "Minimalist materials: soft fabric, gradient paper",
//     ],
//     impact: [
//       "Boosted store visits",
//       "Reduced VM costs via reusable materials",
//       "Encouraged product engagement",
//     ],
//     recognition: [
//       "🏆 Best Project in Class",
//       "🥈 2nd Place – Beatriz Furest Brand Awards",
//     ],
//   },
//   {
//     id: 5,
//     title: "Ikea Z!",
//     subtitle: "Project",
//     image: Project05,
//     location: "Barcelona",
//     year: 2023,
//     size: "430 sqm",
//     description: "Innovative design showcase for Ikea Z!",
//     fullDescription: `This Gen Z-focused concept store blends retail with content creation, personalization, and sustainability. Moving away from traditional IKEA maze layouts, it offers a modular, experiential design based on the 4 C’s: Collection, Categorization, Conceptualization, and Circulation. The design includes social zones, personalization spaces, and curated youth-driven products.`,
//     highlights: [
//       "Zoned layout for Gen Z exploration",
//       "Modular interaction zones",
//       "Tech-integrated and curated storytelling",
//     ],
//     impact: [
//       "Pushed boundaries of traditional IKEA layout",
//       "Encouraged movement, discovery, and personalization",
//     ],
//   },
//   {
//     id: 6,
//     title: "Spotify Street",
//     subtitle: "Activation",
//     image: Project06,
//     location: "Barcelona",
//     year: 2024,
//     description: "Street activation and pop-up for Spotify.",
//     fullDescription: `La Rambla Music Hunt was an interactive street activation turning a chaotic street into a musical game. Passersby collected music based on locations using the Spotify app. The project used augmented reality to trigger songs, pause movement, and encourage urban engagement, with playful design that supported social interactions and cultural storytelling.`,
//     highlights: [
//       "AR triggers at city landmarks",
//       "Interactive playlist building",
//       "Designed for quick deployment",
//     ],
//     stats: [{ label: "Participants", value: 200, unit: "+" }],
//     impact: [
//       "Recognized as Best Interactive Street Activation in Class",
//       "Sparked dance, social sharing, and engagement",
//     ],
//   },
//   {
//     id: 7,
//     title: "House of Three Walls",
//     subtitle: "Chennai",
//     image: Project07,
//     description: "Minimalist home design in Chennai.",
//     fullDescription: `This furniture-first home prototype focused on storage-integrated walls and dynamic forms. Built with birch ply and soft-close finishes, the layout emphasized function and flexibility in compact living—demonstrating the power of joinery, simplicity, and spatial rhythm in a small footprint.`,
//     highlights: [
//       "Wall-integrated furniture and storage",
//       "Compact layout with angular geometries",
//     ],
//     impact: [
//       "Maximized function in small space",
//       "Promoted modular living and craft awareness",
//     ],
//   },
// ];
