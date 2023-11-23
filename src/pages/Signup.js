
import axios from "axios"
import DOMAIN from "../services/endpoint";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import styles from "./loginpage.module.css"

export default function SignupPage() {

    const navigate = useNavigate();
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const username = e.target.username.value;
        const password = e.target.password.value;
        const newUser = { username, password }
        const res = await axios.post(`${DOMAIN}/api/users/`, newUser)
        if (res?.data.success) {
            setMessage(res?.data.message)
            navigate("/capytech-react/login")
        }
        else{
            setMessage(res?.data.message)
        }
    }

    return (
        <div>
            <h2 className={styles.loginTitle}>Sign Up</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" required className={styles.input} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" required className={styles.input} />
                <button type="submit" className={styles.loginBtn}>Sign Up</button>
            </form>
            <p className={styles.loginTitle}>{message}</p>
        </div>
    )
}