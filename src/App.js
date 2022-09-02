import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "~components/Routes/Home/Home";
import Map from "~components/Routes/Map/Map";
import SiteHeader from "~components/Functional/SiteHeader/SiteHeader";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "~actions";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUser());
  }, [dispatch]);
  const user = useSelector((state) => state.user.user);
  const onSignUp = (user) => {
    return dispatch(actions.createUser(user));
  };

  const onSignIn = (user) => {
    return dispatch(actions.loginUser(user));
  };

  const onSignOut = () => {
    return dispatch(actions.logoutUser());
  };
  const createNewMap = (map) => {
    dispatch(actions.createMap(map));
  };
  return (
    <div>
      <SiteHeader
        navigate={navigate}
        createNewMap={createNewMap}
        user={user}
        onSignUp={onSignUp}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
      />
      <Box sx={{ mx: 10, mt: 8 }}>
        <Routes>
          <Route path="/" element={<Home userId={user.id} />} />
          <Route path={"/map/:id"} element={<Map userId={user.id} />} />
        </Routes>
      </Box>
    </div>
  );
}
