// import Project01 from "/src/assets/project_thum_01.png";
// import Project02 from "/src/assets/project_thum_02.png";
// import Project03 from "/src/assets/project_thum_03.png";
// import Project04 from "/src/assets/project_thum_04.png";
// import Project05 from "/src/assets/project_thum_05.png";
// import Project06 from "/src/assets/project_thum_06.png";
// import Project07 from "/src/assets/project_thum_07.png";
// import Project08 from "/src/assets/project_thum_08.jpg";
// import Project09 from "/src/assets/project_thum_09.jpg";

// import { projectImages } from "/src/Data/Images.js";

// const projectList = [
//   {
//     id: 1,
//     title: "Axel Arigato",
//     subtitle: "Inclusive Retail Store",
//     image: Project03,
//     images: projectImages[3], // all images
//     location: "Barcelona",
//     year: 2024,
//     size: "120 sqm",
//     description: "Gallery of tomorrow – Nowness!",
//   },
//   {
//     id: 2,
//     title: "Beatriz Furest",
//     subtitle: "Retail Window Display",
//     image: Project04,
//     images: projectImages[4], // all images
//     location: "Barcelona",
//     year: 2024,
//     size: "6 sqm",
//     description: "An Ode to the Mediterranean",
//     recognition: [
//       "🏆 Best Project in Class",
//       "🥈 2nd Place – Beatriz Furest Brand Awards",
//     ],
//   },
//   {
//     id: 3,
//     title: "Spotify",
//     subtitle: "La Rambla Music Hunt",
//     image: Project06,
//     images: projectImages[8], // all images
//     location: "Barcelona",
//     year: 2024,
//     description: "Less Rush, More Fun! Enhancing Everyday Life Through Music",
//   },
//   {
//     id: 4,
//     title: "IKEA Z",
//     subtitle: "Concept Store for Gen Z",
//     image: Project05,
//     images: projectImages[7], // all images
//     location: "Barcelona",
//     year: 2023,
//     size: "520 sqm",
//     description: "Hej, IKEA Z! A Fresh Take on design trends",
//     welcome: {
//       topic: "Welcome to IKEAZ project",
//       content: `This strategy explores a new retail format centered around curation—crafting an intentional product journey that resonates with the values and lifestyles of Gen Z. Rooted in cultural relevance and digital fluidity, the store becomes more than a transactional space; it becomes a social canvas.The concept is grounded in the urban pulse of New York City, with visual storytelling celebrating inclusivity, self-expression, and tech-native behaviors. By combining tactile elements like curated baskets with digital interfaces, this strategy positions retail as both a lifestyle editor and a cultural bridge.`,
//     },
//     strategy: {
//       topic: "Curated Retail Strategy: Designing for Gen Z in NYC",
//       content: `This strategy explores a new retail format centered around curation—crafting an intentional product journey that resonates with the values and lifestyles of Gen Z. Rooted in cultural relevance and digital fluidity, the store becomes more than a transactional space; it becomes a social canvas.The concept is grounded in the urban pulse of New York City, with visual storytelling celebrating inclusivity, self-expression, and tech-native behaviors. By combining tactile elements like curated baskets with digital interfaces, this strategy positions retail as both a lifestyle editor and a cultural bridge.`,
//     },
//     spine: {
//       topic: "The Spine: A Spatial Journey Through Gen Z Needs and IKEA Values",
//       content: `The visual represents “The Spine”, a spatial storytelling framework designed around the evolving needs and values of Gen Z living in compact urban settings like NYC. Starting from basic needs such as eating, recycling, and material rentals on the main floor, the journey transitions playfully through a slide—symbolizing a shift into experience-driven spaces. The ground floor continues the narrative by embodying IKEA’s core values: personalization, circular furniture, green living, and inclusivity through kid-friendly and small-space solutions. This path culminates in a flexible auditorium space, reinforcing community, collaboration, and expression. “The Spine” acts as both a literal and conceptual axis that structures not only movement, but also the mindset behind each design zone—blending function, sustainability, and lifestyle into a seamless retail experience tailored for Gen Z.`,
//     },
//     zoning: {
//       topic: "Zoning Strategy – Ground Floor Layout",
//       content: `The ground floor zoning plan strategically maps the customer journey, aligning spatial functions with Gen Z needs and IKEA’s values. Anchored along 5th Avenue, the design begins with a welcoming entrance zone that seamlessly guides visitors through intuitive circulation pathways. Key functional clusters—such as grab-and-go food, recycling centers, material rental, and click & collect—are positioned along a clear spine of activity. Interspersed seating pockets offer moments for pause and social interaction, while a central promotional area creates space for seasonal collaborations and immersive brand storytelling. This zoning strategy ensures high-efficiency movement while encouraging dwell time and engagement, balancing practicality with lifestyle-focused spatial experiences.`,
//     },
//     ground_material: {
//       topic: "Material Palette – Ground Floor Aesthetic Strategy",
//       content: `The material selection for the ground floor is a thoughtful fusion of texture, tone, and innovation, designed to reflect a modern, youthful aesthetic while supporting functionality and spatial zoning. Key surfaces incorporate La Nena plaster finishes in tones like Catedrais Blue (7031) and Neutral Terrazza (BC001) to visually distinguish zones and enhance wayfinding. Yellow Catedrais 1005 introduces warmth and playfulness, resonating with Gen Z’s vibrant lifestyle. FabBrick white wall tiles add tactile contrast with a sustainable edge, while Alulife panels and perforated mesh metals lend a contemporary industrial touch to ceilings and vertical partitions. This curated palette balances visual interest with durability, creating a cohesive environment that invites engagement and exploration.`,
//     },
//     first_material: {
//       topic: "Material Strategy – Main Floor Identity",
//       content: `The main floor material palette creates a dynamic yet harmonious environment that blends functionality with a youthful aesthetic. The foundation is anchored by the rich La Nena Catedrais 7031 Blue finish plaster, which defines circulation paths and injects energy into the space. Complementing this are soft La Nena BC001 Neutro Terrazza and light pink (4300-04) plasters, bringing warmth and contrast to focal areas. La Nena 6019 Green plaster accents soften zones with nature-inspired calm, creating moments of rest. Seastone acoustic terrazzo wall tiles (Project Sea Stone) not only enhance sound control but also add tactile depth and character. Natural wood elements balance the palette, infusing the space with organic warmth, while perforated metal mesh structures add a touch of industrial refinement. This material composition supports spatial zoning while reinforcing the IKEA brand’s commitment to curated, youthful, and sustainable living experiences.`,
//     },
//   },
//   {
//     id: 5,
//     title: "Aeronautical Block",
//     subtitle: "(BSA University)",
//     image: Project01,
//     images: projectImages[1], // all images
//     location: "Chennai",
//     year: 2012,
//     size: "9,000 sqft",
//     description: "Form Follows Function or Function Follows Form?",
//   },
//   {
//     id: 6,
//     title: "Dr.Agarwal's",
//     subtitle: "Corporate Office",
//     image: Project02,
//     images: projectImages[2], // all images
//     location: "Chennai",
//     year: 2014,
//     size: "3,700 sqft",
//     description: "To Each, His Own – Designing for Belonging and Interaction",
//     modular: {
//       topic:
//         "Modular Zoning Strategy – From Open Space to Interactive Clusters",
//       content: `This conceptual zoning diagram illustrates the transformation of an open-plan space into a modular and interactive environment. Initially defined by a simple open layout centered around a service core, the space is restructured through a systematic division of zones into a regular grid. These zones are further refined with clearly defined programs, creating distinct yet collaborative modules that cater to different functions. In the final stage, the expression of zones takes form architecturally, resembling a series of adjoining houses around a shared courtyard. This design approach not only promotes spatial clarity and organization but also fosters community and movement through intentionally placed paths, transitions, and relationships between modules. It reflects a balance of openness and enclosure, making it ideal for adaptive, user-focused environments.`,
//     },
//     functional: {
//       topic: "Functional Spatial Organization – A Balanced Workplace Ecosystem",
//       content: `This architectural floor plan illustrates a thoughtfully zoned workplace layout that balances collaboration, privacy, and circulation. Anchored by a central reception lobby (1) and surrounded by courtyards (4) that introduce light and openness, the design supports a dynamic work environment. Workspace zones (3) are strategically grouped in yellow to emphasize areas for productivity and focus, while cabins (5) and meeting rooms (6), shown in dark grey, are distributed to support managerial tasks and collaborative efforts. The inclusion of amenities like conference rooms (2), pantry (8), and executive lounge (7) ensures user comfort and flexibility, enhancing overall work-life integration. The color-coded layout simplifies visual navigation and emphasizes functional clarity. Section A below the plan provides a spatial perspective, highlighting how varying ceiling heights and transparent partitions further enrich the user experience within the office ecosystem.`,
//     },
//     section: {
//       topic: "Section B – Human-Centric Workspace Enclosures",
//       content: `This sectional perspective (Section B) showcases a series of thoughtfully designed workspace zones organized into modular enclosures. Each module is shaped like a pitched-roof house, introducing a homely and comfortable visual language within the corporate environment. The variation in ceiling heights and gabled profiles not only enhance spatial identity but also improve acoustics and daylight penetration. Transparent partitions maintain visual connectivity while respecting privacy and focused work. The yellow-highlighted module on the right, likely a meeting or collaborative space, signals hierarchy and function through color zoning. Circulation is seamless, and human figures placed throughout the section emphasize ergonomics and intuitive flow, reinforcing the idea of a user-centered design.`,
//     },
//     fullDescription: [
//       "This office design reimagines departmental zones as homes, connected by informal courtyards for interaction. ",
//       "Flexible layouts support focus and collaboration. Whiteboard walls and multi-use nooks enhance creativity.",
//     ],
//     highlights: [
//       "Home-like team zones with shared courtyards",
//       "Agile zones with visual brainstorming tools",
//       "Balanced layout for collaboration and retreat",
//     ],
//     impact: [
//       "Increased team identity and engagement",
//       "Learned principles of spatial rhythm and material impact",
//     ],
//   },
//   {
//     id: 7,
//     title: "Villamar Show Apartment",
//     subtitle: "(Kempinski)",
//     image: Project08,
//     images: projectImages[9], // all images
//     location: "Manama, Bahrain",
//     year: 2009,
//     size: "180 sqm",
//     description: "A Showcase of Values and Visions",
//   },
//   {
//     id: 8,
//     title: "Ecoalf",
//     subtitle: "Conscious Retail Concept",
//     image: Project09,
//     images: projectImages[5], // all images
//     location: "Madrid",
//     year: 2024,
//     size: "80 sqm",
//     description: "Make Sustainable Fashion Not So Alternative",
//   },
//   {
//     id: 9,
//     title: "House of Three Walls",
//     subtitle: "Furniture-driven Apartment Concept",
//     image: Project07,
//     images: projectImages[6], // all images
//     description: "Explores furniture as primary design driver",
//   },
// ];

// export default projectList;


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
    textColor: "#000000", // 🆕 black
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
    textColor: "#000000", // 🆕 black
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
    textColor: "#ffffff", // 🆕 black
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
    textColor: "#000000", // 🆕 black
    title: "IKEA Z",
    subtitle: "Concept Store for Gen Z",
    image: Project05,
    images: projectImages[7], // all images
    location: "Barcelona",
    year: 2023,
    size: "520 sqm",
    description: "Hej, IKEA Z! A Fresh Take on design trends",
  },
  {
    id: 5,
    textColor: "#ffffff", // 🆕 black
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
    textColor: "#ffffff", // 🆕 black
    title: "Dr.Agarwal's",
    subtitle: "Corporate Office",
    image: Project02,
    images: projectImages[2], // all images
    location: "Chennai",
    year: 2014,
    size: "3,700 sqft",
    description: "To Each, His Own – Designing for Belonging and Interaction",
  },
  {
    id: 7,
    textColor: "#000000", // 🆕 black
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
    textColor: "#000000", // 🆕 black
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
    textColor: "#ffffff", // 🆕 black
    title: "House of Three Walls",
    subtitle: "Furniture-driven Apartment Concept",
    image: Project07,
    images: projectImages[6], // all images
    description: "Explores furniture as primary design driver",
  },
];

export default projectList;
