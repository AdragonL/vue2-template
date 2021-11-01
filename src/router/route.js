import Vue from 'vue'
import Router from 'vue-router'
import routes from "./index"
Vue.use(Router)

const router = new Router({
    mode: '<%= mode %>',
    routes
})
//路由拦截器
router.beforeEach((to, from, next) => {
    //根据字段判断是否路由过滤
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (localStorage.getItem('sid')) { //身份信息获取
            next();
        } else {
            next({
                path: '/'
            })
        }
    } else {
        next();
    }
});

export default router;