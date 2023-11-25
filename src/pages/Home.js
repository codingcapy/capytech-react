
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: home page for CapyTV
 */

import axios from "axios"
import DOMAIN from "../services/endpoint"
import { Link } from "react-router-dom"
import { SideMenu } from "../components/SideMenu"
import { useLoaderData } from "react-router-dom"
import useSearchStore from "../store/SearchStore"
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

export let videoArray = [vid1Thumb, vid2Thumb, vid3Thumb, vid4Thumb, vid5Thumb, vid6Thumb, vid7Thumb, vid8Thumb, vid9Thumb, vid10Thumb]

export function Home() {

    const videos = useLoaderData()
    const { content } = useSearchStore((state) => state)

    return (
        <main>
            <h1 className="main-title" >Capytech React Project</h1>
            <p className="main-title">You are now viewing the Capytech React website.</p>
            <div id="main-container">
                <SideMenu />
                <div id="videos-dashboard">
                    {videos.map((video) =>
                        content !== ""
                            ? video.title.toLowerCase().includes(content.toLowerCase())
                                ? <div key={video.videoId} className="thumbnail-container">
                                    <Link to={`/capytech-react/videos/${video.videoId}`} style={{ textDecoration: 'none' }}>
                                        <img src={videoArray[video.videoId - 1]} className="thumbnail" alt="video thumbnail" />
                                        <h2 className="video-meta">{video.title}</h2>
                                        <p className="video-meta">{video.creator}</p>
                                        <p className="video-meta">{video.uploadDate}</p>
                                    </Link>
                                </div>
                                : ""
                            : <div key={video.videoId} className="thumbnail-container">
                                <Link to={`/capytech-react/videos/${video.videoId}`} style={{ textDecoration: 'none' }}>
                                    <img src={videoArray[video.videoId - 1]} className="thumbnail" alt="video thumbnail" />
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