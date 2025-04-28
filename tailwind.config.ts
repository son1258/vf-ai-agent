import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'swiper-button-prev',
    'swiper-button-next',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        feature: ['Feature', 'Times', 'serif'],
        inter: ['Inter regular 200', 'serif'],
        roboto: ['var(--font-roboto)'],
        gordita: ['Gordita']
      },
      boxShadow: {
        'nav-shadow': "0 3px 8px rgba(4,23,53,.04)", 
        'menu-icon-shadow': "0 1px 0 rgba(0, 0, 0, .25)", 
        'menu-list-shadow': "rgba(0, 0, 0, .35) 0 5px 15px;", 
        'title-shadow': "0 4px 6px -2px #f8888e14", 
        'break-shadow-default': "0 0 8px #000",
        'break-shadow': "0 0 8px #f46177"
      }, 
      screens: {
        'screen-1650': "1650px", 
        'screen-1600': "1600px",
        'screen-1570': "1570px",
        'screen-1550': "1550px",
        'screen-1400': "1400px", 
        'screen-1325': "1325px",
        'screen-1283': "1283px",
        'screen-1200': "1200px",
        'screen-1140': "1140px",
        'screen-1120': "1120px",
        'screen-992': "992px", 
        'screen-600': "600px",
        'screen-576': "576px"
      }, 
      width: {
        'custom-18': "var(--custom-18)",
        'custom-540': "var(--custom-540)",
        'custom-720': "var(--custom-720)",
        'custom-960': "var(--custom-960)",
        'custom-1140': "var(--custom-1140)",
        'custom-1320': "var(--custom-1320)",
      }, 
      height: {
        'custom-2': "var(--custom-2)",
        'custom-14': "var(--custom-14)",
        'custom-22': "var(--custom-22)", 
        'custom-25': "var(--custom-25)", 
        'custom-40': "var(--custom-40)",
        'custom-46': "var(--custom-46)",
        'custom-50': "var(--custom-50)",
        'custom-60': "var(--custom-60)", 
        'custom-62': "var(--custom-62)",
        'custom-102': "var(--custom-102)",
      },
      padding: {
        'custom-1': "var(--custom-1)",
        'custom-1.5': "var(--custom-1-5)",
        'custom-2': "var(--custom-2)",
        'custom-3': "var(--custom-3)",
        'custom-4.8': "var(--custom-4-8)",
        'custom-5': "var(--custom-5)",
        'custom-6': "var(--custom-6)", 
        'custom-7': "var(--custom-7)", 
        'custom-10': "var(--custom-10)",
        'custom-13': "var(--custom-13)",
        'custom-14': "var(--custom-14)",
        'custom-15': "var(--custom-15)",
        'custom-18': "var(--custom-18)",
        'custom-22': "var(--custom-22)",
        'custom-23': "var(--custom-23)",
        'custom-56': "var(--custom-56)",
        'custom-60': "var(--custom-60)", 
        'custom-64': "var(--custom-64)",
        'custom-88': "var(--custom-88)",
      }, 
      margin: {
        'header-noti': "var(--px-header-noti)", 
        'custom-1': "var(--custom-1)",
        'custom-1.5': "var(--custom-1.5)",
        'custom-2': "var(--custom-2)",
        'custom-3': "var(--custom-3)",
        'custom-5': "var(--custom-5)",
        'custom-6': "var(--custom-6)", 
        'custom-10': "var(--custom-10)",
        'custom-14': "var(--custom-14)",
        'custom-15': "var(--custom-15)",
        'custom-24': "var(--custom-24)",
        'custom-62': "var(--custom-62)",
        'custom-102': "var(--custom-102)",
      }, 
      lineHeight: {
        'custom-15': "var(--custom-15)",
        'custom-18': "var(--custom-18)",
        'custom-21': "var(--custom-21)",
        'custom-22': "var(--custom-22)",
        'custom-24': "var(--custom-24)",
        'custom-30': "var(--custom-30)",
        'custom-33': "var(--custom-33)",
        'custom-42': "var(--custom-42)",
        'custom-46': "var(--custom-46)",
        'custom-48': "var(--custom-48)",
        'custom-52': "var(--custom-52)",
        'custom-56': "var(--custom-56)",
        'custom-64': "var(--custom-64)",
      }, 
      fontSize: {
        'custom-arrow': "var(--custom-arrow)",
        'custom-10': "var(--custom-10)",
        'custom-14': "var(--custom-14)",
        'custom-40': "var(--custom-40)",
      },
      letterSpacing: {
        'custom-035': "var(--custom-035)",
        'custom-075': "var(--custom-075)"
      }, 
      transitionDuration: {
        'custom-400': '400ms'
      }
    },
  },
  plugins: [],
};
export default config;
