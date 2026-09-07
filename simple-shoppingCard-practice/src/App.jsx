import React, { useState } from "react";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/Product/Product";
import productsData from "./data/products.js";

function App() {
  const [products] = useState(productsData);

  const [card, setCard] = useState([]);

  const addProductToCard = (id) => {
    const newProduct = products.find((product) => product.id === id);

    if (newProduct) {
      setCard([...card, newProduct]);
    }
  };

  const clearCard = () => {
    setCard([]);
  };

  return (
    <>
      <Breadcrumb />
      <section
        id="products-row"
        className="container mx-auto grid grid-cols-4 gap-5"
      >
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              {...product}
              addToCard={addProductToCard}
            />
          );
        })}
      </section>

      <Navigation card={card} onRemove={clearCard} />
    </>
  );
}

export default App;
