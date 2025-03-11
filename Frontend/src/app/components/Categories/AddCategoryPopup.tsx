"use client"
import Category from "@/app/Category";
import React, {FormEvent, ReactNode, useState} from "react";
import styles from "@/app/components/Categories/Categories.module.css";
import Image from "next/image";
import Popup from "reactjs-popup";

interface AddCategoryPopupProps {
    items: Category[];
    setItems: React.Dispatch<React.SetStateAction<Category[]>>;
}
export default function AddCategoryPopup(props: AddCategoryPopupProps) {
    const {items,setItems} = props;
    const [isOpen, setIsOpen] = useState(false);

    const addItem = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget);
        const id = items.length ===0 ? 0 :items[items.length-1].id+1
            setItems([...items, new Category(formdata.get("name") as string,id,1)]);
    };
    const close = () => {
        setIsOpen(false);
    }
    const open = () => {
        setIsOpen(true);
    }
    return (
        <>
        <button className={styles.addbutton} onClick={open}>
            <span>Kategorie hinzufügen</span>
        </button>
        <Popup
               modal
               open={isOpen}
               nested={true}
               overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
               className={styles.modal}>
            <div className={styles.content}>
            <span>
                <h3>Kategorie erstellen</h3>
                <form onSubmit={addItem}>
                    <input name="name"/>
                    <button
                        className={styles.addbutton}
                        onClick={() => {
                            console.log('modal closed ');
                            close();
                        }}
                    >
                        hinzufügen
                    </button>
                </form>
            </span>
            </div>
        </Popup>
        </>
    )
}