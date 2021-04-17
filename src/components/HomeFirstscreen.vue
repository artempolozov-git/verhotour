<template>
    <div>
        <div class="screen-background">
            <div class="screen-filling">
                <h1 class="title">Всем добра!<br>
                    С вами на связи компания VerhoTour!</h1>
                <h2 class="description">Туристическая компания с авторским подходом к ведению экскурсий.
                    Отправьтесь в незабываемое путешествие! Примите участие в уникальном
                    квест-туре и насладитесь яркими впечатлениями от поездки!</h2>
                <firstscreen-input></firstscreen-input>
            </div>
        </div>

        <div class="offer-stroke">
            <div class="offers">
                <div class="offer-icon"><img src="@/assets/icon/theatre.svg"></div>
                <span>Квесты проходят<br>в театральном формате</span>
            </div>
            <div class="offers">
                <div class="offer-icon"><img src="@/assets/icon/bag.svg"></div>
                <span>Возможность посетить<br>гипермаркеты Финляндии</span>
            </div>
            <div class="offers">
                <div class="breakfast-icon"><img src="@/assets/icon/breakfast.svg"></div>
                <span>Завтраки перед началом<br>каждого тура</span>
            </div>
            <div class="offers-last">
                <div class="offer-icon"><img src="@/assets/icon/photo.svg"></div>
                <span>Фото и видеосъемка<br>тура на память</span>
            </div>
        </div>

        <div class="offer-stroke-media">
            <div class="offers">
                <div class="offer-icon"><img src="@/assets/icon/theatre.svg"></div>
                <span>Театральный формат</span>
            </div>
            <div class="offers">
                <div class="offer-icon"><img src="@/assets/icon/bag.svg"></div>
                <span>Шопинг в Финляндии</span>
            </div>
            <div class="offers">
                <div class="breakfast-icon"><img src="@/assets/icon/breakfast.svg"></div>
                <span>Бесплатные завтраки</span>
            </div>
            <div class="offers-last">
                <div class="offer-icon"><img src="@/assets/icon/photo.svg"></div>
                <span>Фото и видеосъемка</span>
            </div>
        </div>

    </div>
</template>

<script>
    import FirstscreenInput from "@/components/FirstscreenInput";
    export default {
        name: "HomeFirstScreen",
        components: {FirstscreenInput}
    }
</script>

<style scoped>
.screen-background {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5em 15em;
    background: url(../assets/images/background.webp);
    background-size: cover;
    background-position: center;
}
.title {
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
    color: white;
}
.description {
    margin: auto;
    margin-top: 15px;
    width: 60%;
    font-size: 1.3em;
    font-weight: 500;
    text-align: center;
    color: white;
}
.offer-stroke {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em 2em;
    background-color: #F1F1F4;
}
.offer-stroke-media {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 2em 2em;
    background-color: #F1F1F4;
}
.offers {
    display: flex;
    align-items: center;
    margin-right: 4em;
}
.offers> span {
    color: #14244B;
    font-size: 1em;
    font-weight: normal;
}
.offers-last {
    display: flex;
    align-items: center;
}
.offers-last> span {
    color: #14244B;
    font-size: 1em;
    font-weight: normal;
}
.offer-icon {
    width: 4em;
    margin-right: .8em;
}
.breakfast-icon {
    width: 5em;
    margin-right: .8em;
}
@media only screen and (max-width : 1680px) {

}
@media only screen and (max-width : 1536px) {
    .screen-background {
        padding: 5em 5em;
    }
}
@media only screen and (max-width : 1366px) {

}
@media only screen and (max-width : 1280px) {
    .description {
        width: 70%;
    }
}
@media only screen and (max-width : 1024px) {
    .offers {
        display: block;
        text-align: center;
        margin-right: 3em;
    }
    .offers-last {
        display: block;
        text-align: center;
    }
    .offer-icon {
        width: 3em;
        margin-right: 0;
        margin: auto;
    }
    .breakfast-icon {
        width: 3.5em;
        margin-right: 0;
        margin: auto;
    }
}
@media only screen and (max-width : 800px) {
    .description {
        width: 90%;
    }
    .screen-background {
        height: 580px;
    }
}
@media only screen and (max-width : 600px) {
    .screen-background {
        height: 400px;
        padding: 2em 0em;
    }
    .title {
        font-size: 1.5em;
    }
    .description {
        font-size: 1em;
    }
    .offers {
        margin-right: 1.5em;
    }
    .offer-stroke {
        display: none;
    }
    .offer-stroke-media {
        display: flex;
    }
}
@media only screen and (max-width : 360px) {
    .title {
        font-size: 1em;
    }
    .description {
        font-size: .8em;
    }
    .offer-stroke-media {
        display: none;
    }
}
</style>