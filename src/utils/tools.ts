type Tool = {
  name: string;
  description: string;
  preview: string;
  link: string;
  tags: Tag[];
  category: string;
};

type Tag =
  | "font"
  | "design"
  | "typography"
  | "icon"
  | "open-source"
  | "audio"
  | "video"
  | "ai"
  | "dev"
  | "docs"
  | "notes"
  | "terminal"
  | "pkg";

const tagColorMap: Record<Tag, string> = {
  font: "bg-blue-100 text-blue-800",
  design: "bg-green-100 text-green-800",
  typography: "bg-purple-100 text-purple-800",
  icon: "bg-yellow-100 text-yellow-800",
  "open-source": "bg-red-100 text-red-800",
  ai: "bg-teal-100 text-teal-800",
  dev: "bg-gray-100 text-gray-800",
  pkg: "bg-pink-100 text-pink-800",
  terminal: "bg-orange-100 text-orange-800",
  docs: "bg-indigo-100 text-indigo-800",
  notes: "bg-lime-100 text-lime-800",
  audio: "bg-cyan-100 text-cyan-800",
  video: "bg-amber-100 text-amber-800",
};

const data: Tool[] = [
  {
    name: "Lucide Icons",
    preview: "/previews/lucide.png",
    description:
      "Lucide is a collection of open-source icons designed to be simple and consistent.",
    link: "https://lucide.dev",
    tags: ["icon", "design", "open-source"],
    category: "Design & UI",
  },
  {
    name: "JSON Data AI",
    preview: "/previews/json-data-ai.png",
    description:
      "A tool that generates JSON data for various applications using AI.",
    link: "https://jsondata.com",
    tags: ["dev", "ai"],
    category: "AI & Data",
  },
  {
    name: "DeepSeek AI Repository",
    preview: "/previews/deepseek-ai.png",
    description: "A repository of AI tools and resources provided by DeepSeek.",
    link: "https://github.com/deepseek-ai",
    tags: ["ai", "open-source", "dev"],
    category: "AI & Data",
  },
  {
    name: "Dev Roadmaps",
    preview: "/previews/dev-roadmaps.png",
    description:
      "A collection of roadmaps for developers to guide their learning and career paths.",
    link: "https://roadmap.sh",
    tags: ["dev"],
    category: "Documentation & Learning",
  },
  {
    name: "Mobbin",
    preview: "/previews/mobbin.png",
    description:
      "A design library with a collection of mobile app designs and patterns.",
    link: "https://mobbin.com",
    tags: ["design", "typography"],
    category: "Design & UI",
  },
  {
    name: "Tailwind CSS Colors",
    preview: "/previews/tailwind-ui-colors.png",
    description: "A sample website to sample color palettes for Tailwind CSS.",
    link: "https://uicolors.app/",
    tags: ["dev", "design"],
    category: "Design & UI",
  },
  {
    name: "Starlight Docs",
    preview: "/previews/starlight.png",
    description:
      "A modern documentation site generator that helps you create beautiful and functional docs.",
    link: "https://starlight.astro.build",
    tags: ["dev", "open-source", "docs"],
    category: "Documentation & Learning",
  },
  {
    name: "XY Flow",
    preview: "/previews/react-flow.png",
    description:
      "A library for building interactive node-based applications for different web frameworks.",
    link: "https://github.com/xyflow/xyflow",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "React Spreadsheet",
    preview: "/previews/react-spreadsheet.png",
    description:
      "A React component for creating interactive spreadsheets with features like formulas and cell formatting.",
    link: "https://iddan.github.io/react-spreadsheet/",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "No Code Architects Toolkit",
    preview: "/previews/no-code-architects-toolkit.png",
    description:
      "The NCA toolkit eliminates monthly subscription fees by consolidating common API functionalities into a single free API.",
    link: "https://github.com/stephengpope/no-code-architects-toolkit",
    tags: ["dev", "open-source"],
    category: "Open Source Tools & Utilities",
  },
  {
    name: "Stirling PDF",
    preview: "/previews/stirling-pdf.png",
    description:
      "A tool for generating and manipulating PDF documents with ease.",
    link: "https://stirlingpdf.com",
    tags: ["dev", "open-source"],
    category: "Open Source Tools & Utilities",
  },
  {
    name: "Carbon",
    preview: "/previews/carbon.png",
    description:
      "A desktop application for creating beautiful images of your source code.",
    link: "https://carbon.now.sh",
    tags: ["dev", "design", "open-source", "terminal"],
    category: "Design & UI",
  },
  {
    name: "Docmost",
    preview: "/previews/docmost.png",
    description:
      "A tool for creating and managing documentation with a focus on simplicity and usability.",
    link: "https://docmost.com",
    tags: ["dev", "open-source", "notes"],
    category: "Documentation & Learning",
  },
  {
    name: "Obsidian",
    preview: "/previews/obsidian.png",
    description:
      "A powerful knowledge base that works on local Markdown files, allowing you to create and manage your notes and documents with ease.",
    link: "https://obsidian.md",
    tags: ["dev", "open-source", "notes"],
    category: "Documentation & Learning",
  },
  {
    name: "Sonner - Toast Notifications",
    preview: "/previews/sonner.png",
    description:
      "A React library for creating beautiful toast notifications with minimal configuration.",
    link: "hhttps://sonner.emilkowal.ski/",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Vaul - Drawers and Modals",
    preview: "/previews/vaul.png",
    description:
      "A React library for creating drawers and modals with a focus on accessibility and usability.",
    link: "https://vaul.emilkowal.ski/",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "AdminJS",
    preview: "/previews/adminjs.png",
    description:
      "An admin panel for Node.js applications that provides a customizable and easy-to-use interface for managing your application data.",
    link: "https://adminjs.co",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Inquirer.js",
    preview: "/previews/inquirer.png",
    description:
      "A collection of common interactive command line user interfaces for Node.js applications.",
    link: "https://github.com/SBoudrias/Inquirer.js",
    tags: ["dev", "open-source", "pkg", "terminal"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Chalk",
    preview: "/previews/chalk.png",
    description:
      "A library for styling terminal strings with colors and styles, making your command line applications more visually appealing.",
    link: "https://github.com/chalk/chalk",
    tags: ["dev", "open-source", "pkg", "terminal"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "VHS - Charm Bracelet",
    preview: "/previews/vhs-charm.png",
    description:
      "A terminal emulator for integration testing and demoing CLI tools.",
    link: "https://github.com/charmbracelet/vhs",
    tags: ["dev", "open-source", "pkg", "terminal"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Soft Serve - Charm Bracelet",
    preview: "/previews/soft-serve-charm.png",
    description:
      "A simple, self-hosted Git server for small teams and personal projects.",
    link: "https://github.com/charmbracelet/soft-serve",
    tags: ["dev", "open-source", "pkg", "terminal"],
    category: "Open Source Tools & Utilities",
  },
  {
    name: "Huh? - Charm Bracelet",
    preview: "/previews/huh-charm.png",
    description:
      "A library for building interactive command line applications with a focus on simplicity and usability.",
    link: "https://github.com/charmbracelet/huh",
    tags: ["dev", "open-source", "pkg", "terminal"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Bubble Tea - Charm Bracelet",
    preview: "/previews/bubble-tea-charm.png",
    description:
      "A Go framework for building terminal applications with a focus on simplicity and usability.",
    link: "https://github.com/charmbracelet/bubbletea",
    tags: ["dev", "open-source", "pkg", "terminal"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Glow - Charm Bracelet",
    preview: "/previews/glow-charm.png",
    description:
      "A terminal-based Markdown reader that allows you to view and navigate Markdown files in your terminal.",
    link: "https://github.com/charmbracelet/glow",
    tags: ["dev", "open-source", "pkg", "terminal"],
    category: "Documentation & Learning",
  },
  {
    name: "Actual Budget",
    preview: "/previews/actual-budget.png",
    description:
      "A personal finance tool that helps you track your expenses and manage your budget effectively.",
    link: "https://actualbudget.org/",
    tags: ["open-source"],
    category: "Productivity & Utilities",
  },
  {
    name: "Fast Average Color",
    preview: "/previews/fast-average-color.png",
    description:
      "A tool for quickly calculating the average color of an image, useful for design and development purposes.",
    link: "https://github.com/fast-average-color/fast-average-color",
    tags: ["dev", "open-source", "pkg"],
    category: "Open Source Tools & Utilities",
  },
  {
    name: "Zustand",
    preview: "/previews/zustand.png",
    description:
      "A small, fast, and scalable state management solution for React applications.",
    link: "https://github.com/pmndrs/zustand",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Tailwind CSS",
    preview: "/previews/tailwind-css.png",
    description:
      "A utility-first CSS framework for creating modern and responsive web designs.",
    link: "https://tailwindcss.com",
    tags: ["dev", "design", "open-source"],
    category: "Design & UI",
  },
  {
    name: "Boring Avatars",
    preview: "/previews/boring-avatars.png",
    description:
      "A collection of simple, customizable avatars for use in web applications.",
    link: "https://boringavatars.com",
    tags: ["dev", "design", "open-source"],
    category: "Design & UI",
  },
  {
    name: "Remix",
    preview: "/previews/remix.png",
    description:
      "A modern web framework for building fast, dynamic, and user-friendly web applications.",
    link: "https://remix.run",
    tags: ["dev", "open-source"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Node 2FA",
    preview: "/previews/node-2fa.png",
    description:
      "A Node.js library for implementing two-factor authentication in your applications.",
    link: "https://github.com/jeremyscalpello/node-2fa",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Floating UI",
    preview: "/previews/floating-ui.png",
    description:
      "A library for creating floating elements like tooltips, popovers, and dropdowns in web applications.",
    link: "https://floating-ui.com",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Audacity",
    preview: "/previews/audacity.png",
    description:
      "A free, open-source, cross-platform audio software for multi-track recording and editing.",
    link: "https://github.com/audacity/audacity",
    tags: ["dev", "open-source", "audio"],
    category: "Audio & Video",
  },
  {
    name: "Remotion",
    preview: "/previews/remotion.png",
    description:
      "A React library for creating videos programmatically, allowing you to build complex video compositions with React components.",
    link: "https://www.remotion.dev",
    tags: ["dev", "open-source", "video"],
    category: "Audio & Video",
  },
  {
    name: "Use Gesture",
    preview: "/previews/use-gesture.png",
    description:
      "A React library for handling gestures like pinch, swipe, and drag in web applications.",
    link: "https://github.com/pmndrs/use-gesture",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Gui JS",
    preview: "/previews/gui-js.png",
    description:
      "A JavaScript library for managing graphical user interfaces with a focus on simplicity and ease of use.",
    link: "https://github.com/Akryum/guijs",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "FFmpeg",
    preview: "/previews/ffmpeg.png",
    description:
      "A powerful multimedia framework for handling video, audio, and other multimedia files and streams.",
    link: "https://github.com/FFmpeg/FFmpeg",
    tags: ["dev", "open-source", "audio", "video"],
    category: "Audio & Video",
  },
  {
    name: "QR Code Generator",
    preview: "/previews/qr-code-generator.png",
    description:
      "A simple tool for generating QR codes for various purposes, including URLs, text, and more.",
    link: "https://andremov-qr-code-generator.vercel.app/",
    tags: ["dev"],
    category: "Productivity & Utilities",
  },
  {
    name: "QR Code Library",
    preview: "/previews/qr-code-library.png",
    description:
      "A JavaScript library for generating QR codes in web applications, allowing you to create custom QR codes with various styles and options.",
    link: "https://github.com/nayuki/QR-Code-generator",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Lottie Files",
    preview: "/previews/lottie-files.png",
    description:
      "A library for rendering animations created with Adobe After Effects in web applications.",
    link: "https://github.com/lottiefiles",
    tags: ["dev", "design", "open-source"],
    category: "Design & UI",
  },
  {
    name: "Franz",
    preview: "/previews/franz.png",
    description:
      "A messaging app for connecting multiple chat and messaging services in one place.",
    link: "https://github.com/meetfranz/franz",
    tags: ["dev", "open-source", "pkg"],
    category: "Productivity & Utilities",
  },
  {
    name: "Copy as Markdown",
    preview: "/previews/copy-as-markdown.png",
    description: "A React hook to copy text as Markdown.",
    link: "https://github.com/cpojer/copy-as-markdown",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "Turndown",
    preview: "/previews/turndown.png",
    description:
      "A JavaScript library for converting HTML into Markdown, making it easy to extract content from web pages and other HTML sources.",
    link: "https://github.com/mixmark-io/turndown",
    tags: ["dev", "open-source", "pkg"],
    category: "Development Libraries & Frameworks",
  },
  {
    name: "CSS Shadow Palette Generator",
    preview: "/previews/css-shadow-palette-generator.png",
    description:
      "A tool for generating CSS shadow palettes, allowing you to create consistent and visually appealing shadows for your web designs.",
    link: "https://www.joshwcomeau.com/shadow-palette/",
    tags: ["dev", "design"],
    category: "Design & UI",
  },
  {
    name: "CSS Gradient Generator",
    preview: "/previews/css-gradient-generator.png",
    description:
      "A tool for creating and customizing CSS gradients, making it easy to add beautiful gradients to your web designs.",
    link: "https://www.joshwcomeau.com/gradient-generator/",
    tags: ["dev", "design"],
    category: "Design & UI",
  },
  {
    name: "JS Operator Lookup",
    preview: "/previews/js-operator-lookup.png",
    description:
      "A tool for looking up JavaScript operators and learn more about them.",
    link: "https://www.joshwcomeau.com/operator-lookup/",
    tags: ["dev", "docs"],
    category: "Documentation & Learning",
  },
  {
    name: "JS Snippets",
    preview: "/previews/js-snippets.png",
    description:
      "A collection of useful JavaScript snippets for various tasks and functionalities.",
    link: "https://www.joshwcomeau.com/snippets/",
    tags: ["dev", "docs"],
    category: "Documentation & Learning",
  },
  {
    name: "SVG Blob generator",
    preview: "/previews/svg-blob-generator.png",
    description:
      "A tool for generating SVG blobs, allowing you to create unique and visually appealing shapes for your web designs.",
    link: "https://www.blobmaker.app/",
    tags: ["dev", "design"],
    category: "Design & UI",
  },
  {
    name: "Unsplash",
    preview: "/previews/unsplash.png",
    description:
      "A platform for finding and sharing high-quality, free-to-use images for your projects.",
    link: "https://unsplash.com",
    tags: ["design"],
    category: "Design & UI",
  },
  {
    name: "Deck Gallery",
    preview: "/previews/deck-gallery.png",
    description:
      "A collection of beautifully designed decks, slides, keynotes, guidelines, etc.",
    link: "https://deck.gallery",
    tags: ["design"],
    category: "Design & UI",
  },
  {
    name: "Happy Hues",
    preview: "/previews/happy-hues.png",
    description:
      "A curated collection of color palettes and design inspiration for web designers and developers.",
    link: "https://www.happyhues.co",
    tags: ["design", "typography"],
    category: "Design & UI",
  },
  {
    name: "Beekeeper Studio",
    preview: "/previews/beekeeper-studio.png",
    description:
      "An open-source SQL editor and database management tool that supports various databases.",
    link: "https://github.com/beekeeper-studio/beekeeper-studio",
    tags: ["dev", "open-source"],
    category: "Open Source Tools & Utilities",
  },
  {
    name: "drawDB",
    preview: "/previews/drawdb.png",
    description:
      "A tool for creating and managing database diagrams, making it easy to visualize and design your database schema.",
    link: "https://drawdb.app",
    tags: ["dev", "open-source", "docs"],
    category: "Documentation & Learning",
  },
  {
    name: "ChartDB",
    preview: "/previews/chartdb.png",
    description:
      "A tool for creating and managing charts and visualizations from your database data.",
    link: "https://chartdb.io",
    tags: ["dev", "open-source", "docs"],
    category: "Documentation & Learning",
  },
  {
    name: "Kdenlive",
    preview: "/previews/kdenlive.png",
    description:
      "A free and open-source video editor that provides a wide range of features for video editing and production.",
    link: "https://kdenlive.org",
    tags: ["open-source", "video"],
    category: "Audio & Video",
  },
  {
    name: "Shotcut",
    preview: "/previews/shotcut.png",
    description:
      "A free, open-source, cross-platform video editor that supports a wide range of formats and features.",
    link: "https://shotcut.org",
    tags: ["open-source", "video"],
    category: "Audio & Video",
  },
  {
    name: "Penpot",
    preview: "/previews/penpot.png",
    description:
      "An open-source design and prototyping tool for creating user interfaces and interactive designs.",
    link: "https://penpot.app",
    tags: ["design", "open-source"],
    category: "Design & UI",
  },
  {
    name: "toolfinder",
    preview: "/previews/toolfinder.png",
    description:
      "A tool for finding the right development tools for your projects.",
    link: "https://toolfinder.co",
    tags: ["dev"],
    category: "Productivity & Utilities",
  },
  {
    name: "Tailwind Buttons - ibelick",
    preview: "/previews/tailwind-buttons-ibelick.png",
    description:
      "A collection of beautifully designed buttons using Tailwind CSS.",
    link: "https://buttons.ibelick.com",
    tags: ["dev", "design", "open-source"],
    category: "Design & UI",
  },
  {
    name: "Flexbox Labs",
    preview: "/previews/flexbox-labs.png",
    description:
      "A collection of tools and resources for working with Flexbox layouts.",
    link: "https://flexboxlabs.netlify.app",
    tags: ["dev", "design", "open-source"],
    category: "Design & UI",
  },
  {
    name: "JavaScript Patterns",
    preview: "/previews/javascript-patterns.png",
    description:
      "A collection of design patterns and best practices for writing clean and maintainable JavaScript code.",
    link: "https://www.patterns.dev/",
    tags: ["dev", "docs", "open-source"],
    category: "Documentation & Learning",
  },
  {
    name: "Mesh Gradient Generator",
    preview: "/previews/mesh-gradient-generator.png",
    description:
      "A tool for generating beautiful mesh gradients for your designs.",
    link: "https://www.learnui.design/tools/mesh-gradient-generator.html",
    tags: ["dev", "design"],
    category: "Design & UI",
  },
];

export default data;

export { tagColorMap, type Tag, type Tool };

export const fontsAndTypography: Tool[] = [
  {
    name: "Free Faces Gallery",
    preview: "/previews/free-faces-gallery.png",
    description:
      "A collection of free-to-use font faces for various applications.",
    link: "https://freefaces.gallery",
    tags: ["font", "design", "typography"],
    category: "Fonts & Typography",
  },
  {
    name: "Font Share",
    preview: "/previews/font-share.png",
    description: "A collection of free-to-use fonts for various applications.",
    link: "https://fontshare.com",
    tags: ["font", "typography", "open-source"],
    category: "Fonts & Typography",
  },
];
