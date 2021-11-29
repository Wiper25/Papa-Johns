<template>
  <b-container>
    <div class="map-address">
      <b-row>
        <b-col><h3>Укажите свой адрес</h3></b-col>
        <b-col class="text-end"><b-link>Бишкек</b-link></b-col>
      </b-row>
      <b-row
        ><b-col
          ><iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d93577.61600623206!2d74.61899172973636!3d42.866501176099796!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1637997071614!5m2!1sru!2skg"
            class="maps"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe></b-col
      ></b-row>
      <b-row class="address">
        <p>Адрес*</p>
        <b-col cols="12" md="6" class="map-address__input">
          <b-form-input
            class="contact__name-input"
            placeholder="Адрес"
          ></b-form-input
        ></b-col>
        <b-col cols="6" md="3" class="map-address__apartment-input">
          <b-form-input
            class="contact__name-input"
            placeholder="Квартира"
          ></b-form-input
        ></b-col>
        <b-col cols="6" md="3" class="map-address__floor">
          <b-form-input
            class="contact__name-input"
            placeholder="Этаж"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-link>Указать домофон и подъезд</b-link>
        <b-col cols="6" md="3">
          <b-form-input
            class="contact__name-input"
            placeholder="Домофон"
          ></b-form-input
        ></b-col>
        <b-col cols="6" md="3">
          <b-form-input
            class="contact__name-input"
            placeholder="Подъезд"
          ></b-form-input
        ></b-col>
      </b-row>
    </div>
  </b-container>
</template>
