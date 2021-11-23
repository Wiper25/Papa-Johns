<template>
  <div class="cards-group">
    <b-container>
      <h2 class="cards-group__title" style="position: sticky">Пицца</h2>
      <b-row>
        <b-col class="cards-group__card col-3">
          <img
            class="cards-group__card-img"
            src="../assets/img-pizza-greek.jpg"
            alt=""
          />
          <h3 class="cards-group__title-card">Греческая</h3>
          <p class="cards-group__description">
            Фирменный томатный соус, Моцарелла, мягкий молодой сыр, маслины,
            лук, сочные томаты, острый халапеньо и орегано
          </p>
          <div class="cards-group__parameters-settings">
            <div class="cards-group__border-size">
              <label
                class="cards-group__border-size-btn active"
                for="traditional"
              >
                <input
                  value="traditional"
                  type="radio"
                  name=""
                  id="traditional"
                />Традиционное</label
              >
              <label class="cards-group__border-size-btn" for="thin">
                <input
                  value="thin"
                  type="radio"
                  name=""
                  id="thin"
                />Тонкое</label
              >
            </div>
            <div class="cards-group__size">
              <label class="cards-group__size-btn active" for="23">
                <input value="23" type="radio" name="" id="23" />23</label
              >
              <label class="cards-group__size-btn" for="30">
                <input value="30" type="radio" name="" id="30" />30</label
              >
              <label class="cards-group__size-btn" for="35">
                <input value="35" type="radio" name="" id="35" />35</label
              >
              <label class="cards-group__size-btn" for="40">
                <input value="40" type="radio" name="" id="40" />40</label
              >
            </div>
            <div class="cards-group__btn-basket--price">
              <b-button class="cards-group__btn">В корзину</b-button>
              <p class="cards-group__price">795 с</p>
            </div>
          </div>
        </b-col>

        <!-- <b-col class="cards-group__card col-3">asdasd</b-col>
        <b-col class="cards-group__card col-3">asdasd</b-col> -->
      </b-row>
    </b-container>
  </div>
</template>
