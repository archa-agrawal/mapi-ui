import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import NewMapModal from "../NewMapModal/NewMapModal";

export default function SiteHeader({ navigate, createNewMap }) {
  const [modalOpen, setModalOpen] = useState(false);

  const onModalSave = (state) => {
    createNewMap(state);
    setModalOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#f5f3e9", color: "#ed0965" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TravelExploreRoundedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Quicksand",
              color: "inherit",
              textDecoration: "none",
              paddingRight: "10px",
            }}
          >
            MAPI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{ my: 2, display: "block", color: "#ed0965" }}
              onClick={() => navigate("/")}
            >
              Explore
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              color="success"
              sx={{ my: 2, display: "block", mx: 2 }}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              + Add New Map
            </Button>
            <NewMapModal
              open={modalOpen}
              onCancel={() => {
                setModalOpen(false);
              }}
              onSave={onModalSave}
            />

            <IconButton sx={{ p: 0 }}>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
