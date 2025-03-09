'use client'

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function signup() {
    const [error, setError] = useState<string | null>(null);

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const repeatPassword = formData.get("repeatPassword")as string;

        if (password != repeatPassword) {
            setError("Error: passwords are not equal");
            return;
        }
        //API request... if user alredy exists if not register 
        if(email == "registered@1") {
            setError("Error: user alredy exists pls login")
            return;
        }

        setError(null)
        window.location.href = "/login"
    };

    return (
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
                <input
                    className={styles.fText}
                    name="email"
                    type="email"
                    placeholder="email"
                    required
                />
                <br />
                <input
                    className={styles.fText}
                    name="password"
                    type="password"
                    placeholder="password"
                    required
                />
                <br />
                <input
                    className={styles.fText}
                    name="repeatPassword"
                    type="password"
                    placeholder="repeat password"
                    required
                />
                <br />
                <button
                    className={styles.fButton}
                    type="submit"
                >
                    Sign up
                </button>
                <br />
                {error && <p className={styles.errorMessage}>{error}</p>}

            </form>
        </div>
    );
}
