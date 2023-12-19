# React + Vite + Tailwind + DaisyUI -> Fullstack DOG Database

# Setup

npm create vite@latest your-project-name -- --template react

cd your-project-name

npm install react-router-dom

npm i uuid

# Tailwind + Daisyui

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

npm i -D daisyui@latest

<!-- Icons -->

https://react-icons.github.io/react-icons/

npm i react icons

# - IN tailwind.config.js:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    extend: {
      colors: {
        bgColor: "#283A45",
        primaryC: "#2A9D8F",
        secondaryC: "#A16171",
        accentC: "#E9C46A",
      },
      screens: {
        smallmobile: "320px",
        // => @media (min-width: 320px) { ... }

        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        tablet: "769px",
        // => @media (min-width: 768px) { ... }

        laptop: "900px",
        // => @media (min-width: 1000px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        bigdesktop: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
```

# index css

```

@tailwind base;
@tailwind components;
@tailwind utilities;




```

# Repo

git init

git add .

git commit -m "first commit"
