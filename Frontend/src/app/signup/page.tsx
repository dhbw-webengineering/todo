'use client'

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Signup() {
    const [error, setError] = useState<string | null>(null);

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const repeatPassword = formData.get("repeatPassword") as string;

        if (password != repeatPassword) {
            setError("passwords are not equal");
            return;
        }
        //API request... if user alredy exists if not register 
        if (email == "registered@1") {
            setError("user alredy exists pls login")
            return;
        }

        setError(null)
        window.location.href = "/login"
    };

    return (
        <div className={styles.centerContent}>
            <div className={styles.loginForm}>
                <form onSubmit={handleLogin}>
                    <Image
                        className={styles.fImage}
                        src="/user.svg"
                        alt="Logo"
                        width={70}
                        height={70}
                    />
                    <br />
                    <div className={styles.errorMessage}>{error && <p className={styles.errorCard}>{error}</p>}</div>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                    />
                    <br />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                    />
                    <br />
                    <input
                        name="repeatPassword"
                        type="password"
                        placeholder="repeat password"
                        required
                    />
                    <br />
                    <div className={styles.fBox}>

                        <button
                            className={styles.fButton}
                            type="submit"
                        >
                            Sign up
                        </button>
                    </div>


                </form>
            </div>
        </div>

    );
}
