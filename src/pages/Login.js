
import styles from "./loginpage.module.css"

export default function LoginPage() {

    async function handleSubmit(e) {
        e.preventDefault()
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