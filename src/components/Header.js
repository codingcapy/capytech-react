
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: header component for CapyTV
 */

import { useState } from "react"
import { MainNav } from "./MainNav"
import capyness from "../image/capyness.png"

export function Header() {
    const [showNav, setShowNav] = useState(true);
    return (
        <header>
            <div id="top-bar">
                <a href="/capytech-react"><img src={capyness} alt="Capytech Icon" id="capytech-icon" /></a>
                <button id="hamburger-menu" className="hamburger-menu" onClick={() => {
                    setShowNav(!showNav)
                }}>&#127828;</button>
            </div>
            {showNav && <MainNav />}
        </header>
    )
}