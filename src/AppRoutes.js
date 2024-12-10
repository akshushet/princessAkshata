import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation, Router } from 'react-router-dom';
import AppLayout from './AppLayout';
import Homepage from './screens/Homepage';
import Login from './screens/Auth/Login';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/" element={<AppLayout />}>
                <Route path="/homeLovePage" element={<Homepage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
