import { InvoiceItemBadge } from "../invoice-item-badge/invoice-item-badge";

interface InvoiceListItemProps {
  status: "draft" | "paid" | "pending";
}

export const InvoiceListItem: React.FC<InvoiceListItemProps> = ({ status }) => {
  return (
    <li className="flex flex-row items-center justify-between bg-foreground py-4 px-8 rounded-lg">
      <p className="font-bold">
        <span className="text-primary/60">#</span>RT3080
      </p>
      <p className="font-light text-primary/60">Due 19 Aug 2021</p>
      <p className="font-light text-primary/60">Jensen Huang</p>
      <p className="text-xl font-bold">Є1,800.90</p>
      <div className="flex flex-row gap-4 items-center">
        <InvoiceItemBadge status={status} />
      </div>
    </li>
  );
};
