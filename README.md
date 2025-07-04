# Dev Toolbox 🧰

A beautifully curated collection of developer tools and resources, built with Astro and Tailwind CSS. This project serves as a comprehensive directory of useful development tools, libraries, and resources that every developer should know about.

## ✨ Features

- **🎯 Curated Collection**: Hand-picked selection of high-quality development tools
- **🏷️ Smart Filtering**: Filter tools by categories (AI, design, open-source, dev, etc.)
- **⚡ Performance Optimized**:
  - Lazy loading for images to improve page load times
  - Efficient client-side filtering
  - Optimized bundle size
- **📱 Responsive Design**: Works beautifully on all devices
- **🎨 Modern UI**: Clean, modern interface with smooth animations
- **� Easy Discovery**: Browse tools by category or view all at once
- **📊 Tool Counter**: See how many tools match your current filter

## 🚀 Live Demo

[View the live site](https://andremov-dev-toolbox.vercel.app/)

## � Project Structure

```
dev-toolbox/
├── public/
│   ├── favicon.svg
│   └── previews/              # Tool preview images
├── src/
│   ├── assets/                # Static assets
│   ├── components/            # Reusable UI components
│   │   ├── background.astro
│   │   ├── footer.astro
│   │   ├── header.astro
│   │   ├── library-tile.astro
│   │   ├── tag.astro
│   │   └── tool-tile.astro
│   ├── layouts/
│   │   └── Layout.astro       # Base layout
│   ├── pages/
│   │   └── index.astro        # Main page
│   ├── sections/              # Page sections
│   │   ├── library-grid-section.astro
│   │   └── tool-grid-section.astro
│   ├── styles/                # CSS files
│   │   ├── global.css
│   │   └── gambarino.css
│   └── utils/                 # Data and utilities
│       ├── libraries.ts       # Tool libraries data
│       └── tools.ts           # Individual tools data
├── astro.config.mjs
├── package.json
└── README.md
```

## 🛠️ Built With

- **[Astro](https://astro.build)** - The web framework for content-driven websites
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Lucide Icons](https://lucide.dev)** - Beautiful & consistent icon pack
- **TypeScript** - Type-safe JavaScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dev-toolbox.git
cd dev-toolbox
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 Available Scripts

| Command             | Action                                           |
| ------------------- | ------------------------------------------------ |
| `npm install`       | Install dependencies                             |
| `npm run dev`       | Start local dev server at `localhost:4321`       |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally                       |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🔧 Adding New Tools

To add a new tool to the collection:

1. Add the tool's preview image to the `public/previews/` directory
2. Update the `src/utils/tools.ts` file with your new tool:

```typescript
{
  name: "Your Tool Name",
  preview: "/previews/your-tool-preview.png",
  description: "A brief description of what this tool does.",
  link: "https://example.com",
  tags: ["dev", "open-source"], // Use existing tags or add new ones
}
```

3. If adding new tags, update the `Tag` type and `tagColorMap` in the same file.

## 🏷️ Available Tags

- `font` - Font-related tools
- `design` - Design and UI tools
- `typography` - Typography resources
- `icon` - Icon libraries and tools
- `open-source` - Open source projects
- `ai` - AI-powered tools
- `dev` - Development tools
- `pkg` - JavaScript packages/libraries
- `terminal` - Command-line tools
- `docs` - Documentation tools
- `notes` - Note-taking and knowledge management
- `audio` - Audio processing tools
- `video` - Video processing tools

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by modifying the Tailwind configuration or updating the component styles.

### Adding Categories

To add new tool categories:

1. Add the new tag to the `Tag` type in `src/utils/tools.ts`
2. Add corresponding colors to the `tagColorMap`
3. The filtering system will automatically include the new category

## � Performance Features

- **Lazy Loading**: Images are loaded only when they come into view
- **Client-side Filtering**: Fast filtering without page reloads
- **Optimized Bundle**: Minimal JavaScript for better performance
- **Responsive Images**: Optimized for different screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all the creators of the amazing tools featured in this collection
- Astro team for the fantastic framework
- Tailwind CSS team for the utility-first approach
- The open-source community for inspiration and resources

---

⭐ If you find this project useful, please give it a star on GitHub!

## 📞 Contact

Project Link: [https://github.com/andremov/dev-toolbox](https://github.com/andremov/dev-toolbox)
