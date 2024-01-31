import { InvoiceListItem } from "../invoice-list-item/invoice-list-item";

import { InvoiceType } from "@/types/types";

interface InvoicesListProps {
  invoices: InvoiceType[];
  status: InvoiceType["status"];
}

export const InvoicesList: React.FC<InvoicesListProps> = ({
  invoices,
  status,
}) => {
  const filteredInvoices = (status: InvoiceType["status"]) => {
    return status === "all"
      ? invoices
      : invoices.filter((invoice) => invoice.status === status);
  };

  return (
    <ul className="mt-16 flex flex-col gap-4">
      {filteredInvoices(status).map((invoice) => (
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
