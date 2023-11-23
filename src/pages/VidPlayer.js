
import axios from "axios"
import DOMAIN from "../services/endpoint"
import useAuthStore from "../store/AuthStore";
import { getUserIdFromToken } from '../services/jwt.service';
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { Video } from "../components/Video"
import { useState } from "react"
import { Comment } from "../components/Comment"
import { PiThumbsUpDuotone } from "react-icons/pi";
import { PiThumbsUpFill } from "react-icons/pi";
import { PiThumbsDownLight } from "react-icons/pi";
import { PiThumbsDownFill } from "react-icons/pi";
import { videoArray } from "./Home"
import styles from "./vidplayer.module.css"
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

export function VidPlayer() {

    const data = useLoaderData()
    const { user } = useAuthStore((state) => state);
    const userId = getUserIdFromToken();
    const navigate = useNavigate();
    const [currentTime] = useState(new Date());
    const [disliked, setDisliked] = useState(false)

    const formattedDate = currentTime.toLocaleString();

    let videoSrc;
    if (data.video.videoId === 1) {
        videoSrc = video1
    }
    else if (data.video.videoId === 2) {
        videoSrc = video2
    }
    else if (data.video.videoId === 3) {
        videoSrc = video3
    }
    else if (data.video.videoId === 4) {
        videoSrc = video4
    }
    else if (data.video.videoId === 5) {
        videoSrc = video5
    }
    else if (data.video.videoId === 6) {
        videoSrc = video6
    }
    else if (data.video.videoId === 7) {
        videoSrc = video7
    }
    else if (data.video.videoId === 8) {
        videoSrc = video8
    }
    else if (data.video.videoId === 9) {
        videoSrc = video9
    }
    else if (data.video.videoId === 10) {
        videoSrc = video10
    }

    async function handleCommentSubmit(e) {
        e.preventDefault()
        const content = e.target.content.value;
        const videoId = data.video.videoId
        const userId = getUserIdFromToken();
        const date = formattedDate
        const edited = false;
        const deleted = false;
        const newComment = { content, videoId, userId, date, edited, deleted };
        const res = await axios.post(`${DOMAIN}/api/comments`, newComment);
        if (res?.data.success) {
            e.target.content.value = "";
            navigate(`/capytech-react/videos/${data.video.videoId}`);
        }
    }

    async function clickLike() {
        if (!data.likes.find((like) => like.voterId === userId)) {
            const value = 1
            const voterId = userId;
            const videoId = data.video.videoId;
            const like = { value, videoId, voterId };
            setDisliked(false)
            const res = await axios.post(`${DOMAIN}/api/likes`, like);
            if (res?.data.success) {
                navigate(`/capytech-react/videos/${data.video.videoId}`);
            }
        }
        else if (data.likes.filter((like) => like.voterId === parseInt(userId))[0].value === 0) {
            const value = 1
            const voterId = userId;
            const videoId = data.video.videoId;
            const likeId = data.likes.filter((like) => like.voterId === parseInt(userId))[0].likeId;
            const updatedLike = { value, videoId, voterId, likeId }
            const res = await axios.post(`${DOMAIN}/api/likes/${likeId}`, updatedLike)
            if (res?.data.success) {
                navigate(`/capytech-react/videos/${data.video.videoId}`);
            }
        }
    }

    async function neutralVote() {
        const value = 0
        const voterId = userId;
        const videoId = data.video.videoId;
        const likeId = data.likes.filter((like) => like.voterId === parseInt(userId))[0].likeId;
        const updatedLike = { value, videoId, voterId, likeId }
        setDisliked(!disliked)
        const res = await axios.post(`${DOMAIN}/api/likes/${likeId}`, updatedLike)
        if (res?.data.success) {
            navigate(`/capytech-react/videos/${data.video.videoId}`);
        }
    }

    return (
        <div className={styles.vidPlayer}>
            <Video src={videoSrc} className={styles.vidPlayer} />
            <div id="vidplayer-ui">
                <div id="vidplayer-ui2">
                    <h1 id="video-title">{data.video.title}</h1>
                    <div className={styles.sub}>
                        <h2 id="user-id">{data.video.creator} </h2>
                        <div className={styles.likes}>
                            {data.likes.find((like) => like.voterId === userId) !== undefined && data.likes.find((like) => like.voterId === userId).value > 0
                                ? <div className={styles.like} onClick={neutralVote}><PiThumbsUpFill size={25} /></div>
                                :
                                <div className={styles.like} onClick={clickLike}><PiThumbsUpDuotone size={25} /></div>}
                            {data.likes.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)} |
                            {disliked
                                ? <div className={styles.like} onClick={neutralVote}><PiThumbsDownFill size={25} /></div>
                                : <div className={styles.like} onClick={neutralVote}><PiThumbsDownLight size={25} /></div>}
                        </div>
                    </div>
                    <p>Upload Date: {data.video.uploadDate}</p>
                    <div id="comments-section">
                        {!user && <p>Please log in to add comments!</p>}
                        {user && <div>
                            <h2>Comments</h2>
                            <div>
                                <form onSubmit={handleCommentSubmit}>
                                    <input type="text" name="content" id="content" placeholder="Add a comment..." required className="comment-input" />
                                    <button type="submit" id="submit-button" className={styles.commentBtn}>Comment</button>
                                </form>
                            </div>
                        </div>}
                    </div>
                    <div>
                        {data.comments.map((comment) => <Comment key={comment._doc.commentId} content={comment._doc.content} user={comment.userName} date={comment._doc.date} commentId={comment._doc.commentId} userId={comment._doc.userId} />)}
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