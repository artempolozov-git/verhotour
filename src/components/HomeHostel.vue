<template>
  <div class="hostel-container" id="hostel">
    <h1 class="title">Проживание в отеле</h1>
    <h2 class="description">Для гостей Санкт-Петербурга мы предлагаем проживание в апарт-отеле
      в самом центре города у наших партнеров Bigland House!
    </h2>

      <div class="apartments-block">
        <a class="main-container" href="https://www.booking.com/hotel/ru/biglandhostel.ru.html" target="_blank">
          <div>
            <div class="address">
              <img src="@/assets/icon/pin-white.svg">
              <span>ул. Большая Морская, 21</span>
            </div>
            <div class="rating">
              <img src="@/assets/icon/rating.svg">
              <div class="booking-link"><a href="https://www.booking.com/hotel/ru/biglandhostel.ru.html"
                      target="_blank" title="Booking.com">Рейтинг 9.2 на Booking.com</a></div>
            </div>
            <div class="contacts">
              <a title="Instagram" target="_blank" class="contact" href="https://www.instagram.com/biglandhouse/"><img src="@/assets/icon/instagram-white.svg"></a>
              <a title="ВКонтакте" target="_blank" class="contact" href="https://vk.com/biglandhouse"><img src="@/assets/icon/vkontakte-white.svg"></a>
            </div>
          </div>
        </a>
        <div class="apartments"></div>
        <div class="apartments-hostel"></div>
        <div class="hostel-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.8298813995864!2d30.311911516005935!3d59.934964981874835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696311b2a2227e7%3A0x268689a25db139f5!2z0JHQvtC70YzRiNCw0Y8g0JzQvtGA0YHQutCw0Y8g0YPQuy4sIDIxLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1614168858228!5m2!1sru!2sru" width="100%" height="300px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "HomeHostel"
    }
</script>

<style scoped>
  .hostel-container {
    padding: 0 15em 3em;
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
    width: 40%;
    margin: auto;
    text-align: center;
  }
  .apartments-block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    margin-top: 2em;
  }
  .main-container {
    display: flex;
    align-items: flex-end;
    grid-area: 1 / 1 / 3 / 2;
    height: auto;
    padding: 2em;
    width: 30em;
    background: url(../assets/images/hostel-main.webp);
    background-size: cover;
    background-position: center;
  }
  .main-container:hover {
    text-decoration: none;
  }
  .address {
    display: flex;
    align-items: center;
  }
  .address > span {
    color: white;
    font-weight: normal;
  }
  .address > img {
    width: .9em;
    margin-right: .5em;
  }
  .rating {
    display: flex;
    align-items: center;
    margin-top: 1em;
    transition: opacity .1s ease;
  }
  .rating:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease;
  }
  .booking-link > a {
    color: white;
    font-weight: normal;
    text-decoration: none;
  }
  .rating > img {
    width: 5em;
    margin-right: .5em;
  }
  .contacts {
    display: flex;
    margin-top: 1em;
    align-items: center;
  }
  .contact {
    width: 1.8em;
    margin-right: 1em;
    transition: opacity .1s ease;
  }
  .contact:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease;
  }
  .apartments {
    height: 300px;
    background: url(../assets/images/hostel-one.webp);
    background-size: cover;
    background-position: center;
  }
  .apartments-hostel {
    height: 300px;
    background: url(../assets/images/hostel-two.webp);
    background-size: cover;
    background-position: center;
  }
  .hostel-map {
    grid-area: 2 / 2 / 3 / 4;
    height: 300px;
  }

  @media only screen and (max-width : 1680px) {
    .hostel-container {
      padding: 0 10em 3em;
    }
  }
  @media only screen and (max-width : 1536px) {
    .hostel-container {
      padding: 0 5em 3em;
    }
  }
  @media only screen and (max-width : 1024px) {
    .hostel-container {
      padding: 0 15em 3em;
    }
    .apartments-block {
      display: block;
    }
    .main-container {
      margin-bottom: 2em;
      height: 25em;
      width: 100%;
      background-position: bottom;
    }
    .apartments {
      display: none;
    }
    .apartments-hostel {
      display: none;
    }
    .description {
      width: 100%;
    }
  }
  @media only screen and (max-width : 800px) {
    .hostel-container {
      padding: 0 8em 3em;
    }
  }
  @media only screen and (max-width : 600px) {
    .hostel-container {
      padding: 0 2em 3em;
    }
  }
  @media only screen and (max-width : 360px) {
    .title {
      font-size: 1.5em;
    }
    .description {
      font-size: .8em;
    }
    .hostel-container {
      padding: 2em 2em;
    }
    .address > span {
      font-size: .8em;
    }
    .booking-link > a {
      font-size: .8em;
    }
    .rating > img {
      width: 3em;
    }
  }
</style>