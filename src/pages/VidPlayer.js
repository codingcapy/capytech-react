
import axios from "axios"
import DOMAIN from "../services/endpoint"
import { Video } from "../components/Video"
import { useState } from "react"
import { Comment } from "../components/Comment"
import styles from "./vidplayer.module.css"
import { PiThumbsUpDuotone } from "react-icons/pi";
import { PiThumbsDownLight } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom"
import { videoArray } from "./Home"
import video1 from "../videos/video-2021-12-03-22-53.mp4"
import video2 from "../videos/video-2021-12-03-23-13.mp4"
import video3 from "../videos/video-2021-12-04-23-28-1.mp4"
import video4 from "../videos/video-2021-12-04-23-28.mp4"
import video5 from "../videos/video-2021-12-04-23-50-1.mp4"
import video6 from "../videos/video-2021-12-04-23-50.mp4"
import video7 from "../videos/video-2021-12-05-00-12.mp4"
import video8 from "../videos/video-1-2021-12-20-221603_1.mp4"
import video9 from "../videos/video-2-2021-12-08-231135_0.mp4"
import video10 from "../videos/video-3-2021-12-08-213139_1.mp4"

export function VidPlayer(props) {

    const data = useLoaderData()

    let videoSrc;
    if (data.video.videoId === 1){
        videoSrc = video1
    }
    else if (data.video.videoId === 2){
        videoSrc = video2
    }
    else if (data.video.videoId === 3){
        videoSrc = video3
    }
    else if (data.video.videoId === 4){
        videoSrc = video4
    }
    else if (data.video.videoId === 5){
        videoSrc = video5
    }
    else if (data.video.videoId === 6){
        videoSrc = video6
    }
    else if (data.video.videoId === 7){
        videoSrc = video7
    }
    else if (data.video.videoId === 8){
        videoSrc = video8
    }
    else if (data.video.videoId === 9){
        videoSrc = video9
    }
    else if (data.video.videoId === 10){
        videoSrc = video10
    }

    const [currentTime] = useState(new Date());

    const comments = []
    const [commentContent, setCommentContent] = useState("")
    const [commentList, setCommentList] = useState(comments)
    function updateCommentContent(e) {
        setCommentContent(e.target.value)
    }
    function addComment() {
        const newComment = {
            commentId: commentList.length === 0 ? 1 : commentList[commentList.length - 1].commentId + 1,
            content: commentContent,
            user: "spkim0921",
            date: currentTime.toLocaleString()
        }
        const newComments = [...commentList, newComment]
        setCommentList(newComments)
        setCommentContent("")
    }
    return (
        <div className={styles.vidPlayer}>
            <Video src={videoSrc} className={styles.vidPlayer} />
            <div id="vidplayer-ui">
                <div id="vidplayer-ui2">
                    <h1 id="video-title">{data.video.title}</h1>
                    <div className={styles.sub}>
                        <h2 id="user-id">{data.video.creator} </h2>
                        <div className={styles.likes}><div className={styles.like}><PiThumbsUpDuotone size={25} /></div> 0 | <div className={styles.like}><PiThumbsDownLight size={25} /></div></div>
                    </div>
                    <div id="comments-section">
                        <div className="comments">
                            <h2>Comments</h2>
                            <div>
                                <input type="text" placeholder="Add a comment..." className="comment-input" onChange={updateCommentContent} value={commentContent} />
                                <button id="submit-button" onClick={addComment}>Comment</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {commentList.map((comment) => <Comment key={comment.commentId} content={comment.content} user={comment.user} date={comment.date} />)}
                    </div>
                </div>
                <div id="suggested-menu">
                {data.videos.map((video) =>
                        <div key={video.videoId} className="thumbnail-container">
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
        </div>
    )
}

export async function vidPlayerLoader({ params }) {
    const res = await axios.get(`${DOMAIN}/api/videos/${params.videoId}`)
    return res.data
}