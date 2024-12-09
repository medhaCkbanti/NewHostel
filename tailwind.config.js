/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
        
      keyframes : {

   

        slideInRight : {

          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

      }
      ,
      animation : {

         slideInRight :  'slideInRight 1s ease-in-out',
         "fade-in": "fade-in 0.7s ease-out",
      }

      ,

      fontFmaily : {
                
         para :["Roboto Slab"]
      }

   
    },
  },
  plugins: [],
}

