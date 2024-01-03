import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/main/MainView.vue'
Vue.use(VueRouter)

function guardMyrouteLoggedIn(to, from, next){
  var isAuthenticated= false;
  //this is just an example. You will have to find a better or 
  // centralised way to handle you localstorage data handling 
  
  if(window.localStorage.getItem('token'))
    isAuthenticated = true;
   else
    isAuthenticated= false;
   if(isAuthenticated )
   {
    next(); // allow to enter route
   } 
   else
   {
    next('/welcome'); // go to '/login';
   }
}

const routes= [
    {
      path: '/welcome',
      name: 'welcome',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'main',
      beforeEnter : guardMyrouteLoggedIn,
      component: MainView
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
export default router