<template>
    <div class="subscription-container">
      <div class="sub-wrapper">

        <div class="tours">
          <h1 class="sub-title">Любите путешествовать? Подписывайтесь!</h1>
          <h2 class="sub-description">Подпишитесь на нашу рассылку, чтобы быть в курсе новостей о новых турах!</h2>

          <form class="form-group" id="feedback-subscription" action="https://formspree.io/mjvanlzz" method="POST">
            <input name="Подписка на рассылку о турах" type="text" class="input-form" placeholder="Введите email" required>
            <div>
              <input type="submit" id="my-form-button" class="feedback-button" value="Подписаться">
            </div>
          </form>

          <div class="contacts">
            <a title="WhatsApp" target="_blank" class="contact" href="https://api.whatsapp.com/send?phone=+79818595479&text=&source=&data=&app_absent="><img src="@/assets/icon/whatsapp-white.svg"></a>
            <a title="Instagram" target="_blank" class="contact" href="https://www.instagram.com/verkhovensky666/"><img src="@/assets/icon/instagram-white.svg"></a>
            <a title="ВКонтакте" target="_blank" class="contact-last" href="https://vk.com/id495000258"><img src="@/assets/icon/vkontakte-white.svg"></a>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeSubscription",
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

            var form = document.getElementById("feedback-subscription");
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
.subscription-container {
  padding: 3em 25em;
}
.sub-wrapper {
  display: flex;
  align-items: center;
  height: 20em;
  padding: 3em 3em;
  background: url(../assets/images/subbackground.webp);
  background-size: cover;
  background-position: center;
}
.sub-title {
  font-size: 2em;
  font-weight: bold;
  color: white;
  margin: 0;
}
.sub-description {
  font-size: 1em;
  font-weight: 500;
  color: white;
  margin: 0;
}
.form-group {
  display: flex;
  margin-top: 2em;
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
.contacts {
  display: flex;
  margin-top: 2em;
  align-items: center;
}
.contact {
  width: 2em;
  margin-right: 3em;
  transition: opacity .1s ease;
}
.contact:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: opacity .2s ease;
}
.contact-last {
  width: 2em;
  margin-right: 0;
  transition: opacity .1s ease;
}
.contact-last:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: opacity .2s ease;
}
@media only screen and (max-width : 1680px) {
  .subscription-container {
    padding: 3em 20em;
  }
}
@media only screen and (max-width : 1536px) {
  .subscription-container {
    padding: 3em 15em;
  }
}
@media only screen and (max-width : 1024px) {
  .subscription-container {
    padding: 3em 5em;
  }
}
@media only screen and (max-width: 600px) {
  .subscription-container {
    padding: 3em 2em;
  }
  .sub-wrapper {
    padding: 2em 2em;
  }
  .sub-title {
    font-size: 1.5em;
    margin-bottom: .5em;
  }
}
@media only screen and (max-width : 360px) {
  .subscription-container {
    display: none;
  }
}
</style>