
import axios from "axios"
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore"
import { getUserIdFromToken } from "../services/jwt.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiThumbsUpDuotone, PiThumbsUpFill, PiThumbsDownLight, PiThumbsDownFill } from "react-icons/pi";
import styles from "./reply.module.css"

export default function Reply(props){

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

    return(
        <div className={styles.replyContainer}>
             <p className={styles.title}><strong>@{props.user}</strong> {props.date} {props.edited && "(edited)"}</p>
             <p className={styles.content}>{props.content}</p>
        </div>
    )
}