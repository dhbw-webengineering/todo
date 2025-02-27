import { ReactElement } from "react";

import Form from "next/form";
import Image from 'next/image';



function TestJustin(): ReactElement {
    
    return (<span>Ich</span>);
}


function login() {
    
    return (

        <Form action="/search">
             <Image src="/user.svg" alt="Logo" width={70} height={70} /><br />
            {/* On submission, the input value will be appended to 
                the URL, e.g. /search?user=abc&passwort=abc123 */}
            <input name="user" placeholder="Username"/><br /><br />
            <input name="password" type="password"  placeholder="password" /><br /><br />
            <button type="submit">Submit</button>
        </Form>
    )
}


export default login;