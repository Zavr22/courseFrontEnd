<template>
  <div class="list">
    <product-item
      class="list__item"
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProductItem from "@/modules/commercial-offer/components/ProductItem.vue";
import IProductData from "@/modules/commercial-offer/interfaces/IProductData";

export default defineComponent({
  name: "products-list",
  components: { ProductItem },
  props: {
    products: {
      type: [] as PropType<Array<IProductData>>,
      required: true,
    },
  },
});
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
