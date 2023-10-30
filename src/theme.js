import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

// color design tokens

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        background: {
          100: "#d6d2d5",
          200: "#ada5ab",
          300: "#857780",
          400: "#5c4a56",
          500: "#331d2c",
          600: "#291723",
          700: "#1f111a",
          800: "#140c12",
          900: "#0a0609",
        },
        background2: {
          100: "#d9d5d8",
          200: "#b2abb2",
          300: "#8c828b",
          400: "#655865",
          500: "#3f2e3e",
          600: "#322532",
          700: "#261c25",
          800: "#191219",
          900: "#0d090c",
        },
        secondary: {
          100: "#ede6ea",
          200: "#dccdd5",
          300: "#cab4bf",
          400: "#b99baa",
          500: "#a78295",
          600: "#866877",
          700: "#644e59",
          800: "#43343c",
          900: "#211a1e",
        },
        primary: {
          100: "#fcf9f6",
          200: "#f9f3ed",
          300: "#f5ede3",
          400: "#f2e7da",
          500: "#efe1d1",
          600: "#bfb4a7",
          700: "#8f877d",
          800: "#605a54",
          900: "#302d2a",
        },
      }
    : 
    {
        background: {
            100: "#fcf9f6",
            200: "#f9f3ed",
            300: "#f5ede3",
            400: "#f2e7da",
            500: "#efe1d1",
            600: "#bfb4a7",
            700: "#8f877d",
            800: "#605a54",
            900: "#302d2a"
        },
        background2:{
            100: "#ede6ea",
            200: "#dccdd5",
            300: "#cab4bf",
            400: "#b99baa",
            500: "#a78295",
            600: "#866877",
            700: "#644e59",
            800: "#43343c",
            900: "#211a1e"
        },
        secondary:{
            100: "#d9d5d8",
            200: "#b2abb2",
            300: "#8c828b",
            400: "#655865",
            500: "#3f2e3e",
            600: "#322532",
            700: "#261c25",
            800: "#191219",
            900: "#0d090c"
        },
        primary:{
            100: "#d6d2d5",
            200: "#ada5ab",
            300: "#857780",
            400: "#5c4a56",
            500: "#331d2c",
            600: "#291723",
            700: "#1f111a",
            800: "#140c12",
            900: "#0a0609"
    }
      }),
});

// MUI theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.background2[700],
              main: colors.background2[500],
              light: colors.background2[100],
            },
            background: {
              default: colors.background[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.background2[700],
              main: colors.background2[500],
              light: colors.background2[100],
            },
            background: {
              default: colors.background[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
