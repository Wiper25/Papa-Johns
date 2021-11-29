<template>
  <div class="cards-group">
    <b-container class="cards-group__container">
      <!-- <h2 class="cards-group__title" style="position: sticky">Пицца</h2> -->
      <b-row class="cards-group__block">
        <b-col
          class="cards-group__card col-3"
          lg="6"
          :key="i"
          v-for="(card, i) in CARDS_PRODUCT"
        >
          <img
            class="cards-group__card-img"
            src="../assets/img-pizza-greek.jpg"
            alt=""
          />
          <h3 class="cards-group__title-card">{{ card.namePizza }}</h3>
          <p class="cards-group__description">
            <span :key="i" v-for="(ing, i) in card.ingredientsPizza">
              {{ ing }},
            </span>
          </p>
          <div class="cards-group__parameters-settings">
            <div class="cards-group__border-size">
              <div
                class="cards-group__border-size-btn"
                :class="{ active: card.typePizza == traditional }"
                @click="borderPizza([traditional, i])"
              >
                Традиционное
              </div>
              <div
                @click="borderPizza([thin, i])"
                :class="{ active: card.typePizza == thin }"
                class="cards-group__border-size-btn"
              >
                Тонкое
              </div>
            </div>
            <div class="cards-group__size">
              <div
                class="cards-group__size-btn"
                :class="{ active: card.sizePizza == 23 }"
                @click="checkSizePizza([23, i])"
              >
                23
              </div>
              <div
                :class="{ active: card.sizePizza == 30 }"
                class="cards-group__size-btn"
                @click="checkSizePizza([30, i])"
              >
                30
              </div>
              <div
                :class="{ active: card.sizePizza == 35 }"
                class="cards-group__size-btn"
                @click="checkSizePizza([35, i])"
              >
                35
              </div>
              <div
                :class="{ active: card.sizePizza == 40 }"
                class="cards-group__size-btn"
                @click="checkSizePizza([40, i])"
              >
                40
              </div>
            </div>
            <div class="cards-group__btn-basket--price">
              <b-button @click="addProductBasket(i)" class="cards-group__btn"
                >В корзину</b-button
              >
              <p class="cards-group__price">{{ card.pricePizza }} с</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="cards-group-mobile__block">
        <b-col
          class="cards-group-mobile__card col-3"
          lg="6"
          :key="i"
          v-for="(card, i) in CARDS_PRODUCT"
        >
          <img
            class="cards-group-mobile__card-img"
            src="../assets/img-pizza-greek.jpg"
            alt=""
          />
          <div class="cards-group-mobile__card-content">
            <div class="cards-group-mobile__card-description-title">
              <h3 class="cards-group-mobile__title-card">
                {{ card.namePizza }}
              </h3>
              <p class="cards-group-mobile__description">
                <span :key="i" v-for="(ing, i) in card.ingredientsPizza">
                  {{ ing }},
                </span>
              </p>
            </div>
            <div class="cards-group-mobile__parameters-settings">
              <div class="cards-group-mobile__btn-basket--price">
                <p class="cards-group-mobile__price">
                  от {{ card.pricePizza }} с
                </p>
                <b-button
                  @click="addProductBasket(i)"
                  class="cards-group-mobile__btn"
                  >Выбрать</b-button
                >
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="v-basket-mobile">
        <b-icon icon="basket3-fill" variant="white"></b-icon>
        <router-link to="/order">
          <span class="v-basket-mobile__price">325c</span>
        </router-link>
      </div>
      <b-row class="v-basket-desktop">
        <vBasket class="v-basket-comp" v-if="true" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import vBasket from "../components/v-basket.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      traditional: "Традиционное",
      thin: "Тонкое",
    };
  },
  components: { vBasket },
  computed: { ...mapGetters(["CARDS_PRODUCT"]) },
  methods: {
    ...mapMutations(["checkSizePizza", "borderPizza", "addProductBasket"]),
  },
};
</script>
<style scoped>
@media (max-width: 768px) {
  .cards-group__block {
    display: none;
  }
  .cards-group-mobile__block {
    display: block;
  }
}
@media (min-width: 768px) {
  .cards-group-mobile__block {
    display: none;
  }
  .cards-group__block {
    display: flex;
  }
}
@media (max-width: 1280px) {
  .v-basket-mobile {
    display: flex;
  }
  .v-basket-desktop {
    display: none;
  }
}
@media (min-width: 1280px) {
  .v-basket-mobile {
    display: none;
  }
}
</style>
