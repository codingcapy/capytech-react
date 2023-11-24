
import axios from "axios"
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore"
import { getUserIdFromToken } from "../services/jwt.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiThumbsUpDuotone, PiThumbsUpFill, PiThumbsDownLight, PiThumbsDownFill } from "react-icons/pi";
import styles from "./comment.module.css"
import Reply from "./Reply";

export function Comment(props) {

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
        const content = e.target.content.value;
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

    async function clickUpvote() {
        if (!user) return navigate(`/capytech-react/login`);
        if (userId === props.userId) return
        if (!props.commentLikes.find((commentLike) => commentLike.voterId === userId)) {
            const value = 1
            const voterId = userId;
            const commentId = props.commentId
            const videoId = props.videoId;
            const vote = { value, videoId, commentId, voterId, };
            setDisliked(false)
            const res = await axios.post(`${DOMAIN}/api/commentlikes`, vote);
            if (res?.data.success) {
                navigate(`/capytech-react/videos/${videoId}`);
            }
        }
        else if (props.commentLikes.filter((commentLike) => commentLike.voterId === parseInt(userId))[0].value === 0) {
            const value = 1
            const voterId = userId;
            const commentId = props.commentId
            const videoId = props.videoId;
            const commentLikeId = props.commentLikes.filter((commentLike) => commentLike.voterId === parseInt(userId))[0].commentLikeId;
            const updatedLike = { value, videoId, commentId, voterId, commentLikeId }
            setDisliked(false)
            const res = await axios.post(`${DOMAIN}/api/commentlikes/${commentLikeId}`, updatedLike)
            if (res?.data.success) {
                navigate(`/capytech-react/videos/${videoId}`);
            }
        }
    }

    async function neutralVote() {
        if (!user) return navigate(`/capytech-react/login`);
        if (userId === props.userId) return
        const value = 0
        const voterId = userId;
        const videoId = props.videoId;
        const commentId = props.commentId
        const commentLikeId = props.commentLikes.filter((commentLike) => commentLike.voterId === parseInt(userId))[0].commentLikeId;
        const updatedLike = { value, videoId, commentId, voterId, commentLikeId }
        setDisliked(!disliked)
        const res = await axios.post(`${DOMAIN}/api/commentlikes/${commentLikeId}`, updatedLike)
        if (res?.data.success) {
            navigate(`/capytech-react/videos/${videoId}`);
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
                        {props.commentLikes.find((commentLike) => commentLike.voterId === userId) !== undefined && props.commentLikes.find((commentLike) => commentLike.voterId === userId).value > 0
                            ? <div className={styles.likeBtn} onClick={neutralVote}>
                                {<PiThumbsUpFill size={25} />}
                            </div>
                            :
                            <div className={styles.likeBtn} onClick={clickUpvote}>
                                {<PiThumbsUpDuotone size={25} />}
                            </div>
                        }
                        {props.commentLikes.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)}
                        {disliked
                            ? <div className={styles.likeBtn}>
                                {<PiThumbsDownFill size={25} onClick={neutralVote} />}
                            </div>
                            : <div className={styles.likeBtn}>
                                {<PiThumbsDownLight size={25} onClick={neutralVote} />}
                            </div>}
                        {props.deleted ? "" : userId === props.userId && <button onClick={toggleCommentEditMode} className={styles.ownerActions}>Edit</button>}
                        {props.deleted ? "" : userId === props.userId && <button className={styles.ownerActions} onClick={handleDeleteComment}>Delete</button>}
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
            <div>
                {props.replies.map((reply) =>
                    <Reply key={reply._doc.replyId} user={reply.userName} date={reply._doc.date} edited={reply._doc.edited} deleted={reply._doc.deleted} content={reply._doc.content} replyLikes={props.replyLikes.filter((replyLike) => replyLike.replyId === reply.replyId)} />)}
            </div>
        </div>
    )
}