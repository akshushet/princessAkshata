import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <h3>Akshu</h3>
            <h3 onClick={() => navigate('./entryPage')}>Login</h3>
            <h3 onClick={() => navigate('./homeLovePage')}>Home</h3>
        </Box>
    )
}

export default Header;
