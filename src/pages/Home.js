
import axios from "axios"
import DOMAIN from "../services/endpoint"
import { Link } from "react-router-dom"
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
import { useLoaderData } from "react-router-dom"

export let videoArray = [vid1Thumb, vid2Thumb, vid3Thumb, vid4Thumb, vid5Thumb, vid6Thumb, vid7Thumb, vid8Thumb, vid9Thumb, vid10Thumb]

export let streamArray = {
    vid1: { imgSrc: vid1Thumb, path: "/capytech-react/videos/1", title: "Wild Rift Highlights 1", appUser: "spkim0921", uploadDate: "2021-12-03" },
    vid2: { imgSrc: vid2Thumb, path: "/capytech-react/videos/2", title: "Wild Rift Highlights 2", appUser: "spkim0921", uploadDate: "2021-12-03" },
    vid3: { imgSrc: vid3Thumb, path: "/capytech-react/videos/3", title: "Wild Rift Highlights 3", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid4: { imgSrc: vid4Thumb, path: "/capytech-react/videos/4", title: "Wild Rift Highlights 4", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid5: { imgSrc: vid5Thumb, path: "/capytech-react/videos/5", title: "Wild Rift Highlights 5", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid6: { imgSrc: vid6Thumb, path: "/capytech-react/videos/6", title: "Wild Rift Highlights 6", appUser: "spkim0921", uploadDate: "2021-12-04" },
    vid7: { imgSrc: vid7Thumb, path: "/capytech-react/videos/7", title: "Wild Rift Highlights 7", appUser: "spkim0921", uploadDate: "2021-12-05" },
    vid8: { imgSrc: vid8Thumb, path: "/capytech-react/videos/8", title: "Wild Rift Highlights 8", appUser: "spkim0921", uploadDate: "2021-12-20" },
    vid9: { imgSrc: vid9Thumb, path: "/capytech-react/videos/9", title: "Wild Rift Highlights 9", appUser: "spkim0921", uploadDate: "2021-12-08" },
    vid10: { imgSrc: vid10Thumb, path: "/capytech-react/videos/10", title: "Wild Rift Highlights 10", appUser: "spkim0921", uploadDate: "2021-12-03" },
}

export function Home() {

    const videos = useLoaderData()

    return (
        <main>
            <h1 className="main-title" >Capytech React Project</h1>
            <p className="main-title">You are now viewing the Capytech React website.</p>
            <div id="main-container">
                <SideMenu />
                <div id="videos-dashboard">
                    {videos.map((video) =>
                        <div className="thumbnail-container">
                            <Link to={`/capytech-react/videos/${video.videoId}`} style={{ textDecoration: 'none' }}>
                                <img src={videoArray[video.videoId - 1]} className="thumbnail" />
                                <h2 className="video-meta">{video.title}</h2>
                                <p className="video-meta">{video.creator}</p>
                                <p className="video-meta">{video.uploadDate}</p>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export async function pageLoader() {
    const res = await axios.get(`${DOMAIN}/api/videos`)
    return res.data
}