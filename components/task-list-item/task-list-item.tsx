import { useContext } from "react";
import { TasksContext } from "@/context/tasks-context";

import { IconButton, ListItemIcon, ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

import { Task } from "@/types/types";

export const TaskListItem: React.FC<Task> = ({ id, value, status }) => {
  const { setTasks } = useContext(TasksContext);

  const onEdit = () => {
    console.log("edit");
  };

  const onCheck = () => {
    console.log("check");
  };

  const onDelete = () => {
    // console.log("delete");
  };

  const actions = (
    <>
      <ListItemIcon className="min-w-0">
        <IconButton aria-label="edit" onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemIcon className="min-w-0">
        <IconButton aria-label="check" onClick={onCheck}>
          <CheckIcon />
        </IconButton>
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
      <ListItemText primary={value} />
      {actions}
    </ListItem>
  );
};
