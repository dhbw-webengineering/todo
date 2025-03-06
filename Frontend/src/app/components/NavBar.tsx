import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';
import FilterNavBar from "@/app/components/FilterNavBar";
import DynamicList from "@/app/components/Categories";

export default function NavBar() {

    const categories = [{ "name": "Allgemein", "id": 0 }, { "name": "Kategorie 1", "id": 1 }, { "name": "Kategorie 2", "id": 2 }, { "name": "Kategorie 3", "id": 3 }]

    return (
        <div id={styles.root}>

            <Image src="checklist.svg" alt="" width={30} height={30}></Image><h1>TODO-App</h1>

            <Link href="/tasks" prefetch={false}>
                alle Aufgaben
            </Link>
            <Link href="/test" prefetch={false}>
                Test1
            </Link>

            <DynamicList items={["Test1","Test2"]}/>

            <hr></hr>

            <h2>Kategorien</h2>


            {categories.map((c) =>
                <Link href={`/tasks?category=${c.id}`} prefetch={false} key={c.id}>
                    {c.name}
                </Link>
            )}

            <Link href={`/categories`} prefetch={false}>
                <Image src="categories.svg" height={20} width={20} alt="" /> <span>Kategorien verwalten</span>
            </Link>


        </div>
    );
};