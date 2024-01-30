import { InvoiceListItem } from "../invoice-list-item/invoice-list-item";

import { InvoiceType } from "@/types/types";

interface InvoicesListProps {
  invoices: InvoiceType[];
}

export const InvoicesList: React.FC<InvoicesListProps> = ({ invoices }) => {
  return (
    <ul className="mt-16 flex flex-col gap-4">
      {invoices.map((invoice) => (
        <InvoiceListItem
          key={invoice.id}
          id={invoice.id}
          name={invoice.name}
          data={invoice.data}
          status={invoice.status}
          date={invoice.date}
        />
      ))}
    </ul>
  );
};
