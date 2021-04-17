<template>
  <div class="memory-block" id="memory">
    <h1 class="title">Памятка для выезда за границу</h1>
    <h2 class="description">Перед поездой ознакомитесь с памяткой для туриста по выбранному вами направлению,
      она содержит необходимые сведения о порядке осуществления документов</h2>

    <div class="intour-container">
      <div class="intour-necessary">
          <div class="intour-title">Необходимое в поездке:</div>
          <div class="intour-card">
            <hooper :infiniteScroll="true" :wheelControl="false">
              <slide>
                <div class="trip-wrapper">
                  <div class="intour-img"><img src="@/assets/icon/passport.svg"></div>
                  <div class="trip-card">
                    <div class="trip-title">Заграничный паспорт</div>
                    <div class="trip-description">Срок действия которого кончается не ранее,
                      чем через 3 месяца после убытия из Финляндии</div>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="trip-wrapper">
                  <div class="intour-img"><img src="@/assets/icon/visa.svg"></div>
                  <div class="trip-card">
                    <div class="trip-title">Шенгенская виза</div>
                    <div class="trip-description">Для поездки на территорию Финляндии, российским
                      гражданам необходимо оформить Шенгенскую визу</div>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="trip-wrapper">
                  <div class="medical-img"><img src="@/assets/icon/medical.svg"></div>
                  <div class="trip-card">
                    <div class="trip-title">Медицинская страховка</div>
                    <div class="trip-description">Действие которой распространяется на страны
                      Шенгенского соглашения</div>
                  </div>
                </div>
              </slide>
              <hooper-progress slot="hooper-addons"></hooper-progress>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
              <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
          </div>
      </div>

      <div class="intour-kids">
        <div class="intour-title">Для выезда с детьми:</div>
        <div class="intour-card">
          <hooper :infiniteScroll="true" :wheelControl="false">
            <slide>
              <div class="trip-wrapper">
                <div class="trip-img"><img src="@/assets/icon/certificate.svg"></div>
                <div class="trip-card">
                  <div class="trip-title">Свидетельство о рождении</div>
                  <div class="trip-description">Свидетельство о рождении ребенка должно
                    содержать в себе сведения о гражданстве РФ
                    обоих родителей или одного из них</div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="trip-wrapper">
                <div class="trip-img"><img src="@/assets/icon/accept.svg"></div>
                <div class="trip-card">
                  <div class="trip-title">Разрешение родителей</div>
                  <div class="trip-description">Заверенное разрешение родителей на вывоз несовершеннолетних
                    (в случае, если дети едут в сопровождении руководителя)</div>
                </div>
              </div>
            </slide>
            <hooper-progress slot="hooper-addons"></hooper-progress>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { Hooper, Slide, Progress as HooperProgress, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        name: "HomeMemorytourist",
        components: {
            Hooper,
            Slide,
            HooperProgress,
            HooperNavigation,
            HooperPagination
        }
    }
</script>

<style scoped>
.memory-block {
  width: 100%;
  padding: 3em 5em;
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
  margin-bottom: 2em;
  text-align: center;
}
.intour-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.intour-img {
  width: 9em;
}
.medical-img {
  width: 6em;
}
.intour-necessary {
  display: block;
}
.intour-kids {
  display: block;
  margin-left: 2em;
}
.intour-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #14244B;
  margin-bottom: .5em;
}
.intour-card {
  width: 40em;
  background-color: white;
}
.trip-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em;
}
.trip-img {
  width: 11em;
}
.trip-card {
  margin-left: 1em;
}
.trip-title {
  font-size: 1.5em;
  color: #14244B;
}
.trip-description {
  color: #3F3F3F;
  font-weight: 500;
}
.hooper {
  outline: none;
}
.hooper-slide {

}
@media only screen and (max-width : 1680px) {
  .memory-block {
    padding: 3em 10em;
  }
}
@media only screen and (max-width : 1536px) {
  .memory-block {
    padding: 3em 5em;
  }
}
@media only screen and (max-width: 1280px) {
  .intour-container {
    display: block;
  }
  .intour-title {
    text-align: center;
  }
  .intour-card {
    display: block;
    margin: auto;
  }
  .intour-necessary {
    margin-bottom: 2em;
  }
  .intour-kids {
    margin-left: 0;
  }
}
@media only screen and (max-width: 600px) {
  .memory-block {
    padding: 3em 2em;
  }
  .description {
    width: 100%;
  }
  .intour-card {
    width: 100%;
  }
  .trip-title {
    text-align: center;
  }
  .trip-description {
    text-align: center;
  }
  .trip-wrapper {
    display: block;
  }
  .intour-img {
    width: 5em;
    display: block;
    margin: auto;
    margin-bottom: 1em;
  }
  .medical-img {
    width: 5em;
    display: block;
    margin: auto;
    margin-bottom: 1em;
  }
  .trip-img {
    width: 5em;
    display: block;
    margin: auto;
    margin-bottom: 1em;
  }
  .hooper {
    height: 19em;
  }
}
@media only screen and (max-width : 360px) {
  .title {
    font-size: 1.5em;
  }
  .description {
    font-size: .8em;
  }
  .intour-title {
    font-size: 1em;
  }
  .trip-title {
    font-size: 1em;
  }
  .trip-description {
    font-size: .8em;
  }
  .hooper {
    height: 20em;
  }
}
</style>