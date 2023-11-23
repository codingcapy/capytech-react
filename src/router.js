
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

export function Router() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/capytech-react" element={<Home />} loader={pageLoader} />
                <Route path="/capytech-react/login" element={<LoginPage />} />
                <Route path="/capytech-react/signup" element={<SignupPage />} />
                <Route path="/capytech-react/videos/:videoId" element={<VidPlayer />} loader={vidPlayerLoader} />
            </Route>
        )
    )
    return router
}