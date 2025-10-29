/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        success: '#00B42A',
        warning: '#FF7D00',
        danger: '#F53F3F',
        info: '#86909C',
        'bg-primary': '#F7F8FA',
        'bg-secondary': '#FFFFFF',
        'text-primary': '#1D2129',
        'text-secondary': '#4E5969',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 25px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
    },
  },
  plugins: [],
  prefix: 'jt-',
  corePlugins: {
    preflight: false, // 禁用preflight以避免与自定义样式冲突
  }
}