import Form from "next/form";
import Image from 'next/image';

import styles from './page.module.css';

export default function signup() {
    
    return (
      <div  className={styles.loginForm}>
      <div>
        
        <Form  action="/startseite">
            <Image className={styles.fImage} src="/user.svg" alt="Logo" width={70} height={70} /><br />
            {/* On submission, the input value will be appended to 
                the URL, e.g. /search?user=abc&passwort=abc123 */}
            <input name="user" placeholder="Username"/><br /><br />
            <input name="password" type="password"  placeholder="password" /><br /><br />
            <input name="repeat-password" type="repeat-password"  placeholder="repeat password" /><br /><br />
            <button className={styles.fButton} formAction="/signup">sign up</button>
        </Form>
        </div>
        </div>
      
    )
}
