const express = require('express');
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors())
const xintaiAdminOptions = {
  target: 'http://15366570332.gnway.cc', // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: {
    '^/xintai-admin/api': '/xintai/back',
  }
};
const xintaiAdminProxy = createProxyMiddleware(xintaiAdminOptions);

app.use('/xintai-admin/api', xintaiAdminProxy);
app.listen(9001);