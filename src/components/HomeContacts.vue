<template>
  <div class="contacts-container" id="contact">
    <h1 class="title">Контакты</h1>
    <h2 class="description">Оставьте заявку на сайте и получите полную консультацию по выбору тура,
      дате и времени выезда, информацию о поездке, оформлению необходимых документов
    </h2>

    <div class="contacts-feedback">
      <div class="feedback-block">
        <div class="title-wrapper">
          <div class="feedback-title">Остались вопросы?</div>
          <div class="feedback-description">Заполните форму обратной связи и мы ответим
            на все интересующие вас вопросы</div>
        </div>

        <form class="input-wrapper" id="feedback-contact" action="https://formspree.io/mjvanlzz" method="POST">
            <div class="form-group">
              <input name="Имя" type="text" class="input-name" placeholder="Ваше имя" required>
            </div>
            <div class="form-group">
              <input name="Email" type="text" class="input-name" placeholder="Введите email" required>
            </div>
            <div class="form-group">
              <masked-input v-model="phone" mask="\+\7 (111) 111 11-11" name="Номер телефона" type="text" class="input-form" placeholder="Номер телефона" required />
              <div>
                <input type="submit" id="my-form-button" class="feedback-button" value="Отправить">
              </div>
              <span class="form-status" id="my-form-status"></span>
            </div>
        </form>

      </div>
      <div class="contact-block">
        <div class="contacts">
          <div class="contact-phone">
            <div class="phone" title="Позвонить"><a href="tel:+79818595479">+7 981 859 54 79</a><span> - Сергей</span></div>
            <div class="phone" title="Позвонить"><a href="tel:+79500452344">+7 950 045 23 44</a><span> - Элина</span></div>
          </div>
          <a class="contact-email" target="_blank" title="Email" href="mailto:verhotour@gmail.com">verhotour@gmail.com</a>
          <div class="social-contacts">
            <a title="WhatsApp" target="_blank" class="contact" href="https://api.whatsapp.com/send?phone=+79818595479&text=&source=&data=&app_absent="><img src="@/assets/icon/whatsapp.svg"></a>
            <a title="Instagram" target="_blank" class="contact" href="https://www.instagram.com/verkhovensky666/"><img src="@/assets/icon/instagram.svg"></a>
            <a title="ВКонтакте" target="_blank" class="contact-last" href="https://vk.com/id495000258"><img src="@/assets/icon/vkontakte.svg"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
        name: "HomeContacts",
        components: {
            MaskedInput
        },
        methods: {
            feedbackForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
        mounted() {

            // get the form elements defined in your form HTML above

            var form = document.getElementById("feedback-contact");
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
  .contacts-container {
    padding: 3em 15em;
    background-color: #F1F1F4;
  }
  .title {
    font-size: 2em;
    font-weight: bold;
    color: #14244B;
    text-align: center;
    margin-top: 0;
  }
  .description {
    font-size: 1em;
    font-weight: 500;
    color: #3F3F3F;
    width: 60%;
    margin: auto;
    text-align: center;
  }
  .contacts-feedback {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }
  .feedback-block {
    width: 30em;
  }
  .feedback-title {
    font-weight: bold;
    color: #14244B;
    font-size: 1.5em;
  }
  .feedback-description {
    font-weight: 500;
    color: #3F3F3F;
    width: 70%;
  }
  .contact-phone {
    margin-bottom: 2em;
  }
  .phone {
    font-weight: bold;
    font-size: 1.5em;
    color: #374DFF;
    transition: opacity .1s ease;
  }
  .phone:hover {
    opacity: 0.8;
    transition: opacity .2s ease;
  }
  .phone > a {
    text-decoration: none;
    color: #374DFF;
  }
  .phone > span {
    color: #14244B;
  }
  .contact-email {
    font-weight: bold;
    font-size: 1.5em;
    color: #14244B;
    margin: 1em 0;
    text-decoration: none;
    transition: opacity .1s ease;
  }
  .contact-email:hover {
    opacity: 0.8;
    transition: opacity .2s ease;
  }
  .social-contacts {
    display: flex;
    align-items: center;
    margin-top: 2em;
  }
  .contact {
    width: 3em;
    margin-right: 3em;
    transition: opacity .1s ease;
  }
  .contact:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease;
  }
  .contact-last {
    width: 3em;
    margin-right: 0;
    transition: opacity .1s ease;
  }
  .contact-last:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease;
  }

  .form-group {
    display: flex;
    margin-top: 1em;
  }
  .input-form {
    font-family: "Gilroy";
    width: 56.5%;
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
  .input-name {
    font-family: "Gilroy";
    width: 80%;
    height: 3em;
    padding: 0 1em;
    color: #3F3F3F;
    font-weight: 500;
    font-size: 1em;
    border: none;
  }
  .input-name:focus {
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
  @media only screen and (max-width : 1536px) {
    .description {
      width: 70%;
    }
  }
  @media only screen and (max-width : 1024px) {
    .description {
      width: 100%;
    }
    .contacts-container {
      padding: 3em 5em;
    }
  }
  @media only screen and (max-width : 800px) {
    .feedback-block {
      width: 25em;
    }
    .input-form {
      width: 51.5%;
    }
  }
  @media only screen and (max-width : 600px) {
    .contacts-container {
      padding: 3em 2em;
    }
    .contacts-feedback {
      display: block;
    }
    .feedback-block {
      display: block;
      margin: auto;
      width: 100%;
    }
    .feedback-description {
      text-align: center;
      display: block;
      margin: auto;
      width: 90%;
    }
    .feedback-title{
      text-align: center;
    }
    .input-form {
      width: 100%;
    }
    .input-name {
      width: 100%;
    }
    .contact-phone {
      margin-top: 2em;
    }
    .phone {
      text-align: center;
    }
    .contact-email {
      display: flex;
      justify-content: center;
    }
    .social-contacts {
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
    .feedback-title {
      font-size: 1.5em;
    }
    .feedback-description {
      font-size: .8em;
    }
    .phone {
      font-size: 1em;
    }
    .contact-email {
      font-size: 1em;
    }
    .contact {
      width: 1.5em;
    }
    .contact-last {
      width: 1.5em;
    }
  }
</style>