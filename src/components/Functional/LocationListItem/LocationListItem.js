import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { getLocationType } from "~utils/enums/locationTypes";

export default function LocationListItem({
  location: { id, title, description, type },
  selected,
  onSelect,
  onDelete,
  deletable,
}) {
  const { Icon } = getLocationType(type);

  const deleteButton = deletable ? (
    <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)}>
      <DeleteIcon />
    </IconButton>
  ) : null;

  return (
    <ListItem secondaryAction={deleteButton} disablePadding>
      <ListItemButton selected={selected === id} onClick={() => onSelect(id)}>
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={description} />
      </ListItemButton>
    </ListItem>
  );
}
