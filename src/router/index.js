import Vue from "vue";
import VueRouter from "vue-router";
import recommend from "../views/Recommend.vue";
import albums from "../views/Albums.vue";
import Search from "../views/Search.vue";
import Catalog from "../components/catalogs/CatalogsList.vue";
import SoundInfo from "../components/soundinfo/SoundInfo.vue";
import SoundIntroduce from "../components/soundinfo/SoundIntroduce.vue"
import SoundComments from "../components/soundinfo/SoundComments.vue"
import SoundImgs from "../components/soundinfo/SoundImgs.vue"
import Album from "../components/albums/Album.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/soundinfo",
    name: "soundinfo",
    component: SoundInfo,
    children: [
      {
        path: "soundintroduce/:soundid",
        name: "soundintroduce",
        component: SoundIntroduce
      },
      {
        path: "soundcomments/:soundid",
        name: "soundcomments",
        component: SoundComments
      },
      {
        path: "soundimgs/:soundid",
        name: "soundimgs",
        component: SoundImgs
      },
      {
        path: "",
        name: "",
        component: SoundIntroduce
      },
    ]
  },
  {
    path: "/album/:albumid",
    name: "album",
    component: Album
  },
  {
    path: "/catalog/:id",
    name: "catalog",
    component: Catalog
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/recommend",
    name: "recommend",
    component: recommend
  },
  {
    path: "/albums",
    name: "albums",
    component: albums
  },
  {
    path: "/catalogs",
    name: "catalogs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Catalogs.vue")
  },
  {
      path: "/",
      redirect: '/recommend'       
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0}
  }
});

export default router;
