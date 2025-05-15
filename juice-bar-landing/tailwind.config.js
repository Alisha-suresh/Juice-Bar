module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lemon: '#FFD100',        // Primary Yellow
        black: '#000000',
        white: '#FFFFFF',
        cream: '#F9F7F0',
        'accent-green': '#AED581',  // Freshness green
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],   // for headers (bold)
        script: ['Playlist Script', 'cursive'], // for script accents
        body: ['Poppins', 'sans-serif'],        // body text
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
