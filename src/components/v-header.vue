<template>
  <div class="header">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
        <b-col><img src="../assets/logo-header-papajohns.svg" alt="" /></b-col>
        <b-col v-if="!statusBurgerMenu" class="text-center col-6">
          <b-button class="header__btn-header-address">
            <b-icon
              b-icon
              icon="compass"
              shift-h="-4"
              shift-v="-1"
              aria-hidden="true"
              font-scale="1"
            >
            </b-icon>
            Укажите свой адрес</b-button
          >
        </b-col>
        <b-col class="text-end header__burger">
          <div v-if="statusBurgerMenu" class="header__burger-menu">
            <b-link class="header__burger-menu-nav active-btn-nav">Меню</b-link>
            <b-link class="header__burger-menu-nav">Акция</b-link>
            <b-link class="header__burger-menu-nav">Папа Бонус</b-link>
            <b-link class="header__burger-menu-nav">Контакты</b-link>
            <b-button class="header__burger-menu-login">ВХОД</b-button>
          </div>
          <b-button @click="burgerMenu" variant="white">
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
