"use client"

import React from 'react';
import Popup from 'reactjs-popup';
import styles from "@/app/components/Categories/Categories.module.css";
import Image from "next/image";
import Category from "@/app/Category";
import AddCategoryPopup from "@/app/components/Categories/AddCategoryPopup";


interface PopupManageCategoriesProps {
    items: Category[];
    setItems: React.Dispatch<React.SetStateAction<Category[]>>;
}

export default function PopupManageCategories(props: PopupManageCategoriesProps) {
    const {items,setItems} = props;
    const handleClickRemove = (item1: Category) => {
        setItems(items.filter((item) => item1.id !== item.id));
        console.log("removed", item1);
    };
    const handleClickEdit = (item: Category) => {

    }

    return (
        <Popup trigger={<button className={styles.button}> Kategorien verwalten </button>}
               modal
               nested
               overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
               className={styles.modal}>

            <div className={styles.content}>
                    <span>
                        <div className={styles.categories}>
                            <ul style={{ listStyleType: "none" }} >
                                {items.map((item: Category, index: React.Key) => (
                                    <li
                                        key={index}
                                    >
                                        {item.name}
                                        <Image src="edit.svg" height={20} width={20} alt="" onClick={()=> handleClickEdit(item)} />
                                        <Image src="trashcan.svg" height={20} width={20} alt="" onClick={()=> handleClickRemove(item)} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.buttonContainer}>
                            <AddCategoryPopup items={items} setItems={setItems} />
                        </div>
                    </span>
            </div>

        </Popup>
    )
}