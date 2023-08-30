const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const xintaiAdminOptions = {
  target: 'http://15366570332.gnway.cc', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/xintai-admin/api': '/xintai/back',
  }
};
const xintaiAdminProxy = createProxyMiddleware(xintaiAdminOptions);

app.use('/xintai-admin/api', xintaiAdminProxy);
app.listen(9001);