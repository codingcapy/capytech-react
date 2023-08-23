import { Link } from "react-router-dom"
import {useState} from "react"
import { MainNav } from "./MainNav"

export function Header() {
    const [showNav,setShowNav] = useState(true);
    return (
        <header>
            <div id="top-bar">
                <a href="https://codingcapy.github.io/capytech/html/index.html"><img src="./capytech-react/capyness.png" alt="Capytech Icon" id="capytech-icon" /></a>
                <button id="hamburger-menu" className="hamburger-menu" onClick={()=>{
                    setShowNav(!showNav)
                }}>&#127828;</button>
            </div>
            {showNav && <MainNav/>}
        </header>
    )
}