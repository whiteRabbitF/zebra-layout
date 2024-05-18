import { createRouter, createWebHistory } from 'vue-router';
import NewsList from '../views/NewsList.vue';

const routes = [
    {
        path: '/',
        name: 'NewsList',
        component: NewsList,
    },
];

const router = createRouter({
    history: createWebHistory('/vue-news-app/'),
    routes,
});

export default router;


