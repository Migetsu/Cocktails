import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

export const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/cocktails/:id', name: 'cocktail', component: () => import('@/pages/Cocktail.vue')},
        {path: '/random', name: 'cocktailRandom', component: () => import('@/pages/CocktailRandom.vue')}
    ]
})