<template>
    <div class="header">
        <vue-scroll-progress-bar @complete="handleComplete" height=".3em" backgroundColor="#374DFF"/>
        <div title="Главная" class="logotype" v-on:click="goToPage('/')"><img src="@/assets/icon/logotype.svg"></div>

        <div class="header-links">
            <div class="link" v-scroll-to="{el:'#about-tours', offset: -100}">О турах</div>
            <div class="link" v-scroll-to="{el:'#tour-price', offset: -100}">Туры</div>
            <div class="link" v-scroll-to="{el:'#hostel', offset: -120}">Отель</div>
            <div class="link" v-scroll-to="{el:'#memory', offset: -90}">Памятка туриста</div>
            <div class="link" v-scroll-to="{el:'#photo', offset: -100}">Фото</div>
            <div class="link-last" v-scroll-to="{el:'#contact', offset: -100}">Контакты</div>
        </div>

        <div class="header-contacts">
            <a title="WhatsApp" target="_blank" class="contact" href="https://api.whatsapp.com/send?phone=+79818595479&text=&source=&data=&app_absent="><img src="@/assets/icon/whatsapp.svg"></a>
            <a title="Instagram" target="_blank" class="contact" href="https://www.instagram.com/verkhovensky666/"><img src="@/assets/icon/instagram.svg"></a>
            <a title="ВКонтакте" target="_blank" class="contact-last" href="https://vk.com/id495000258"><img src="@/assets/icon/vkontakte.svg"></a>
        </div>
        <div class="burgerbutton">
            <burger-menu></burger-menu>
        </div>
    </div>
</template>

<script>
    import { VueScrollProgressBar } from '@guillaumebriday/vue-scroll-progress-bar'
    import BurgerMenu from "@/components/BurgerMenu";
    export default {
        name: "Header",
        components: {BurgerMenu, VueScrollProgressBar},
        data() {
            return {};
        },
        computed: {

        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style scoped>
.header {
    z-index: 2;
    position: sticky;
    top: 0;
    padding: 2em 15em;
    display: flex;
    align-items: center;
    background-color: white;
}
.logotype {
    width: 20em;
    cursor: pointer;
    transition: opacity .1s ease;
}
.logotype:hover {
    opacity: 0.9;
    transition: opacity .2s ease;
}
.header-links {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.link {
    font-weight: 500;
    margin-right: 4em;
    font-size: 1em;
    color: #3F3F3F;
    transition: color .1s ease-in;
}
.link:hover {
    color: #374DFF;
    transition: color .2s ease-in;
    cursor: pointer;
}
.link-last {
    font-weight: 500;
    font-size: 1em;
    margin-right: 0;
    color: #3F3F3F;
    transition: color .1s ease-in;
}
.link-last:hover {
    color: #374DFF;
    transition: color .2s ease-in;
    cursor: pointer;
}
.header-contacts {
    display: flex;
    justify-content: center;
    align-items: center;
}
.contact {
    width: 2.2em;
    margin-right: 3em;
}
.contact:hover {
    transition: opacity .1s ease;
    cursor: pointer;
    opacity: 0.8;
}
.contact-last {
    width: 2.2em;
    margin-right: 0;
    transition: opacity .1s ease;
}
.contact-last:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease;
}
.burgerbutton {
    display: none;
}

@media only screen and (max-width : 1680px) {
    .header {
        padding: 2em 10em;
    }
}
@media only screen and (max-width : 1536px) {
    .header {
        padding: 2em 5em;
    }
}
@media only screen and (max-width : 1366px) {
    .header {
        padding: 2em 3em;
    }
    .link {
        margin-right: 3em;
    }
}
@media only screen and (max-width : 1024px) {
    .burgerbutton {
        display: block;
    }
    .header-links {
        display: none;
    }
    .header-contacts {
        display: none;
    }
    .header {
        padding: 2em 6em;
    }
    .logotype {
        width: 15em;
    }
    .bm-burger-button {
        top: 45px;
    }
}
@media only screen and (max-width : 800px) {
    .header {
        padding: 2em 3em;
    }
}
@media only screen and (max-width : 600px) {
    .logotype {
        width: 12em;
    }
    .header {
        padding: 2em 2em;
    }
}
@media only screen and (max-width : 360px) {
    .logotype {
        width: 9em;
    }
    .header {
        padding: 2em 2em;
    }
}
</style>