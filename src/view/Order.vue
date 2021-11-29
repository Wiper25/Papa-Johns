<template>
  <div class="Order">
    <vOrderProductBasket />
    <vOrderAdditives />
    <vOrderContact />
    <vOrderDeliveryMethod />
    <vOrderAddress />
  </div>
</template>

<script>
import vOrderProductBasket from "../components/order/v-order-product-basket.vue";
import vOrderAdditives from "../components/order/v-order-additives.vue";
import vOrderContact from "../components/order/v-order-contact.vue";
import vOrderDeliveryMethod from "../components/order/v-order-delivery-method.vue";
import vOrderAddress from "../components/order/v-order-maps-address.vue";

export default {
  components: {
    vOrderProductBasket,
    vOrderAdditives,
    vOrderContact,
    vOrderDeliveryMethod,
    vOrderAddress,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss"></style>
