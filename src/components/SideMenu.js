
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: side menu component for CapyTV
 */

import { Link } from "react-router-dom"

export function SideMenu() {
    return (
        <div id="side-menu">
            <ul>
                <li><Link to="/capytech-react" className="side-link">Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                <hr />
                <li>Library</li>
                <li>History</li>
                <li>Your videos</li>
                <li>Your movies & TV</li>
                <li>Watch later</li>
                <li>Liked videos</li>
                <li>Favorites</li>
            </ul>
        </div>
    )
}