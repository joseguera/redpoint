/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "avenir": ['avenir', 'system-ui', 'arial'],
        "souvenir": ['souvenir', 'arial']
      },
      fontSize: {
        // sm: '0.8rem',
        base: '16px',
        lg: '20px',
        ml: '24px',
        xl: '40px',
        '2xl': '45px',
        '3xl': '60px',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'an': '800px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1366px',
        
        '3xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        
        '4xl': '2560px' 
      }
    },
  },
  plugins: [],
}

