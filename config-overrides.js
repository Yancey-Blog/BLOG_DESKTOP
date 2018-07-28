const rewireCssModules = require('react-app-rewire-css-modules');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env, options = {}) {
  config = rewireCssModules(config, env, options);
  config = rewireMobX(config, env);

  return config;
};
