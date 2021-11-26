<template>
  <div id="home">
    <vModelBurgerMenu class="ModelBurgerMenu" />
    <vBasketMenuMobile v-if="false" class="BasketMenuMobile" />
    <vSlider />
    <vNav class="nav-comp" />
    <vAddress class="address-comp" />
    <vPromo class="promo-comp" />
    <vCardsGroup />
  </div>
</template>
<script>
import vModelBurgerMenu from "../components/v-model-burger-menu.vue";
import vBasketMenuMobile from "../components/v-basket-menu-mobile.vue";
import vSlider from "../components/v-slider.vue";
import vNav from "../components/v-nav.vue";
import vAddress from "../components/v-address.vue";
import vPromo from "../components/v-promo.vue";
import vBasket from "../components/v-basket.vue";
import vCardsGroup from "../components/v-cards-group.vue";
export default {
  data() {
    return {
      openFixedMenu: false,
    };
  },
  components: {
    vModelBurgerMenu,
    vBasketMenuMobile,
    vSlider,
    vNav,
    vAddress,
    vPromo,
    vBasket,
    vCardsGroup,
  },
};
</script>
<style lang="scss">
body {
  background-color: #f8f8f8;
}
#home {
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
