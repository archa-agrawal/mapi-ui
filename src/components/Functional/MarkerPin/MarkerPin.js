import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import BrunchDiningRoundedIcon from "@mui/icons-material/BrunchDiningRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import React from "react";
import "./MarkerPin.scss";
import LocationTypes from "../../../utils/enums/locationTypes";
import { useTheme } from "@mui/material/styles";

export default function MarkerPin({ type }) {
  const theme = useTheme();
  const onClick = (e) => {
    e.stopPropagation();
  };

  const Icon =
    type === LocationTypes.CAFE
      ? LocalCafeRoundedIcon
      : type === LocationTypes.RESTAURANT
      ? BrunchDiningRoundedIcon
      : type === LocationTypes.LIBRARY
      ? MenuBookRoundedIcon
      : LocationOnRoundedIcon;
  return (
    <div
      className={"marker-pin-container"}
      onClick={onClick}
      style={{ borderColor: theme.palette.secondary.light }}
    >
      <Icon sx={{ color: "secondary.light" }} />
    </div>
  );
}
