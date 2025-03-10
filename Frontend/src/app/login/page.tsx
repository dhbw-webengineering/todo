'use client'

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {


    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;


    //API request...
    if (email != "admin@todo" || password != "123") {
      setError("wrong email or password");
      return;
    }

    setError(null)
    window.location.href = "/"
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
        <button className={styles.fButton} type="submit">
          Log in
        </button>
        <button
          className={styles.fButton}
          type="button"
          onClick={() => (window.location.href = "/signup")}
        >
          Sign up
        </button>
        <br />
        <div className={styles.errorMessage}>{error && <p className={styles.errorCard}>{error}</p>}</div>
      
      </form>
    </div>
  );
}