<template>
  <div class="gallery-wrapper" id="photo">
    <h1 class="title-gallery">Фотогалерея</h1>
    <h2 class="description-gallery">Посмотрите фотографии из поездок, организованных нашей командой
    </h2>

    <lightbox cells="4" :items="images"></lightbox>

  </div>
</template>

<script>
    import '@morioh/v-lightbox/dist/lightbox.css';
    export default {
        name: "HomeGallery",
        data() {
            return {
                images: [
                    "https://sun9-15.userapi.com/impg/3x7mX6iGoTt6wFBJLqZWMugrB7hEqAdztGJNfw/1RrD6uDWX4k.jpg?size=1280x725&quality=96&sign=d7fee613d148a93c85042bfebe56bf98&type=album",
                    "https://sun9-18.userapi.com/impg/Md22ED7oVfEqA8pGV8I5v34kvgcDd4_EAw_Slw/mPV3NjjhS-U.jpg?size=1280x725&quality=96&sign=be87507ed27659b647964e1de83a661c&type=album",
                    "https://sun9-74.userapi.com/impg/jmODJeKbQFqxiVvSQM_asiYpcRqJ61fW-qNRTA/ZsYpesI6334.jpg?size=1280x725&quality=96&sign=ff48ac02b25f908bbb247108d4ccba7c&type=album",
                    "https://sun9-42.userapi.com/impg/5QMEABTP15cKIxt03fdDxIpmbYj9xNcqJTqw-Q/MHN99qSkPoA.jpg?size=1280x725&quality=96&sign=3554123c440e18e75fbe004ef2daefc3&type=album",
                    "https://sun9-32.userapi.com/impg/YY2zXwyc8kvwJHnNRITLVq-oXCyiElH3w7G1Xg/CNUqIJll_UY.jpg?size=1280x725&quality=96&sign=3cd5e9901b09efff6d66a170b4b816d7&type=album",
                    "https://sun9-32.userapi.com/impg/x0hjapKimFZKYYGIULk3nmxr6cXLoie7GzCmVw/g8yefMfLyc4.jpg?size=1280x725&quality=96&sign=81ba367daf385fc4739f91748b419527&type=album",
                    "https://sun9-7.userapi.com/impg/NVCbouRiFClF8MQgqFt7QhMo-4gmp29Q3aCIzA/sx0dTQTry_8.jpg?size=2560x1707&quality=96&sign=4fbb8965aab271434616080ab307bf74&type=album",
                ],
            }
        },

    }
</script>

<style>
  .gallery-wrapper {
    padding: 3em 20em;
  }
  .title-gallery {
    font-size: 2em;
    font-weight: bold;
    color: #14244B;
    text-align: center;
    margin-top: 0;
  }
  .description-gallery {
    font-size: 1em;
    font-weight: 500;
    color: #3F3F3F;
    width: 60%;
    margin: auto;
    margin-bottom: 2em;
    text-align: center;
  }
  .btn:focus, .btn.focus {
    box-shadow: none;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show>.btn-outline-primary.dropdown-toggle {
    border-color: #374DFF;
    background-color: #374DFF;
  }
  .btn-outline-danger {
    border: none;
  }
  .button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
    outline: none;
  }
  @media only screen and (max-width : 1680px) {
    .gallery-wrapper {
      padding: 3em 15em;
    }
  }
  @media only screen and (max-width : 1536px) {
    .gallery-wrapper {
      padding: 3em 10em;
    }
  }
  @media only screen and (max-width : 1024px) {
    .gallery-wrapper {
      padding: 3em 5em;
    }
  }
  @media only screen and (max-width : 800px) {
    .description-gallery {
      width: 100%;
    }
  }
  @media only screen and (max-width : 600px) {
    .gallery-wrapper {
      padding: 3em 2em;
    }
    .h-250 {
      height: 28.75rem !important;
    }
  }
  @media only screen and (max-width : 360px) {
    .title-gallery {
      font-size: 1.5em;
    }
    .description-gallery {
      font-size: .8em;
    }
    .h-250 {
      height: 18.75rem !important;
    }
  }
</style>