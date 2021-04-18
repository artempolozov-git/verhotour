<template>
    <div>
    <form class="feedback-input" action="https://formspree.io/mjvanlzz" method="POST" id="feedback-stroke">
        <div class="select-input">
            <div>
                <div class="input-title">
                    <div class="title-icon"><img src="@/assets/icon/tour.svg"></div>
                    <span>Выберите тур</span>
                </div>
                <div class="form-group">
                    <select name="Тур" class="input-form">
                        <option value="select">Выбрать тур</option>
                        <option value="Квест-тур в Порвоо">Квест-тур в Порвоо</option>
                        <option value="Квест-тур в Савонлинну">Квест-тур в Савонлинну</option>
                        <option value="Исторический тур в Хельсинки">Исторический тур в Хельсинки</option>
                        <option value="Исторический тур в Порвоо">Исторический тур в Порвоо</option>
                        <option value="Исторический тур в Савонлинну">Исторический тур в Савонлинну</option>
                        <option value="Исторический тур в Карелию">Исторический тур в Карелию</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="select-input">
            <div>
                <div class="input-title">
                    <div class="title-icon"><img src="@/assets/icon/calendar.svg"></div>
                    <span>Выберите дату</span>
                </div>
                <div class="form-group">
                    <label for="date" class="form-label"></label>
                        <input class="input-date" type="date" id="start" name="Дата" value="date" min="2021-01-01" max="2023-12-31">
                </div>
            </div>
        </div>

        <div class="select-input">
            <div>
                <div class="input-title">
                    <div class="title-icon"><img src="@/assets/icon/people.svg"></div>
                    <span>Количество человек</span>
                </div>
                <div class="form-group">
                    <label for="people" class="form-label"></label>
                    <select name="Количество человек" class="input-form">
                        <option value="select">Указать количество</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="от 5 - скидка 5%">от 5 - скидка 5%</option>
                        <option value="от 10 - скидка 10%">от 10 - скидка 10%</option>
                        <option value="от 15 - скидка 15%">от 15 - скидка 15%</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="select-contact">
            <div>
                <div class="input-title">
                    <div class="title-icon"><img src="@/assets/icon/email.svg"></div>
                    <span>Контакты</span>
                </div>
                <div class="form-group">
                    <input name="Email" type="text" class="input-form" placeholder="Введите email" required>
                </div>
            </div>
        </div>

        <input type="submit" id="my-form-button" class="feedback-button" value="Подобрать тур">
    </form>

    <div class="media-button" @click="feedbackForm">Забронировать тур</div>
    </div>
</template>

<script>
    export default {
        name: "FirstscreenInput",
        data() {
            return {};
        },
        computed: {

        },
        methods: {
            feedbackForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
        mounted() {

            // get the form elements defined in your form HTML above

            var form = document.getElementById("feedback-stroke");
            var button = document.getElementById("my-form-button");

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                button.style = "display: block";
                status.innerHTML = "Спасибо, мы скоро c Вами свяжемся!";
            }

            function error() {
                status.innerHTML = "Произошла ошибка при отправке!";
            }

            // handle the form submission event
            console.log(form)
            form.addEventListener("submit", function(ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            });


            // helper function for sending an AJAX request

            function ajax(method, url, data, success, error) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState !== XMLHttpRequest.DONE) return;
                    if (xhr.status === 200) {
                        success(xhr.response, xhr.responseType);
                    } else {
                        error(xhr.status, xhr.response, xhr.responseType);
                    }
                };
                xhr.send(data);
            }
        }
    }
</script>

<style scoped>
    .feedback-input {
        display: flex;
        margin-top: 8em;
    }
    .select-input {
        display: flex;
        align-items: center;
        width: 20%;
        padding: 1.5em 2em;
        background-color: white;
        border-right: .2em solid #F1F1F4
    }
    .select-contact {
        display: flex;
        align-items: center;
        width: 20%;
        padding: 1.5em 2em;
        background-color: white;
    }
    .input-title {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
    }
    .input-title > span {
        color: #14244B;
        font-size: 1.1em;
        font-weight: bold;
    }
    .title-icon {
        width: 1.3em;
        margin-right: .5em;
    }

    .form-group {
        display: flex;
        align-items: center;
    }
    .input-form {
        width: 100%;
        font-family: "Gilroy";
        color: #3F3F3F;
        font-weight: 500;
        font-size: 1em;
        border: none;
    }
    .input-form:focus {
        outline: none;
    }
    .input-date {
        font-family: "Gilroy";
        color: #3F3F3F;
        font-weight: 500;
        font-size: 1em;
        border: none;
    }
    .input-date:focus {
        outline: none;
    }

    .feedback-button {
        width: 20%;
        color: white;
        font-family: "Gilroy";
        font-weight: normal;
        font-size: 1.5em;
        background-color: #374DFF;
        border: none;
        transition: background-color .1s ease;
    }
    .feedback-button:hover {
        transition: background-color .2s ease;
        cursor: pointer;
        background-color: #4567ff;
    }
    .feedback-button::selection {
        outline: none;
        background: transparent;
    }
    .feedback-button:focus {
        outline: none;
    }
    .media-button {
        display: none;
    }
    @media only screen and (max-width : 1366px) {
        .select-input {
            padding: 1em 1.5em;
        }
        .select-contact {
            padding: 1.5em 1.5em;
        }
    }
    @media only screen and (max-width : 1024px) {
        .select-contact {
            display: none;
        }
        .select-input {
            width: 25%;
        }
        .feedback-button {
            width: 25%;
        }
    }
    @media only screen and (max-width : 800px) {
        .feedback-input {
            display: none;
        }
        .media-button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            margin-top: 5em;
            width: 12em;
            height: 5em;
            background-color: #374DFF;
            color: white;
        }
    }
    @media only screen and (max-width : 768px) {
        .media-button {
            margin-top: 3em;
        }
    }
    @media only screen and (max-width : 600px) {
        .media-button {
            margin-top: 3em;
        }
        .media-button {
            width: 12em;
            height: 5em;
            font-size: 1.1em;
        }
    }
    @media only screen and (max-width : 360px) {
        .media-button {
            font-size: .8em;
        }
    }
</style>