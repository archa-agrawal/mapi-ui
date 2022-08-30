import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { getLocationType } from "../../../utils/enums/locationTypes";

export default function LocationListItem({
  location: { id, name, description, type },
  selected,
  onSelect,
  onDelete,
}) {
  const { Icon } = getLocationType(type);

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon onClick={() => onDelete(id)} />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton selected={selected === id} onClick={() => onSelect(id)}>
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={description} />
      </ListItemButton>
    </ListItem>
  );
}
