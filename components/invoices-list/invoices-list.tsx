import { useState } from "react";
import { InvoiceListItem } from "../invoice-list-item/invoice-list-item";

import { InvoiceType } from "@/types/types";

export const InvoicesList = () => {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);

  return (
    <ul className="mt-16 flex flex-col gap-4">
      {/* <InvoiceListItem status="draft" />
      <InvoiceListItem status="pending" />
      <InvoiceListItem status="paid" />
      <InvoiceListItem status="overdue" /> */}
    </ul>
  );
};
