// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode based on a class
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Include 'public/index.html' for Tailwind to catch all utility classes
  theme: {
    extend: {
      maxWidth: {
        'screen-sm': '640px', // For small screen containers
        'screen-md': '768px', // For medium screen containers
        'screen-lg': '1024px', // Keeps existing large screen container width
        'screen-xl': '1280px', // Adds a bigger size for extra large screens
        'screen-2xl': '1536px', // Adds even more padding for wide desktops
      },
      spacing: {
        '4.5': '1.125rem', // Custom padding for better spacing between header and content
        '6': '1.5rem', // Medium padding option for consistent gap
        '10': '2.5rem', // Increased padding for desktop layout
        '12': '3rem', // Adds more margin for larger layouts
        '16': '4rem', // Larger margins for wide desktop screens
        '20': '5rem', // Used in the Navbar/Footer for extra breathing room
      },
      padding: {
        'lg-header': '2rem', // Custom padding for large header/footer sections
      },
    },
  },
  plugins: [],
};
