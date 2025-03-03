import { sign } from "crypto";
import Form from "next/form";
import Image from 'next/image';

function login() {
    
    return (

        <Form action="/search">
             <Image src="/user.svg" alt="Logo" width={70} height={70} /><br />
            {/* On submission, the input value will be appended to 
                the URL, e.g. /search?user=abc&passwort=abc123 */}
            <input name="user" placeholder="Username"/><br /><br />
            <input name="password" type="password"  placeholder="password" /><br /><br />
            <button /*onClick={login}*/>sign up</button>
            <button type="submit">einloggen</button>
        </Form>
    )
}

export default function signup() {
    
    return (

        <Form action="/search">
             <Image src="/user.svg" alt="Logo" width={70} height={70} /><br />
            {/* On submission, the input value will be appended to 
                the URL, e.g. /search?user=abc&passwort=abc123 */}
            <input name="user" placeholder="Username"/><br /><br />
            <input name="password" type="password"  placeholder="password" /><br /><br />
            <input name="repeat-password" type="repeat-password"  placeholder="repeat password" /><br /><br />
            <button /*onClick={login}*/>sign up</button>
            <button type="submit">einloggen</button>
        </Form>
    )
}
