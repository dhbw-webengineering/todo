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

    console.log("Email:", email);
    console.log("Password:", password);
    
    //API request...
    if (email !="admin@todo" || password != "123" ) {
      setError("wrong email or password");
      return;
    }

    setError(null)
    console.log("Logged in as admin");
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
          className={styles.fText}
          name="email"
          type="email"
          placeholder="mail"
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
      {error && <p className={styles.errorMessage}>{error}</p>} 

      </form>
      </div>
  );
}