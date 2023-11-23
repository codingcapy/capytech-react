

import { Thumbnail } from "../components/Thumbnail"
import { SideMenu } from "../components/SideMenu"
import vid1Thumb from "../image/video1.jpg"
import vid2Thumb from "../image/video2.jpg"
import vid3Thumb from "../image/video3.jpg"
import vid4Thumb from "../image/video4.jpg"
import vid5Thumb from "../image/video5.jpg"
import vid6Thumb from "../image/video6.jpg"
import vid7Thumb from "../image/video7.jpg"
import vid8Thumb from "../image/video8.jpg"
import vid9Thumb from "../image/video9.jpg"
import vid10Thumb from "../image/video10.jpg"

export let streamArray = {
    vid1: { imgSrc: vid1Thumb, path: "/video-1", title: "Wild Rift Highlights 1", appUser: "spkim0921", uploadDate: "2021-12-03" },
    vid2: { imgSrc: vid2Thumb, path: "/video-2", title: "Wild Rift Highlights 2", appUser: "spkim0921", uploadDate: "2021-12-03" },
    vid3: { imgSrc: vid3Thumb, path: "/video-3", title: "Wild Rift Highlights 3", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid4: { imgSrc: vid4Thumb, path: "/video-4", title: "Wild Rift Highlights 4", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid5: { imgSrc: vid5Thumb, path: "/video-5", title: "Wild Rift Highlights 5", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid6: { imgSrc: vid6Thumb, path: "/video-6", title: "Wild Rift Highlights 6", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid7: { imgSrc: vid7Thumb, path: "/video-7", title: "Wild Rift Highlights 7", appUser: "spkim0921", uploadDate: "2021-12-05" },
    vid8: { imgSrc: vid8Thumb, path: "/video-8", title: "Wild Rift Highlights 8", appUser: "spkim0921", uploadDate: "2021-12-20" },
    vid9: { imgSrc: vid9Thumb, path: "/video-9", title: "Wild Rift Highlights 9", appUser: "spkim0921", uploadDate: "2021-12-08" },
    vid10: { imgSrc: vid10Thumb, path: "/video-10", title: "Wild Rift Highlights 10", appUser: "spkim0921", uploadDate: "2021-12-03" },
}

export function Home() {

    return (
        <main>
            <h1 className="main-title" >Capytech React Project</h1>
            <p className="main-title">You are now viewing the Capytech React website.</p>
            <div id="main-container">
                <SideMenu />
                <div id="videos-dashboard">
                    <Thumbnail src={streamArray.vid8.imgSrc} path={streamArray.vid8.path} title={streamArray.vid8.title} appUser={streamArray.vid8.appUser} uploadDate={streamArray.vid8.uploadDate} videoId={8}/>
                    <Thumbnail src={streamArray.vid9.imgSrc} path={streamArray.vid9.path} title={streamArray.vid9.title} appUser={streamArray.vid9.appUser} uploadDate={streamArray.vid9.uploadDate} videoId={9}/>
                    <Thumbnail src={streamArray.vid10.imgSrc} path={streamArray.vid10.path} title={streamArray.vid10.title} appUser={streamArray.vid10.appUser} uploadDate={streamArray.vid10.uploadDate} />
                    <Thumbnail src={streamArray.vid1.imgSrc} path={streamArray.vid1.path} title={streamArray.vid1.title} appUser={streamArray.vid1.appUser} uploadDate={streamArray.vid1.uploadDate} videoId={1} />
                    <Thumbnail src={streamArray.vid2.imgSrc} path={streamArray.vid2.path} title={streamArray.vid2.title} appUser={streamArray.vid2.appUser} uploadDate={streamArray.vid2.uploadDate} videoId={2}/>
                    <Thumbnail src={streamArray.vid3.imgSrc} path={streamArray.vid3.path} title={streamArray.vid3.title} appUser={streamArray.vid3.appUser} uploadDate={streamArray.vid3.uploadDate} videoId={3}/>
                    <Thumbnail src={streamArray.vid4.imgSrc} path={streamArray.vid4.path} title={streamArray.vid4.title} appUser={streamArray.vid4.appUser} uploadDate={streamArray.vid4.uploadDate} videoId={4}/>
                    <Thumbnail src={streamArray.vid5.imgSrc} path={streamArray.vid5.path} title={streamArray.vid5.title} appUser={streamArray.vid5.appUser} uploadDate={streamArray.vid5.uploadDate} videoId={5}/>
                    <Thumbnail src={streamArray.vid6.imgSrc} path={streamArray.vid6.path} title={streamArray.vid6.title} appUser={streamArray.vid6.appUser} uploadDate={streamArray.vid6.uploadDate} videoId={6}/>
                    <Thumbnail src={streamArray.vid7.imgSrc} path={streamArray.vid7.path} title={streamArray.vid7.title} appUser={streamArray.vid7.appUser} uploadDate={streamArray.vid7.uploadDate} videoId={7}/>
                </div>
            </div>
        </main>
    )
}