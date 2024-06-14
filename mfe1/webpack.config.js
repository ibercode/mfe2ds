const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1-ng16",
  filename: "remoteEntry.js", // this doesn't need to be set, if not specified it defaults to remoteEntry.js. Setting it here just for demo purposes.
  exposes: {
    "./my-feature-module": "./src/app/my-feature/my-feature.module.ts",
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '>=1.1.0 <17.0.0' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion:  '>=1.1.0 <17.0.0' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion:  '>=1.1.0 <17.0.0' }, 
    "@salut/design-system-salut": { singleton: false, strictVersion: true, requiredVersion:  '>=1.5.2 <=1.5.2' }, 
   //"@ibm/watsonx": { singleton: true, strictVersion: true, requiredVersion:  '>=1.9.2 <=1.5.2' },
  },
});