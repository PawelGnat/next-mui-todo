import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FormTableBodyRow } from "../form-table-body-row/form-table-body-row";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

import { InvoiceDataType } from "@/types/types";

export const FormTableList = () => {
  const [tableData, setTableData] = useState([
    { id: 1, itemName: "", qty: 0, price: 0 },
  ]);

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  const handleAddRow = () => {
    const newId = Math.max(...tableData.map((row) => row.id), 0) + 1;
    setTableData((prevData) => [
      ...prevData,
      { id: newId, itemName: "", qty: 0, price: 0 },
    ]);
  };

  const handleRowChange = (id: number, newData: InvoiceDataType) => {
    setTableData((prevData) => {
      const updatedData = prevData.map((row) =>
        row.id === id ? { ...row, ...newData } : row
      );
      return updatedData;
    });
  };

  return (
    <>
      <Table className="border-separate border-spacing-y-4">
        <TableCaption>Item List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Item Name</TableHead>
            <TableHead>Qty.</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((rowData) => (
            <FormTableBodyRow
              key={rowData.id}
              data={rowData}
              onChange={(newData: InvoiceDataType) =>
                handleRowChange(rowData.id, newData)
              }
            />
          ))}
        </TableBody>
      </Table>
      <Button
        variant="secondary"
        type="button"
        className="rounded-full w-full"
        aria-label="Add new item to a list"
        onClick={handleAddRow}>
        + Add New Item
      </Button>
    </>
  );
};
