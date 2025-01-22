import GalleryCollections from "@/components/Home/GalleryCollections";
import type { Config } from "tailwindcss";

export default {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-red',
    'bg-black',
    'bg-yellow',
    'bg-white',
    // Adicionar todas as cores possíveis aqui
  ],

  theme: {
    colors: {
      lightRed: '#8C0303',
      mediumRed: '#590202',
      darkRed: '#260101',
      white: '#F2F2F2',
      black: '#0D0D0D',
      red: '#c71c1c',
      yellow: '#F7DC6F',
      gray: '#ABABAB'
    },

    extend: {
      screens: { //Media queries
        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',

        '2xl': '1536px',
      },

      boxShadow: {
        'costum': '0px 2px 16px 0px rgba(14, 30, 37, 0.7);'
      }
    },
  },
  plugins: [],
} satisfies Config;
