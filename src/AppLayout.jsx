import React from 'react'
import Header from './screens/components/Header';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './screens/components/Footer';

const AppLayout = () => {
    console.log('The testing that it is working');
    
    return (
        <div>
            <Header />
            <Box component="main" sx={{ flexGrow: 2 }}>
                {<Outlet />}
            </Box>
            <Footer />
        </div>
    )
}

export default AppLayout;
