import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormTableListItem } from "../form-table-list-item/form-table-list-item";

export const FormTableList = () => {
  return (
    <Table>
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
        <TableRow>
          {/* <TableCell className="font-medium">INV001</TableCell> */}
          {/* <TableCell>Paid</TableCell> */}
          {/* <TableCell>Credit Card</TableCell> */}
          <FormTableListItem type="text" />
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
