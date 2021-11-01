
import Vue from 'vue'
import App from './App.vue'
<% if(plugins && plugins.indexOf('fullpage') !== -1) {    -%>

import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
    // import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
    import VueFullPage from 'vue-fullpage.js'
<% } _%>
<%  if(plugins && plugins.indexOf('swiper') !== -1) {    -%>

import VueAwesomeSwiper from 'vue-awesome-swiper'
<% } _%>
<% if (plugins && plugins.indexOf('vueRouter') !== -1) { -%>
    import router from './router/route'
    <% } _%>
    <%  if (plugins && plugins.indexOf('vuex') !== -1) { -%>
        import store from './store/index'
        <% } _%>
Vue.config.productionTip = false
    <%  if (plugins && plugins.indexOf('fullpage') !== -1) {  -%>

        Vue.use(VueFullPage)
        <% } %>
        <%  if(plugins && plugins.indexOf('swiper') !== -1) {    -%>

            Vue.use(VueAwesomeSwiper)
            <% } _%>

            new Vue({
                render: h => h(App)
                <%_ if (plugins && plugins.indexOf('vueRouter') !== -1) { -%>
                    ,router
                    <% } _%>
                    <%_ if (plugins && plugins.indexOf('vuex') !== -1) { -%>
                        ,store
                        <% } _%>
                
            }).$mount('#app')