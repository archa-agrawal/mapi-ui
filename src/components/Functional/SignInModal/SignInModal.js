import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
};

export default function SignInModal({ open, onSignIn, onCancel }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetState = () => {
    setEmail("");
    setPassword("");
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
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ pb: 1 }}
            >
              Sign In
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                required
                fullwidth={"true"}
                sx={{ my: 1 }}
                label="EMail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                type={"password"}
                fullwidth={"true"}
                sx={{ my: 1 }}
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={() => {
                resetState();
                onSignIn({ email, password });
              }}
            >
              Sign in
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
