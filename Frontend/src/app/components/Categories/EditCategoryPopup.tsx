"use client";
import Category from "@/app/Category";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "@/app/components/Categories/Categories.module.css";
import Popup from "reactjs-popup";

interface EditCategoryPopupProps {
    items: Category[];
    setItems: React.Dispatch<React.SetStateAction<Category[]>>;
    isOpen: boolean;
    close: () => void;
    category?: Category | null;
}

export default function EditCategoryPopup({ items, setItems, isOpen, close, category }: EditCategoryPopupProps) {
    const [name, setName] = useState("");

    // Setzt den Namen in das Input-Feld, wenn sich die Kategorie ändert
    useEffect(() => {
        if (category) {
            setName(category.name);
        }
    }, [category]);

    const editItem = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!category) return; // Falls keine Kategorie ausgewählt ist, nichts tun

        // Ersetze das bearbeitete Item mit dem neuen Namen
        setItems(
            items.map((item) =>
                item.id === category.id ? new Category(name, category.id, category.user_id) : item
            )
        );

        close(); // Popup schließen
    };

    return (
        <Popup modal open={isOpen} nested overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }} className={styles.modal}>
            <div className={styles.content}>
                <h3>Kategorie bearbeiten</h3>
                <form onSubmit={editItem}>
                    <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <button className={styles.addbutton} type="submit">
                        Speichern
                    </button>
                </form>
            </div>
        </Popup>
    );
}
