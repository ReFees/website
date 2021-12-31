module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,ts,tsx}", "./src/**/**/*.{html,js,ts,tsx}", ],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      'dark', 
      'light'  
    ],
  },
}
