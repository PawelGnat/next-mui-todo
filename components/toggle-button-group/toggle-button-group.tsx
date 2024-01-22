"use client";

import { MouseEvent, useContext, useState } from "react";
import { TasksContext } from "@/context/tasks-context";

import { ToggleButtonGroup as TBG } from "@mui/material";
import { ToggleButton } from "@mui/material";

import { Status } from "@/types/types";

export const ToggleButtonGroup: React.FC = () => {
  const { status, setStatus } = useContext(TasksContext);

  const handleChange = (event: MouseEvent<HTMLElement>, newStatus: Status) => {
    setStatus(newStatus);
  };

  return (
    <TBG
      color="primary"
      value={status}
      exclusive
      onChange={handleChange}
      aria-label="Tasks">
      <ToggleButton value="current">Current</ToggleButton>
      <ToggleButton value="done">Done</ToggleButton>
      <ToggleButton value="all">All</ToggleButton>
    </TBG>
  );
};
