<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <feedback></feedback>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>


import Feedback from "@/components/Feedback";
export default {
  name: 'App',
  components: {
      Feedback

  },
  computed: {
    defaultViewKey: function() {
      return this.$route.name;
    }
  }
}
</script>

<style>
  html, body {
    height: 100%;
  }
  body {
    margin: initial;
    font-family: Gilroy;
    font-size: 16px;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: white;
  }
  @font-face {
    font-family: Gilroy;
    src: url('./assets/Gilroy-Bold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: Gilroy;
    src: url('./assets/Gilroy-SemiBold.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: Gilroy;
    src: url('./assets/Gilroy-Medium.ttf');
    font-weight: 500;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
    width: -webkit-fill-available;
  }
</style>
