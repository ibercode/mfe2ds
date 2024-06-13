const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe3",
  filename: "remoteEntry.js", // this doesn't need to be set, if not specified it defaults to remoteEntry.js. Setting it here just for demo purposes.
  exposes: {
    "./my-feature3-module": "./src/app/my-feature3/my-feature3.module.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});