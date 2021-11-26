<template>
  <b-container>
    <div class="product-basket">
      <b-row class="product-basket__top">
        <b-col class="text-start product-basket__basket-btn-block">
          <b-link class="product-basket__btn-basket"
            >Корзина(1) <b-icon icon="caret-down-fill"></b-icon>
          </b-link>
        </b-col>
        <b-col class="text-center">img</b-col>
        <b-col class="text-end product-basket__clear-block">
          <b-link class="product-basket__clear">
            Удалить всё
            <b-icon icon="trash"></b-icon>
          </b-link>
        </b-col>
      </b-row>
      <b-row class="product-basket__product">
        <b-col class="text-center product-basket__img-cards" cols="1"
          >img</b-col
        >
        <b-col class="product-basket__product-title-border-size" cols="7">
          <h6>Сырная</h6>
          <p>Традиционное тесто, 23 см</p>
        </b-col>
        <b-col cols="3" class="product-basket__counter-price-block">
          <div>
            <span class="basket__countDic" @click="countDic(i)"> &#8722;</span>
            1
            <span class="basket__countInc" @click="countInc(i)">&#43;</span>
          </div>
          <div>356 с</div></b-col
        >
        <b-col cols="1" class="text-center"><b-icon icon="x"></b-icon></b-col
      ></b-row>
      <b-row class="product-basket__bottom">
        <b-col cols="4">
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
        <b-col cols="8" class="text-end">
          <div class="product-basket__total-price">
            Итого:&nbsp;
            <div>250<span>с</span></div>
          </div></b-col
        >
      </b-row>
    </div>
  </b-container>
</template>
