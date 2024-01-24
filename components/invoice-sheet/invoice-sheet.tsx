"use client";

import { useContext } from "react";

import { SheetContext } from "@/context/sheet-context";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NewInvoiceForm } from "../new-invoice-form/new-invoice-form";
import { FormField } from "../form-field/form-field";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FormInfo } from "../form-info/form-info";

export const InvoiceSheet = () => {
  const { isSheetOpen, setIsSheetOpen } = useContext(SheetContext);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>New invoice</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-4">
          <p className="text-sm text-accent">Bill From</p>
          <FormInfo heading="Street Address" text="Street Address" />
          <div className="flex flex-row gap-4">
            <FormInfo heading="City" text="City" />
            <FormInfo heading="Post Code" text="Post Code" />
            <FormInfo heading="Country" text="Country" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <p className="text-sm text-accent">Bill To</p>
          <NewInvoiceForm />
        </div>
      </SheetContent>
    </Sheet>
  );
};
