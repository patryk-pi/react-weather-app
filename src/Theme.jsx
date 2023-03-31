import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#f76707",
        },
        secondary: {
            main: '#f76707',
        },
        neutral: {
            dark: '#f76707',
            main: '#f76707',
            light: '#f76707',
        },
        background: {
            default: "#fcfcfc",
        },
    },

    typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 40,
        },
        h2: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 32,
        },
        h3: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 24,
        },
        h4: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 20,
        },
        h5: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 16,
        },
        h6: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 14,
        },
    },
});