
import axios from "axios"
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore"
import { getUserIdFromToken } from "../services/jwt.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiThumbsUpDuotone, PiThumbsUpFill, PiThumbsDownLight, PiThumbsDownFill } from "react-icons/pi";
import styles from "./reply.module.css"

export default function Reply(props) {

    const { user } = useAuthStore((state) => state)
    const userId = getUserIdFromToken();
    const [commentEditMode, setCommentEditMode] = useState(false)
    const [editedContent, setEditedContent] = useState(props.content);
    const navigate = useNavigate();
    const [replyMode, setReplyMode] = useState(false)
    const [currentTime] = useState(new Date());
    const [disliked, setDisliked] = useState(false)
    const formattedDate = currentTime.toLocaleString();

    function toggleCommentEditMode() {
        setCommentEditMode(!commentEditMode)
    }

    function toggleReplyMode() {
        setReplyMode(!replyMode)
    }

    async function handleReplySubmit(e) {
        e.preventDefault()
        const content = `@${props.user} ${e.target.content.value}`;
        const videoId = props.videoId;
        const commentId = props.commentId;
        const userId = getUserIdFromToken();
        const date = formattedDate
        const deleted = false
        const edited = false
        const newReply = { content, videoId, commentId, userId, date, deleted, edited };
        const res = await axios.post(`${DOMAIN}/api/replies`, newReply);
        toggleReplyMode()
        if (res?.data.success) {
            e.target.content.value = "";
            navigate(`/capytech-react/videos/${videoId}`);
        }
    }

    async function handleEditReply(e) {
        e.preventDefault()
        const content = e.target.content.value;
        const videoId = props.videoId
        const commentId = props.commentId
        const replyId = props.replyId
        const userId = props.userId
        const date = props.date
        const edited = true;
        const deleted = false;
        const updatedComment = { content, videoId, commentId, replyId, userId, date, edited, deleted };
        const res = await axios.post(`${DOMAIN}/api/replies/${replyId}`, updatedComment)
        toggleCommentEditMode()
        if (res?.data.success) {
            navigate(`/capytech-react/videos/${videoId}`)
        }
    }

    async function handleDeleteReply(e) {
        e.preventDefault()
        const content = "[This comment was deleted]";
        const videoId = props.videoId
        const commentId = props.commentId
        const replyId = props.replyId
        const userId = props.userId
        const date = props.date
        const edited = false;
        const deleted = true;
        const updatedComment = { content, videoId, commentId, replyId, userId, date, edited, deleted };
        const res = await axios.post(`${DOMAIN}/api/replies/${replyId}`, updatedComment)
        if (res?.data.success) {
            navigate(`/capytech-react/videos/${videoId}`)
        }
    }

    async function clickUpvote() {
        if (!user) return navigate(`/capytech-react/login`);
        if (userId === props.userId) return
        if (!props.replyLikes.find((replyLike) => replyLike.voterId === userId)) {
            const value = 1
            const videoId = props.videoId;
            const commentId = props.commentId
            const replyId = props.replyId
            const voterId = userId;
            const vote = { value, videoId, commentId, replyId, voterId, };
            setDisliked(false)
            const res = await axios.post(`${DOMAIN}/api/replylikes`, vote);
            if (res?.data.success) {
                navigate(`/capytech-react/videos/${videoId}`);
            }
        }
        else if (props.replyLikes.filter((replyLike) => replyLike.voterId === parseInt(userId))[0].value === 0) {
            const value = 1
            const videoId = props.videoId;
            const commentId = props.commentId
            const replyId = props.replyId
            const voterId = userId;
            const replyLikeId = props.replyLikes.filter((replyLike) => replyLike.voterId === parseInt(userId))[0].replyLikeId;
            const updatedLike = { value, videoId, commentId, replyId, voterId, replyLikeId }
            setDisliked(false)
            const res = await axios.post(`${DOMAIN}/api/replylikes/${replyLikeId}`, updatedLike)
            if (res?.data.success) {
                navigate(`/capytech-react/videos/${videoId}`);
            }
        }
    }

    async function neutralVote() {
        if (!user) return navigate(`/capytech-react/login`);
        if (userId === props.userId) return
        const value = 0
        const videoId = props.videoId;
        const commentId = props.commentId
        const replyId = props.replyId
        const voterId = userId;
        const replyLikeId = props.replyLikes.filter((replyLike) => replyLike.voterId === parseInt(userId))[0].replyLikeId;
        const updatedLike = { value, videoId, commentId, replyId, voterId, replyLikeId }
        setDisliked(!disliked)
        const res = await axios.post(`${DOMAIN}/api/replylikes/${replyLikeId}`, updatedLike)
        if (res?.data.success) {
            navigate(`/capytech-react/videos/${videoId}`);
        }
    }

    return (
        <div className={styles.replyContainer}>
            <p className={styles.title}><strong>@{props.user}</strong> {props.date} {props.edited && "(edited)"}</p>
            {commentEditMode
                ? <form onSubmit={handleEditReply}>
                    <input type="text" name="content" id="content" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} className={styles.textarea} required />
                    <p><button type="submit" className={styles.submitBtn}>Update</button>
                        <button onClick={toggleCommentEditMode} className={styles.submitBtn}>Cancel</button></p>
                </form>
                : <div>
                    <p className={styles.content}>{props.content}</p>
                    <div className={styles.actions}>
                        {props.replyLikes.find((replyLike) => replyLike.voterId === userId) !== undefined && props.replyLikes.find((replyLike) => replyLike.voterId === userId).value > 0
                            ? <div className={styles.likeBtn} onClick={neutralVote}>
                                {<PiThumbsUpFill size={25} />}
                            </div>
                            :
                            <div className={styles.likeBtn} onClick={clickUpvote}>
                                {<PiThumbsUpDuotone size={25} />}
                            </div>
                        }
                        {props.replyLikes.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)}
                        {disliked
                            ? <div className={styles.likeBtn} onClick={neutralVote}>
                                {<PiThumbsDownFill size={25} />}
                            </div>
                            : <div className={styles.likeBtn} onClick={neutralVote}>
                                {<PiThumbsDownLight size={25} />}
                            </div>}
                        {props.deleted ? "" : userId === props.userId && <button onClick={toggleCommentEditMode} className={styles.ownerActions}>Edit</button>}
                        {props.deleted ? "" : userId === props.userId && <button className={styles.ownerActions} onClick={handleDeleteReply} >Delete</button>}
                        {userId && <button onClick={toggleReplyMode} className={styles.ownerActions}>Reply</button>}
                    </div>
                    {replyMode && <div className={styles.replyContainer}>
                        <form onSubmit={handleReplySubmit}>
                            <input type="text" name="content" id="content" placeholder="Add a reply" className={styles.textarea} required />
                            <button type="submit" className={styles.submitBtn}>Reply</button>
                            <button onClick={toggleReplyMode} className={styles.submitBtn}>Cancel</button>
                        </form>
                    </div>}
                </div>}
        </div>
    )
}