import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddEmployee from "../views/AddEmployee.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/adicionar-funcionario",
    name: "AddEmployee",
    component: AddEmployee,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
