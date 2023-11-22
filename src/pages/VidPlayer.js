
import { Video } from "../components/Video"
import { Thumbnail } from "../components/Thumbnail"
import { streamArray } from "./Home"
import { useState } from "react"
import { Comment } from "../components/Comment"
import styles from "./vidplayer.module.css"
import { PiThumbsUpDuotone } from "react-icons/pi";
import { PiThumbsDownLight } from "react-icons/pi";

export function VidPlayer(props) {

    const [currentTime, setCurrentTime] = useState(new Date());

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
            <Video src={props.src} className={styles.vidPlayer} />
            <div id="vidplayer-ui">
                <div id="vidplayer-ui2">
                    <h1 id="video-title">{props.title}</h1>
                    <div className={styles.sub}>
                        <h2 id="user-id">{props.appUser} </h2>
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
                    <Thumbnail src={streamArray.vid9.imgSrc} path={streamArray.vid9.path} title={streamArray.vid9.title} appUser={streamArray.vid9.appUser} uploadDate={streamArray.vid9.uploadDate} />
                    <Thumbnail src={streamArray.vid10.imgSrc} path={streamArray.vid10.path} title={streamArray.vid10.title} appUser={streamArray.vid10.appUser} uploadDate={streamArray.vid10.uploadDate} />
                    <Thumbnail src={streamArray.vid8.imgSrc} path={streamArray.vid8.path} title={streamArray.vid8.title} appUser={streamArray.vid8.appUser} uploadDate={streamArray.vid8.uploadDate} />
                    <Thumbnail src={streamArray.vid1.imgSrc} path={streamArray.vid1.path} title={streamArray.vid1.title} appUser={streamArray.vid1.appUser} uploadDate={streamArray.vid1.uploadDate} />
                    <Thumbnail src={streamArray.vid2.imgSrc} path={streamArray.vid2.path} title={streamArray.vid2.title} appUser={streamArray.vid2.appUser} uploadDate={streamArray.vid2.uploadDate} />
                    <Thumbnail src={streamArray.vid3.imgSrc} path={streamArray.vid3.path} title={streamArray.vid3.title} appUser={streamArray.vid3.appUser} uploadDate={streamArray.vid3.uploadDate} />
                    <Thumbnail src={streamArray.vid4.imgSrc} path={streamArray.vid4.path} title={streamArray.vid4.title} appUser={streamArray.vid4.appUser} uploadDate={streamArray.vid4.uploadDate} />
                    <Thumbnail src={streamArray.vid5.imgSrc} path={streamArray.vid5.path} title={streamArray.vid5.title} appUser={streamArray.vid5.appUser} uploadDate={streamArray.vid5.uploadDate} />
                </div>
            </div>
        </div>
    )
}