import React from "react";

import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import { productsAllTableHeadRow } from "../../data/products";
import clsx from "clsx";

const ProductsTableView = ({ products, setProducts }) => {
  return (
    <div>
      <Table
        header={{ title: "لیست آیتم ها" }}
        pagination={{
          itemsPerPage: 7,
          items: products,
          setItems: setProducts,
        }}
      >
        <TableHead>
          {productsAllTableHeadRow.map((cell) => (
            <TableHeadCell key={cell}>{cell}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id.slice(0, 10)}...</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[100px] rounded-md border primary-border-color"
                />
              </TableCell>
              <TableCell>
                <span
                  className={clsx(
                    product.isPublished ? "success-badge" : "danger-badge",
                    "badge",
                  )}
                >
                  {product.isPublished ? "عمومی" : "خصوصی"}
                </span>
              </TableCell>

              <TableCell>
                {product.price.toLocaleString("fa-ir")} تومان
              </TableCell>
              <TableCell>{product.entity}</TableCell>
              <TableCell>عملیات</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTableView;
