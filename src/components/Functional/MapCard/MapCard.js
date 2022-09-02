import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import { getTheme } from "~utils/enums/themes";

export default function MapCard({ map, onCardClick, onShareClick, onDelete }) {
  const currentTheme = getTheme(map.theme);
  const onShare = () => {
    navigator.clipboard.writeText(`${process.env.REACT_APP_URL}/map/${map.id}`);
    onShareClick();
  };
  const DeleteButton = map.owned ? (
    <IconButton aria-label="delete" onClick={() => onDelete(map.id)}>
      <DeleteIcon />
    </IconButton>
  ) : null;
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: currentTheme.color }}>
      <CardActionArea onClick={() => onCardClick(map)}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ backgroundColor: currentTheme.secondaryColor }}
              aria-label="user"
            >
              {map.creator.firstName.substring(0, 1)}
            </Avatar>
          }
          title={map.heading}
          subheader={new Date(map.createdAt).toDateString()}
        />
        <CardMedia
          component="img"
          height="194"
          image={currentTheme.img}
          alt={currentTheme.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {map.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={onShare}>
          <ShareIcon />
        </IconButton>
        {DeleteButton}
      </CardActions>
    </Card>
  );
}
