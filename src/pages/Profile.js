
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: user profile page for CapyTV
 */

import DOMAIN from "../services/endpoint";
import axios from "axios"
import useAuthStore from "../store/AuthStore";
import styles from "./profilepage.module.css"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";
import { useState } from "react";
import { getUserIdFromToken } from "../services/jwt.service";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {

    const { user } = useAuthStore((state) => state);
    const [ editMode, setEditMode ] = useState(false);
    const [ message, setMessage ] = useState("");
    const data = useLoaderData();
    const navigate = useNavigate();

    function toggleEditMode(){
        setEditMode(!editMode)
    }
    async function handleEditPassword(e) {
        e.preventDefault()
        const username = user?.username || ""
        const password = e.target.password.value;
        console.log()
        const userId = getUserIdFromToken();
        const updatedUser = { username, password, userId };
        const res = await axios.post(`${DOMAIN}/api/users/update/${userId}`, updatedUser);
        toggleEditMode();
        setMessage("Password updated successfully!")
        if (res?.data.success) {
            e.target.password.value = "";
            navigate(`/capytech-react/users/${userId}`);
        }
    }

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>Your Profile</h2>
            <p>Username: {user?.username || ""}</p>
            {editMode
                ? <form onSubmit={handleEditPassword}>
                    <input type="password" id="password" name="password" placeholder="New Password" required style={{ padding: 10, border: "solid 1px white", backgroundColor: "transparent", color: "white" }} />
                    <button type="submit" className={styles.editBtn} >Change password</button>
                    <button className={styles.editBtn} onClick={toggleEditMode}>Cancel</button>
                </form>
                : <button className={styles.editBtn} onClick={toggleEditMode}>Change password</button>}
                {message}
            <h2>Your Comments</h2>
            {data.comments.length === 0 ? <p>You haven't added any comments yet!</p> : data.comments.map((comment) => <div key={comment.commentId} className={styles.thumbnail}>
                <Link to={`/capytech-react/videos/${comment.videoId.toString()}`} className={styles.navlink}>
                    <p><strong>{user?.username || ""}</strong> {comment.date}</p>
                    <p>{comment.content}</p>
                </Link>
            </div>)}
            <h2>Your Replies</h2>
            {data.replies.length === 0 ? <p>You haven't added any nested comments yet!</p> : data.replies.map((comment) => <div key={comment.replyId} className={styles.thumbnail}>
                <Link to={`/capytech-react/videos/${comment.videoId.toString()}`} className={styles.navlink}>
                    <p><strong>{user?.username || ""}</strong> {comment.date}</p>
                    <p>{comment.content}</p>
                </Link>
            </div>)}
        </div>
    )
}

export async function profileLoader({ params }) {
    const res = await axios.get(`${DOMAIN}/api/users/${params.userId}`)
    return res.data
}