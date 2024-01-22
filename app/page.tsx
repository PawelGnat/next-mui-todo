import { Container } from "@mui/material";

import { TasksProvider } from "@/context/tasks-context";

import { TaskForm } from "@/components/task-form/task-form";
import { ToggleButtonGroup } from "@/components/toggle-button-group/toggle-button-group";
import { TasksList } from "@/components/tasks-list/tasks-list";

export default function Home() {
  return (
    <>
      <TasksProvider>
        <header className="h-10"></header>
        <main className="">
          <Container
            maxWidth="xl"
            className="flex flex-col items-center justify-center gap-10">
            <TaskForm />
            <ToggleButtonGroup />
            <TasksList />
          </Container>
        </main>
      </TasksProvider>
    </>
  );
}
