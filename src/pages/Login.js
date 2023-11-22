
import axios from "axios"
import DOMAIN from "../services/endpoint"
import styles from "./loginpage.module.css"
import useAuthStore from "../store/AuthStore"

export default function LoginPage() {

    async function handleSubmit(e) {
        e.preventDefault()
        // await axios.post(`${DOMAIN}/api/user/login`, { username, password })
    }

    return (
        <div>
            <h2 className={styles.loginTitle}>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="username"></label>
                <input type="text" name="username" id="password" placeholder="Username" required className={styles.input} />
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" placeholder="Password" required className={styles.input} />
                <button type="submit" className={styles.loginBtn}>Login</button>
                <a href="/signup" className={styles.signup}>Sign Up</a>
            </form>
        </div>
    )
}