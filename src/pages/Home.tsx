import React from 'react';
import Navbar from '../components/NavBar';
import Banner from '../components/Banner';
import {createTheme} from '@mui/material';
import WhatIsOn from "../components/WhatIsOn";

// Create a custom theme (optional, but good for branding)
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#d32f2f',
        },
    },
});

export const Home = () => {
    return (
        <>
            <WhatIsOn />
        </>
    );
}