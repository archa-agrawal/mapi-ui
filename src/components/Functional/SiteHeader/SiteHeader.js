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
import NewMapModal from "~components/Functional/NewMapModal/NewMapModal";
import SignUpModal from "~components/Functional/SignUpModal/SignUpModal";
import SignInModal from "~components/Functional/SignInModal/SignInModal";

export default function SiteHeader({
  navigate,
  createNewMap,
  user,
  onSignUp,
  onSignIn,
  onSignOut,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const onModalSave = (state) => {
    createNewMap(state);
    setModalOpen(false);
  };

  const onSignUpMethod = async (user) => {
    await onSignUp(user);
    setSignUpModalOpen(false);
  };

  const onSignInMethod = async (user) => {
    await onSignIn(user);
    setSignInModalOpen(false);
  };

  const newMapButton = (
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
  );

  const userIcon = (
    <IconButton sx={{ p: 0 }} onClick={onSignOut}>
      <Avatar sx={{ backgroundColor: "#ed0965" }} aria-label="user">
        {user.firstName?.substring(0, 1).toUpperCase()}
      </Avatar>
    </IconButton>
  );

  const signInButton = (
    <Button
      sx={{ my: 2, display: "block", color: "#ed0965" }}
      onClick={() => setSignInModalOpen(true)}
    >
      Sign In
    </Button>
  );

  const signUpButton = (
    <Button
      variant={"outlined"}
      sx={{ my: 2, display: "block", color: "#ed0965" }}
      onClick={() => setSignUpModalOpen(true)}
    >
      Sign Up
    </Button>
  );

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
            {user.id ? newMapButton : signInButton}
            {user.id ? userIcon : signUpButton}
          </Box>
          <NewMapModal
            open={modalOpen}
            onCancel={() => {
              setModalOpen(false);
            }}
            onSave={onModalSave}
          />
          <SignUpModal
            open={signUpModalOpen}
            onCancel={() => setSignUpModalOpen(false)}
            onSignUp={onSignUpMethod}
          />
          <SignInModal
            open={signInModalOpen}
            onCancel={() => setSignInModalOpen(false)}
            onSignIn={onSignInMethod}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
