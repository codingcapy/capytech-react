
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: router js for CapyTV
 */

import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import { Home, pageLoader } from './pages/Home';
import { VidPlayer, vidPlayerLoader } from './pages/VidPlayer';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import ProfilePage, { profileLoader } from "./pages/Profile";
import Maintenance from "./pages/Maintenance";

export function Router() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/capytech-react/maintenance" element={<Home />} loader={pageLoader} />
                <Route path="/capytech-react/maintenance2" element={<LoginPage />} />
                <Route path="/capytech-react/maintenance3" element={<SignupPage />} />
                <Route path="/capytech-react/videos/:videoId" element={<VidPlayer />} loader={vidPlayerLoader} />
                <Route path="/capytech-react/users/:userId" element={<ProfilePage />} loader={profileLoader} />
                <Route path="/capytech-react/" element={<Maintenance />} />
                <Route path="/capytech-react/login" element={<Maintenance />} />
                <Route path="/capytech-react/signup" element={<Maintenance />} />
            </Route>
        )
    )
    return router
}