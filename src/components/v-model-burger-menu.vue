<template>
  <div v-if="statusBurgerMenu" class="model-burger-menu">
    <b-container class="model-burger-menu__container">
      <b-row class="model-burger-menu__block">
        <b-col class="text-end model-burger-menu__block-top"
          ><b-icon
            class="model-burger-menu__cross"
            icon="x"
            @click="burgerMenu"
          ></b-icon
        ></b-col>
        <b-col class="model-burger-menu__block-center"
          ><p class="model-burger-menu__block-center-text">
            Войдите чтобы получать бонусы и подарки
          </p>
          <b-button class="model-burger-menu__block-center-btn-login"
            >ВХОД</b-button
          ></b-col
        >
        <b-col class="model-burger-menu__block-nav">
          <b-link class="model-burger-menu__block-nav-btn-active">Меню</b-link>
          <b-link class="model-burger-menu__block-nav-btn">Акции</b-link>
          <b-link class="model-burger-menu__block-nav-btn">Папа Бонус</b-link>
          <b-link class="model-burger-menu__block-nav-btn">Контакты</b-link>
        </b-col>
        <b-col class="model-burger-menu__block-contact"
          ><b-link class="model-burger-menu__block-contact-number"
            >Телефон: 3911</b-link
          >
          <div class="model-burger-menu__block-contact-icon">
            <b-icon icon="telephone-fill"> </b-icon>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["statusBurgerMenu"]),
  },
  methods: {
    ...mapMutations(["burgerMenu"]),
  },
};
</script>
