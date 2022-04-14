import { createRouter, createWebHistory } from 'vue-router';

function lazyLoad(view){
    return import(`./views//Home/${view}.vue`);
}

const routes = [
    {
        path: '/', 
        name: 'home',
        component: lazyLoad('Home')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;