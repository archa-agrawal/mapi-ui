import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import BrunchDiningRoundedIcon from "@mui/icons-material/BrunchDiningRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

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
