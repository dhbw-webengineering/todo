"use client";

import React, { createContext, useState, useContext } from "react";

type CategoryContextType = {
    categories: string[];
    addCategory: (category: string) => void;
    removeCategory: (index: number) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [categories, setCategories] = useState<string[]>(["Kategorie 1", "Kategorie 2"]);

    const addCategory = (category: string) => {
        setCategories([...categories, category]);
    };

    const removeCategory = (index: number) => {
        setCategories(categories.filter((_, i) => i !== index));
    };

    return (
        <CategoryContext.Provider value={{ categories, addCategory, removeCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error("useCategories must be used within a CategoryProvider");
    }
    return context;
};
