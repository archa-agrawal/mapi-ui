import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import LocationTypes from "../../../utils/enums/locationTypes";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function LocationListItem({
  location: { id, name, description, type },
  selected,
  onSelect,
  onDelete,
}) {
  const Icon =
    type === LocationTypes.CAFE
      ? LocalCafeIcon
      : type === LocationTypes.RESTAURANT
      ? RestaurantIcon
      : type === LocationTypes.LIBRARY
      ? MenuBookIcon
      : LocationOnIcon;

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
