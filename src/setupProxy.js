const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // /api 表示代理路径
  // target 表示目标服务器的地址
  app.use(
    "/local",
    createProxyMiddleware({
      target: "http://47.101.143.43",
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      pathRewrite: {
        "^/local": "",
      },
    })
  );
  http: app.use(
    "/api",
    createProxyMiddleware({
      target: "http://touch.m.dangdang.com",
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
  app.use(
    "/search",
    createProxyMiddleware({
      target: "http://search.m.dangdang.com",
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      pathRewrite: {
        "^/search": "",
      },
    })
  );
  app.use(
    "/cart",
    createProxyMiddleware({
      target: "http://cart.m.dangdang.com",
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      pathRewrite: {
        "^/cart": "",
      },
    })
  );
};
