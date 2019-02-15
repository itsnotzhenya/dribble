<template>
  <div id="app">
    <Header></Header>
    <!-- <Content></Content> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import New from "./components/New.vue";
import Popular from "./components/Popular.vue";
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/new" },
    { path: "/new", component: New },
    { path: "/popular", component: Popular }
  ]
});

export default {
  name: "app",
  components: {
    Header,
    Content,
    New,
    Popular
  },
  router: router
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
