<template>
  <div class="basket-menu-mobile">
    <b-row class="basket-menu-mobile__header">
      <b-col class="basket-menu-mobile__exit text-start"
        ><b-icon icon="backspace"></b-icon
      ></b-col>
      <b-col class="basket-menu-mobile__title text-center"
        >Оформление заказа</b-col
      >
      <b-col class="basket-menu-mobile__clear text-end"
        ><b-icon icon="trash"></b-icon
      ></b-col>
    </b-row>
    <b-row class="basket-menu-mobile__product">
      <b-col class="basket-menu-mobile__product-img col-auto">
        <img width="85" src="../assets/img-pizza-basket.jpg" alt="" />
      </b-col>
      <b-col class="basket-menu-mobile__product-name-title col-auto">
        <h6 class="basket-menu-mobile__name-product">Греческая</h6>
        <p class="basket-menu-mobile__description-product-size">
          Традиционное тесто, 23см
        </p></b-col
      >
      <b-col class="basket-menu-mobile__product-count-total text-end">
        <span class="basket-menu-mobile__countDic" @click="countDic(i)">
          &#8722;</span
        >
        123
        <span class="basket-menu-mobile__countInc" @click="countInc(i)"
          >&#43;</span
        >
        <p>352c</p>
      </b-col>
      <b-col class="basket-menu-mobile__product-price-remove col-auto"
        ><b-icon icon="x"></b-icon
      ></b-col>
    </b-row>
    <b-row class="basket-menu-mobile__promo-code col-5 text-center">
      <input
        class="basket-menu-mobile__promo-code"
        type="text"
        placeholder="Ввести промокод"
      />
      <b-button class="basket-menu-mobile__send-promo-code"
        ><b-icon icon="arrow-right-short"></b-icon
      ></b-button>
    </b-row>
    <b-row class="basket-menu-mobile__slider-additives"></b-row>
    <b-row class="basket-menu-mobile__delivery-expense"></b-row>
    <b-row class="basket-menu-mobile__form-data"></b-row>
  </div>
</template>
