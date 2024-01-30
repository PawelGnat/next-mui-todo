import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/auth-context";

import getAllInvoices from "@/firebase/firestore/getAllInvoices";

import { InvoiceListItem } from "../../../../components/invoice-list-item/invoice-list-item";

import { InvoiceType } from "@/types/types";

export const InvoicesList = () => {
  const { user } = useContext(AuthContext);
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);

  const fetchInvoices = async () => {
    if (user) {
      try {
        const { result, error } = await getAllInvoices(user.uid);
        const data = result as InvoiceType[];

        if (error) {
          console.error("Error fetching invoices:", error);
          return;
        }

        if (data) {
          setInvoices(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

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
