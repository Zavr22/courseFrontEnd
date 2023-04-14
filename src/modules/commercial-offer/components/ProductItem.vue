<template>
  <div class="item">
    <p class="item__name">Name: {{ product.name }}</p>
    <p class="item__price">Price: {{ product.price }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IProductData from "@/modules/commercial-offer/interfaces/IProductData";

export default defineComponent({
  name: "monitor-item",
  props: {
    product: {
      type: Object as PropType<IProductData>,
      required: true,
    },
  },
});
</script>

<style scoped>
.item {
  padding: 5px;
  border: 3px solid #ffffff;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
}
</style>
