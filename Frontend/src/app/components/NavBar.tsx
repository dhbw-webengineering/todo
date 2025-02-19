import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <div id={styles.root}>
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