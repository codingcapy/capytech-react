
import { Video } from "../components/Video"

export function VidPlayer(props) {
    return (
        <main>
            <Video src={props.src} />
            <h1 id="video-title">{props.title}</h1>
            <h2 id="user-id">{props.appUser}</h2>
            <div>
                <h2>Comments</h2>
                <div>
                    <input type="text" placeholder="Add a comment..." className="comment-input" />
                    <button id="submit-button">Submit</button>
                </div>
            </div>
        </main>
    )
}