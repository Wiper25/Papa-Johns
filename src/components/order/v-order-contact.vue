<template>
  <b-container>
    <div class="contact">
      <h3 class="contact__title">Ваши контакты</h3>
      <b-row>
        <b-col cols="4" class="contact__name-input-block"
          ><p class="contact__name">Имя</p>
          <b-form-input
            class="contact__name-input minWidth"
            placeholder="Введите имя"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4" class="contact__name-input-block"
          ><p class="contact__name">E-mail</p>
          <b-form-input
            class="contact__name-input minWidth"
            placeholder="example@email.ru"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4" class="contact__name-input-block"
          ><p class="contact__name">Номер телефона</p>
          <b-form-input
            class="contact__name-input minWidth"
            number
            placeholder="+996"
          ></b-form-input>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
