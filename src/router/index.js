var VueRouter = require('vue-router');
Vue.use(VueRouter);
module.exports = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/list'
      // name:"page",
      // component:require("page")
    },
    {
      path: '/list',
      name:"list",
      component:require("../components/router/list.vue")
    },
    {
      path: '/sharePage',
      name:"sharePage",
      component:require("../components/router/sharePage.vue")
    }
  ]
});
