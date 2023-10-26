import { createContext,useState,useMemo } from "react";
import { createTheme  } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

// color design tokens

export const tokens=(mode)=>({
...(mode==="dark"?{
    background: {
        100: "#ccd6db",
        200: "#99acb6",
        300: "#668392",
        400: "#33596d",
        500: "#003049",
        600: "#00263a",
        700: "#001d2c",
        800: "#00131d",
        900: "#000a0f"
    },
    primery: {
        100: "#f7d4d4",
        200: "#efa9a9",
        300: "#e67e7e",
        400: "#de5353",
        500: "#d62828",
        600: "#ab2020",
        700: "#801818",
        800: "#561010",
        900: "#2b0808"
    },
    highlight: {
        100: "#fde5cc",
        200: "#fccc99",
        300: "#fab266",
        400: "#f99933",
        500: "#f77f00",
        600: "#c66600",
        700: "#944c00",
        800: "#633300",
        900: "#311900"
    },
    highlight2: {
        100: "#fef2db",
        200: "#fee5b6",
        300: "#fdd992",
        400: "#fdcc6d",
        500: "#fcbf49",
        600: "#ca993a",
        700: "#97732c",
        800: "#654c1d",
        900: "#32260f"
    },
    secondary: {
        100: "#fbf9f1",
        200: "#f7f3e2",
        300: "#f2eed4",
        400: "#eee8c5",
        500: "#eae2b7",
        600: "#bbb592",
        700: "#8c886e",
        800: "#5e5a49",
        900: "#2f2d25"
    }

}:{background: {
    100: "#fbfbfb",
    200: "#f8f8f6",
    300: "#f4f4f2",
    400: "#f1f1ed",
    500: "#edede9",
    600: "#bebeba",
    700: "#8e8e8c",
    800: "#5f5f5d",
    900: "#2f2f2f"
},
primery: {
    100: "#f7f5f3",
    200: "#efebe7",
    300: "#e6e0da",
    400: "#ded6ce",
    500: "#d6ccc2",
    600: "#aba39b",
    700: "#807a74",
    800: "#56524e",
    900: "#2b2927"
},
highlight: {
    100: "#fdfbf9",
    200: "#fbf7f3",
    300: "#f9f3ec",
    400: "#f7efe6",
    500: "#f5ebe0",
    600: "#c4bcb3",
    700: "#938d86",
    800: "#625e5a",
    900: "#312f2d"
},
highlight2: {
    100: "#f9f7f4",
    200: "#f4eeea",
    300: "#eee6df",
    400: "#e9ddd5",
    500: "#e3d5ca",
    600: "#b6aaa2",
    700: "#888079",
    800: "#5b5551",
    900: "#2d2b28"
},
secondary: {
    100: "#f7f2ef",
    200: "#eee5df",
    300: "#e6d7cf",
    400: "#ddcabf",
    500: "#d5bdaf",
    600: "#aa978c",
    700: "#807169",
    800: "#554c46",
    900: "#2b2623"
}})

})

// MUI theme settings
export const themeSettings=(mode)=>{
    const colors= tokens(mode)

    return{
        palette:{
             mode:mode,
             ...(mode==="dark"?
             {

                primery:{
                    main:colors.primery[500]
                },
                secondary:{
                    main:colors.secondary[500]
                },
                neutral:{
                    dark:colors.highlight[700],
                    main:colors.highlight[500],
                    light:colors.highlight[100]
                },
                background:{
                    default:colors.background[500]
                }

             }:{
                primery:{
                    main:colors.primery[500]
                },
                secondary:{
                    main:colors.secondary[500]
                },
                neutral:{
                    dark:colors.highlight[700],
                    main:colors.highlight[500],
                    light:colors.highlight[100]
                },
                background:{
                    default:colors.background[500]
                }
             })
        },
        typography:{
            fontFamily:["Source Sans", "sans-serif" ].join(","),
            fontSize:12,
            h1:{
                fontFamily:["Source Sans", "sans-serif" ].join(","),
                fontSize:40
            },
            h2:{
                fontFamily:["Source Sans", "sans-serif" ].join(","),
                fontSize:32
            },
            h3:{
                fontFamily:["Source Sans", "sans-serif" ].join(","),
                fontSize:24
            },
            h4:{
                fontFamily:["Source Sans", "sans-serif" ].join(","),
                fontSize:20
            },
            h5:{
                fontFamily:["Source Sans", "sans-serif" ].join(","),
                fontSize:16
            },
            h6:{
                fontFamily:["Source Sans", "sans-serif" ].join(","),
                fontSize:14
            },
        }
    }
}


// context for color mode

export const ColorModeContext=createContext({
    toggleColorMode:()=>{}
});

export const useMode=()=>{
    const [mode,setMode]=useState("dark")
    const colorMode= useMemo(
        ()=>({
            toggleColorMode:()=>
                setMode((prev)=>(prev==="dark"?"light":"dark"))
            
        }),[]
    );

  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode])

  return [theme,colorMode]
}


