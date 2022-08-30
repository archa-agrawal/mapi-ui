import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
};

export default function NewMapModal({ open, onSave, onCancel }) {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const resetState = () => {
    setHeading("");
    setDescription("");
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEscapeKeyDown
    >
      <Box sx={style}>
        <Card sx={{ minWidth: 400 }}>
          <CardContent>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create a new map
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                fullwidth={"true"}
                sx={{ my: 1 }}
                variant={"outlined"}
                label={"Heading"}
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
              <TextField
                fullwidth={"true"}
                sx={{ my: 1 }}
                variant={"outlined"}
                label={"Description"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={() => {
                resetState();
                onSave({ heading, description });
              }}
            >
              create
            </Button>
            <Button
              variant={"outlined"}
              color={"secondary"}
              onClick={() => {
                resetState();
                onCancel();
              }}
            >
              cancel
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
}
