import { useContext, useState } from "react";
import { TasksContext } from "@/context/tasks-context";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { ListItem } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

import { Task } from "@/types/types";

export const TaskListItem: React.FC<Task> = ({ id, value, status }) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [editMode, setEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState("");

  const onEdit = () => {
    setEditMode(true);
    setEditedValue(value);
  };

  const onSaveEdit = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, value: editedValue } : task
    );

    setTasks(updatedTasks);
    setEditMode(false);
  };

  const onCancelEdit = () => {
    setEditMode(false);
    setEditedValue("");
  };

  const markAsDone = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: "done" } : task
    );

    setTasks(updatedTasks as Task[]);
  };

  const markAsUndone = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: "current" } : task
    );

    setTasks(updatedTasks as Task[]);
  };

  const onDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const actions = (
    <>
      <ListItemIcon className="min-w-0">
        <IconButton aria-label="edit" onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </ListItemIcon>

      <ListItemIcon className="min-w-0">
        {status === "current" ? (
          <IconButton aria-label="check" onClick={markAsDone}>
            <CheckIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="uncheck" onClick={markAsUndone}>
            <CancelIcon />
          </IconButton>
        )}
      </ListItemIcon>

      <ListItemIcon className="min-w-0">
        <IconButton aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>
    </>
  );

  return (
    <ListItem
      key={id}
      className="border-2 border-zinc-300"
      data-status={status}>
      {editMode ? (
        <>
          <TextField
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            className="w-full"
          />
          <IconButton aria-label="edit" onClick={onSaveEdit}>
            <CheckIcon />
          </IconButton>
          <IconButton aria-label="cancel" onClick={onCancelEdit}>
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ListItemText
            primary={value}
            className={status === "current" ? "" : "line-through"}
          />
          {actions}
        </>
      )}
    </ListItem>
  );
};
