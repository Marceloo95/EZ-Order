import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./ShoppingList";
import makro from "./shoppingList/makro";
import polskaHurtownia from "./shoppingList/polskaHurtownia";
import vegetables from "./shoppingList/warzywa";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <ShoppingList products={vegetables} />
      <ShoppingList products={makro} />
      <ShoppingList products={polskaHurtownia} />
    </div>
  );
};
export default App;
