"use client"

import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import styles from "@/app/components/Categories/Categories.module.css";
import Image from "next/image";
import Category from "@/app/Category";
import AddCategoryPopup from "@/app/components/Categories/AddCategoryPopup";
import EditCategoryPopup from "@/app/components/Categories/EditCategoryPopup";


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

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    const handleClickEdit = (item: Category) => {
        setSelectedCategory(item);
        openPopup()
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
                        <EditCategoryPopup items={items} setItems={setItems} isOpen={isPopupOpen} close={closePopup} category={selectedCategory}/>
                    </span>
            </div>

        </Popup>
    )
}