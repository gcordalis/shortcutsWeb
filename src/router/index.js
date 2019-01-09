import Vue from "vue";
import Router from "vue-router";
import Editor from "@/components/editor.vue";
import Inspector from "@/components/inspector.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "editor",
      component: Editor
    },
    {
      path: "/inspector",
      name: "inspector",
      component: Inspector
    }
  ]
});
