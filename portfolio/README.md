# Portfolio Website - Kanako Taga

A modern, responsive portfolio website for a full-stack developer, built with React and styled with Anthropic-inspired design.

## Features

- **Responsive Design**: Optimized for both desktop and smartphone viewing
- **Reusable Components**: Modular React components for easy content updates
- **Anthropic-Inspired Design**: Clean, modern aesthetic with custom fonts and color palette
- **Tech Stack Showcase**: Organized display of languages, frameworks, and tools
- **Project Highlights**: Detailed project cards with descriptions, tech stacks, and links
- **Social Links**: Direct links to LinkedIn and GitHub profiles

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Parcel
- **Backend**: Express.js (for serving static files)
- **Fonts**: Space Grotesk, Space Mono (Google Fonts)
- **Styling**: Custom CSS with responsive media queries

## Project Structure

```
portfolio/
├── react/                  # React source files
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js
│   │   │   ├── MainContainer.js
│   │   │   ├── Hero.js
│   │   │   ├── Projects.js
│   │   │   ├── TechStack.js
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   └── index.js
│   └── package.json
└── express/               # Express server
    ├── public/           # Built files (generated)
    │   ├── index.html
    │   ├── style.css
    │   └── index.js (built)
    ├── app.js
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies for both React and Express:
   ```bash
   # Install React dependencies
   cd react
   npm install

   # Install Express dependencies
   cd ../express
   npm install
   ```

### Running the Portfolio

You need to run both the React build watcher and the Express server:

#### Terminal 1 - React Build Watcher:
```bash
cd portfolio/react
npm start
```

This will watch for changes in your React components and automatically rebuild them to the `express/public` directory.

#### Terminal 2 - Express Server:
```bash
cd portfolio/express
node app.js
```

The server will start on `http://localhost:3000`

3. Open your browser and navigate to `http://localhost:3000`

## Updating Content

### Adding/Editing Projects

Edit [portfolio/react/src/components/Projects.js](react/src/components/Projects.js):

```javascript
const projectsData = [
    {
        id: 1,
        title: "Project Name",
        subtitle: "Project Description",
        period: "Month Year - Month Year",
        description: "Detailed description...",
        role: "Your Role",
        contributions: ["Contribution 1", "Contribution 2"],
        techStack: ["Tech1", "Tech2"],
        links: {
            demo: "https://...",
            github: "https://..."
        },
        icon: "💼"
    }
    // Add more projects...
];
```

### Updating Tech Stack

Edit [portfolio/react/src/components/TechStack.js](react/src/components/TechStack.js):

```javascript
const techStackData = {
    languages: {
        title: "Languages",
        icon: "◆",
        skills: ["Skill1", "Skill2"]
    }
    // Update or add more categories...
};
```

### Modifying About Section

Edit [portfolio/react/src/components/About.js](react/src/components/About.js) to update your background information.

### Changing Social Links

Update links in [portfolio/express/public/index.html](express/public/index.html):

```html
<div class="top-bar-links">
    <a href="YOUR_LINKEDIN_URL">LINKEDIN</a>
    <a href="YOUR_GITHUB_URL">GITHUB</a>
</div>
```

## Design Customization

### Colors

The color palette is defined in [portfolio/express/public/style.css](express/public/style.css):

```css
:root {
    --black: #131314;     /* Primary dark (Anthropic-inspired) */
    --white: #FFFFFF;     /* Primary light */
    --cream: #FAF9F0;     /* Background (Anthropic-inspired) */
    --gray: #8B8B8B;      /* Secondary text */
    --light-gray: #E5E5E5; /* Borders */
    --blue: #2B5CE6;      /* Accent blue */
    --orange: #D97757;    /* Accent orange (Anthropic-inspired) */
}
```

### Fonts

The portfolio uses Google Fonts:
- **Space Grotesk**: Primary font for headings and body text
- **Space Mono**: Monospace font for technical elements

These are similar to Anthropic's design system.

## Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px

## Deployment

To deploy this portfolio:

1. Build the React app one final time
2. The `express/public` folder contains all the static files needed
3. You can:
   - Deploy the Express server to services like Heroku, Railway, or Render
   - Deploy just the `public` folder to static hosting (Netlify, Vercel, GitHub Pages)

## License

This portfolio is for personal use.

## Contact

- **LinkedIn**: https://www.linkedin.com/in/kanako-taga-191363159/
- **GitHub**: https://github.com/kanadev00
