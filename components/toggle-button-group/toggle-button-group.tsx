"use client";

import { MouseEvent, useState } from "react";

import { ToggleButtonGroup as TBG } from "@mui/material";
import { ToggleButton } from "@mui/material";

export const ToggleButtonGroup: React.FC = () => {
  const [status, setStatus] = useState("current");

  const handleChange = (event: MouseEvent<HTMLElement>, newStatus: string) => {
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
