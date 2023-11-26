
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: login page for CapyTV
 */

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuthStore from "../store/AuthStore"
import styles from "./loginpage.module.css"

export default function LoginPage() {

    const navigate = useNavigate()
    const { loginService, authLoading, user } = useAuthStore((state) => state)
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (!!user) {
            navigate("/capytech-react")
        }
    }, [user])

    async function onLogin(e) {
        e.preventDefault()
        let username = e.target.username?.value;
        let password = e.target.password?.value
        if (!username || !password) return
        loginService(username, password)
        if (!user) {
            setMessage("Invalid login credentials");
        }
    }

    return (
        <div>
            <h2 className={styles.loginTitle}>Login</h2>
            <form onSubmit={onLogin} className={styles.form}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" required className={styles.input} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" required className={styles.input} />
                <button type="submit" className={styles.loginBtn}>Login</button>
                {authLoading ? <h2>Loading...</h2> : null}
                <Link to="/capytech-react/signup" className={styles.signup}>Sign Up</Link>
            </form>
            <p className={styles.loginTitle}>{message}</p>
        </div>
    )
}