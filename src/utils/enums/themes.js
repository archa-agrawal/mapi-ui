const themes = [
  {
    name: "bar2",
    color: "#f5f3e9",
  },
  {
    name: "books1",
    color: "#f5ece9",
  },
  {
    name: "food1",
    color: "#d5f5d6",
  },
  {
    name: "food2",
    color: "#f5f4e1",
  },
  {
    name: "fun1",
    color: "#f2e3fa",
  },
  {
    name: "shopping1",
    color: "#c4f5f4",
  },
  {
    name: "sports1",
    color: "#cff5c4",
  },
];

export const getTheme = (name) => {
  const theme = themes.find((type) => type.name === name) || themes[0];
  theme.img = `${process.env.PUBLIC_URL}/images/${theme.name}.jpg`;
  return theme;
};

export default themes;
