
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
 routes: [
    { path: '/helloword',name:"helloword", component: () => import('../view/HelloWorld.vue') },
    { path: '/parent',  name:"parent",component: () => import('../view/parent.vue') },
    { path: '/pdf',  name:"pdf",component: () => import('../view/pdf.vue') }
  ]

})
router.beforeEach((to,from,next)=>{
  console.log(to,from)
  next()
})
export default router
