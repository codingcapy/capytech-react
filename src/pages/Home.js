

import { Thumbnail } from "../components/Thumbnail"
import { SideMenu } from "../components/SideMenu"
import vid1Thumb from "../image/video1.jpg"
import vid2Thumb from "../image/video2.jpg"
import vid3Thumb from "../image/video3.jpg"
import vid4Thumb from "../image/video4.jpg"
import vid5Thumb from "../image/video5.jpg"

export let streamArray = {
    vid1: { imgSrc: vid1Thumb, path: "/video-1", title: "Wild Rift Highlights 1", appUser: "spkim0921", uploadDate: "2021-12-03" },
    vid2: { imgSrc: vid2Thumb, path: "/video-2", title: "Wild Rift Highlights 2", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid3: { imgSrc: vid3Thumb, path: "/video-3", title: "Wild Rift Highlights 3", appUser: "spkim0921", uploadDate: "2021-12-05" },
    vid4: { imgSrc: vid4Thumb, path: "/video-4", title: "Wild Rift Highlights 4", appUser: "spkim0921", uploadDate: "2021-12-05" },
    vid5: { imgSrc: vid5Thumb, path: "/video-5", title: "Wild Rift Highlights 5", appUser: "spkim0921", uploadDate: "2021-12-06" },
}

export function Home() {

    return (
        <main>
            <h1 className="main-title" >Capytech React Project</h1>
            <p className="main-title">You are now viewing the Capytech React website.</p>
            <div id="main-container">
                <SideMenu />
                <div id="videos-dashboard">
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