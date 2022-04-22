module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5082EB",
        whiteCS: "#FFFFFF",
        light: "#E9EAF1",
        dark: "#55555F",
      },
      boxShadow: {
        // Light Shadow
        InnerShadowLight: "inset -5px -5px 10px rgba(255, 255, 255, 1), inset 5px 5px 10px rgba(85, 85, 95, 0.25)",
        DropShadowLightLite: "-3px -3px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(85, 85, 95, 0.25)",
        DropShadowLightVerryLite: "-2px -2px 3px rgba(255, 255, 255, 1), 2px 2px 3px rgba(85, 85, 95, 0.25)",
        InnerShadowLightVerryLite: "inset -2px -2px 3px rgba(255, 255, 255, 1), inset 2px 2px 3px rgba(85, 85, 95, 0.25)",
        // Dark Shadow
        InnerShadowDark: "inset -5px -5px 10px rgba(255, 255, 255, 0.5), inset 5px 5px 10px rgba(40, 45, 50, 0.5)",
        DropShadowDarkLite: "-3px -3px 5px rgba(255, 255, 255, 0.5), 3px 3px 5px rgba(40, 45, 50, 0.5)",
        DropShadowDarkVerryLite: "-2px -2px 3px rgba(255, 255, 255, 0.5), 2px 2px 3px rgba(40, 45, 50, 0.5)",
        InnerShadowDarkVerryLite: "inset -2px -2px 3px rgba(255, 255, 255, 0.5), inset 2px 2px 3px rgba(40, 45, 50, 0.5)",
      },
    },
  },
  plugins: [],
};
