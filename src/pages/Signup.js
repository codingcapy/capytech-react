
import axios from "axios"
import styles from "./loginpage.module.css"

export default function SignupPage(){

    async function handleSubmit(e){
        e.preventDefault()
        // await axios.post()
    }

    return (
        <div>
            <h2 className={styles.loginTitle}>Sign Up</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="username"></label>
                <input type="text" name="username" id="password" placeholder="Username" required className={styles.input} />
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" placeholder="Password" required className={styles.input} />
                <button type="submit" className={styles.loginBtn}>Sign Up</button>
            </form>
        </div>
    )
}