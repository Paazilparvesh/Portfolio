import { projectImages } from "/src/Data/Images.js";

// Projects.jsx page Gifs
import Project00 from "/src/assets/Architecture_Block.gif";
import Project01 from "/src/assets/Aero-movement.gif";
import Project02 from "/src/assets/Agarwal.gif";
import Project03 from "/src/assets/Axel-arigato.gif";
import Project04 from "/src/assets/Beatriz-Furest.gif";
import Project05 from "/src/assets/ikea.gif";
import Project06 from "/src/assets/Spotify.gif";
import Project07 from "/src/assets/house_of_three.gif";
import Project08 from "/src/assets/vilammar.gif";
import Project09 from "/src/assets/eco-alf.gif";

// Banner Image
import agarwal_image from "/src/assets/Project_Images/Agarwal/3.jpg";
import aero_image from "/src/assets/Project_Images/aero/2.jpg";
import architecture_image from "/src/assets/Project_Images/Architecture/1.jpg";
import villamar_image from "/src/assets/Project_Images/Villamar/4.jpg";
// Banner Gifs
import spotify_gif from "/src/assets/Project_Images/Spotify/10.gif";
import breatriz_gif from "/src/assets/Project_Images/Beatriz Furest/13.gif";
// Banner Video
import ikea_video from "/src/assets/Project_Images/IkeaZ/IKEA_FINAL_HD.mp4";
import axel_video from "/src/assets/Project_Images/Axel Arigato/video.mp4";

const projectList = [
  // Axel Arigato
  {
    id: 1,
    textColor: "#ffffff", // 🆕 black
    video: axel_video,
    image: Project03,
    images: projectImages[3], // all images
    location: "Barcelona",
    year: 2024,
    size: "120 sqm",
    title: "Axel Arigato",
    subtitle: "Gallery of tomorrow – Nowness!",
    fulldesc: `This latest branding project explores Axel Arigato brand's image woven into a design language where brutally honest materials like reclaimed stones, recycled aluminium extrusions make for a retail store of minimalistic wholesome experiences. Taking the DNA of the brand; Japanese simplicity and positive consumer experience; the store is envisioned into exploiting it with sustainable materials, simple circulation and pop culture dynamics; allowed to create a retail storytelling of a funky yet relatable sneaker store with the positive impact of including people of all abilities. The design promotes the nowness movement that curates retail design for being inclusive, interactive and adaptive.`,
    impact: [
      "Dialogue between space and brand values in shaping awareness and inclusivity.",
      "Subtle, circular material palette recycled metals, organic textiles, upcycled surfaces.",
      "Space-as-platform: promotes education, subscription-based retail and people values.",
    ],
    highlights: [
      "Adapting the people of all abilities; even those with limited disabilities to enjoy carefree shopping experience.",
      "Reinstating the idea of the brand with more moral values and societal acceptance encouraging brand awareness.",
    ],
  },
  // Beatriz Furest
  {
    id: 2,
    textColor: "#ffffff", // 🆕 black
    title: "Beatriz Furest",
    subtitle: "An Ode to the Mediterranean",
    banner: breatriz_gif,
    image: Project04,
    images: projectImages[4], // all images
    location: "Barcelona",
    year: 2024,
    size: "6 sqm",
    fulldesc:
      "This immersive window display for Beatriz Furest was conceived as a poetic tribute to the Mediterranean sunset. Spanning 6 square meters, the installation used minimalist design strategies soft fabric to simulate the sea and evolving paper gradients to represent the sky. The display unfolded over 60 days, gradually transforming to echo the sun's descent, creating a living artwork within a retail context. A key innovation was the modular stone display system, designed for both functionality and flexibility. This allowed the brand to showcase over 16 products for the summer collection in multiple configurations, enhancing visual storytelling and encouraging customer engagement.",
    impact: [
      "Increase in foot traffic by approximately 22% during the display period (data from store manager feedback).",
      "Helped reduce visual merchandising costs by 18% by using locally sourced, reusable materials.",
      "Completed within a tight budget of â‚¬800, with 100% on-time delivery.",
      "Collaborated with 3 local contractors, 1 store manager, and a team of 4 peers to execute the vision.",
      "The process emphasized practical learning in material procurement, budget management, and interdisciplinary collaboration. Working across language barriers using .",
      "sketches, diagrams, and sign language, the project showcased the power of adaptive communication and design simplicity.",
    ],
    recognition: [
      "Best Project in Class",
      "2nd Place – Beatriz Furest Brand Awards",
    ],
  },
  // Spotify
  {
    id: 3,
    textColor: "#ffffff", // 🆕 black
    title: "Spotify",
    subtitle: "La Rambla Music hunt",
    banner: spotify_gif,
    image: Project06,
    images: projectImages[8], // all images
    location: "Barcelona",
    year: 2024,
    fulldesc:
      "As part of an interactive street activation exercise, this project transformed La Rambla, one of Barcelona's most vibrant and chaotic streets, into a personalized musical playground. Using the Spotify app, passersby were invited to participate in a 'music hunt', collecting location-specific songs that reflected the spirit and drama of the street itself. La Rambla, known for its never-ending motion and unpredictability, already feels like a performance. So rather than over-enhancing an already heightened reality, our goal was simple: inject joy into the everyday walkthrough music, augmented reality, and pop culture.By encouraging users to slow down and engage with their environment, this experience disrupted the 'mad walking' pace of the street, turning it into a lighthearted, interactive, and immersive journey. Through the Spotify platform, each participant curated a unique playlist that told their La Rambla story.",
    impact: [
      "Augmented Reality triggers at key landmarks.",
      "Interactive Spotify integration for personalized song collection.",
      "Playful urban engagement encouraging pause, play, and interaction.",
    ],
    highlights: [
      "Engaged over 200 participants during initial activation demo.",
      "Sparked spontaneous dance moments, shared social content, and dialogue among strangers.",
    ],
  },
  // Ecoalf
  {
    id: 8,
    textColor: "#ffffff", // 🆕 black
    title: "Ecoalf",
    subtitle: "Conscious Retail",
    image: Project09,
    images: projectImages[5], // all images
    location: "Madrid",
    year: 2024,
    size: "80 sqm",
    fulldesc: `Time repeats every 24 hours. Trends repeat every few years. But our planet? It doesn't get a second chance.
This conceptual project for Ecoalf, a leader in sustainable fashion, reimagines the retail space not just as a store, but as a collaborative sustainability hub.
Set within a compact 80 sqm footprint, the project transforms Ecoalf's identity into a platform for collective action, inviting other eco-conscious brands to cohabit and co-create. The spatial strategy encourages brand cross-pollination, with modular retail zones, flexible installations, and digital subscriptions designed to reduce energy consumption and challenge the norms of fast fashion retail.
Rooted in a mission to promote conscious consumerism, the store acts as both a showcase and a storyteller. Through curated product narratives, interactive educational elements, and shared creative resources, the space becomes a living manifesto: There is no Planet B. Now is the time. And the time is now.`,
    highlights: [
      "Collaborative zones for co-branding and shared storytelling.",
      "Subtle, circular material palette recycled metals, organic textiles, upcycled surfaces.",
      "Modular display units for rotating collections and low-impact merchandising.",
      "Space-as-platform: promotes education, subscription-based retail, and planet-first values.",
    ],
    impact: [
      "Proposed a new retail stewardship model encouraging unity among small sustainable brands.",
      "Advanced the idea of shared financial and creative ecosystems in fashion.",
      "A spatial narrative that translates conscious consumerism into tangible retail experience.",
    ],
  },
  // IkeaZ
  {
    id: 4,
    textColor: "#ffffff", // 🆕 black
    title: "IKEA Z",
    subtitle: "A Concept store for Gen Z",
    video: ikea_video,
    image: Project05,
    images: projectImages[7], // all images
    location: "Barcelona",
    year: 2023,
    size: "520 sqm",
    fulldesc:
      "What if IKEA met the energy of Gen Z on the streets of New York City? IKEA Z is a speculative concept store that reimagines the traditional IKEA retail model by aligning it with the dynamic, tech-savvy, and free-spirited lifestyle of Gen Z consumers. Designed within a 520 sqm space, the concept breaks away from the brand's signature maze-like layout to prioritize retail storytelling, accessibility, and lifestyle identity. At the heart of the project lies a curation strategy guided by the 4 C's: Collection, Categorization, Conceptualization, and Circulation. Each product was handpicked to represent the unique values of Gen Z sustainability, flexibility, digital integration, and bold self-expression. The space was designed as a celebration of youth, allowing visitors to explore, interact, and identify with IKEA products in a fresh, democratic, and unfiltered way.",
    highlights: [
      "Zoned experiences for content creation, relaxation, tech-integrated living, and personalization.",
      "Modular layouts encouraging movement, interaction, and discovery.",
      "Curated product collections themed around Gen Z lifestyle behaviors.",
      "Designed to stimulate emotional connection and enhance brand relevance among younger audiences.",
    ],
    impact: [
      "Developed as part of an international collaboration, fostering cross-cultural design thinking.",
      "Celebrated for pushing the boundaries of traditional retail design through creative strategy and spatial storytelling.",
      "One of the most enjoyable and versatile projects undertaken during the semester.",
    ],
  },
  // Agarwal
  {
    id: 6,
    textColor: "#ffffff",
    title: "Dr.Agarwal's Eye Clinic",
    subtitle: "Collaborative courtyards",
    banner: agarwal_image,
    image: Project02,
    images: projectImages[2], // all images
    location: "Chennai",
    year: 2014,
    size: "3,700 sqft",
    fulldesc: `This interior project for Agarwal Eye Clinics corporate office explored how a linear floor plate could be transformed into a space that fosters both individual identity and collective synergy.
The concept was built around the idea that each department functions as a home, while the spaces in between act as courtyard shared zones that encourage informal conversations, impromptu meetings, and cross-team collaboration. These courtyards were not only spatial buffers but also creative catalysts: designed with whiteboard walls, they served as flexible canvases for brainstorming, casual meetups, and daily standups. The design promotes a balanced work culture encouraging collaboration without disrupting the retreat-like focus of individual teams. A shared pantry, multi-functional meeting nooks, and circulation zones double as spaces for relaxation and spontaneous exchange.`,
    highlights: [
      "Reimagined a linear office layout as a sequence of 'homes' and shared courtyards.",
      "Materiality and color schemes were tailored to reinforce spatial rhythm and team identity.",
      "Open yet defined zones to accommodate both retreat and functional needs.",
    ],
    impact: [
      "Created a sense of belonging and ownership within departments while fostering organizational cohesion.",
      "Offered valuable insights into material selection, color behavior, and scale in interior design.",
    ],
  },
  //Architecture Block
  {
    id: 5,
    textColor: "#ffffff", // 🆕 black
    title: "Architecture Block @ BSA University",
    subtitle: "Step into the unknown",
    banner: architecture_image,
    image: Project00,
    images: projectImages[10], // all images
    location: "Chennai",
    year: 2013,
    size: "8,200 sqft",
    fulldesc: `A sunken ground plane with a system of shifting decks through the built form that acts as public place to gather and collaborate activities. This stepped form allows to gather interest through its mass and the relation of the foreground to the building is reinforced. This built form thus allows for site interaction and enjoys being a node to connect outdoor and indoor activities that materialises the curriculum of architecture-interaction, spatial understanding and forms/materials.`,
    highlights: [
      "A spatial narrative that translates conscious student and surrounding experience.",
      "Revealed the power of built form simplicity in creating rich spatial experiences.",
    ],
    impact: [
      "Strengthened understanding of cohesive interior-exterior integration, end-user analysis, and climatic responsiveness.",
      "Sparked an ongoing interest in narrative-driven form-making and programmatic innovation.",
    ],
  },
  // Aeronautical Block
  {
    id: 5,
    textColor: "#ffffff", // 🆕 black
    title: "Aeronautic Block @ BSA University",
    subtitle: "Dialogue between site and shapes ",
    banner: aero_image,
    image: Project01,
    images: projectImages[1], // all images
    location: "Chennai",
    year: 2012,
    size: "9,000 sqft",
    fulldesc: `The Aeronautical block is envisioned as three juxtaposed volumes, anchored by a central public courtyard/plaza that extends into the site street, enhancing connectivity between the front and rear. The design makes a strong formal statement the exterior form flows organically into the interior supporting a functional program that includes classrooms, laboratories, seminar halls, staff areas, and an aircraft hangar repurposed as an exhibition space. Conversely, the Architecture block embraces a reverse philosophy: function follows form. Here, spaces are staggered, interconnected, and intentionally shaped to provoke student interaction, promote natural ventilation, and modify the microclimate through thoughtful spatial porosity. The design encourages movement and curiosity while fulfilling academic requirements with flexibility and openness.`,
    highlights: [
      "Central plaza promotes social interaction and visual connectivity.",
      "Air hangar designed as a multi-use exhibition and learning space.",
      "Passive design strategies influence thermal comfort and spatial quality.",
      "Layered spatial arrangement enhances student collaboration and climate responsiveness.",
    ],
    impact: [
      "Served as my first professional design project, forming a foundation for my architectural approach.",
      "Strengthened understanding of cohesive interior-exterior integration, end-user analysis, and climatic responsiveness.",
      "Sparked an ongoing interest in narrative-driven form-making and programmatic innovation.",
      "Recognized as best institutional project by Archello and CAF (Chennai architecture Forum).",
    ],
  },
  // House of Three Walls
  {
    id: 9,
    textColor: "#ffffff", // 🆕 black
    title: "House of Three Walls",
    subtitle: "Storage optimisation",
    image: Project07,
    images: projectImages[6], // all images
    fulldesc: `A prototype apartment unit, titled The House of Three Walls, explored furniture as a primary design driver. The concept focused on wall-integrated storage and angular furniture geometries, maximizing utility in a compact layout. Simple materials such as birch ply, laminated finishes, and soft-closing mechanisms were skillfully manipulated to create dynamic, flexible forms that could adapt to user needs while maintaining elegance and function.`,
    highlights: [
      "Custom-designed furniture solutions for spatial efficiency and aesthetic balance.",
      "Integration of angular, storage-optimized elements within living room walls,",
      "Emphasis on craft, joinery, and modularity to enhance livability and luxury.",
    ],
    impact: [
      "Revealed the power of material simplicity in creating rich spatial experiences.",
      "Key learning moment: the dialogue between furniture and architecture in shaping space.",
    ],
  },
  // Villamar
  {
    id: 7,
    textColor: "#ffffff", // 🆕 black
    title: "Villamar at the Harbour",
    subtitle: "The twist and turns",
    banner: villamar_image,
    image: Project08,
    images: projectImages[9], // all images
    location: "Manama, Bahrain",
    year: 2009,
    size: "180 sqm",
    fulldesc: `As part of an internship project, this assignment involved the interior design of a show apartment within the iconic Villamar residential towers at the Harbour in Manama. The design brief was to reflect Mediterranean values through carefully curated materials, textures, and spatial while working within the constraints of a predefined apartment layout. The project was an exercise in understanding how materiality can both define and dissolve boundaries, setting distinct spatial moods while maintaining cohesion. Mediterranean warmth was introduced through earth-toned palettes, natural finishes, and tactile surfaces, aimed at resonating with the target clientele's lifestyle expectations.`,
    highlights: [
      "Mediterranean-inspired interior using natural materials and warm color palettes.",
      "Multi residential spatial dialogue catering to the clientele.",
    ],
    impact: [
      "Strengthened understanding of interior detailing, spatial zoning, and user-centric design.",
      "Revealed the power of material simplicity in creating rich spatial experiences.",
    ],
  },
];

export default projectList;
