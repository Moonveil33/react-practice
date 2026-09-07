import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapri.com/products");

        if (!response.ok) {
          throw new Error(
            `Error has been occured, ${response.status} - ${response.statusText}`,
          );
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchproducts();
  }, []);

  if (loading)
    return (
      <p style={{ color: "blueviolet", fontSize: "20px" }}>
        در حال دریافت اطلاعات
      </p>
    );

  if (error) {
    return (
      <p style={{ color: "red", fontSize: "20px" }}>خطا در دریافت اطلاعات</p>
    );
  }

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
