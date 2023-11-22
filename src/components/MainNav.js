
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export function MainNav() {
    return (
        <nav id="main-nav">
            <ul id="nav-ul">
                <li><Link to="/capytech-react" className="nav-link">Home</Link></li>
                <li><div className="searchBarContainer"><input placeholder="Search" className="searchBar"/> <FaSearch size={20}/></div></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
                <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
        </nav>
    )
}