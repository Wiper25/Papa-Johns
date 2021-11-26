<template>
  <div>
    <b-carousel
      id="carousel-fade"
      class="carousel"
      :interval="4000"
      fade
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
        img-src="https://api.papajohns.kg//images/banners/4401a68dd564361c420df281c92dde13.png"
      />

      <b-carousel-slide
        img-src="https://api.papajohns.kg//images/banners/2febf22e316a09c6a57a547a44f997b3.jpg"
      />

      <b-carousel-slide
        img-src="https://api.papajohns.kg//images/banners/b4fc2deb1016a108ee19300f18de8c93.jpg"
      />
      <b-carousel-slide
        img-src="https://api.papajohns.kg//images/banners/ade8cc7c13a7e643d122555cb3546027.jpg"
      />

      <b-carousel-slide
        img-src="https://api.papajohns.kg//images/banners/a081ce55fd9627671868fe3e83c4f512.jpg"
      />

      <b-carousel-slide
        img-src="https://api.papajohns.kg//images/banners/fb7b54797e24f60cbdadd2eec221c869.png"
      />
      <b-carousel-slide
        img-src="https://api.papajohns.kg//images/banners/fca33c0bc4e8ad6feadf2fc59e4ebb9b.jpg"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.sr-only {
  display: none;
}
.carousel {
  margin-bottom: 10px;
}
.carousel-control-prev-icon {
  background-color: black;
  border-radius: 20px;
  opacity: 0.3;
}
.carousel-control-next-icon {
  background-color: black;
  border-radius: 20px;
  opacity: 0.3;
}
</style>
