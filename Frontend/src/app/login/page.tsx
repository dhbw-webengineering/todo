'use client'

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState<string | null>(null);


  const router = useRouter();

  const goToHome = () => {
    router.replace("/");
  };

  const goToSignup = () => {
    router.replace("/signup");
  };

  
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
    goToHome()
  };

  return (
    <div className={styles.centerContent}>
      <div className={styles.loginForm}>
        <form onSubmit={handleLogin}>
          <Image
            className={styles.fImage}
            src="/user.svg"
            alt="Logo"
            width={80}
            height={80}
          />

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
          <div className={styles.fBox}>
            <button className={styles.fButton} type="submit">
              Log in
            </button>
            <button
              className={styles.fButton}
              type="button"
              onClick={goToSignup}
            >
              Sign up
            </button>
          </div>
          <br />
          {//{login && <>ich bin dumm</>}
          }

        </form>
      </div>
    </div>


  );
}
