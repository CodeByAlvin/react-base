const {
  override,
  addWebpackAlias,
  // overrideDevServer,
  addDecoratorsLegacy,
} = require('customize-cra');

const path = require('path');

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
    addDecoratorsLegacy(),
  ),
  // devServer: overrideDevServer(proxy[REACT_APP_ENV || 'dev']),
};
