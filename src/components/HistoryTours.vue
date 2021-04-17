<template>
  <div class="history-tour" :style="inlineStyle" @click="feedbackForm">
    <div>
      <div class="emblem-image"><img :src="image"></div>
      <div class="tour-title">{{title}}</div>
      <div class="tour-sum">{{price}}</div>
        <div class="accept-button">
          <span>Забронировать</span>
          <img src="@/assets/icon/arrow-price.svg">
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HistoryTours",
        props: {
            title: String,
            price: String,
            background: String,
            image: String,
        },
        computed: {
            inlineStyle () {
                return {
                    backgroundImage: `url(${this.background})`
                }
            }
        },
        methods: {
            feedbackForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
  .history-tour {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30em;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: all .1s ease;
  }
  .history-tour:hover {
    transition: all .2s ease;
    transform: scale(1.01);
  }
  .emblem-image {
    display: flex;
    justify-content: center;
    margin-bottom: .5em;
  }
  .emblem-image > img {
    width: 5em;
  }
  .tour-title {
    font-size: 1.5em;
    width: 90%;
    color: white;
    font-weight: normal;
    text-align: center;
    margin: auto;
  }
  .tour-sum {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 1.2em;
    margin: auto;
    width: 6em;
    height: 1.4em;
    padding: .1em;
    background-color: #374DFF;
    border-radius: 50px;
    border-bottom-left-radius: 0;
    font-size: 1.5em;
    color: white;
    font-weight: normal;
    text-align: center;
  }
  .accept-button{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: white;
    font-weight: normal;
    text-align: center;
    opacity: 0.5;
    position: relative;
    top: 2.5em;
    margin: auto;
    transition: opacity .1s ease;
  }
  .accept-button > img {
    margin-left: .5em;
    width: 1.5em;
  }
  .history-tour:hover .accept-button {
    opacity: 1;
    transition: opacity .2s ease;
  }
  @media only screen and (max-width : 360px) {
    .quest-title {
      font-size: 1.5em;
    }
    .quest-description {
      font-size: .8em;
    }
  }
</style>