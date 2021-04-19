const {
  override,
  addWebpackAlias,
  overrideDevServer,
  addDecoratorsLegacy,
} = require('customize-cra');

const path = require('path');

const proxy = {
  dev: {
    '/api/': {
      target: '', // mock地址
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: '', // 目的地地址
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
    addDecoratorsLegacy(),
  ),
  devServer: overrideDevServer(config => ({
    ...config,
    proxy: proxy[process.env.REACT_APP_ENV || 'dev'],
  })),
};
