import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      screens: {
        'xl' : "1444px",
    },
  },
},
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/forms'),
   
  ],
};
export default config;

