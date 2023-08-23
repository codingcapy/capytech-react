
import { Link } from "react-router-dom";

export function MainNav() {
    return (
        <nav id="main-nav">
            <ul id="nav-ul">
                <li><Link to="/capytech-react" className="nav-link">Home</Link></li>
                <li><div className="nav-link"><input placeholder="Search" /><button className="search-button">&#x1f50e;</button></div></li>
            </ul>
        </nav>
    )
}