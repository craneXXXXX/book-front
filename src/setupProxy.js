const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // /api 表示代理路径
  // target 表示目标服务器的地址
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://127.0.0.1:8080",
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
