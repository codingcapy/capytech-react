

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
            <h1>Capytech React Project</h1>
            <p>You are now viewing the Capytech React website.</p>
            <div id="videos-dashboard">
                <Thumbnail src={streamArray.vid1.imgSrc} path={streamArray.vid1.path} title={streamArray.vid1.title} appUser={streamArray.vid1.appUser} />
                <Thumbnail src={streamArray.vid2.imgSrc} path={streamArray.vid2.path} title={streamArray.vid2.title} appUser={streamArray.vid2.appUser} />
            </div>
        </main>
    )
}