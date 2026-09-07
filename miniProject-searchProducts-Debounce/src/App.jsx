import { useEffect, useState } from "react";
import SearchInput from "./components/search-input";
import Header from "./components/header";
import Products from "./components/products";
import Footer from "./components/footer";

import productsData from "./../data/products.js";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([...productsData]);
  const [debouncedValue, setDebouncedValue] = useState("");

  const clearSearchResult = () => {
    setSearchValue("");
    setProducts([...productsData]);
  };

  const handleSearch = () => {
    const foundedProducts = productsData.filter((product) =>
      product.title.includes(debouncedValue),
    );

    setProducts(foundedProducts);
  };

  useEffect(() => {
    const waiting = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 1000);

    return () => {
      clearTimeout(waiting);
    };
  }, [searchValue]);

  useEffect(() => {
    handleSearch();
  }, [debouncedValue]);

  return (
    <div id="content">
      <Header />

      <SearchInput
        inputValue={searchValue}
        onChange={(value) => {
          setSearchValue(value);
        }}
      />

      <Products
        products={products}
        isSearchedSomething={String(searchValue).length}
        onClearSearchResult={clearSearchResult}
      />

      <Footer />
    </div>
  );
}
