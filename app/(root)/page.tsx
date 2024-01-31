"use client";

import { useContext, useState } from "react";

import { PlusCircledIcon } from "@radix-ui/react-icons";

import { SheetContext } from "@/context/sheet-context";
import { AuthContext } from "@/context/auth-context";

import { InvoiceSelect } from "@/components/invoice-select/invoice-select";
import { InvoicesList } from "@/app/(root)/components/invoices-list/invoices-list";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { EmptyState } from "./components/empty-state/empty-state";

import { InvoiceType } from "@/types/types";

export default function Home() {
  const { setIsSheetOpen } = useContext(SheetContext);
  const { invoices } = useContext(AuthContext);

  const [status, setStatus] = useState<InvoiceType["status"]>("all");

  const handleStatus = (status: InvoiceType["status"]) => {
    setStatus(status);
  };

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
          <InvoiceSelect onSelect={handleStatus} />
          <Button
            size="withIcon"
            variant="default"
            onClick={() => setIsSheetOpen(true)}
            className="flex flex-row justify-between gap-2">
            <PlusCircledIcon className="h-6 w-6" />
            New Invoice
          </Button>
        </div>
      </header>
      <main className="max-w-screen-md mx-auto">
        {invoices.length > 0 ? (
          <InvoicesList invoices={invoices} status={status} />
        ) : (
          <EmptyState />
        )}
      </main>
    </>
  );
}
