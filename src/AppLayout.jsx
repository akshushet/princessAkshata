import React from 'react'
import Header from './screens/components/Header';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const AppLayout = () => {
    console.log('jhdvbchvb');
    
    return (
        <div>
            <Header />
            <Box component="main" sx={{ flexGrow: 2 }}>
                {<Outlet />}
            </Box>
        </div>
    )
}

export default AppLayout;
