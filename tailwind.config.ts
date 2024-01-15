import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      //custom style
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
      fontFamily: {
        heading: ["Ubuntu"],
      },
      width: {
        container: "200%",
        card: "90%",
        input: "450px",
        nameInput: "170px",
        addButton: "100px",
        addButton2: "200px",
        photo: "200px",
      },
      height: {
        card: "220px",
        album: "510px",
        newsletter: "401px",
        textarea: "74px",
        cart: "86%",
        details: "95%",
        signUpPage: "600px",
      },
      padding: {
        name: "30px",
      },
      colors: {
        //custom color
        color1: "#43655A",
        color2: "#889FA5",
        color3: "#B1BDC5",
        color4: "#628281",
        color5: "#DADDE2",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
    //custom style
    backdropBlur: {
      xs: "1.5px",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
