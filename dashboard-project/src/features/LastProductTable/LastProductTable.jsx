import React, { useState } from "react";
import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import { products, productsTableHeadRow } from "../../data/products";
import clsx from "clsx";
import RemoveProductIcon from "./components/RemoveProductIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditProductIcon from "./components/EditProductIcon";

const LastProductTable = () => {
  const [lastProducts, setLastProducts] = useState([...products]);

  const Buttons = () => {
    return (
      <Link
        to={"/products"}
        className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
      >
        <span className="flex-center">
          صفحه محصولات
          <MdOpenInNew />
        </span>
      </Link>
    );
  };

  const removeProduct = (id) => {
    const newProducts = lastProducts.filter((product) => product.id !== id);
    setLastProducts(newProducts);
  };

  const changeProductVisibility = (id) => {
    const newProducts = lastProducts.map((product) => {
      return product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product };
    });

    setLastProducts(newProducts);
  };

  return (
    <div>
      {/* <Table>
        <TableHead>
            <TableHeadCell></TableHeadCell>
            <TableHeadCell></TableHeadCell>
            <TableHeadCell></TableHeadCell>
        </TableHead>

        <TableBody>
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableBody>
    </Table> */}
      <Table
        header={{ title: "لیست محصولات", Buttons: Buttons }}
        pagination={{
          items: products,
          setItems: setLastProducts,
          itemsPerPage: 4,
        }}
      >
        <TableHead>
          {productsTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {lastProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id.slice(0, 10)}...</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <p
                  className={clsx(
                    product.isPublished ? "success-badge" : "danger-badge",
                    "badge",
                  )}
                >
                  {product.isPublished ? "عمومی" : "خصوصی"}
                </p>
              </TableCell>
              <TableCell>
                <span>
                  {product.price.toLocaleString("fa-ir")}
                  تومان
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <RemoveProductIcon
                    product={product}
                    handler={removeProduct}
                  />
                  <ChangeVisibilityIcon
                    product={product}
                    handler={changeProductVisibility}
                  />
                  <EditProductIcon product={product} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LastProductTable;
