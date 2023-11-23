
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: router js for CapyTV
 */

import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import useAuthStore from "./store/AuthStore";
import Layout from "./Layout";
import { Home, pageLoader } from './pages/Home';
import { VidPlayer } from './pages/VidPlayer';
import video1 from "./videos/video-2021-12-03-22-53.mp4"
import video2 from "./videos/video-2021-12-03-23-13.mp4"
import video3 from "./videos/video-2021-12-04-23-28-1.mp4"
import video4 from "./videos/video-2021-12-04-23-28.mp4"
import video5 from "./videos/video-2021-12-04-23-50-1.mp4"
import video6 from "./videos/video-2021-12-04-23-50.mp4"
import video7 from "./videos/video-2021-12-05-00-12.mp4"
import video8 from "./videos/video-1-2021-12-20-221603_1.mp4"
import video9 from "./videos/video-2-2021-12-08-231135_0.mp4"
import video10 from "./videos/video-3-2021-12-08-213139_1.mp4"
import { streamArray } from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';

export function Router() {

    const authCheck = useAuthStore((state) => { return state.user ? state.user : false });

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/capytech-react" element={<Home />} loader={pageLoader} />
                <Route path="/capytech-react/login" element={<LoginPage />} />
                <Route path="/capytech-react/signup" element={<SignupPage />} />
                <Route path="/capytech-react/videos/1" element={<VidPlayer src={video1} path={streamArray.vid1.path} title={streamArray.vid1.title} appUser={streamArray.vid1.appUser} uploadDate={streamArray.vid1.uploadDate} />} />
                <Route path="/capytech-react/videos/2" element={<VidPlayer src={video2} path={streamArray.vid2.path} title={streamArray.vid2.title} appUser={streamArray.vid2.appUser} uploadDate={streamArray.vid2.uploadDate} />} />
                <Route path="/capytech-react/videos/3" element={<VidPlayer src={video3} path={streamArray.vid3.path} title={streamArray.vid3.title} appUser={streamArray.vid3.appUser} uploadDate={streamArray.vid3.uploadDate} />} />
                <Route path="/capytech-react/videos/4" element={<VidPlayer src={video4} path={streamArray.vid4.path} title={streamArray.vid4.title} appUser={streamArray.vid4.appUser} uploadDate={streamArray.vid4.uploadDate} />} />
                <Route path="/capytech-react/videos/5" element={<VidPlayer src={video5} path={streamArray.vid5.path} title={streamArray.vid5.title} appUser={streamArray.vid5.appUser} uploadDate={streamArray.vid5.uploadDate} />} />
                <Route path="/capytech-react/videos/6" element={<VidPlayer src={video6} path={streamArray.vid6.path} title={streamArray.vid6.title} appUser={streamArray.vid6.appUser} uploadDate={streamArray.vid6.uploadDate} />} />
                <Route path="/capytech-react/videos/7" element={<VidPlayer src={video7} path={streamArray.vid7.path} title={streamArray.vid7.title} appUser={streamArray.vid7.appUser} uploadDate={streamArray.vid7.uploadDate} />} />
                <Route path="/capytech-react/videos/8" element={<VidPlayer src={video8} path={streamArray.vid8.path} title={streamArray.vid8.title} appUser={streamArray.vid8.appUser} uploadDate={streamArray.vid8.uploadDate} />} />
                <Route path="/capytech-react/videos/9" element={<VidPlayer src={video9} path={streamArray.vid9.path} title={streamArray.vid9.title} appUser={streamArray.vid9.appUser} uploadDate={streamArray.vid9.uploadDate} />} />
                <Route path="/capytech-react/videos/10" element={<VidPlayer src={video10} path={streamArray.vid10.path} title={streamArray.vid10.title} appUser={streamArray.vid10.appUser} uploadDate={streamArray.vid10.uploadDate} />} />
            </Route>
        )
    )
    return router
}