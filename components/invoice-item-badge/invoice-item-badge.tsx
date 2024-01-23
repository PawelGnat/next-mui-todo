import clsx from "clsx";

import { Badge } from "@/components/ui/badge";

interface InvoiceItemBadgeProps {
  status: "draft" | "paid" | "pending";
}

export const InvoiceItemBadge: React.FC<InvoiceItemBadgeProps> = ({
  status,
}) => {
  return (
    <Badge variant={status}>
      <span
        className={clsx("h-2 w-2 rounded-full mr-2", {
          "bg-primary": status === "draft",
          "bg-paid": status === "paid",
          "bg-pending": status === "pending",
        })}></span>
      {status}
    </Badge>
  );
};
