import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {

    const categories = [{ "name": "Allgemein", "id": 0 }, { "name": "Kategorie 1", "id": 1 }, { "name": "Kategorie 2", "id": 2 }, { "name": "Kategorie 3", "id": 3 }]

    let categoriesXML: string = "";
    for (const c of categories) {
        categoriesXML += `<Link href="/taks&cat=${c.id}" prefetch={false}>
                ${c.name}
            </Link>`
    }
    return (
        <div id={styles.root}>

            <h1><img src="checklist.svg" alt="" width={"30px"} />TODO-App</h1>

            <Link href="/tasks" prefetch={false}>
                alle Aufgaben
            </Link>
            <Link href="/test" prefetch={false}>
                Test1
            </Link>


            <hr></hr>

            <h2>Kategorien</h2>


            {categories.map((c) =>
                <Link href={`/tasks?category=${c.id}`} prefetch={false} key={c.id}>
                    {c.name}
                </Link>
            )}

            <Link href={`/categories`} prefetch={false}>
              <img src="categories.svg" width={"20px"} alt="" />  <span>Kategorien verwalten</span>
            </Link>


        </div>
    );
};