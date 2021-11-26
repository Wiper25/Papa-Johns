<template>
  <div class="nav-fixed">
    <b-container>
      <b-row>
        <b-col class="nav-fixed__logo">
          <img src="../assets/logo-header-papajohns.svg" alt="" />
        </b-col>
        <b-col v-if="!statusBurgerMenu" class="nav-fixed__btn-block">
          <b-link class="nav-fixed__btn">ПИЦЦА</b-link>
          <b-link class="nav-fixed__btn">КОМБО</b-link>
          <b-link class="nav-fixed__btn">ЗАКУСКИ</b-link>
          <b-link class="nav-fixed__btn">САЛАТЫ</b-link>
          <b-link class="nav-fixed__btn">ДЕСЕРТЫ</b-link>
          <b-link class="nav-fixed__btn">НАПИТКИ</b-link>
          <b-link class="nav-fixed__btn">СОУСЫ</b-link>
          <b-link class="nav-fixed__btn">ГОРЯЧЕЕ</b-link>
          <b-link class="nav-fixed__btn">РАДОСТИ</b-link>
        </b-col>
        <b-col class="nav-fixed__burger-menu">
          <div v-if="statusBurgerMenu" class="header__burger-menu">
            <b-link class="header__burger-menu-nav active-btn-nav">Меню</b-link>
            <b-link class="header__burger-menu-nav">Акция</b-link>
            <b-link class="header__burger-menu-nav">Папа Бонус</b-link>
            <b-link class="header__burger-menu-nav">Контакты</b-link>
            <b-button class="header__burger-menu-login">ВХОД</b-button>
          </div>
          <b-button
            class="nav-fixed__btn-burger-menu"
            @click="burgerMenu"
            variant="white"
          >
            <b-icon
              class="header__btn-burger-menu"
              b-icon
              icon="list"
              aria-hidden="true"
              font-scale="2"
            >
            </b-icon>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["statusBurgerMenu"]),
  },
  methods: {
    ...mapMutations(["burgerMenu"]),
  },
};
</script>
