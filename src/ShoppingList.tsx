import { Button, Popover, Typography } from "@mui/material";
import { color, fontSize, height, padding } from "@mui/system";
import React, { useState } from "react";

interface CartProduct {
  item: string;
  count: number;
}

interface Props {
  products: string[];
}

const ShoppingList = ({ products }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [cart, setCart] = useState<CartProduct[]>([]);

  const handleAdd = (product: string) => {
    const foundProduct = cart.find((item) => product === item.item);
    if (foundProduct) {
      setCart([
        ...cart.filter((i) => i !== foundProduct),
        { item: foundProduct.item, count: foundProduct.count + 1 },
      ]);
    } else {
      setCart([...cart, { item: product, count: 1 }]);
    }
  };

  const handleRemove = (product: string) => {
    const foundProduct = cart.find((item) => product === item.item);
    if (foundProduct && foundProduct.count > 0) {
      setCart([
        ...cart.filter((i) => i !== foundProduct),
        { item: foundProduct.item, count: foundProduct.count - 1 },
      ]);
    }
  };
  return (
    <div
      style={{
        width: "500px",
        fontFamily: "Copperplate",
        fontSize: "17px",
        backgroundImage: "./images/Makro.jpg",
      }}
    >
      <input
        type="text"
        placeholder="Znajdz Produkt"
        onChange={(e) => setSearchInput(e.currentTarget.value)}
        style={{
          display: "flex",
          marginLeft: "40px",
        }}
      />
      <ul>
        {products
          .filter((prod) =>
            prod.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((prod) => {
            const [pl, en] = prod.split("-");
            return (
              <li
                key={prod}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "250px",
                  }}
                >
                  <div>{pl}</div>
                  <div style={{ color: "red", textAlign: "right" }}>{en}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  <Button variant="outlined" onClick={() => handleRemove(prod)}>
                    USUŃ
                  </Button>
                  <div
                    style={{
                      border: "1px solid black",
                      width: "22px",
                      textAlign: "center",
                      height: "20px",
                      verticalAlign: "middle",
                      paddingTop: "2px",
                      marginTop: "3px",
                      borderRadius: "15px",
                      backgroundColor: "#8dc5fd",
                    }}
                  >
                    {cart.find((x) => x.item === prod)?.count ?? 0}
                  </div>
                  <Button variant="outlined" onClick={() => handleAdd(prod)}>
                    DODAJ
                  </Button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default ShoppingList;
