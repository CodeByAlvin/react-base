export default {
  dev: {
    '/api/': {
      target: '', // 目的地地址
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
