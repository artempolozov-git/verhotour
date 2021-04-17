<template>
  <div>
    <Slide right :closeOnNavigation="true" noOverlay>
      <span class="bm-cross-button cross-style" style="/* right: 250px; */"></span>
      <div v-scroll-to="{el:'#about-tours', offset: -100}">О турах</div>
      <div v-scroll-to="{el:'#tour-price', offset: -100}">Туры</div>
      <div v-scroll-to="{el:'#hostel', offset: -120}">Отель</div>
      <div v-scroll-to="{el:'#memory', offset: -90}">Памятка туриста</div>
      <div class="link" v-scroll-to="{el:'#photo', offset: -100}">Фото</div>
      <div class="link" v-scroll-to="{el:'#contact', offset: -100}">Контакты</div>

      <div class="contacts-burger">
        <div class="contact-burger">
          <a target="_blank" class="messengers-first" href="https://api.whatsapp.com/send?phone=+79191650972&text=&source=&data=&app_absent="><img src="@/assets/icon/whatsapp.svg"></a>
        </div>
        <div class="contact-burger">
          <a target="_blank" class="messengers-burger" href="https://t.me/rampixmanager"><img src="@/assets/icon/instagram.svg"></a>
        </div>
        <div class="contact-burger">
          <a target="_blank" class="messengers-burger" href="https://www.behance.net/rampix-studio"><img src="@/assets/icon/vkontakte.svg"></a>
        </div>
      </div>
      <span class="mail-text">verhotour@gmail.com</span>
    </Slide>
  </div>
</template>

<script>
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "BurgerMenu",
        components: {
            Slide // Register your component
        }
    }
</script>

<style>
  .bm-burger-button {
    cursor: pointer;
    height: 25px;
    position: absolute;
    top: 45px;
    width: 35px;
  }
  .bm-burger-bars {
    background-color: #14244b;
  }
  .line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background-color: #14244b;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: white; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0);
  }
  .bm-item-list {
    color: #3F3F3F;
    font-weight: 500;
    margin-left: 10%;
    font-size: 1em;
    cursor: pointer;
    transition: color .1s ease-in;
  }
  .bm-item-list > div:hover {
    color: #374DFF;
    transition: color .2s ease-in;
  }
  .bm-item-list > * {
    display: flex;
    text-decoration: none;
    padding: 16px;
    width: 15em;
  }
  .bm-item-list > * > span {
    margin-left: 10px;
    font-weight: 700;
    color: white;
  }

  .contacts-burger {
    display: flex;
    align-items: center;
    margin-top: 70px;
  }
  .contact-burger {
    display: flex;
    align-items: center;
    transition: opacity .2s ease-in;
  }
  .icon-burger {
    display: flex;
    align-items: center;
    text-decoration:none;
  }
  .icon-burger > img {
    width: 40px;
    height: 40px;
    transition: opacity .2s ease-in;
  }
  .icon > span {
    font-size: 16px;
    color: #686868;
    margin-left: 5px;
    font-weight: 500;
  }
  .contact-burger:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
  }
  .contact-burger > span {
    font-size: 16px;
    color: #686868;
    margin-left: 5px;
    font-weight: 500;
  }
  .messengers-burger {
    display: flex;
    text-decoration:none;
  }
  .messengers-first {
    display: flex;
    text-decoration:none;
  }
  .messengers-first > img {
    width: 2em;
    transition: opacity .2s ease-in;
  }
  .messengers-burger > img {
    margin-left: 25px;
    width: 2em;
    transition: opacity .2s ease-in;
  }
  .messengers-burger > span {
    font-size: 16px;
    color: #686868;
    margin-left: 5px;
    font-weight: 500;
  }
  .mail-text {

    font-size: 1em;
    font-weight: 500;
    color: #3F3F3F;
  }
  @media only screen and (max-width : 800px) {
    .bm-burger-button {
      top: 40px;
    }
  }
  @media only screen and (max-width : 360px) {
    .bm-burger-button {
      top: 35px;
    }
    .bm-item-list > * {
      font-size: .8em;
    }
  }
</style>