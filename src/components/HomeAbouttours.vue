<template>
    <div class="about-tours" id="about-tours">
        <h1 class="title">О турах</h1>
        <h2 class="description">Финляндия – страна с красивой северной природой и необыкновенным туризмом!
            вы сможете взглянуть на Финляндию через призму современности, ощутить себя в роли актера в соприкосновении с историей.
            Мы приложим все усилия, чтобы вы незабываемо, увлекательно и необычно провели свое время!
        </h2>

        <div class="tours-group">
            <div>
                <div class="tour-helsinki" v-on:click="goToPage('helsinki')">
                    <div class="location-tour">
                        <img src="@/assets/icon/pin-white.svg">
                        <span>Хельсинки</span>
                    </div>
                    <div class="more-button">
                        <span>Подробнее</span>
                        <img src="@/assets/icon/arrow-right.svg">
                    </div>
                </div>
                <div class="details">
                    <div class="date-base" title="Дата основания">
                        <img src="@/assets/icon/calendar.svg">
                        <span>XVI в.</span>
                    </div>
                    <div class="population" title="Население">
                        <img src="@/assets/icon/people.svg">
                        <span>574 579 чел.</span>
                    </div>
                </div>
            </div>

            <div>
                <div class="tour-porvoo" v-on:click="goToPage('porvoo')">
                    <div class="location-tour">
                        <img src="@/assets/icon/pin-white.svg">
                        <span>Порвоо</span>
                    </div>
                    <div class="more-button">
                        <span>Подробнее</span>
                        <img src="@/assets/icon/arrow-right.svg">
                    </div>
                </div>
                <div class="details">
                    <div class="date-base" title="Дата основания">
                        <img src="@/assets/icon/calendar.svg">
                        <span>XIV в.</span>
                    </div>
                    <div class="population" title="Население">
                        <img src="@/assets/icon/people.svg">
                        <span>50 610 чел.</span>
                    </div>
                </div>
            </div>

            <div>
                <div class="tour-savonlinna" v-on:click="goToPage('savonlinna')">
                    <div class="location-tour">
                        <img src="@/assets/icon/pin-white.svg">
                        <span>Савонлинна</span>
                    </div>
                    <div class="more-button">
                        <span>Подробнее</span>
                        <img src="@/assets/icon/arrow-right.svg">
                    </div>
                </div>
                <div class="details">
                    <div class="date-base" title="Дата основания">
                        <img src="@/assets/icon/calendar.svg">
                        <span>XV в.</span>
                    </div>
                    <div class="population" title="Население">
                        <img src="@/assets/icon/people.svg">
                        <span>32 872 чел.</span>
                    </div>
                </div>
            </div>


            <div>
                <div class="tour-kareliya" v-on:click="goToPage('karelia')">
                    <div class="location-tour">
                        <img src="@/assets/icon/pin-white.svg">
                        <span>Карелия</span>
                    </div>
                    <div class="more-button">
                        <span>Подробнее</span>
                        <img src="@/assets/icon/arrow-right.svg">
                    </div>
                </div>
                <div class="details">
                    <div class="date-base" title="Упоминание в истории">
                        <img src="@/assets/icon/calendar.svg">
                        <span>XII в.</span>
                    </div>
                    <div class="population" title="Население">
                        <img src="@/assets/icon/people.svg">
                        <span>609 439 чел.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'hooper/dist/hooper.css';
    export default {
        name: "HomeAbouttours",
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
.about-tours {
    padding: 3em 15em;
}
.title {
    font-size: 2em;
    font-weight: bold;
    color: #14244B;
    text-align: center;
}
.description {
    font-size: 1em;
    font-weight: 500;
    color: #3F3F3F;
    width: 70%;
    margin: auto;
    text-align: center;
}
.tours-group {
    display: grid;
    grid-template-columns: 21em 21em 21em 21em;
    grid-template-rows: 1fr;
    grid-column-gap: 2em;
    grid-row-gap: 0px;
    margin-top: 2em;
}
.tour-helsinki {
    display: flex;
    flex-direction: inherit;
    align-items: flex-end;
    justify-content: space-between;
    height: 11em;
    padding: 1em;
    background: url(../assets/images/helsinkipreview.webp);
    background-size: cover;
    background-position: center;
    cursor: pointer;
}
.tour-helsinki:hover {
    transition: all .1s ease;
    transform: scale(1.01);
}
.tour-porvoo {
    display: flex;
    flex-direction: inherit;
    align-items: flex-end;
    justify-content: space-between;
    height: 11em;
    padding: 1em;
    background: url(../assets/images/porvoopreview.webp);
    background-size: cover;
    background-position: center;
    cursor: pointer;
}
.tour-porvoo:hover {
    transition: all .1s ease;
    transform: scale(1.01);
}
.tour-savonlinna {
    display: flex;
    flex-direction: inherit;
    align-items: flex-end;
    justify-content: space-between;
    height: 11em;
    padding: 1em;
    background: url(../assets/images/savonlinnapreview.webp);
    background-size: cover;
    background-position: center;
    cursor: pointer;
}
.tour-savonlinna:hover {
    transition: all .1s ease;
    transform: scale(1.01);
}
.tour-kareliya {
    display: flex;
    flex-direction: inherit;
    align-items: flex-end;
    justify-content: space-between;
    height: 11em;
    padding: 1em;
    background: url(../assets/images/kareliyapreview.webp);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: all .1s ease;
}
.tour-kareliya:hover {
    transition: all .2s ease;
    transform: scale(1.01);
}
.location-tour {
    display: flex;
    align-items: center;
}
.location-tour > img {
    width: .9em;
    margin-right: .5em;
}
.location-tour > span {
    color: white;
    font-weight: normal;
}
.more-button {
    display: flex;
    align-items: center;
    opacity: 0.7;
    transition: opacity .1s ease;
}
.tour-helsinki:hover .more-button {
    opacity: 1;
    transition: opacity .2s ease;
}
.tour-porvoo:hover .more-button {
    opacity: 1;
    transition: opacity .2s ease;
}
.tour-savonlinna:hover .more-button {
    opacity: 1;
    transition: opacity .2s ease;
}
.tour-kareliya:hover .more-button {
    opacity: 1;
    transition: opacity .2s ease;
}
.more-button > img {
    width: .4em;
    margin-left: .5em;
}
.more-button > span {
    font-size: .9em;
    color: white;
    font-weight: 500;
}
.details {
    display: flex;
    margin-top: .8em;
}
.date-base {
    display: flex;
    align-items: center;
}
.date-base > img {
    width: 1.3em;
    margin-right: .5em;
}
.date-base > span {
    color: #14244B;
    font-weight: normal;
}
.population {
    display: flex;
    align-items: center;
    margin-left: 1em;
}
.population > img {
    width: 1.3em;
    margin-right: .5em;
}
.population > span {
    color: #14244B;
    font-weight: normal;
}

@media only screen and (max-width : 1680px) {
    .about-tours {
        padding: 3em 10em;
    }
    .tours-group {
        grid-template-columns: 19.7em 19.7em 19.7em 19.7em;
    }
}
@media only screen and (max-width : 1536px) {
    .about-tours {
        padding: 3em 5em;
    }
    .tours-group {
        grid-template-columns: 20em 20em 20em 20em;
    }
}
@media only screen and (max-width : 1366px) {
    .about-tours {
        padding: 3em 3em;
    }
    .tours-group {
        grid-template-columns: 18.3em 18.3em 18.3em 18.3em;
    }
}
@media only screen and (max-width: 1280px) {
    .tours-group {
        grid-template-columns: 18.3em 18.3em;
        grid-row-gap: 2em;
        justify-content: center;
    }
}
@media only screen and (max-width: 1280px) {
    .description {
        width: 100%;
    }
}
@media only screen and (max-width: 600px) {
    .about-tours {
        padding: 3em 2em;
    }
    .tours-group {
        grid-template-columns: 100%;
        grid-row-gap: 2em;
        justify-content: center;
    }
}
@media only screen and (max-width : 360px) {
    .title {
        font-size: 1.5em;
    }
    .description {
        font-size: .8em;
    }
}
</style>