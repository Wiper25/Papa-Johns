<template>
  <div class="basket">
    <div class="basket__icon">
      <div>
        <b-icon class="basket__icon-basket" b-icon icon="basket3-fill"></b-icon>
      </div>
    </div>
    <div class="basket__top">
      <div class="basket__counterNum-clear">
        <h5 class="basket__counterNum">Корзина</h5>
        <b-link class="basket__clear" @click="emptyTrash">Очистить</b-link>
      </div>
      <div
        :key="i"
        v-for="(product, i) in PRODUCT_BASKET"
        class="basket__product-block"
      >
        <div class="basket__product">
          <div class="basket__product-img">
            <img
              class="basket__img"
              src="../assets/img-pizza-basket.jpg"
              alt=""
            />
          </div>
          <div class="basket__product-description">
            <h6 class="basket__title-product">{{ product.namePizza }}</h6>
            <p class="basket__description">
              {{ product.typePizza }} тесто, {{ product.sizePizza }} см
            </p>
          </div>
          <b-link
            @click="removeProductBasket(i)"
            class="basket__cross-remove-product"
            >&#215;</b-link
          >
        </div>
        <div class="basket__product-count">
          <div class="basket__counter-number">
            <span class="basket__countDic" @click="countDic(i)"> &#8722;</span>
            {{ product.count }}
            <span class="basket__countInc" @click="countInc(i)">&#43;</span>
          </div>
          <div class="basket__price-product">
            {{ product.count * product.pricePizza }}с
          </div>
        </div>
      </div>
      <div class="basket__to-order">
        <div class="basket__general-price">
          <h6 class="basket__general-title">Сумма заказа</h6>
          <h4 class="basket__general-price-number">{{ totalPrice }} с</h4>
        </div>
        <b-button class="basket__btn-registration cards-group__btn" to="/order"
          >Оформить</b-button
        >
        <p class="basket__number-points">Начислится 52 бонуса</p>
      </div>
    </div>
    <div class="basket__bottom">
      <input
        class="basket__promo-code"
        type="text"
        placeholder="Ввести промокод"
      />
      <b-button class="basket__send-promo-code">
        <b-icon icon="arrow-right-short"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: { ...mapGetters(["PRODUCT_BASKET", "TOTAL_AMOUNT"]) },
  methods: {
    ...mapMutations([
      "emptyTrash",
      "removeProductBasket",
      "countDic",
      "countInc",
    ]),
  },
  watch: {
    PRODUCT_BASKET() {
      this.PRODUCT_BASKET.map((item) => {
        this.totalPrice += item.pricePizza;
        console.log(this.totalPrice);
      });
    },
  },
};
</script>
