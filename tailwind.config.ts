import { type Config } from "tailwindcss";
import HERO_BG from '@/images/Desktop_Hero_mage.jpg'

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      's-laptop': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'tv': '1536px',
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: { 
        'poppins': ['Poppins', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'], 
      },
      objectPosition: {
        'hero-big-screen': 'top 0px left 80%',
      },
      flexBasis:{
        'eList-1': '650px',
        'eList-2': '650px',
      },
      fontSize: {
        'hero-title': '2.75rem',
        'hero-title-sub': '1.75rem',
      },
      margin: {
        'header-gap': '95px',
      },
      height: {
        header: '95px',
        'main-hero': '575px',
        'phone': '400px',
        'section-img': 'auto',
      },
      width: {
        'fill-available': '-webkit-fill-available',
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
      'white': '#FFFFFF',
      'navy-blue': '#243A66',
      'cyan-blue': '#4DD1FF',
      'dark-blue': '#0F1F38',
      'orange': '#FF5B00',
      'dark-grey': '#4b5364',
      'soundscape-input-bg': '#FFFFFF1A',
      'navy-blue-bg': '#243A66',
      'soundscape-grey-bg': '#EDEFF3',
      'white-bg': '#DEE1E5',
    }
  },
  plugins: [],
} satisfies Config;
