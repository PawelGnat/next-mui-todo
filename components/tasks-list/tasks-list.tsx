"use client";

import React, { useContext } from "react";

import { TasksContext } from "@/context/tasks-context";

import { List } from "@mui/material";

import { TaskListItem } from "../task-list-item/task-list-item";

export const TasksList: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <List className="min-w-[40rem] flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskListItem id={task.id} value={task.value} status={task.status} />
      ))}
    </List>
  );
};
