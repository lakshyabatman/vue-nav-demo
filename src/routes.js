import HelloWorld from './components/HelloWorld.vue'
import About from './components/about.vue'

export default[
    {
        path:'/',
        name:'Home',
        component:HelloWorld
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    
]