
import { Link } from "react-router-dom"

export function Thumbnail(props) {
    return (
        <div>
            <Link to={props.path}>
                <img src={props.src} className="thumbnail" />
                <h2 className="video-title">{props.title}</h2>
            </Link>
        </div>
    )
}