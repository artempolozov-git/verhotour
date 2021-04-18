import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'VerhoTour Авторские квест-туры',
                description: 'Туристическая компания с авторским подходом к ведению экскурсий. Примите участие в уникальном квест-туре и насладитесь яркими впечатлениями от поездки!'
            },
            children: [],
        },
        {
            path: '/helsinki',
            name: 'helsinki',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/HelsinkiPage.vue')
            },
            meta: {
                title: 'Хельсинки | VerhoTour',
                description: 'В туре по Хельсинки Вы получите возможность не только познакомиться с историей и экскурсионными объектами, но и стать частью истории в увлекательном квесте, во взаимодействии с историческими персонажами, поучаствовать в кинохронике и по окончании тура получить памятные видео и фотоснимки!',
            },
            children: [],
        },
        {
            path: '/porvoo',
            name: 'porvoo',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/PorvooPage.vue')
            },
            meta: {
                title: 'Порвоо | VerhoTour',
                description: 'В туре по Порвоо Вы получите возможность не только познакомиться с историей и экскурсионными объектами, но и стать частью истории в увлекательном квесте, во взаимодействии с историческими персонажами, поучаствовать в кинохронике и по окончании тура получить памятные видео и фотоснимки!',
            },
            children: [],
        },
        {
            path: '/savonlinna',
            name: 'savonlinna',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/SavonlinnaPage.vue')
            },
            meta: {
                title: 'Савонлинна | VerhoTour',
                description: 'В туре по Савонлинне Вы получите возможность не только познакомиться с историей и экскурсионными объектами, но и стать частью истории в увлекательном квесте, во взаимодействии с историческими персонажами, поучаствовать в кинохронике и по окончании тура получить памятные видео и фотоснимки!',
            },
            children: [],
        },
        {
            path: '/karelia',
            name: 'karelia',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/KareliaPage.vue')
            },
            meta: {
                title: 'Карелия | VerhoTour',
                description: 'В туре по Карелии Вы получите возможность не только познакомиться с историей и экскурсионными объектами, но и стать частью истории в увлекательном квесте, во взаимодействии с историческими персонажами, поучаствовать в кинохронике и по окончании тура получить памятные видео и фотоснимки!',
            },
            children: [],
        },
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;