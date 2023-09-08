module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "300px", max: "475px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        textColor: "#3F3844",
        cartNumBg: "#FB98FB",
        primary: "#f3f3f3",
        darkOverlay: "rgba(0, 0, 0, 0.2)",
        lightOverlay: "rgba(255, 255, 255, 0.4)",
        lighttextGray: "#9ca0ab",
        card: "rgba(256, 256, 256, 0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
