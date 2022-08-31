import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MapCard from "~components/Functional/MapCard/MapCard";
export default function Home() {
  return (
    <Box sx={{ my: 10 }}>
      <Grid container rowSpacing={6} columnSpacing={3}>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="bar1"
            color={"#f5e9f3"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="bar2"
            color={"#f5f3e9"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="books1"
            color={"#f5ece9"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="food1"
            color={"#d5f5d6"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="food2"
            color={"#f5f4e1"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="food3"
            color={"#fff0db"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="food4"
            color={"#bab9b6"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="fun1"
            color={"#f2e3fa"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="fun2"
            color={"#e3f3fa"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="shopping1"
            color={"#c4f5f4"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="sports1"
            color={"#cff5c4"}
          />
        </Grid>
        <Grid item xs={3}>
          <MapCard
            user={{
              name: "Vibhor",
            }}
            heading="Test Map"
            description="This is a test map"
            date="27 Sept 2022"
            theme="sports2"
            color={"#f5a9ad"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
