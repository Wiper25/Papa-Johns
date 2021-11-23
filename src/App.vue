<template>
  <div id="app">
    <vHeader />
    <vNav />
    <vNavFixed v-if="openFixedMenu" />
    <vCardsGroup />
    <vBasket />
    <vFooter />
  </div>
</template>
<script>
import vHeader from "./components/v-header.vue";
import vNav from "./components/v-nav.vue";
import vNavFixed from "./components/v-nav-fixed.vue";
import vBasket from "./components/v-basket.vue";
import vCardsGroup from "./components/v-cards-group.vue";
import vFooter from "./components/v-footer.vue";

export default {
  data() {
    return {
      openFixedMenu: false,
    };
  },
  components: { vHeader, vNav, vNavFixed, vBasket, vCardsGroup, vFooter },
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
</style>
