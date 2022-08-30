import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function InlineEdit({
  value,
  placeholder,
  onUpdate,
  className,
}) {
  const labelValue = value || placeholder;
  const [editedValue, setEditedValue] = useState(value);
  const [editMode, setEditMode] = useState(false);

  const onLabelClick = () => setEditMode(true);
  const onTextChange = (e) => setEditedValue(e.target.value);
  const onCheck = () => {
    onUpdate(editedValue);
    setEditMode(false);
  };
  const onClear = () => {
    setEditedValue(value);
    setEditMode(false);
  };
  if (editMode) {
    return (
      <div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={editedValue}
          onChange={onTextChange}
          size={"small"}
        />
        <IconButton edge="end" aria-label="check" color="secondary">
          <CheckIcon onClick={() => onCheck()} />
        </IconButton>
        <IconButton edge="end" aria-label="clear" color="primary">
          <ClearIcon onClick={() => onClear()} />
        </IconButton>
      </div>
    );
  }
  return (
    <Typography className={className} onClick={onLabelClick}>
      {labelValue}
    </Typography>
  );
}
