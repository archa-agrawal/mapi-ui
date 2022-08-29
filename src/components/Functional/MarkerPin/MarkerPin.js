import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import "./MarkerPin.scss";
import LocationTypes from "../../../utils/enums/locationTypes";

export default function MarkerPin({ type }) {
  const onClick = (e) => {
    e.stopPropagation();
  };

  const Icon =
    type === LocationTypes.CAFE
      ? LocalCafeIcon
      : type === LocationTypes.RESTAURANT
      ? RestaurantIcon
      : type === LocationTypes.LIBRARY
      ? MenuBookIcon
      : LocationOnIcon;
  return (
    <div className={"marker-pin-container"} onClick={onClick}>
      <Icon sx={{ color: "deepPink" }} />
    </div>
  );
}
