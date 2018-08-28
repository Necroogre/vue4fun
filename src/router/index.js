import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import game from "@/pages/game";
import home from "@/pages/home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    }
  ]
});
