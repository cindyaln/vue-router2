import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Produk from "@/views/Produk.vue";
import Kategori from "@/views/Kategori.vue";
import Detail from "@/views/Detail.vue";
import KategoriProduk from "@/views/KategoriProduk.vue";

import PageNotFound from "@/views/PageNotFound.vue";
import Login from "@/views/Login.vue";

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
     path: "/produk",
     name: "Produk",
     component: Produk,
   },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
   {
     path: "/detail/:id_produk",
     name: "Detail",
     component: Detail,
     props: true,
   },
  {
    path: "/kategoriproduk/:id_kategori",
    name: "KategoriProduk",
    component: KategoriProduk,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next(); // Lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login
      }
    },
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },

 { path: "/:pathMatch(.*)*", component: PageNotFound },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;