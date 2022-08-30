import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import LocationTypes from "../../../utils/enums/locationTypes";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import BrunchDiningRoundedIcon from "@mui/icons-material/BrunchDiningRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

export default function LocationListItem({
  location: { id, name, description, type },
  selected,
  onSelect,
  onDelete,
}) {
  const Icon =
    type === LocationTypes.CAFE
      ? LocalCafeRoundedIcon
      : type === LocationTypes.RESTAURANT
      ? BrunchDiningRoundedIcon
      : type === LocationTypes.LIBRARY
      ? MenuBookRoundedIcon
      : LocationOnRoundedIcon;

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
