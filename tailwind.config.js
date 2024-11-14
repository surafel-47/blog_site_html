module.exports = {
  content: ["./src/**/*.html", "./css_input/**/*.{js,jsx,ts,tsx}"], // Adjust as necessary
  darkMode: "class", // Enables toggling dark mode by adding 'dark' class to the <html> element
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6", // Blue for buttons in light mode
          dark: "#60A5FA", // Softer blue for dark mode
        },
        background: {
          light: "#FFFFFF", // Main white background for light mode
          dark: "#1E293B", // Dark gray background for dark mode
        },
        surface: {
          light: "#F3F4F6", // Slightly off-white for card backgrounds in light mode
          dark: "#334155", // Dark slate gray for card backgrounds in dark mode
        },
        text: {
          light: "#111827", // Dark text for light backgrounds
          dark: "#F9FAFB", // Light text for dark backgrounds
        },

        inputBg: {
          light: " #f3f4f6",
          dark: "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
