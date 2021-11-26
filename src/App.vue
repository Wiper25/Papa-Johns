<template>
  <div id="app">
    <vHeader id="Header" />
    <vNavFixed v-if="openFixedMenu" />
    <router-view />
    <vFooter />
  </div>
</template>
<script>
import vHeader from "./components/v-header.vue";
import vNavFixed from "./components/v-nav-fixed.vue";
import vFooter from "./components/v-footer.vue";

export default {
  components: {
    vHeader,
    vNavFixed,
    vFooter,
  },
  data() {
    return {
      openFixedMenu: false,
    };
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
<style lang="scss">
@import "./blocks/style.scss";
</style>
