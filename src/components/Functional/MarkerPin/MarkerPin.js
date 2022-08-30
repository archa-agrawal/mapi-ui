import React from "react";
import "./MarkerPin.scss";
import { getLocationType } from "../../../utils/enums/locationTypes";
import { useTheme } from "@mui/material/styles";

export default function MarkerPin({ type }) {
  const theme = useTheme();
  const onClick = (e) => {
    e.stopPropagation();
  };

  const { Icon } = getLocationType(type);

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
