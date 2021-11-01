<template>
  <div class="world">
    <img src="../assets/xinyuan.png" class="img" />
    <h1>Welcome !</h1>
    <% if( plugins.indexOf("vuex") !== -1) { %>
    <div>{{ user }}</div>
    <% } %>
  </div>
</template>

<% if( plugins.indexOf("vuex") !== -1) { %>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
<% } %>
<style scoped>
.world {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  margin-top: 100px;
}

h1 {
  text-align: center;
  margin-top: 70px;
}
</style>


<% if(css === "scss") {  %>
<style lang="scss" scoped>
h1 {
  color: $blue;
}
</style>
<% } %>
