"use client";
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap items-center justify-center p-2">
      <SimpleWidget
        title={`${count}`}
        label="Contador"
        icon={<IoCartOutline size={50} className="text-blue-600" />}
        href="/dashboard/counter"
        subTitle="Productos agregados"
      />
    </div>
  );
};
