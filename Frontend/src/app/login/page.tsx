import React from 'react'

import Form from "next/form";
import Image from 'next/image';

import styles from './page.module.css';

export default function Login() {

  function logIn() {
    //hier anfrage ans Backend?
    var check: String = "admin";
    if (check == "admin") {
      console.log('logged in')
    }

    return "/"
  }

  return (

    <div className={styles.loginForm}>

      <Form action="/startseite">
        <Image className={styles.fImage} src="/user.svg" alt="Logo" width={70} height={70} /><br />
        {/* On submission, the input value will be appended to the URL, e.g. /search?user=abc&passwort=abc123 */}

        <input className={styles.fText}/*name="email"*/ placeholder="email" /><br />
        <input className={styles.fText}/*name="password"*/ type="password" placeholder="password" /> <br />
        <button className={styles.fButton} formAction={logIn()}/*type="submit"*/>log in</button>
        <button className={styles.fButton} formAction="/signup">sign up</button>
      </Form>
    </div>
  )
}