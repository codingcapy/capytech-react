
import { Link } from "react-router-dom"

export function Thumbnail(props) {
    return (
        <div className="thumbnail-container">
            <Link to={props.path} style={{ textDecoration: 'none' }}>
                <img src={props.src} className="thumbnail" />
                <h2 className="video-meta">{props.title}</h2>
                <p className="video-meta">{props.appUser}</p>
                <p className="video-meta">{props.uploadDate}</p>
            </Link>
        </div>
    )
}