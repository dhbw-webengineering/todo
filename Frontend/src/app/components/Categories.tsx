"use client";
import { useState } from "react";
import Popup from "reactjs-popup";
import styles from "./Categories.module.css"
import Image from "next/image";

function CategoryList() {
    const [items, setItems] = useState(["Main", "Second"]);

    const handleClick = (item: string) => {
        console.log("clicked", item);
    };

    const addItem = () => {
        // Fügt ein zufälliges Element hinzu
        setItems([...items, `Element ${Math.floor(Math.random() * 1000)}`]);
    };

    return (
        <div >
            <ul style={{ listStyleType: "none" }} >
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>


            <Image src="categories.svg" height={13} width={13} alt="" />
            <Popup trigger={<button className={styles.button}> Kategorien verwalten </button>} modal className={styles.modal}>
                <div className={styles.border}>
                <div className={styles.content}>
                    <span>
                        <ul style={{ listStyleType: "none" }} >
                            {items.map((item, index) => (
                        <li
                            key={index}
                        >
                            {item}
                            <Image src="categories.svg" height={13} width={13} alt="" />
                            <Image src="categories.svg" height={13} width={13} alt="" />
                        </li>
                             ))}
                        </ul>
                        <button
                            onClick={addItem}
                            className={styles.addbutton}
                        >
                        <span>Kategorie hinzufügen</span>
                        </button>
                    </span>
                </div>
                </div>
            </Popup>
        </div>
    );
}

export default function Categories() {
    return <CategoryList />;
}
