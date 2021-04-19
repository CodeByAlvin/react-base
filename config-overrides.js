const {
  override,
  addWebpackAlias,
  overrideDevServer,
  addDecoratorsLegacy,
} = require('customize-cra');

const path = require('path');

const devServerConfig = () => config => {
  config.proxy = {
    '/api/': {
      target: '', // 目的地地址
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    },
  };

  return config;
};

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
    addDecoratorsLegacy(),
  ),
  devServer: overrideDevServer(devServerConfig()),
};
