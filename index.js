const express = require('express');
const server = express();
const favicon = require("serve-favicon");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require('path')
const fs = require('fs');

// const templateIndex = fs.readFileSync('./webview/index.template.html', 'utf-8');
// const renderer = require('vue-server-renderer').createRenderer({
//   template: templateIndex
// })
//
const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('./dist/vue-ssr-bundle.json');

const renderer = createBundleRenderer(bundle);
// console.log(renderer);

const context = {
  title: 'hello world'
}
// const vm = require('./src/app');
// server.use(favicon(path.join(__dirname,'./public/favicon.ico')));


renderer.renderToString( (err, html) => {
  console.log(err);
  console.log(html);

})

// server.get('*', function(req, res) {
//   // renderer.createBundleRenderer(vm, context, (err, html) => {
//   //   if(err) throw console.log(err);
//   //   res.send(html)
//   // })
//   bundleRenderer.renderToString({ url: '/' }, (err, html) => {
//
//     console.log(html);
//
//   })
//
//
//
//
// })
















server.listen(3000);
