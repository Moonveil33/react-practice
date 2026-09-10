import React from "react";
import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";

const LastProductTable = () => {
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
      <Table header={{ title: "لیست محصولات", Buttons: Buttons }}></Table>
    </div>
  );
};

export default LastProductTable;
