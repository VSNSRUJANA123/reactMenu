import Review from "./Review";
import "./menu.css";
import menudata from "./menudata";
import { useState } from "react";

const allCategory = [
  "all",
  ...new Set(
    menudata.map((items) => {
      return items.category;
    })
  ),
];
const Menu = () => {
  const [menus, setMenus] = useState(menudata);
  const [categories, setCategories] = useState(allCategory);
  const filterItems = (categorie) => {
    if (categorie === "all") {
      setMenus(menudata);
      return;
    }
    const newMenu = menudata.filter((item) => {
      return item.category === categorie;
    });
    setMenus(newMenu);
  };
  return (
    <main className="mains">
      <div className="title">
        <h1>Our Menu </h1>
        <div className="underline"></div>
      </div>
      <div className="buttons-container">
        {categories.map((categorie, index) => {
          return (
            <button key={index} onClick={() => filterItems(categorie)}>
              {categorie}
            </button>
          );
        })}
      </div>
      <section className="menus-container">
        {menus.map((items) => {
          return <Review key={items.id} {...items} />;
        })}
      </section>
    </main>
  );
};
export default Menu;
