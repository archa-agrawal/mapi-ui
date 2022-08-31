import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import themes from "~utils/enums/themes";

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
  const [theme, setTheme] = useState(themes[0].name);

  const resetState = () => {
    setHeading("");
    setDescription("");
    setTheme(themes[0].name);
  };

  function srcset(image, size) {
    return {
      src: `${image}?w=${size}&h=${size}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size}&h=${size}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

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
              Create a new map
            </Typography>
            <Typography id="modal-modal-title">Theme</Typography>
            <ImageList
              sx={{ width: 600, height: 340 }}
              variant="masonry"
              cols={4}
              rowHeight={100}
            >
              {themes.map((themeObj) => (
                <ImageListItem
                  key={themeObj.name}
                  cols={1}
                  rows={1}
                  sx={
                    theme === themeObj.name ? { border: "solid 3px red" } : {}
                  }
                >
                  <img
                    {...srcset(
                      `${process.env.PUBLIC_URL}/images/${themeObj.name}.jpg`,
                      100
                    )}
                    alt={themeObj.name}
                    loading="lazy"
                    onClick={() => setTheme(themeObj.name)}
                  />
                </ImageListItem>
              ))}
            </ImageList>
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
                onSave({ heading, description, theme });
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
