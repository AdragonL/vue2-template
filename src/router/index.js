let routes = [
    {
        path:"/",
        redirect:'/<%= views[0] %>',
    },
    <% views.forEach(item =>{ %>
        {
            path: '/<%= item %>',
            name: '<%= item %>',
            component: () => import('../views/<%= item %>/index.vue')
        },
  <%  }) %>
   
]
export default routes