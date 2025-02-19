import Link from 'next/link';

export default function NavBar() {
    return (
        <div id="root">
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
        </div>
    );
};