export interface Task {
  id: string;
  value: string;
  status: Exclude<Status, "all">;
}

export type Status = "current" | "done" | "all";
