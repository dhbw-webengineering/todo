"use client";
import { useState } from "react";

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


            <button
                onClick={addItem}
                className="button-link"
                >
                <span>Kategorien verwalten</span>
            </button>
        </div>
    );
}

export default function Categories() {
    return <CategoryList />;
}
