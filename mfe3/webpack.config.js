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
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '>=1.1.0 <17.0.0' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion:  '>=1.1.0 <17.0.0' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion:  '>=1.1.0 <17.0.0' }, 
    "@salut/design-system-salut": { singleton: false, strictVersion: true, requiredVersion:  '>=1.4.1 <=1.4.1' }, 
  },
});