"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { PlusCircledIcon } from "@radix-ui/react-icons";

import { SheetContext } from "@/context/sheet-context";
import { AuthContext } from "@/context/auth-context";
import getAllInvoices from "@/firebase/firestore/getAllInvoices";

import { HeaderSelect } from "@/components/header-select/header-select";
import { HeaderButton } from "@/components/header-button/header-button";
import { InvoicesList } from "@/app/(root)/components/invoices-list/invoices-list";
import { Navbar } from "@/components/navbar/navbar";

import { InvoiceType } from "@/types/types";

export default function Home() {
  const { setIsSheetOpen } = useContext(SheetContext);
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
    <>
      <Navbar />
      <header className="mt-16 max-w-screen-md mx-auto flex items-center justify-between">
        <div className="font-bold flex flex-col gap-4">
          <h1 className="text-4xl">Invoices</h1>
          <p className="text-primary font-normal text-sm">
            There are {invoices.length} total invoices
          </p>
        </div>
        <div className="flex items-center gap-4">
          <HeaderSelect />
          <HeaderButton
            size="withIcon"
            variant="default"
            text="New Invoice"
            onClick={() => setIsSheetOpen(true)}
            icon={<PlusCircledIcon className="h-6 w-6" />}
          />
        </div>
      </header>
      <main className="max-w-screen-md mx-auto">
        {invoices.length > 0 ? (
          <InvoicesList invoices={invoices} />
        ) : (
          <Image
            src="/illustration-empty.svg"
            width={500}
            height={500}
            alt=""
            aria-label="No invoices"
            className="mx-auto mt-20"
          />
        )}
      </main>
    </>
  );
}
