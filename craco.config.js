// craco.config.js
const path = require(`path`);
const fs = require("fs");

const sourcePath = path.join(__dirname, "src");

const resolvedAliases = {};

fs.readdirSync(sourcePath, { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .forEach(
    (dir) =>
      (resolvedAliases[`~${dir.name}`] = path.resolve(sourcePath, dir.name))
  );

module.exports = {
  babel: {
    loaderOptions: {
      ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js']
    }
  },
  webpack: {
    alias: resolvedAliases,
  },
};
