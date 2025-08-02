// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./src/components/**/*.{js,jsx,ts,tsx}",
//     "./src/pages/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }; 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D35400", // a warm, appetizing orange
          light: "#E67E22",   // lighter shade for hover states
          dark: "#A04000",    // deep accent
        },
        secondary: {
          DEFAULT: "#2C3E50", // dark slate blue for text & contrast
          light: "#34495E",
          dark: "#1A252F",
        },
        accent: {
          DEFAULT: "#27AE60", // fresh green for call-to-actions
          light: "#2ECC71",
          dark: "#1E8449",
        },
        neutral: {
          light: "#F4F4F4",
          dark: "#2C2C2C",
        }
      },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },
    animation: {
      marquee: "marquee 30s linear infinite",
    },
    fontFamily: {
      edu: ['"Edu NSW ACT Cursive"', 'cursive'],
      bitcount: ['"Bitcount Grid Double"', 'system-ui'],
      cursive: ['"Dancing Script"', 'cursive']
    },
  },

  },
  plugins: [],
};
