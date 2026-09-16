import { CiGrid41, CiViewTable } from "react-icons/ci";
import SectionTitle from "./../../components/common/SectionTitle";
import { useContext, useState } from "react";
import { products } from "./../../data/products";
import ProductsTableView from "./../../features/ProductsView/ProductsTableView";
import ProductsGridView from "./../../features/ProductsView/ProductsGridView";

import Modal from "../../components/common/Modal";
import AddProductFields from "../../features/ProductsTable/components/AddProductFields";
import useLocalStorage from "../../hooks/useLocalStorage";
import useTitle from "../../hooks/useTitle";
import AuthContext from "../../context/auth";

// const getDefaultLayout = () => {
//   const defaultLayout = localStorage.getItem("layout");
//   return defaultLayout ? defaultLayout : "TABLE";
// };

const Products = () => {
  // useContext learning - به پروژه ارتباطی نداره
  const auth = useContext(AuthContext);
  console.log(auth);

  // const [layoutType, setLayoutType] = useState(getDefaultLayout()); // or GRID

  // Using LocalStorage Hook - custom-hook
  const [layoutType, setLayoutType] = useLocalStorage("layout", "TABLE"); // or GRID
  const [allProducts, setAllProducts] = useState([...products]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    price: "",
    img: "/images/product-img.png",
    isPublished: false,
    entity: "",
  });

  // customHook
  useTitle("صفحه محصولات");

  const toggleLayout = () => {
    const layout = layoutType === "TABLE" ? "GRID" : "TABLE";
    setLayoutType(layout);
    // setIntoLocalStorage("layout", layout);
  };

  // const setIntoLocalStorage = (key, value) => {
  //   localStorage.setItem(key, value);
  // };

  const createNewProduct = () => {
    setAllProducts([...allProducts, newProduct]);
    setNewProduct({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      price: "",
      img: "/images/product-img.png",
      isPublished: false,
      entity: "",
    });
  };

  const Buttons = (
    <>
      <button
        onClick={toggleLayout}
        className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3]  duration-150 transition-all primary-border-color border cursor-pointer shadow"
      >
        {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
      </button>

      <Modal
        title={"ایجاد محصول جدید"}
        Trigger={
          <button className="primary-bg px-3 py-1.5">ایجاد محصول</button>
        }
        onSubmit={createNewProduct}
      >
        <AddProductFields newProduct={newProduct} onChange={setNewProduct} />
      </Modal>
    </>
  );

  return (
    <>
      <SectionTitle title="لیست محصولات" Buttons={Buttons} />

      <section className="mt-10 w-full! min-w-full!">
        {layoutType === "TABLE" ? (
          <ProductsTableView
            products={allProducts}
            setProducts={setPaginatedProducts}
            paginatedProducts={paginatedProducts}
          />
        ) : (
          <ProductsGridView
            products={products}
            setProducts={setPaginatedProducts}
            paginatedProducts={paginatedProducts}
          />
        )}
      </section>
    </>
  );
};

export default Products;
