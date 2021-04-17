<template>
    <div>
        <div class="page-header"></div>
        <div class="tour-page">

            <div class="symbol"><img src="@/assets/icon/karelia-symbol.svg"></div>
            <div class="title"><a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B5%D0%BB%D0%B8%D1%8F"
                                  target="_blank" title="Википедия">Республика Карелия</a>
            </div>
            <h2 class="description">В X-XI вв. южная часть Карелии попала в сферу влияния древнерусского государства, стали возникать славянские поселения, было принято Христианство. В XVII в.
                Корела отошла к Швеции и была возвращена России только в 1721-ом году, после поражения шведов в Северной войне. Количество монастырей
                в то время быстро росло, особо могущественным стал Соловецкий монастырь. Северная война (1700-1721гг.) дала мощный толчок
                промышленному развитию Карелии. В этот период активно развивалась металлургия, было построено несколько новых заводов.
            </h2>

            <div>
                <div style="display: flex; justify-content: center;">
                    <div class="read-more" @click="toggleForm" onclick="style.display='none'">
                        <span>Читать еще</span>
                        <img src="@/assets/icon/arrow-down.svg">
                    </div>
                </div>
                <h2 id="text" class="more-text" style="display: none">
                    Образована в 1920 году как Карельская трудовая коммуна, позже преобразована в Автономную Карельскую Социалистическую Советскую Республику в составе РСФСР. В конце марта 1940 г. постановлением Верховного совета СССР переименована в Карело-Финскую ССР и выведена из состава РСФСР.
                    9 августа 1990 г. Верховный совет республики принял Декларацию о государственном суверенитете, а 13 ноября 1991 года установил её современное название — Республика Карелия.
                    Западная граница Карелии совпадает с государственной границей Российской Федерации и Финляндии. На востоке Карелия граничит с Архангельской областью, на юге — с Вологодской и Ленинградской областями, на севере — с Мурманской областью.
                </h2>
            </div>

            <div class="details">
                <div class="date-base">
                    <img src="@/assets/icon/calendar.svg">
                    <span>Упоминание в истории: 1143 г.</span>
                </div>
                <div class="population">
                    <img src="@/assets/icon/people.svg">
                    <span>Население: 609 439 чел.</span>
                </div>
            </div>

            <div class="tour-price" @click="feedbackForm">
                <div class="price-block">
                    <div class="prices">
                        <div class="price-title">Исторический тур в Карелию</div>
                        <div class="price">от 23999₽</div>
                    </div>
                    <div class="arrow-price"><img src="@/assets/icon/arrow-price.svg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "KareliaPage",
        data() {
            return {};
        },
        computed: {

        },
        methods: {
            toggleForm(){
                let form = document.getElementById("text");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
            feedbackForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
    .tour-page {
        padding: 3em 5em;
    }
    .page-header {
        width: 100%;
        height: 17em;
        background: url(../assets/images/kareliyaheader.webp);
        background-size: cover;
        background-position: bottom;
    }
    .symbol {
        display: flex;
        justify-content: center;
        margin-bottom: 1em;
    }
    .symbol > img {
        width: 7em;
    }
    .title {
        text-align: center;
    }
    .title > a{
        font-size: 2em;
        font-weight: bold;
        color: #14244B;
        text-decoration: none;
        transition: opacity .1s ease;
    }
    .title > a:hover {
        cursor: pointer;
        opacity: 0.9;
        transition: opacity .2s ease;
    }
    .description {
        font-size: 1em;
        font-weight: 500;
        color: #3F3F3F;
        width: 70%;
        margin: auto;
        text-align: center;
        margin-top: .8em;
    }
    .read-more > span {
        font-size: 1em;
        font-weight: 500;
        color: #919191;
        width: 70%;
        margin: auto;
        text-align: center;
        margin-right: .5em;
        cursor: pointer;
    }
    .read-more > img {
        width: .7em;
    }
    .more-text {
        font-size: 1em;
        font-weight: 500;
        color: #3F3F3F;
        width: 70%;
        margin: auto;
        text-align: center;
    }
    .details {
        display: flex;
        justify-content: center;
        margin-top: 2em;
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
    .tour-price {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
    }
    .price-block {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 3em;
        width: 30em;
        height: 10em;
        background: url(../assets/images/kareliahistorybutton.webp);
        background-size: cover;
        background-position: center;
        cursor: pointer;
        transition: all .1s ease;
    }
    .price-block:hover {
        transition: all .2s ease;
        transform: scale(1.01);
    }
    .price-title {
        font-size: 1.5em;
        color: white;
    }
    .price {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        border-bottom-left-radius: 0;
        margin-top: .5em;
        font-size: 1.5em;
        color: white;
        width: 6em;
        height: 1.5em;
        background-color: #374DFF;
    }
    .arrow-price > img {
        width: 5em;
        opacity: 0.5;
        transition: opacity .1s ease;
    }
    .price-block:hover .arrow-price > img {
        opacity: 1;
        transition: opacity .2s ease;
    }
    @media only screen and (max-width : 800px) {
        .description {
            width: 100%;
        }
        .more-text {
            width: 100%;
        }
    }
    @media only screen and (max-width : 600px) {
        .tour-page {
            padding: 3em 2em;
        }
        .details {
            display: block;
        }
        .date-base {
            justify-content: center;
        }
        .population {
            justify-content: center;
            margin-left: 0;
            margin-top: 1em;
        }
        .price-block {
            padding: 0 2em;
        }
    }
    @media only screen and (max-width : 360px) {
        .title > a {
            font-size: 1.5em;
        }
        .description {
            font-size: .8em;
        }
        .more-text {
            font-size: .8em;
        }
        .read-more > span {
            font-size: .8em;
        }
        .date-base > span {
            font-size: .8em;
        }
        .population > span {
            font-size: .8em;
        }
        .price-title {
            font-size: 1em;
        }
        .price {
            font-size: .8em;
        }
        .arrow-price > img {
            width: 3em;
        }
        .price-block {
            height: 7em;
        }
    }
</style>