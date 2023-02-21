import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#19ABC0',
            light: '#d4dae0',
            dark: '#676b71',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'Quicksand ',
        fontWeightLight: 500,
        fontWeightRegular: 600,
        fontWeightMedium: 700,
        fontWeightBold: 800,
        fontSize: 16,
    },

});