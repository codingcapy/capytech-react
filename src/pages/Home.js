

import { Thumbnail } from "../components/Thumbnail"
import vid1Thumb from "../image/video1.jpg"
import vid2Thumb from "../image/video2.jpg"

let streamArray = {
    vid1: { imgSrc: vid1Thumb, path: "/video-1", title: "Wild Rift Highlights 1", appUser: "spkim0921", uploadDate: "2021-12-03" },
    vid2: { imgSrc: vid2Thumb, path: "/video-2", title: "Wild Rift Highlights 2", appUser: "spkim0921", uploadDate: "2021-12-04" }
}

export function Home() {

    return (
        <main>
            <h1 >Capytech React Project</h1>
            <p className="main-title">You are now viewing the Capytech React website.</p>
            <div id="main-container">
                <div id="side-menu">
                    <ul>
                        <li>Home</li>
                        <li>Shorts</li>
                        <li>Subscriptions</li>
                        <hr />
                        <li>Library</li>
                        <li>History</li>
                        <li>Your videos</li>
                        <li>Your movies & TV</li>
                        <li>Watch later</li>
                        <li>Liked videos</li>
                        <li>Favorites</li>
                    </ul>
                </div>
                <div id="videos-dashboard">
                    <Thumbnail src={streamArray.vid1.imgSrc} path={streamArray.vid1.path} title={streamArray.vid1.title} appUser={streamArray.vid1.appUser} uploadDate={streamArray.vid1.uploadDate} />
                    <Thumbnail src={streamArray.vid2.imgSrc} path={streamArray.vid2.path} title={streamArray.vid2.title} appUser={streamArray.vid2.appUser} uploadDate={streamArray.vid2.uploadDate} />
                </div>
            </div>
        </main>
    )
}