import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';
import Categories from "@/app/components/Categories/Categories";

export default function NavBar() {

    const categories = [{ "name": "Allgemein", "id": 0 }, { "name": "Kategorie 1", "id": 1 }, { "name": "Kategorie 2", "id": 2 }, { "name": "Kategorie 3", "id": 3 }]

    return (
        <div id={styles.root}>

            <Link href='/'>
                <div id={styles.logo}>
                    <Image src="checklist.svg" alt="" width={30} height={30}></Image>
                    <h1>TODO-App</h1>
                </div>
            </Link>

            <Link href="/" prefetch={false} style={{width: "100%"}}>
                <p className={styles.navitem}>
                        Übersicht
                </p>
            </Link>
            <Link href="/tasks" prefetch={false}>
                <p className={styles.navitem}>
                    Alle Aufgaben
                </p>
            </Link>
            <hr></hr>
            <h2>Kategorien</h2>
            <Categories />


        </div>
    );
};