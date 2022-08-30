import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import locationTypes, { getLocationType } from "~utils/enums/locationTypes";

export default function LocationTypeSelect({ value, onSelect }) {
  const SelectedValue = (value) => {
    const SelectedLocation = getLocationType(value);
    return (
      <MenuItem>
        <ListItemAvatar>
          <Avatar>
            <SelectedLocation.Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={SelectedLocation.text} />
      </MenuItem>
    );
  };
  const MenuItems = Object.values(locationTypes).map((locationType) => (
    <MenuItem value={locationType.name} key={locationType.name}>
      <ListItemAvatar>
        <Avatar>
          <locationType.Icon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={locationType.text} />
    </MenuItem>
  ));
  return (
    <Select
      renderValue={SelectedValue}
      defaultValue={locationTypes.DEFAULT.name}
      value={value}
      onChange={(e) => onSelect(e.target.value)}
    >
      {MenuItems}
    </Select>
  );
}
