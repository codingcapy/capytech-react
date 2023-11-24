
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

export default function ProfilePage() {

    const { user } = useAuthStore((state) => state);
    const data = useLoaderData();

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>Your Profile</h2>
            <p>Username: {user.username}</p>
            <button className={styles.editBtn}>Change password</button>
            <h2>Your Comments</h2>
            {data.comments.length === 0 ? <p>You haven't added any comments yet!</p> : data.comments.map((comment) => <div key={comment.commentId} className={styles.thumbnail}>
                <Link to={`/capytech-react/videos/${comment.videoId.toString()}`} className={styles.navlink}>
                    <p><strong>{user.username}</strong> {comment.date}</p>
                    <p>{comment.content}</p>
                </Link>
            </div>)}
            <h2>Your Replies</h2>
            {data.replies.length === 0 ? <p>You haven't added any nested comments yet!</p> : data.replies.map((comment) => <div key={comment.replyId} className={styles.thumbnail}>
                <Link to={`/capytech-react/videos/${comment.videoId.toString()}`} className={styles.navlink}>
                    <p><strong>{user.username}</strong> {comment.date}</p>
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