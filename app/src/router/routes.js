import MainLayout from 'layouts/MainLayout.vue'
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '',
       name: 'home',
       component: () => import('pages/Home.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
