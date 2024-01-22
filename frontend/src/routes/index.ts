import { lazy } from "react";

const Index = lazy(()=>import('../pages/posts/Index'))
const SinglePost = lazy(()=>import('../pages/posts/SinglePost'))
const EditPost = lazy(()=>import('../pages/posts/EditPost'))



const coreRoutes = [
     {
          path: '/index',
          title: 'Index',
          component: Index
     },

     {
          path: '/single_post/:id',
          title: 'Single_Post',
          component: SinglePost
     },

     {
          path: '/edit_post/:id',
          title: 'edit_Post',
          component: EditPost
     },
]

const route = [...coreRoutes]

export default route