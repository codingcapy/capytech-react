
import { Link } from "react-router-dom";

export function MainNav() {
    return (
        <nav id="main-nav">
            <ul id="nav-ul">
                <li><Link to="/capytech-react" className="link">Home</Link></li>
                <li><input placeholder="Search" /><button className="search-button">&#x1f50e;</button></li>
            </ul>
        </nav>
    )
}