const themes = [
  {
    name: "bar2",
    color: "#f5f3e9",
    secondaryColor: "#ed0965",
  },
  {
    name: "books1",
    color: "#f5ece9",
    secondaryColor: "#ed0965",
  },
  {
    name: "food1",
    color: "#d5f5d6",
    secondaryColor: "#ed0965",
  },
  {
    name: "food2",
    color: "#f5f4e1",
    secondaryColor: "#ed0965",
  },
  {
    name: "fun1",
    color: "#f2e3fa",
    secondaryColor: "#ed0965",
  },
  {
    name: "shopping1",
    color: "#c4f5f4",
    secondaryColor: "#ed0965",
  },
  {
    name: "sports1",
    color: "#cff5c4",
    secondaryColor: "#ed0965",
  },
  {
    name: "sports3",
    color: "#7be0a5",
    secondaryColor: "#ed0965",
  },
  {
    name: "sports4",
    color: "#7ba9e0",
    secondaryColor: "#ed0965",
  },
  {
    name: "animals1",
    color: "#edeadd",
    secondaryColor: "#ed0965",
  },
  {
    name: "food7",
    color: "#faf3f0",
    secondaryColor: "#ed0965",
  },
  {
    name: "food5",
    color: "#ded0b4",
    secondaryColor: "#ed0965",
  },
  {
    name: "food6",
    color: "#f7f7eb",
    secondaryColor: "#ed0965",
  },
  {
    name: "fun4",
    color: "#f4f5ba",
    secondaryColor: "#ed0965",
  },
  {
    name: "fun5",
    color: "#5cc7ed",
    secondaryColor: "#ed0965",
  },
];

export const getTheme = (name) => {
  const theme = themes.find((type) => type.name === name) || themes[0];
  theme.img = `${process.env.PUBLIC_URL}/images/${theme.name}.jpg`;
  return theme;
};

export default themes;
