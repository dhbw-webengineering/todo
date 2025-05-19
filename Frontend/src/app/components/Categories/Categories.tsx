"use client";
import { useState } from "react";

import Image from "next/image";
import navbarStyles from '../navbar/NavBar.module.css';
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
            {items.map((item, index) => (
                <p
                    className={navbarStyles.navitem}
                    key={index}
                    onClick={() => handleClick(item)}
                >
                    {item.name}
                </p>
            ))}

            <div className={navbarStyles.navitem}>
                <Image src="categories.svg" height={13} width={13} alt="" />
                <PopupManageCategories items={items} setItems={setitems} />
            </div>
        </div>
    );
}

export default function Categories() {
    return <CategoryList />;
}
