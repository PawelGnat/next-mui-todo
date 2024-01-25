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
import { useState } from "react";

export const FormTableList = () => {
  const [tableRows, setTableRows] = useState(1);

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
          {Array.from({ length: tableRows }, (_, index) => (
            <FormTableBodyRow key={index} />
          ))}
        </TableBody>
      </Table>
      <Button
        variant="secondary"
        type="button"
        className="rounded-full w-full"
        aria-label="Add new item to a list"
        onClick={() => setTableRows((prev) => prev + 1)}>
        + Add New Item
      </Button>
    </>
  );
};
