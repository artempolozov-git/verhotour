<template>
  <div class="teams-container" id="ourteam">
    <h1 class="title">Наша команда</h1>
    <h2 class="description">Желаете насладиться маленьким, но необыкновенным путешествием? В этом вам поможет наша сплоченная команда!
    </h2>

    <div class="teams-wrapper">
      <div class="organization-team">

        <hooper :infiniteScroll="true" :wheelControl="false">
          <slide>
            <div class="oraganizator-one">
              <div class="information">
                <div class="name">
                  <img src="@/assets/icon/person.svg">
                  <span>Сергей Иванов</span>
                </div>
                <div class="position">Организатор туров</div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="oraganizator-two">
              <div class="information">
                <div class="name">
                  <img src="@/assets/icon/person.svg">
                  <span>Элина</span>
                </div>
                <div class="position">Организатор туров</div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="oraganizator-three">
              <div class="information">
                <div class="name">
                  <img src="@/assets/icon/person.svg">
                  <span>Сергей Иванов</span>
                </div>
                <div class="position">Организатор туров</div>
              </div>
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>

      <div class="art-team">
        <hooper :infiniteScroll="true" :wheelControl="false">
          <slide>
            <div class="oraganizator-two">
              <div class="information">
                <div class="name">
                  <img src="@/assets/icon/person.svg">
                  <span>Элина</span>
                </div>
                <div class="position">Творческая группа</div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="artteam-one">
              <div class="information">
                <div class="name">
                  <img src="@/assets/icon/person.svg">
                  <span>Ирина Борцова</span>
                </div>
                <div class="position">Творческая группа</div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="oraganizator-three">
              <div class="information">
                <div class="name">
                  <img src="@/assets/icon/person.svg">
                  <span>Сергей Иванов</span>
                </div>
                <div class="position">Организатор туров</div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="oraganizator-three">
              <div class="information">
                <div class="name">
                  <img src="@/assets/icon/person.svg">
                  <span>Сергей Иванов</span>
                </div>
                <div class="position">Организатор туров</div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="oraganizator-three">
              <div class="information">
                <div class="name">
                  <img src="@/assets/icon/person.svg">
                  <span>Сергей Иванов</span>
                </div>
                <div class="position">Организатор туров</div>
              </div>
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>

      <div class="film-team">
        <hooper :infiniteScroll="true" :wheelControl="false">>
        <slide>
          <div class="filmteam-one">
            <div class="information">
              <div class="name">
                <img src="@/assets/icon/person.svg">
                <span>Сергей Орлов</span>
              </div>
              <div class="position">Съемочная группа</div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="oraganizator-three">
            <div class="information">
              <div class="name">
                <img src="@/assets/icon/person.svg">
                <span>Сергей Иванов</span>
              </div>
              <div class="position">Организатор туров</div>
            </div>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
    import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        name: "HomeTeams",
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination
        }
    }
</script>

<style scoped>
.teams-container {
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
.teams-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}
.organization-team {
  width: 20em;
  height: 30em;
  margin-right: 2em;
}
.oraganizator-one {
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  background: url(../assets/ourteam/1.webp);
  background-size: cover;
  background-position: center;
}
.oraganizator-two {
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  background: url(../assets/ourteam/2.webp);
  background-size: cover;
  background-position: center;
}
.oraganizator-three {
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  background: url(../assets/ourteam/3.webp);
  background-size: cover;
  background-position: center;
}
.information {
  margin-left: 1em;
  margin-bottom: 2em;
}
.name {
  display: flex;
  align-items: center;
}
.name > img {
  width: .7em;
  margin-right: .5em;
}
.name > span {
  font-weight: normal;
  color: white;
}
.position {
  font-weight: normal;
  color: #374DFF;
}
.art-team {
  width: 20em;
  height: 30em;
  margin-right: 2em;
}
.artteam-one {
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  background: url(../assets/ourteam/4.webp);
  background-size: cover;
  background-position: center;
}
.film-team {
  width: 20em;
  height: 30em;
}
.filmteam-one {
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  background: url(../assets/ourteam/6.webp);
  background-size: cover;
  background-position: center;
}
.hooper {
  height: 30em;
  outline: none;
  border: none;
}
@media only screen and (max-width : 1536px) {
  .description {
    width: 70%;
  }
}
@media only screen and (max-width : 800px) {
  .description {
    width: 100%;
  }
  .teams-wrapper {
    display: block;
  }
  .organization-team {
    margin: auto;
    width: 100%;
    margin-bottom: 2em;
  }
  .art-team {
    margin: auto;
    width: 100%;
    margin-bottom: 2em;
  }
  .film-team {
    margin: auto;
    width: 100%;
  }
  .teams-container {
    padding: 0 10em 3em;
  }
}
@media only screen and (max-width : 800px) {
  .teams-container {
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
  .name > span {
    font-size: .8em;
  }
  .position {
    font-size: .8em;
  }
  .name > img {
    width: .5em;
  }
}
</style>