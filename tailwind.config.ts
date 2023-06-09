import { type Config } from "tailwindcss";
import HERO_BG from '@/images/Desktop_Hero_mage.jpg'

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        'poppins': ['Poppins', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'], 
      },
      flexBasis:{
        'eList-1': '650px',
        'eList-2': '650px',
      },
      fontSize: {
        'hero-title': '2.75rem',
      },
      margin: {
        'header-gap': '95px',
      },
      height: {
        header: '95px',
        'main-hero': '625px',
        'phone': '400px',
        'section-img': '385px',
      },
      borderRadius: {
        'header-btn': '10px',
        'primary-btn': '8px',
        'primary-input': '4px',
        'section-image': '32px',
      },
      backgroundImage: {
        'hero': 'url(/src/assets/images/Desktop_Hero_Image.jpg)',
      }

    },
    colors: {
      'soundscape-white': '#FFFFFF',
      'soundscape-blue': '#243A66',
      'soundscape-bright-blue': '#4DD1FF',
      'soundscape-dark-blue': '#0F1F38',
      'soundscape-orange': '#FF5B00',
      'soundscape-dark-grey': '#4b5364',
      'soundscape-input-bg': '#FFFFFF1A',
      'soundscape-blue-bg': '#243A66',
      'soundscape-grey-bg': '#EDEFF3',
      'soundscape-white-bg': '#DEE1E5',
    }
  },
  plugins: [],
} satisfies Config;
