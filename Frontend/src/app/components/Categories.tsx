"use client";
import Link from "next/link";
import Image from "next/image";
import { useCategories } from "../categories/CategoryContext"; // Pfad ggf. anpassen

const CategoryList = () => {
    const { categories } = useCategories();

    return (
        <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-bold mb-2">Kategorien</h2>
            <ul className="list-none pl-0">
                {categories.map((item, index) => (
                    <li key={index} className="py-1">{item}</li>
                ))}
            </ul>

            <Link href="/categories" prefetch={false}>
                <a className="flex items-center gap-2 mt-4 text-blue-600 underline">
                    <Image src="/categories.svg" height={15} width={15} alt="Kategorien Icon" />
                    <span>Kategorien verwalten</span>
                </a>
            </Link>
        </div>
    );
};

export default CategoryList;
