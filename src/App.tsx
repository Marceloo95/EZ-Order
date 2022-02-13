import React, { useState } from "react";
import "./App.css";
import Product from "./Product";
import polskaHurtownia from "./Zakupy.tsx/PolskaHurtownia";
import vegetables from "./Zakupy.tsx/Warzywa";
// import Product from "./Product";
import makro from "./Zakupy.tsx/Makro";
// import polskaHurtownia from "./Zakupy.tsx/PolskaHurtownia";
import warzywa from "./Zakupy.tsx/Warzywa";
import { isTemplateTail } from "typescript";

const App = () => {
  vegetables.forEach(() => {
    return;
  });

  const [warzywa, setWarzywa] = useState(vegetables);
  const [input, setInput] = useState("");
  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      setWarzywa(
        vegetables.filter((i) => {
          return i.item.toLowerCase().includes(value.toLowerCase());
        })
      );
    }
  };
  const [hurtownia, setHurtownia] = useState(polskaHurtownia);
  const [input1, setInput1] = useState("");
  const handleChange1 = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setInput1(e.target.value);
    if (input1.length > 0) {
      setHurtownia(
        polskaHurtownia.filter((i) => {
          return i.item2.match(input1);
        })
      );
    }
  };
  const [hurtownia2, setHurtownia2] = useState(makro);
  const [input2, setInput2] = useState("");
  const handleChange2 = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setInput2(e.target.value);
    if (input2.length > 0) {
      setHurtownia2(
        makro.filter((i) => {
          return i.item3.match(input2);
        })
      );
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Znajdz Produkt"
          onChange={handleChange}
          value={input}
        />
        <ul>
          {warzywa.map((veg) => {
            return <li>{veg.item}</li>;
          })}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Znajdz Produkt"
          onChange={handleChange1}
          value={input1}
        />
        <ul>
          {hurtownia.map((veg) => {
            return <li>{veg.item2}</li>;
          })}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Znajdz Produkt"
          onChange={handleChange2}
          value={input2}
        />
        <ul>
          {hurtownia2.map((veg) => {
            return <li>{veg.item3}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
