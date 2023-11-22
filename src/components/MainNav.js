
import { Link } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { getUserIdFromToken } from "../services/jwt.service";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from 'react-icons/io5'

export function MainNav() {

    const { logoutService, user } = useAuthStore((state) => state)

    return (
        <nav id="main-nav">
            <ul id="nav-ul">
                <li><Link to="/capytech-react" className="nav-link"><IoHomeSharp size={20} /> Home</Link></li>
                <li><div className="searchBarContainer"><input placeholder="Search" className="searchBar" /> <FaSearch size={20} /></div></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
                <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
        </nav>
    )
}