import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import home from "@/pages/home";
import page1 from "@/pages/page1";
import page2 from "@/pages/page2";
import page3 from "@/pages/page3";
import page4 from "@/pages/page4";
import page5 from "@/pages/page5";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/page1",
      name: "home",
      component: home,
      children: [
        {
          path: "/page1",
          name: "page1",
          component: page1
        },
        {
          path: "/page2",
          name: "page2",
          component: page2
        },
        {
          path: "/page3",
          name: "page3",
          component: page3
        },
        {
          path: "/page4",
          name: "page4",
          component: page4
        },
        {
          path: "/page5",
          name: "page5",
          component: page5
        }
      ]
    }
  ]
});
