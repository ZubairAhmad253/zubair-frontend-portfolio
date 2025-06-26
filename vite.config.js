import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      darkMode: "class", // Enable dark mode via 'class'
      theme: {
        extend: {
          colors: {
            primary: "#0EA5E9", // Sky Blue
            secondary: "#F43F5E", // Pink Red
            background: "#F9FAFB", // Light background
            dark: "#0F172A", // Dark navy
            card: "#FFFFFF", // Card background
            accent: "#8B5CF6", // Violet accent
          },
          fontFamily: {
            sans: ["Inter", "sans-serif"],
          },
        },
      },
    }),
  ],
});
