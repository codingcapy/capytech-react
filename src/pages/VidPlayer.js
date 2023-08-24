
import { Video } from "../components/Video"
import { Thumbnail } from "../components/Thumbnail"
import { streamArray } from "./Home"

export function VidPlayer(props) {
    return (
        <main>
            <Video src={props.src} />
            <div id="vidplayer-ui">
                <div id="vidplayer-ui2">
                    <h1 id="video-title">{props.title}</h1>
                    <h2 id="user-id">{props.appUser}</h2>
                    <div id="comments-section">
                        <h2>Comments</h2>
                        <div>
                            <input type="text" placeholder="Add a comment..." className="comment-input" />
                            <button id="submit-button">Submit</button>
                        </div>
                    </div>
                </div>
                <div id="suggested-menu">
                    <Thumbnail src={streamArray.vid1.imgSrc} path={streamArray.vid1.path} title={streamArray.vid1.title} appUser={streamArray.vid1.appUser} uploadDate={streamArray.vid1.uploadDate} />
                    <Thumbnail src={streamArray.vid2.imgSrc} path={streamArray.vid2.path} title={streamArray.vid2.title} appUser={streamArray.vid2.appUser} uploadDate={streamArray.vid2.uploadDate} />
                    <Thumbnail src={streamArray.vid3.imgSrc} path={streamArray.vid3.path} title={streamArray.vid3.title} appUser={streamArray.vid3.appUser} uploadDate={streamArray.vid3.uploadDate} />
                    <Thumbnail src={streamArray.vid4.imgSrc} path={streamArray.vid4.path} title={streamArray.vid4.title} appUser={streamArray.vid4.appUser} uploadDate={streamArray.vid4.uploadDate} />
                    <Thumbnail src={streamArray.vid5.imgSrc} path={streamArray.vid5.path} title={streamArray.vid5.title} appUser={streamArray.vid5.appUser} uploadDate={streamArray.vid5.uploadDate} />
                </div>
            </div>
        </main>
    )
}