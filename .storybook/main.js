const path = require(`path`);
const fs = require("fs");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    const sourcePath = path.join(__dirname, "../src");

    const resolvedAliases = {};

    fs.readdirSync(sourcePath, { withFileTypes: true })
      .filter((file) => file.isDirectory())
      .forEach(
        (dir) =>
          (resolvedAliases[`~${dir.name}`] = path.resolve(sourcePath, dir.name))
      );

    config.resolve.alias = {
      ...config.resolve.alias,
      ...resolvedAliases,
    };

    return config;
  },
};
