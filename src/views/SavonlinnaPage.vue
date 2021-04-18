<template>
    <div>
        <div class="page-header"></div>
        <div class="tour-page">

            <div class="symbol"><img src="@/assets/icon/savonlinna-symbol.svg"></div>
            <div class="title">
                <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B2%D0%BE%D0%BD%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0"
                   target="_blank" title="Википедия">Савонлинна</a>
            </div>
            <h2 class="description">Савонлинна — одно из древнейших поселений в Финляндии. История города тесно связана с крепостью Олавинлинна.
                Она была заложена шведами в 1475 году и названа Нюслотт. Тогда же вокруг крепости возникло одноимённое поселение.
                В 1534 году Олавинлинна становится центром провинции Саво и в ней проводятся масштабные работы
                по обновлению укреплений. В 1639 году Нюслотт получил права города.
            </h2>

            <div>
                <div style="display: flex; justify-content: center;">
                    <div class="read-more" @click="toggleForm" onclick="style.display='none'">
                        <span>Читать еще</span>
                        <img src="@/assets/icon/arrow-down.svg">
                    </div>
                </div>
                <h2 id="text" class="more-text" style="display: none">
                    Во время Северной войны 29 июля 1714 года Нюслотт был взят русскими войсками. Однако по условиям Ништадтского мира в 1721 году его вернули Швеции.
                    В ходе русско-шведской войны 1741—1743 годов, 7 августа 1742 года, город был снова взят русскими войсками.
                    В 1743 году был заключен Абоский мир, по которому крепость отошла к России вместе с южной частью района Саво (Старая Финляндия).
                    Завоёванные территории были присоединены к Выборгской провинции, которая стала Выборгской губернией, выделившись из Санкт-Петербургской губернии.
                </h2>
            </div>

            <div class="details">
                <div class="date-base">
                    <img src="@/assets/icon/calendar.svg">
                    <span>Дата основания: 1475 г.</span>
                </div>
                <div class="population">
                    <img src="@/assets/icon/people.svg">
                    <span>Население: 32 872 чел.</span>
                </div>
            </div>

            <div class="price-container">
                <div class="tour-price" @click="feedbackForm">
                    <div class="price-block">
                        <div class="prices">
                            <div class="price-title">Однодневный квест-тур в Савонлинну</div>
                            <div class="price">от 23999₽</div>
                        </div>
                        <div class="arrow-price"><img src="@/assets/icon/arrow-price.svg"></div>
                    </div>
                </div>
                <div class="tour-price-right" @click="feedbackForm">
                    <div class="price-block-two">
                        <div class="prices">
                            <div class="price-title">Исторический тур в Савонлинну</div>
                            <div class="price">от 23999₽</div>
                        </div>
                        <div class="arrow-price"><img src="@/assets/icon/arrow-price.svg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SavonlinnaPage",
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
        background: url(../assets/images/savonlinnaheader.webp);
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
    .price-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
    }
    .tour-price {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tour-price-right {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 3em;
    }
    .price-block {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 3em;
        width: 30em;
        height: 10em;
        background: url(../assets/images/savonlinnaquestbutton.webp);
        background-size: cover;
        background-position: center;
        cursor: pointer;
        transition: all .1s ease;
    }
    .price-block:hover {
        transition: all .2s ease;
        transform: scale(1.01);
    }
    .price-block-two {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 3em;
        width: 30em;
        height: 10em;
        background: url(../assets/images/savonlinnahistorybutton.webp);
        background-size: cover;
        background-position: center;
        cursor: pointer;
    }
    .price-block-two:hover {
        transition: all .1s ease;
        transform: scale(1.01);
    }
    .price-title {
        font-size: 1.5em;
        color: white;
        width: 90%;
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
    .price-block-two:hover .arrow-price > img {
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
        .price-container {
            display: block;
        }
        .tour-price-right {
            margin-top: 2em;
            margin-left: 0;
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
        .price-title {
            width: 100%;
        }
        .price-block {
            padding: 0 2em;
        }
        .price-block-two {
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
        .price-block-two {
            height: 7em;
        }
    }
</style>