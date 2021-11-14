const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mobile: "420px",
        lgmobile: "500px",
        tablet: "700px",
        laptop: "1024px",
        desktop: "1280px",
        bgdesktop: "1520px"
      },
      backgroundColor: {
        primary: "#232323",
        secondary: "#ffffff",
        grayish: "#141414",
        lgrayish: "#4F4F4F"
      },
      textColor: {
        primary: colors.white,
        secondary: colors.gray,
        lgrayish: "#4F4F4F"
      },
      borderColor: {
        grayish: "#141414"
      },
      backgroundImage: {
        mountain: 'url("/back.png")'
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
            body: {
              backgroundColor: "#E5E5E5"
            },
            a: {
              color: theme("colors.blue.500"),
              "text-decoration": "none",
              "&:hover, &.active": {
                color: "white",
                "background-color": theme("colors.blue.600")
              }
            },
            strong: {
              color: theme("colors.blue.500")
            },
            h1: {
              color: "white",
              "margin-top": "0"
            },
            h2: {
              color: "white",
              "margin-top": "0"
            },
            h3: {
              color: "white",
              "margin-top": "0"
            },
            h4: {
              color: "white",
              "margin-top": "0"
            },
            pre: {
              color: theme("colors.grey.1000"),
              backgroundColor: theme("colors.grey.100")
            },
            "pre code::before": {
              "padding-left": "unset"
            },
            "pre code::after": {
              "padding-right": "unset"
            },
            code: {
              backgroundColor: theme("colors.grey.100"),
              color: "lightblue",
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem"
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem"
            },
            p: {
              color: "white",
              "margin-top": "0",
              "margin-bottom": "1em"
            },
            img: {
              margin: "auto"
            },
            "ul > li": {
              "&::before": {
                "background-color": "white",
                "font-weight": "bold"
              }
            },
            "ol > li": {
              "&::before": {
                color: "white",
                "font-weight": "bold"
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ["dark"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
