import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { getTheme } from "~utils/enums/themes";

export default function MapCard({ user, heading, description, date, theme }) {
  const currentTheme = getTheme(theme);
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: currentTheme.color }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ backgroundColor: currentTheme.secondaryColor }}
            aria-label="user"
          >
            {user.name.substring(0, 1)}
          </Avatar>
        }
        title={heading}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={currentTheme.img}
        alt={currentTheme.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
