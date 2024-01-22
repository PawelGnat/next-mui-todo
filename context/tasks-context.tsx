"use client";

import { createContext, useState } from "react";

import { Status, Task } from "@/types/types";

interface TasksContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  status: Status;
  setStatus: (value: React.SetStateAction<Status>) => void;
}

export const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  setTasks: () => {},
  status: "current",
  setStatus: () => {},
});

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status, setStatus] = useState<Status>("current");

  return (
    <TasksContext.Provider value={{ tasks, setTasks, status, setStatus }}>
      {children}
    </TasksContext.Provider>
  );
};
