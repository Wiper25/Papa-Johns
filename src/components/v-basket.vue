<template>
  <div class="basket">
    <div class="basket__top">
      <div class="basket__counterNum-clear">
        <h5 class="basket__counterNum">Корзина</h5>
        <b-link class="basket__clear">Очистить</b-link>
      </div>
      <div class="basket__product">
        <div class="basket__product-img">
          <img
            class="basket__img"
            src="../assets/img-pizza-basket.jpg"
            alt=""
          />
        </div>
        <div class="basket__product-description">
          <h6 class="basket__title-product">Чикен Блю Чиз</h6>
          <p class="basket__description">Традиционное тесто, 23 см</p>
        </div>
        <b-link class="basket__cross-remove-product">&#215;</b-link>
      </div>
      <div class="basket__prooduct-count">
        <div class="basket__counter-number">
          <span class="basket__countDic"> &#8722;</span> 1
          <span class="basket__countInc">&#43;</span>
        </div>
        <div class="basket__price-product">400 c</div>
      </div>
    </div>
    <div class="basket__bottom">
      <input type="text" placeholder="Ввести промокод" />
    </div>
  </div>
</template>
