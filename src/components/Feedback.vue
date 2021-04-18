<template>
  <div id="feedback" style="display: none;">

    <div class="overlay">
      <form id="feedback-form" action="" method="POST" class="form-wrapper">

        <div style="display: block; width: 100%;">
          <div class="title-form">Бронирование тура</div>
          <div class="button-close">
            <span style="font-family: 'Gilroy'" class="closebtn" @click="feedbackForm">&times;</span>
          </div>

          <div class="select-name">
            <div>
              <div class="input-title">
                <div class="icon-name"><img src="@/assets/icon/person-name.svg"></div>
                <span>ФИО</span>
              </div>
              <div class="form-group">
                <input name="Имя" type="text" class="input-text" placeholder="Введите ФИО" required>
              </div>
            </div>
          </div>

          <div class="select-name">
            <div>
              <div class="input-title">
                <div class="title-icon"><img src="@/assets/icon/phone.svg"></div>
                <span>Телефон</span>
              </div>
              <div class="form-group">
                <masked-input v-model="phone" mask="\+\7 (111) 111 11-11" name="Телефон" type="text" class="input-text" placeholder="Номер телефона" required />
              </div>
            </div>
          </div>

          <div class="select-date">
          <div class="select-input">
            <div style="width: 80%">
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
          </div>

          <div class="select-input">
            <div>
              <div class="input-title">
                <div class="title-icon"><img src="@/assets/icon/people.svg"></div>
                <span>Количество человек</span>
              </div>
              <div class="form-group">
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

          <div class="button-container">
            <input type="submit" id="form-button" class="feedback-button" value="Забронировать">
            <span class="form-status" id="form-status"></span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
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

            var form = document.getElementById("feedback-form");
            var button = document.getElementById("form-button");
            var status = document.getElementById("form-status");

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                button.style = "display: none ";
                status.innerHTML = "Спасибо, мы скоро c Вами свяжемся!";
            }

            function error() {
                status.innerHTML = "Произошла ошибка при отправке!";
            }

            // handle the form submission event
            console.log(form);
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
    };
</script>

<style scoped>
  .button-close {
    transition: 0.3s;
    position: absolute;
    z-index: 100;
    right: 20px;
    top: 15px;
  }
  .closebtn {
    color: #14244b;
    font-weight: normal;
    font-size: 2em;
    line-height: 1em;
    cursor: pointer;
  }
  .closebtn:hover {
    color: rgba(20, 36, 75, 0.81);
  }
  .closebtn::selection {
    outline: none;
    background: transparent;
  }
  #feedback {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgba(0,0,0,.8);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .overlay {
    height: 100%;
    width: 35em;
    top: 15em;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    z-index: 100;
    position: fixed;
  }
  .form-wrapper {
    display: flex;
    padding: 50px 50px;
    background-color: white;
  }
  .title-form {
    font-size: 1.5em;
    font-weight: bold;
    color: #14244b;
    text-align: center;
    margin-bottom: 1em;
  }
  .select-date {
    display: flex;
    align-items: center;
  }
  .select-name {
    display: flex;
    margin-bottom: 1.5em;
  }
  .select-input {
    display: flex;
    align-items: center;
    margin-bottom: 1.5em;
  }
  .input-title {
    display: flex;
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
  .icon-name {
    width: .8em;
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
    outline: none;
  }
  .input-text {
    width: 20em;
    font-family: "Gilroy";
    color: #3F3F3F;
    font-weight: 500;
    font-size: 1em;
    border: none;
    outline: none;
    transition: border-bottom-color .1s ease;
  }
  .input-text {
    border-bottom: .1em solid #F1F1F4;
    transition: border-bottom-color .2s ease;
  }
  .input-text:focus {
    outline: none;
    border-bottom: .1em solid rgb(20, 36, 75);
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

  .button-container {
    display: flex;
    justify-content: center;
  }
  .feedback-button {
    width: 10em;
    height: 3.5em;
    text-align: center;
    color: white;
    font-size: 1.5em;
    font-family: "Gilroy";
    font-weight: normal;
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
  .form-status{
    margin-top: 15px;
    text-align: center;
    font-family: "Gilroy";
    font-weight: 500;
    color: #3F3F3F;
  }
  .overlay::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  .feedback-man > img {
    margin-left: 50px;
    width: 280px;
  }
  @media only screen and (max-width : 1680px) {
    .overlay {
      top: 5em;
    }
  }
  @media only screen and (max-width : 1536px) {
    .overlay {
      top: 3em;
    }
  }
  @media only screen and (max-width : 800px) {
    .overlay {
      top: 10em;
    }
  }
  @media only screen and (max-width : 600px) {
    .overlay {
      width: 100vw;
      top: 0;
    }
    .form-wrapper{
      width: 100%;
      height: 100vh;
      align-items: center;
    }
    .input-form {
      background-color: white;
    }
    .input-date {
      background-color: white;
    }
  }
  @media only screen and (max-width : 360px) {
    .input-text {
      font-size: .8em;
    }
    .input-title > span {
      font-size: 1em;
    }
    .feedback-button {
      font-size: 1em;
    }
  }
</style>