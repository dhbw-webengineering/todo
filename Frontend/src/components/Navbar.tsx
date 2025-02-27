import Link from 'next/link';


export default function Navbar() {
    return (
        <div style={{position: "fixed", display: "flex", justifyContent: "space-around", flexDirection: "column", height: "100%", width: "300px", backgroundColor: "#333333", paddingLeft: "20px", paddingBottom: "500px"}}>
            <Link href="/">
                Startseite
            </Link>
            <Link href="/test">
                Test
            </Link>
            <Link href="/">
                Startseite
            </Link>
            <Link href="/test">
                Test
            </Link>
            <Link href="/login">
                login
            </Link>
        </div>
    );
};