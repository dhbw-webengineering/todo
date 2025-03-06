"use client";

import { useState } from "react";
import { useCategories } from "./CategoryContext";

const ManageCategories = () => {
    const { categories, addCategory, removeCategory } = useCategories();
    const [newCategory, setNewCategory] = useState("");

    const handleAddCategory = () => {
        if (newCategory.trim()) {
            addCategory(newCategory.trim());
            setNewCategory("");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Kategorien verwalten</h1>
            <ul className="list-disc ml-4 mb-4">
                {categories.map((category, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <span>{category}</span>
                        <button onClick={() => removeCategory(index)} className="text-red-500">
                            Löschen
                        </button>
                    </li>
                ))}
            </ul>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Neue Kategorie"
                    className="border p-2 flex-grow"
                />
                <button onClick={handleAddCategory} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Hinzufügen
                </button>
            </div>
        </div>
    );
};

export default ManageCategories;
