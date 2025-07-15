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
import Project03 from "/src/assets/Project_Images/Axel Arigato/0.jpg";
import Project04 from "/src/assets/project_thum_04.png";
import Project05 from "/src/assets/project_thum_05.png";
import Project06 from "/src/assets/project_thum_06.png";
// import Project07 from "/src/assets/project_thum_07.png";
import Project07 from "/src/assets/house_of_three.gif";
import Project08 from "/src/assets/project_thum_08.jpg";
import Project09 from "/src/assets/project_thum_09.jpg";

import spotify_gif from "/src/assets/Project_Images/Spotify/10.gif"

import ikea_video from "/src/assets/Project_Images/IkeaZ/IKEA_FINAL_HD.mp4"

import breatriz_gif from "/src/assets/Project_Images/Beatriz Furest/13.gif"

import axel_video from "/src/assets/Project_Images/Axel Arigato/video.mp4"

import agarwal_image from "/src/assets/Project_Images/Agarwal/3.jpg"

import aero_image from "/src/assets/Project_Images/aero/2.jpg"

import villamar_image from "/src/assets/Project_Images/Villamar/4.jpg"

import { projectImages } from "/src/Data/Images.js";

const projectList = [
  {
    id: 1,
    textColor: "#ffffff", // 🆕 black
    video : axel_video ,
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
  {
    id: 2,
    textColor: "#ffffff", // 🆕 black
    title: "Beatriz Furest",
    subtitle: "Retail Window Display",
    banner : breatriz_gif,
    image: Project04,
    images: projectImages[4], // all images
    location: "Barcelona",
    year: 2024,
    size: "6 sqm",
    description: "An Ode to the Mediterranean",
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
  {
    id: 3,
    textColor: "#ffffff", // 🆕 black
    title: "Spotify",
    subtitle: "La Rambla Music Hunt",
    banner : spotify_gif ,
    image: Project06,
    images: projectImages[8], // all images
    location: "Barcelona",
    year: 2024,
    description: "Less Rush, More Fun! Enhancing Everyday Life Through Music",
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
  {
    id: 4,
    textColor: "#ffffff", // 🆕 black
    title: "IKEA Z",
    subtitle: "Concept Store for Gen Z",
    video : ikea_video ,
    image: Project05,
    images: projectImages[7], // all images
    location: "Barcelona",
    year: 2023,
    size: "520 sqm",
    description: "Hej, IKEA Z! A Fresh Take on design trends",
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
  {
    id: 5,
    textColor: "#ffffff", // 🆕 black
    banner : aero_image ,
    image: Project01,
    images: projectImages[1], // all images
    location: "Chennai",
    year: 2012,
    size: "9,000 sqft",
    title: "Aeronautic Block",
    subtitle: "BSA University",
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
  {
    id: 6,
    textColor: "#ffffff",
    banner: agarwal_image ,
    image: Project02,
    images: projectImages[2], // all images
    location: "Chennai",
    year: 2014,
    size: "3,700 sqft",
    title: "Dr.Agarwal's Eye Clinic",
    subtitle: "To Each, His Own Designing for Belonging and Interaction",
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
  {
    id: 7,
    textColor: "#ffffff", // 🆕 black
    title: "Villamar at the Harbour",
    subtitle: "A Showcase of Values and Visions",
    banner : villamar_image,
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
  {
    id: 8,
    textColor: "#ffffff", // 🆕 black
    image: Project09,
    images: projectImages[5], // all images
    location: "Madrid",
    year: 2024,
    size: "80 sqm",
    title: "Ecoalf",
    subtitle: "Make Sustainable Fashion Not So Alternative",
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
  {
    id: 9,
    textColor: "#ffffff", // 🆕 black
    image: Project07,
    images: projectImages[6], // all images
    title: "House of Three Walls",
    subtitle: "Furniture-driven Apartment Concept",
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
];

export default projectList;

// INTRODUCTION OF ME ( this has to come in the portfolio navigation bar with my picture)

// Hello, I'm Mohamed Safwan, a recent masters graduate in Retail Design at Elisava school of design and engineering, a spatial designer and sometimes an amateur shutterbug. My passion lies in creating designs that resonate with people and enhance convenience, reflecting my deep interest in human and societal needs. I am particularly drawn to branding, marketing, and problem-solving, aspiring to develop ideas and solutions that positively impact lives and brands.

// When Iâ€™m not designing spaces, I find creative flow in graphics, branding, and music. These disciplines feed into my architectural thinkingâ€”each with its rhythm, structure, and emotion.
// My travels have shaped my visual sensibility, curating a narrative that continues on platforms like Instagram. And my daily ritualâ€”coffeeâ€”has become more than just caffeine. It's a quiet catalyst for conversation, often sparking unexpected collaborations, design dialogues, or simply inviting a moment of stillness in an otherwise kinetic world. Please enjoy my portfolio and discover the fun and functionality woven into my work.
