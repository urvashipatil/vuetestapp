import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NestedApp from "./components/nesting-components/NestedApp.vue";
// import FormDynamic from "./components/slots/FormDynamic.vue";
import CheckboxSelect from "./components/checkbox-select.vue";
import { store } from "./store/store";
// import Projects from "./components/Projects.vue";
import BlogApp from "./components/blog-app/BlogApp.vue";
import VueResource from "vue-resource";
import ShowBlogs from "./components/blog-app/ShowBlogs";
import AddBlog from "./components/blog-app/AddBlog.vue";

// Vue.component("projects", Projects);

Vue.use(VueResource);
Vue.use(VueRouter);

//Create new instance if VueRouter
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/hello", component: HelloWorld },
    { path: "/nestedapp", component: NestedApp },
    { path: "/checkbox", component: CheckboxSelect },
    { path: "/checkbox/:id", component: CheckboxSelect },
    {
      path: "/blog",
      component: BlogApp,
      children: [
        {
          path: "showall",
          component: ShowBlogs,
        },
        {
          path: "add",
          component: AddBlog,
        },
      ],
    },
    // {
    //   path: "/checkbox",
    //   component: CheckboxSelect,
    //   children: [
    //     {
    //       path: "nestedapp",
    //       component: NestedApp,
    //     },
    //   ],
    // },
  ],
});

Vue.directive("random", {
  bind(el, binding, vNode) {
    console.log("binding", binding);
    console.log("vNode", vNode);
    el.style.color = "#" + Math.random().toString().slice(2, 8);
    el.style.fontWeight = "bold";
  },
});

// Vue.directive("theme", {
//   bind(el, binding) {
//     if (binding.value == "wide") {
//       el.style.background = "lightgray";
//       el.style.width = "1200px";
//     } else if (binding.value == "narrow") {
//       el.style.background = "cyan";
//       el.style.width = "600px";
//     }

//     if (binding.arg == "column") {
//       el.style.padding = "20px";
//       el.style.background = "yellow";
//     }
//   },
// });

// Vue.filter("mycase", function (data) {
//   return (data || "").toUpperCase();
// });

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  router: router,
}).$mount("#app");
