# Rohini Tiwari - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful teal and coral color scheme with full dark/light mode support.

![Portfolio Preview](https://via.placeholder.com/1200x675/0f172a/14b8a6?text=Rohini+Tiwari+Portfolio)

## ✨ Features

- **Modern Design** - Beautiful teal and coral color palette
- **Dark/Light Mode** - Fully functional theme toggle with system preference detection
- **Responsive** - Works perfectly on all device sizes
- **Smooth Animations** - Elegant transitions powered by Framer Motion
- **Fast Performance** - Built with Vite for optimal speed

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```
bash
# Clone the repository
git clone https://github.com/rohiniwari/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```
bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── TechStack.tsx
│   ├── App.tsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json         # Dependencies
├── tsconfig.json       # TypeScript config
└── vite.config.ts      # Vite config
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```
css
:root {
  --primary: #14b8a6;      /* Teal - main accent */
  --secondary: #f43f5e;    /* Coral - secondary accent */
}
```

### Light/Dark Mode

The theme is controlled via:
- System preference detection
- Manual toggle in the navbar
- localStorage persistence

## 📄 License

This project is for personal use. All rights reserved.

## 👤 Contact

- **GitHub**: [rohiniwari](https://github.com/rohiniwari)
- **LinkedIn**: [rohinitiwari0906](https://www.linkedin.com/in/rohinitiwari0906/)
- **Email**: rohiniwari@gmail.com

---

Built with ❤️ using React & Tailwind CSS
