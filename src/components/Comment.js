
import axios from "axios"
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore"
import { getUserIdFromToken } from "../services/jwt.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiThumbsUpDuotone, PiThumbsUpFill, PiThumbsDownLight, PiThumbsDownFill } from "react-icons/pi";
import styles from "./comment.module.css"

export function Comment(props) {

    const { user } = useAuthStore((state) => state)
    const userId = getUserIdFromToken();
    const [commentEditMode, setCommentEditMode] = useState(false)
    const [editedContent, setEditedContent] = useState(props.content);
    const navigate = useNavigate();
    const [replyMode, setReplyMode] = useState(false)
    const [currentTime] = useState(new Date());
    const formattedDate = currentTime.toLocaleString();

    function toggleCommentEditMode() {
        setCommentEditMode(!commentEditMode)
    }

    function toggleReplyMode() {
        setReplyMode(!replyMode)
    }

    async function handleDeleteComment() {
        const content = "[This comment was deleted]"
        const videoId = props.videoId
        const userId = props.userId
        const date = props.date
        const commentId = props.commentId
        const edited = false;
        const deleted = true;
        const updatedComment = { content, videoId, userId, date, commentId, edited, deleted };
        const res = await axios.post(`${DOMAIN}/api/comments/${commentId}`, updatedComment)
        if (res?.data.success) {
            navigate(`/capytech-react/videos/${videoId}`)
        }
    }

    async function handleEditComment(e) {
        e.preventDefault()
        const content = e.target.content.value;
        const videoId = props.videoId
        const userId = props.userId
        const date = props.date
        const commentId = props.commentId
        const edited = true;
        const deleted = false;
        const updatedComment = { content, videoId, userId, date, commentId, edited, deleted };
        const res = await axios.post(`${DOMAIN}/api/comments/${commentId}`, updatedComment)
        toggleCommentEditMode()
        if (res?.data.success) {
            navigate(`/capytech-react/videos/${videoId}`)
        }
    }

    return (
        <div className={styles.commentContainer}>
            <p className={styles.title}><strong>@{props.user}</strong> {props.date} {props.edited && "(edited)"}</p>
            {commentEditMode
                ? <form onSubmit={handleEditComment}>
                    <input type="text" name="content" id="content" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} className={styles.textarea} required />
                    <p><button type="submit" className={styles.submitBtn}>Update</button>
                        <button onClick={toggleCommentEditMode} className={styles.submitBtn}>Cancel</button></p>
                </form>
                : <div>
                    <p className={styles.content}>{props.content}</p>
                    <div className={styles.actions}>
                        <div className={styles.likeBtn}>
                            {user && <PiThumbsUpDuotone size={25} />}
                        </div>
                        <div className={styles.likeBtn}>
                            {user && <PiThumbsDownLight size={25} />}
                        </div>
                        {props.deleted ? "" : userId === props.userId && <button onClick={toggleCommentEditMode} className={styles.ownerActions}>Edit</button>}
                        {props.deleted ? "" : userId === props.userId && <button className={styles.ownerActions} onClick={handleDeleteComment}>Delete</button>}
                    </div>
                </div>}
        </div>
    )
}