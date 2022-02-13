import React, { useState } from "react";
import "./App.css";
import polskaHurtownia from "./zakupy/polskaHurtownia";
import vegetables from "./zakupy/warzywa";
import makro from "./zakupy/makro";

interface Product {
  item: string;
  count: number;
}

const App = () => {
  const [warzywa, setWarzywa] = useState<Product[]>(vegetables);
  const [hurtownia, setHurtownia] = useState<Product[]>(polskaHurtownia);
  const [hurtownia2, setHurtownia2] = useState<Product[]>(makro);

  const [cart, setCart] = useState<Product[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  ) => {
    const value = e.target.value;
    setProducts(
      products.filter((i) => {
        return i.item.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const handleAdd = (product: Product) => {
    const foundProduct = cart.find((item) => product.item === item.item);
    if (foundProduct) {
      setCart([
        ...cart.filter((i) => i !== foundProduct),
        { item: foundProduct.item, count: foundProduct.count + 1 },
      ]);
    } else {
      setCart([...cart, { item: product.item, count: 1 }]);
    }
  };

  const handleRemove = (product: Product) => {
    const foundProduct = cart.find((item) => product.item === item.item);
    if (foundProduct && foundProduct.count > 0) {
      setCart([
        ...cart.filter((i) => i !== foundProduct),
        { item: foundProduct.item, count: foundProduct.count - 1 },
      ]);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "500px" }}>
        <input
          type="text"
          placeholder="Znajdz Produkt"
          onChange={(e) => handleChange(e, vegetables, setWarzywa)}
        />
        <ul>
          {warzywa.map((veg) => {
            return (
              <li
                key={veg.item}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  justifyContent: "space-between",
                }}
              >
                <div>{veg.item}</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                  }}
                >
                  <button onClick={() => handleAdd(veg)}>+</button>
                  <div style={{ border: "1px solid black" }}>
                    {cart.find((x) => x.item === veg.item)?.count ?? 0}
                  </div>
                  <button onClick={() => handleRemove(veg)}>-</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ width: "500px" }}>
        <input
          type="text"
          placeholder="Znajdz Produkt"
          onChange={(e) => handleChange(e, polskaHurtownia, setHurtownia)}
        />
        <ul>
          {hurtownia.map((veg) => {
            return (
              <li
                key={veg.item}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  justifyContent: "space-between",
                }}
              >
                <div>{veg.item}</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                  }}
                >
                  <button onClick={() => handleAdd(veg)}>+</button>
                  <div style={{ border: "1px solid black" }}>
                    {cart.find((x) => x.item === veg.item)?.count ?? 0}
                  </div>
                  <button onClick={() => handleRemove(veg)}>-</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ width: "500px" }}>
        <input
          type="text"
          placeholder="Znajdz Produkt"
          onChange={(e) => handleChange(e, makro, setHurtownia2)}
        />
        <ul>
          {hurtownia2.map((veg) => {
            return (
              <li
                key={veg.item}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  justifyContent: "space-between",
                }}
              >
                <div>{veg.item}</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                  }}
                >
                  <button onClick={() => handleAdd(veg)}>+</button>
                  <div style={{ border: "1px solid black" }}>
                    {cart.find((x) => x.item === veg.item)?.count ?? 0}
                  </div>
                  <button onClick={() => handleRemove(veg)}>-</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
