/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,tsx,md,mdx,svelte,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Cousine', 'system-ui', 'sans-serif'],
        heading: ['"Kulim Park"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
