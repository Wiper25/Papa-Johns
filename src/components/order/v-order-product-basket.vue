<template>
  <b-container>
    <div class="product-basket">
      <b-row class="product-basket__top">
        <b-col class="text-start product-basket__basket-btn-block">
          <b-link class="product-basket__btn-basket"
            >Корзина(1) <b-icon icon="caret-down-fill"></b-icon>
          </b-link>
        </b-col>
        <b-col class="text-center"
          ><img alt="" width="60" src="./img-pizza-basket.jpg"
        /></b-col>
        <b-col class="text-end product-basket__clear-block">
          <b-link
            class="product-basket__clear"
            to="/"
            @click="removeProductBasket"
          >
            Удалить всё
            <b-icon icon="trash"></b-icon>
          </b-link>
        </b-col>
      </b-row>
      <b-row
        class="product-basket__product"
        :key="i"
        v-for="(product, i) in PRODUCT_BASKET"
      >
        <b-col class="text-center product-basket__img-cards" cols="1"
          ><img alt="" width="60" src="./img-pizza-basket.jpg"
        /></b-col>
        <b-col
          class="product-basket__product-title-border-size"
          cols="5"
          md="8"
        >
          <h6>{{ product.namePizza }}</h6>
          <p>{{ product.typePizza }} тесто, {{ product.sizePizza }} см</p>
        </b-col>
        <b-col md="2" col class="product-basket__counter-price-block">
          <div>
            <span class="basket__countDic" @click="countDic(i)"> &#8722;</span>
            {{ product.count }}
            <span class="basket__countInc" @click="countInc(i)">&#43;</span>
          </div>
          <div>{{ product.pricePizza * product.count }} с</div></b-col
        >
        <b-col cols="1" class="text-center"
          ><b-icon @click="removeProductBasket(i)" icon="x"></b-icon>
        </b-col>
      </b-row>
      <b-row class="product-basket__bottom">
        <b-col col md="4">
          <div class="product-basket__promo-code-block">
            <input
              class="product-basket__promo-code-input"
              type="text"
              placeholder="Ввести промокод"
            />
            <b-button class="product-basket__promo-code-btn"
              ><b-icon icon="arrow-right-short"></b-icon
            ></b-button>
          </div>
        </b-col>
        <b-col col md="8" class="text-end">
          <div class="product-basket__total-price">
            Итого:&nbsp;
            <div style="color: #007a53">
              {{ PRODUCT_BASKET[0].pricePizza }}<span>с</span>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: { ...mapGetters(["PRODUCT_BASKET", "TOTAL_AMOUNT"]) },
  methods: {
    ...mapMutations([
      "emptyTrash",
      "removeProductBasket",
      "countDic",
      "countInc",
    ]),
  },
};
</script>
