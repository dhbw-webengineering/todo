import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <div id={styles.root}>
            <Link href="/" prefetch={false}>
                Startseite
            </Link>
            <Link href="/test" prefetch={false}>
                Test
            </Link>
            <Link href="/" prefetch={false}>
                Startseite
            </Link>
            <Link href="/test" prefetch={false}>
                Test
            </Link>
        </div>
    );
};