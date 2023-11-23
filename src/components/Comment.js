
import useAuthStore from "../store/AuthStore"
import { getUserIdFromToken } from "../services/jwt.service";
import { PiThumbsUpDuotone } from "react-icons/pi";
import { PiThumbsDownLight } from "react-icons/pi";
import styles from "./comment.module.css"

export function Comment(props) {

    const { user } = useAuthStore((state) => state)
    const userId = getUserIdFromToken();

    return (
        <div className={styles.commentContainer}>
            <p className={styles.title}><strong>@{props.user}</strong> {props.date}</p>
            <p className={styles.content}>{props.content}</p>
            <div className={styles.actions}>
                <div className={styles.likeBtn}>
                    {user && <PiThumbsUpDuotone size={25} />}
                </div>
                <div className={styles.likeBtn}>
                    {user && <PiThumbsDownLight size={25} />}
                </div>
                {userId === props.userId && <button className={styles.ownerActions}>Edit</button>}
                {userId === props.userId && <button className={styles.ownerActions}>Delete</button>}
            </div>
        </div>
    )
}