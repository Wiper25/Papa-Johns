<template>
  <div id="app">
    <vHeader />
    <vModelBurgerMenu class="ModelBurgerMenu" />
    <vBasketMenuMobile v-if="false" class="BasketMenuMobile" />
    <vSlider />
    <vNav class="nav-comp" />
    <vAddress class="address-comp" />
    <vNavFixed v-if="openFixedMenu" />
    <vPromo class="promo-comp" />
    <vCardsGroup />
    <vFooter />
  </div>
</template>
<script>
import vHeader from "./components/v-header.vue";
import vModelBurgerMenu from "./components/v-model-burger-menu.vue";
import vBasketMenuMobile from "./components/v-basket-menu-mobile.vue";
import vSlider from "./components/v-slider.vue";
import vNav from "./components/v-nav.vue";
import vAddress from "./components/v-address.vue";
import vNavFixed from "./components/v-nav-fixed.vue";
import vPromo from "./components/v-promo.vue";
import vBasket from "./components/v-basket.vue";
import vCardsGroup from "./components/v-cards-group.vue";
import vFooter from "./components/v-footer.vue";
export default {
  data() {
    return {
      openFixedMenu: false,
    };
  },
  components: {
    vHeader,
    vModelBurgerMenu,
    vBasketMenuMobile,
    vSlider,
    vNav,
    vAddress,
    vNavFixed,
    vPromo,
    vBasket,
    vCardsGroup,
    vFooter,
  },
  methods: {
    onScroll() {
      window.top.scrollY < 175
        ? (this.openFixedMenu = false)
        : (this.openFixedMenu = true);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
// //
<style lang="scss">
@import "./blocks/style.scss";
body {
  background-color: #f8f8f8;
}
#app {
  display: flex;
  text-decoration: column;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1280px) {
  .nav-comp {
    display: none;
  }
}
@media (min-width: 1280px) {
  .promo-comp {
    display: none;
  }
  .ModelBurgerMenu {
    display: none;
  }
}
@media (min-width: 769px) {
  .address-comp {
    display: none;
  }
}
</style>
