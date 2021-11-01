<template>
  <div id="app">
    <% if(plugins.indexOf("fullpage") === -1) { %>
    <hello />
    <% } %>
    <% if(plugins.indexOf("vueRouter") !== -1) { %>
    <router-view />
    <% } %> <% if(plugins.indexOf("fullpage") !== -1 ) { %>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <% views.forEach(function(v){ %>
      <div class="section"><<%= v %>/> <hello /></div>
      <% }) %>
    </full-page>
    <% } %>
  </div>
</template>
<script>
import Hello from "./components/helloWorld.vue"
<%  if(plugins.indexOf('fullpage') !== -1){ %>
<% views.forEach(function(v){ %>
import <%= v %> from "./views/<%= v %>/index.vue"  
<% }) %>
<% } %>
export default {
    components:{
      <%  if(plugins.indexOf('fullpage') !== -1){ %>
        <% views.forEach(function(v){ %>
            <%= v  %> ,
        <% }) %>
        <% } %>
        Hello
    },
    data(){
      return{
        isgood:'100vh',
        <% if(plugins.indexOf('fullpage') !== -1){ %>
   options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        showjob: false,
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        anchors: [
        <% views.forEach(function(v){ %>
          '<%= v %>' , 
        <% }) %>
        ],
          }
       <% } %>
      }
    },
  mounted() {
    <% if(device === 'moblie'){ %>
    if (this.isSafari()) {
      this.safariHacks();
    }
    <% } %>
  },
    methods:{
      onLeave() {

    },
      afterLoad() {

    },    //判断浏览器
    isSafari() {
      var issafariBrowser =
        /Safari/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent);
      // alert(issafariBrowser);
      return issafariBrowser;
    },
    safariHacks() {
      const convertStyle = () => {
        const height = window.innerHeight;
        Array.from(document.getElementsByClassName("section")).forEach(
          (element) => {
            element.style.height = `${height}px`;
          }
        );
        this.isgood = height + "px";
      };
      window.addEventListener("resize", convertStyle);
      window.addEventListener("DOMContentLoaded", convertStyle);
    },
    }
}
</script>