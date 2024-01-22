export interface Task {
  id: number;
  value: string;
  status: "current" | "done";
}
