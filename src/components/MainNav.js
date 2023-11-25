
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: main nav component for CapyTV
 */

import { Link } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { getUserIdFromToken } from "../services/jwt.service";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from 'react-icons/io5'
import useSearchStore from "../store/SearchStore";

export function MainNav() {

    const { logoutService, user } = useAuthStore((state) => state)
    const { content, setContent } = useSearchStore((state) => state)
    const userId = getUserIdFromToken()

    return (
        <nav id="main-nav">
            <ul id="nav-ul">
                <li><Link to="/capytech-react" className="nav-link"><IoHomeSharp size={20} /> Home</Link></li>
                <li><div className="searchBarContainer"><input placeholder="Search" className="searchBar" onChange={(e) => setContent(e.target.value)} /> <FaSearch size={20} /></div></li>
                {!user && <li><Link to="/capytech-react/login" className="nav-link">Login</Link></li>}
                {!user && <li><Link to="/capytech-react/signup" className="nav-link">Sign Up</Link></li>}
                {user && <li><Link to={`/capytech-react/users/${userId.toString()}`} className="nav-link">{user.username}</Link></li>}
                {user && <li><Link to="/capytech-react" className="nav-link" onClick={logoutService}>Logout</Link></li>}
            </ul>
        </nav>
    )
}