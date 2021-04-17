<template>
    <div>
        <div class="page-header"></div>
        <div class="tour-page">

            <div class="symbol"><img src="@/assets/icon/helsinki-symbol.svg"></div>
            <div class="title"><a href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD%D0%BA%D0%B8"
               target="_blank" title="Википедия">Хельсинки</a>
            </div>
            <h2 class="description">Хельсинки – столица Финляндии, расположенная в южной части страны на полуострове в Финском заливе.
                На проспекте Маннергейма, центральной улице города, туристов привлекают Национальный музей,
                экспозиция которого посвящена истории Финляндии с каменного века до наших дней, монументальное здание парламента
                и музей современного искусства "Киасма". Над гаванью Хельсинки возвышается краснокирпичный Успенский собор с богатым декором.
            </h2>

            <div>
                <div style="display: flex; justify-content: center;">
                    <div class="read-more" @click="toggleForm" onclick="style.display='none'">
                        <span>Читать еще</span>
                        <img src="@/assets/icon/arrow-down.svg">
                    </div>
                </div>
                <h2 id="text" class="more-text" style="display: none">
                    Город основан 12 июня 1550 года шведским королём Густавом Васой, когда по королевскому указу несколько сот жителей города Порвоо обосновались на территории нынешнего городского района Арабиа. День подписания указа считается днём рождения города.
                    Однако оказалось, что место было выбрано неудачно — гавань была слишком мелкой, и в результате город был перенесён в район нынешней Рыночной площади (Кауппатори). Так возникло два населённых пункта: Гельсингфорс и Гаммельстадт (Гаммельстаден) — в буквальном переводе — старый город; но со временем они вновь слились в один город.
                    Вплоть до середины XVIII века Хельсинки оставался небольшим, сплошь деревянным городом, здесь нередко вспыхивали эпидемии чумы.
                    В 1748 году на островах близ Хельсинки шведами было начато строительство крепости Свеаборг, призванной защитить город с моря. В результате начался рост города; появляются первые каменные дома. Однако столицей шведской Финляндии оставался город Або.
                </h2>
            </div>

            <div class="details">
                <div class="date-base">
                    <img src="@/assets/icon/calendar.svg">
                    <span>Дата основания: 1550 г.</span>
                </div>
                <div class="population">
                    <img src="@/assets/icon/people.svg">
                    <span>Население: 574 579 чел.</span>
                </div>
            </div>

            <div class="tour-price">
                <div class="price-block" @click="feedbackForm">
                    <div class="prices">
                        <div class="price-title">Исторический тур в Хельсинки</div>
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
        name: "HelsinkiPage",
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
    background: url(../assets/images/helsinkiheader.webp);
    background-size: cover;
    background-position: center;
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
    background: url(../assets/images/helsinkihistorybutton.webp);
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