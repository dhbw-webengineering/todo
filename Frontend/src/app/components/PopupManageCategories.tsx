import React from 'react';
import Popup from 'reactjs-popup';
import styles from "@/app/components/Categories.module.css";
import Image from "next/image";
import Category from "@/app/Category";


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

    const addItem = () => {

        setItems([...items, new Category("s",1,1)]);
    };

    return (
        <Popup trigger={<button className={styles.button}> Kategorien verwalten </button>}
               modal
               overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
               className={styles.modal}>

            <div className={styles.content}>
                    <span>
                        <ul style={{ listStyleType: "none" }} >
                            {items.map((item: Category, index: React.Key) => (
                                <li
                                    key={index}
                                >
                                    {item.name}
                                    <Image src="edit.svg" height={13} width={13} alt="" onClick={()=> handleClickEdit(item)} />
                                    <Image src="trashcan.svg" height={13} width={13} alt="" onClick={()=> handleClickRemove(item)} />
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

        </Popup>
    )
}