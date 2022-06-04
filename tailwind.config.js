module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/asset/png/dna-05.png')",
        'quote-background': "url('/asset/quote/bg.png')",
        'product-slide-background': "url('/asset/product/slide-bg.png')",
        'product-benefit-background': "url('/asset/product/benefit-bg.png')",
        'product-howto-background': "url('/asset/howto/bg.png')",
      },
      animation: {
        blob: "blob 10s infinite",
        blobr: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blobr: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "11%": {
            transform: "translate(25px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, 0px) scale(1.1)",
          },
          "66%": {
            transform: "translate(20px, 0px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
