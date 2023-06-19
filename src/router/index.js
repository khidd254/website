import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Header from '../components/Header.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});

// Example authentication logic using username and password
function authenticate(username, password) {
  // Here, you can implement your own authentication logic, such as querying a database or calling an authentication API
  // This is a simplified example using hard-coded credentials

  const validUsername = 'Ken';
  const validPassword = 'Ken';

  // Check if the provided username and password match the valid credentials
  if (username === validUsername && password === validPassword) {
    return true; // Authentication successful
  } else {
    return false; // Authentication failed
  }
}

router.beforeEach((to, from, next) => {
  const isAuthenticated = authenticate('Ken', 'Ken'); // Replace with user-provided username and password

  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
