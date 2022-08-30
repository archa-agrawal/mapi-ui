import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import BrunchDiningRoundedIcon from "@mui/icons-material/BrunchDiningRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const locationTypes = {
  CAFE: {
    name: "cafe",
    Icon: LocalCafeRoundedIcon,
  },
  RESTAURANT: {
    name: "restaurant",
    Icon: BrunchDiningRoundedIcon,
  },
  LIBRARY: {
    name: "library",
    Icon: MenuBookRoundedIcon,
  },
  DEFAULT: {
    name: "default",
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
