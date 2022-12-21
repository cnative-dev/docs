/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{js,ts,vue}',
    './docs/.vitepress/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--vp-c-brand)",
        "primary-light": "var(--vp-c-brand-light)",
        "primary-lighter": "var(--vp-c-brand-lighter)",
        "primary-dark": "var(--vp-c-brand-dark)",
        "primary-darker": "var(--vp-c-brand-darker)",
        "alt": "var(--vp-c-gray-light-3)",
        "alt-light": "var(--vp-c-gray-light-4)",
        "alt-lighter": "var(--vp-c-gray-light-5)",
        "alt-dark": "var(--vp-c-gray-light-2)",
        "alt-darker": "var(--vp-c-gray-light-1)",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: 'daisy-'
  }
}