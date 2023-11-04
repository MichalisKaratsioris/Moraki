module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        md: { min: "900px" },
        sm: { min: "700px" },
      },
      colors: {
        darkbg: "#1E293B", //slate-800
        headerbg: "#CBD5E1", // slate-300
        bodybg: "#E7E5E4", // stone-200
      },
    },
  },
  plugins: [],
};
