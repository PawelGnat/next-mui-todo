import { useState } from "react";

import { TrashIcon } from "@radix-ui/react-icons";

import { TableCell, TableRow } from "@/components/ui/table";
import { FormTableListInput } from "../form-table-list-input/form-table-list-input";
import { Button } from "../ui/button";

export const FormTableBodyRow = () => {
  const [qty, setQty] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  return (
    <TableRow>
      <TableCell className="pr-2 w-full">
        <FormTableListInput type="text" />
      </TableCell>
      <TableCell className="px-2 min-w-20">
        <FormTableListInput type="number" onChange={(value) => setQty(value)} />
      </TableCell>
      <TableCell className="px-2 min-w-28">
        <FormTableListInput
          type="number"
          onChange={(value) => setPrice(value)}
        />
      </TableCell>
      <TableCell className="px-2">{(qty * price).toFixed(2)}</TableCell>
      <TableCell className="pl-2 w-0">
        <Button
          variant="outline"
          size="icon"
          onClick={() => console.log("delete")}>
          <TrashIcon className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
