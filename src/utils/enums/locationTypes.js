import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import BrunchDiningRoundedIcon from "@mui/icons-material/BrunchDiningRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SportsTennisRoundedIcon from "@mui/icons-material/SportsTennisRounded";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import AttractionsRoundedIcon from "@mui/icons-material/AttractionsRounded";
import TheaterComedyRoundedIcon from "@mui/icons-material/TheaterComedyRounded";
import StadiumRoundedIcon from "@mui/icons-material/StadiumRounded";
import NightlifeRoundedIcon from "@mui/icons-material/NightlifeRounded";

const locationTypes = {
  CAFE: {
    name: "cafe",
    text: "Cafe",
    Icon: LocalCafeRoundedIcon,
  },
  RESTAURANT: {
    name: "restaurant",
    text: "Restaurant",
    Icon: BrunchDiningRoundedIcon,
  },
  LIBRARY: {
    name: "library",
    text: "Library",
    Icon: MenuBookRoundedIcon,
  },
  SPORTS: {
    name: "sports",
    text: "Sports",
    Icon: SportsTennisRoundedIcon,
  },
  MOVIES: {
    name: "movies",
    text: "Movies",
    Icon: MovieFilterRoundedIcon,
  },
  SHOPPING: {
    name: "shopping",
    text: "Shopping",
    Icon: LocalMallRoundedIcon,
  },
  ENTERTAINMENT: {
    name: "entertainment",
    text: "Entertainment",
    Icon: AttractionsRoundedIcon,
  },
  THEATER: {
    name: "theater",
    text: "Theater",
    Icon: TheaterComedyRoundedIcon,
  },
  STADIUM: {
    name: "stadium",
    text: "Stadium",
    Icon: StadiumRoundedIcon,
  },
  BAR: {
    name: "pub",
    text: "Pub",
    Icon: NightlifeRoundedIcon,
  },
  DEFAULT: {
    name: "default",
    text: "Default",
    Icon: LocationOnRoundedIcon,
  },
};

export const getLocationType = (name) => {
  const locationType = Object.values(locationTypes).find(
    (type) => type.name === name
  );
  return locationType || locationTypes.DEFAULT;
};

export default locationTypes;
