"use client";

import { TasksProvider } from "@/context/tasks-context";

import { HeaderSelect } from "@/components/header-select/header-select";
import { HeaderButton } from "@/components/header-button/header-button";
import { InvoicesList } from "@/components/invoices-list/invoices-list";

import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <TasksProvider>
        <header className="mt-16 max-w-screen-lg mx-auto flex items-center justify-between">
          <div className="font-bold flex flex-col gap-4">
            <h1 className="text-4xl">Invoices</h1>
            <p className="text-primary/70 font-light">
              There are 0 total invoices
            </p>
          </div>
          <div className="flex items-center gap-4">
            <HeaderSelect />
            <HeaderButton
              variant="default"
              text="New invoice"
              onClick={() => console.log("btn new inv")}
              icon={<PlusCircledIcon className="h-6 w-6" />}
            />
          </div>
        </header>
        <main className="max-w-screen-lg mx-auto">
          <InvoicesList />
        </main>
      </TasksProvider>
    </>
  );
}
