/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "976px"
      },
      fontFamily: {
        body: ["IRANSans"]
      },
      colors: {
        background_color: `var(--background_color)`,
        green_text: `var(--green_text)`,
        red_text: `var(--red_text)`,
        yellow_currency: `var(--yellow_currency)`,
        probe_chart_card: `var(--probe_chart_card)`,
        regular_text: `var(--regular_text)`,
        text: `var(--text)`,
        "hover-col": `rgba(var(--hover-col),0.102)`,
        "btn-selected": `var(--btn-selected)`,
        bold_text: `var(--bold_text)`,
        "tab-border": `var(--tab-border)`,
        "tab-text": `var(--tab-border)`,
        "tab-selection": `rgb(var(--tab-selection))`,
        "tab-red": `var(--tab-red)`,
        "tab-green": `var(--tab-green)`,
        "btn-green": `var(--btn-green)`
      }
    }
  },
  plugins: []
}
