import React, { useState, useEffect } from "react";
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
  editable,
}) {
  const labelValue = value || placeholder;
  const [editedValue, setEditedValue] = useState("");
  useEffect(() => {
    setEditedValue(value);
  }, [value]);
  const [editMode, setEditMode] = useState(false);

  const onLabelClick = () => setEditMode(!!editable);
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
