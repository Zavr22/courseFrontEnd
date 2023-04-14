<template>
  <div class="item">
    <p class="item__name">Name: {{ product.name }}</p>
    <p class="item__price">Price: {{ product.price }}</p>
    <p class="item__quantity">Quantity: {{ product.quantity }}</p>
    <p class="item__brightness">Brightness: {{ product.brightness }}</p>
    <p class="item__contrast">Contrast: {{ product.contrast }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IProduct from "@/components/interfaces/IProduct";

export default defineComponent({
  name: "monitor-item",
  props: {
    product: {
      type: Object as PropType<IProduct>,
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
