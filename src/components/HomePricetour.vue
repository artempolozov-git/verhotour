<template>
    <div class="tour-catalog" id="tour-price">
        <h1 class="title">Забронировать тур</h1>
        <h2 class="description">В наших турах вы получите возможность не только познакомиться с историей и экскурсионными объектами,
            но и стать частью истории в увлекательном квесте, во взаимодействии с историческими персонажами,
            поучаствовать в кинохронике и по окончании тура получить памятные видео и фотоснимки!
        </h2>

        <div class="card-tours">
            <h1 class="card-title">Авторские квест-туры в Финляндию</h1>
            <h2 class="card-description">В Авторском квест-туре вы сможете не только посетить достопримечательности Финляндиии,
                узнать об их истории и фактах, но и поучаствовать в реальном квесте, примерить на себя
                шляпу актера, а может быть и детектива! Это новый формат в сфере туризма!
            </h2>
        </div>
        <div class="tour-prices">
            <quest-tours :image="card.image" :background="card.background" :price="card.price" :title="card.title" v-for="(card, questTours) in quest" :key="questTours"></quest-tours>
        </div>

        <div class="card-tours">
            <h1 class="card-title">Экскурсии по Финляндии и Карелии</h1>
            <h2 class="card-description">Свобода от обыденных мыслей, погружение в историю и культуру Финляндии,
                прогулки на свежем воздухе Карелии, приключения нового формата ждут вас в нашем историческом туре!
                Получите возможность сполна насладиться необыкновенным путешествием!
            </h2>
        </div>
        <div class="tour-prices">
            <history-tours :image="card.image" :background="card.background" :price="card.price" :title="card.title" v-for="(card, historyTours) in history" :key="historyTours"></history-tours>
        </div>
    </div>
</template>

<script>
    import QuestTours from "@/components/QuestTours";
    import HistoryTours from "@/components/HistoryTours";
    export default {
        name: "HomeTourprice",
        components: {
            HistoryTours,
            QuestTours
        },
        data () {
            return {
                quest: [
                    {
                      title:"Однодневный квест-тур в Порвоо",
                      price:"от 21999₽",
                      background: require('../assets/images/questpriceporvoo.webp'),
                      image: require('../assets/icon/porvoo-symbol.svg'),
                    },
                    {
                      title:"Однодневный квест-тур в Савонлинну",
                      price:"от 33999₽",
                      background: require('../assets/images/questpricesavonlinna.webp'),
                      image: require('../assets/icon/savonlinna-symbol.svg'),
                    },
                ],
                history: [
                    {
                        title:"Однодневный исторический тур в Хельсинки",
                        price:"от 25999₽",
                        background: require('../assets/images/historypricehelsinki.webp'),
                        image: require('../assets/icon/helsinki-symbol.svg'),
                    },
                    {
                        title:"Однодневный исторический тур в Порвоо",
                        price:"от 33999₽",
                        background: require('../assets/images/historypriceporvoo.webp'),
                        image: require('../assets/icon/porvoo-symbol.svg'),
                    },
                    {
                        title:"Однодневный исторический тур в Савонлинну",
                        price:"от 31999₽",
                        background: require('../assets/images/historypricesavonlinna.webp'),
                        image: require('../assets/icon/savonlinna-symbol.svg'),
                    },
                    {
                        title:"Однодневный исторический тур в Карелию",
                        price:"от 21999₽",
                        background: require('../assets/images/historypricekarelia.webp'),
                        image: require('../assets/icon/karelia-symbol.svg'),
                    },
                ],
            }
        }
    }
</script>

<style scoped>
.tour-catalog {
    padding: 3em 15em;
    background-color: #F1F1F4;
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
.card-title {
    font-size: 1.5em;
    font-weight: bold;
    color: #14244B;
    margin-top: 2em;
}
.card-description {
    font-size: 1em;
    font-weight: 500;
    color: #3F3F3F;
    width: 60%;
}
.tour-prices {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 20em 20em 20em 20em;
    grid-template-rows: 1fr;
    grid-column-gap: 2em;
    grid-row-gap: 0px;
}

@media only screen and (max-width : 1680px) {
    .tour-catalog {
        padding: 3em 10em;
    }
    .tour-prices {;
        grid-template-columns: 19.7em 19.7em 19.7em 19.7em;
    }
}
@media only screen and (max-width : 1536px) {
    .tour-catalog {
        padding: 3em 5em;
    }
    .tour-prices {;
        grid-template-columns: 20em 20em 20em 20em;
    }
}
@media only screen and (max-width : 1366px) {
    .tour-catalog {
        padding: 3em 3em;
    }
    .tour-prices {;
        grid-template-columns: 18.3em 18.3em 18.3em 18.3em;
    }
}
@media only screen and (max-width: 1280px) {
    .tour-prices {
        grid-template-columns: 18.3em 18.3em;
        grid-row-gap: 2em;
        justify-content: center;
    }
    .card-tours {
        text-align: center;
    }
    .card-description {
        margin: auto;
        margin-top: 1em;
    }
}
@media only screen and (max-width : 800px) {
    .description {
        width: 100%;
    }
    .card-description {
        width: 100%;
    }
}
@media only screen and (max-width : 600px) {
    .tour-catalog {
        padding: 3em 2em;
    }
    .tour-prices {
        grid-template-columns: 100%;
        grid-row-gap: 2em;
    }
}
@media only screen and (max-width : 360px) {
    .title {
        font-size: 1.5em;
    }
    .description {
        font-size: .8em;
    }
    .card-title {
        font-size: 1.5em;
    }
    .card-description {
        font-size: .8em;
    }
}
</style>