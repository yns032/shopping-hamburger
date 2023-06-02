import React from "react";
import { useState } from "react";
import Menuu from "./Menuu";
import items from "../home/data";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function Menu() {
  const [menuItems, setMenuItems] = useState(items); //tatil bölgelerimiz
  const [activeCategory, setActiveCategory] = useState(""); //adana mı , mersin mi kategori
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="holiday section">
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />

        <Menuu items={menuItems} />
      </section>
    </main>
  );
}

export default Menu;
