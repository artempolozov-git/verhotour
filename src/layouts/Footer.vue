<template>
    <div class="footer">
        <div class="feedback-block">
            <div title="Наверх" class="logotype" v-scroll-to="{el:'#top', offset: -130}"><img src="@/assets/icon/logotype-white.svg"></div>

            <div class="send-contact">
                <div class="form-text">Оставьте свои контакты<br>и мы с Вами свяжемся!</div>
                <form class="form-group" id="feedback-number" action="https://formspree.io/mjvanlzz" method="POST">
                    <masked-input v-model="phone" mask="\+\7 (111) 111 11-11" name="Обратная связь по номеру телефона" type="text" class="input-form" placeholder="Номер телефона" required />
                    <div>
                        <input type="submit" id="my-form-button" class="feedback-button" value="Отправить">
                    </div>
                    <span class="form-status" id="my-form-status"></span>
                </form>
            </div>

        </div>

        <div>
            <div class="links-block">
                <div>
                    <div class="links-title">Навигация по сайту:</div>
                    <div class="link" v-scroll-to="{el:'#about-tours', offset: -100}">О турах</div>
                    <div class="link" v-scroll-to="{el:'#tour-price', offset: -100}">Забронировать тур</div>
                </div>
                <div class="second-block">
                    <div class="link-second" v-scroll-to="{el:'#hostel', offset: -120}">Проживание в отеле</div>
                    <div class="link" v-scroll-to="{el:'#memory', offset: -90}">Памятка туриста</div>
                </div>
                <div class="second-block">
                    <div class="link-second" v-scroll-to="{el:'#photo', offset: -100}">Фотогалерея</div>
                    <div class="link" v-scroll-to="{el:'#ourteam', offset: -130}">Наша команда</div>
                </div>
                <div class="second-block">
                    <div class="link-second" v-scroll-to="{el:'#contact', offset: -100}">Контакты</div>
                </div>
            </div>

            <div class="links-contacts">
                <div class="contact">
                    <img src="@/assets/icon/phone-white.svg">
                    <span>+7 981 859 54 79 / +7 950 045 23 44</span>
                </div>
                <a class="contact-social" title="Instagram" target="_blank" href="https://www.instagram.com/verkhovensky666/">
                    <img src="@/assets/icon/instagram-white.svg">
                    <span>Instagram</span>
                </a>
                <a class="contact-social" title="ВКонтакте" target="_blank" href="https://vk.com/id495000258">
                    <img src="@/assets/icon/vkontakte-white.svg">
                    <span>ВКонтакте</span>
                </a>
                <a class="contact-social" title="Booking.com" target="_blank" href="https://www.booking.com/hotel/ru/biglandhostel.ru.html">
                    <img src="@/assets/icon/booking-white.svg">
                    <span>Bigland House</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
        name: "Footer",
        components: {
            MaskedInput
        },
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

            var form = document.getElementById("feedback-number");
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
.footer {
    display: flex;
    justify-content: center;
    padding: 4em 6em;
    background-color: #14244B;
}
.logotype {
    width: 13em;
    cursor: pointer;
    transition: opacity .1s ease;
}
.logotype:hover {
    opacity: 0.9;
    transition: opacity .2s ease;
}
.form-text {
    color: white;
    font-weight: 500;
    margin-top: 1em;
}
.form-group {
    display: flex;
    margin-top: 1em;
}
.input-form {
    font-family: "Gilroy";
    height: 3em;
    padding: 0 1em;
    color: #3F3F3F;
    font-weight: 500;
    font-size: 1em;
    border: none;
}
.input-form:focus {
    outline: none;
}
.feedback-button {
    text-align: center;
    color: white;
    height: 3em;
    padding: 0 1em;
    font-family: "Gilroy";
    font-weight: normal;
    font-size: 1em;
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
.links-title {
    font-weight: normal;
    color: #4567ff;
}
.links-block {
    display: flex;
    margin-left: 5em;
}
.link {
    font-weight: normal;
    color: white;
    margin-top: .5em;
    cursor: pointer;
    transition: opacity .1s ease;
}
.link:hover {
    opacity: 0.7;
    transition: opacity .2s ease;
}
.second-block {
    margin-left: 4em;
}
.link-second {
    font-weight: normal;
    color: white;
    cursor: pointer;
    transition: opacity .1s ease;
}
.link-second:hover {
    opacity: 0.7;
    transition: opacity .2s ease;
}
.links-contacts {
    display: flex;
    margin-left: 5em;
    margin-top: 3em;
}
.contact {
    display: flex;
    align-items: center;
}
.contact > span {
    color: white;
    font-weight: normal;
}
.contact > img {
    width: 1.5em;
    margin-right: .5em;
}
.contact-social {
    display: flex;
    align-items: center;
    margin-left: 3em;
    cursor: pointer;
    transition: opacity .1s ease;
    text-decoration: none;
}
.contact-social > span {
    color: white;
    font-weight: normal;
}
.contact-social > img {
    width: 1.5em;
    margin-right: .5em;
}
.contact-social:hover {
    opacity: 0.7;
    transition: opacity .2s ease;
}
@media only screen and (max-width : 1366px) {
    .footer {
        padding: 4em 3em;
    }
}
@media only screen and (max-width: 1280px) {
    .links-contacts {
        display: none;
    }
}
@media only screen and (max-width: 1024px) {
    .links-block {
        display: block;
    }
    .second-block {
        margin-left: 0;
    }
}
@media only screen and (max-width: 600px) {
    .footer {
        display: block;
        padding: 3em 2em;
    }
    .links-block {
        display: none;
    }
    .form-text {
        text-align: center;
    }
    .form-group {
        justify-content: center;
    }
    .logotype {
        display: block;
        margin: auto;
        margin-bottom: 2em;
    }
}
@media only screen and (max-width: 360px) {
    .logotype {
        width: 9em;
    }
    .form-text {
        font-size: .8em;
    }
    .input-form {
        font-size: .8em;
    }
    .feedback-button {
        font-size: .8em;
    }
}
</style>