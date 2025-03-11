"use client";
import { useState } from "react";

import styles from "./Categories.module.css"
import Image from "next/image";
const PopupManageCategories = dynamic(
    () => import("@/app/components/Categories/PopupManageCategories"),
    { ssr: false }
);
import Category from "../../Category";
import dynamic from "next/dynamic";
function CategoryList() {
    const [items, setitems] = useState([new Category("Main",0,22)]);

    const handleClick = (item: Category) => {
        console.log("clicked", item.id);
    };

    return (
        <div >
            <ul style={{ listStyleType: "none" }} >
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(item)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>


            <Image src="categories.svg" height={13} width={13} alt="" />
            <PopupManageCategories items={items} setItems={setitems} />
        </div>
    );
}

export default function Categories() {
    return <CategoryList />;
}
