
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: layout js for CapyTV
 */

import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./ScrollToTop";

export default function Layout() {
    return (
        <div id='wrapper'>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}