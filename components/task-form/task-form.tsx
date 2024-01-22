"use client";

import { FormEvent, useContext, useState } from "react";

import { TasksContext } from "@/context/tasks-context";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import { Task } from "@/types/types";

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const TaskForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { setTasks } = useContext(TasksContext);

  const addNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;

    const newTask: Task = {
      id: generateUniqueId(),
      value: inputValue,
      status: "current",
    };

    setTasks((prev) => [...prev, newTask]);
    setInputValue("");
  };

  return (
    <form
      onSubmit={addNewTask}
      className="flex flex-row gap-4 items-center h-full">
      <TextField
        id="outlined-task-input"
        label="New task"
        size="small"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" className="h-full" type="submit">
        Add task
      </Button>
    </form>
  );
};
