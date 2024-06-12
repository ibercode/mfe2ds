const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    // no need to declare remotes as they are dynamically loaded.
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '>=1.1.0 <17.0.0' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion:  '>=1.1.0 <17.0.0' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion:  '>=1.1.0 <17.0.0' }, 
   // "@salut/design-system-salut": { singleton: false, strictVersion: false, requiredVersion:  '>=1.2.0 <=1.2.0' }, 
  },
});