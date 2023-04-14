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
import ProductItem from "@/components/ProductItem.vue";
import IProduct from "@/components/interfaces/IProduct";

export default defineComponent({
  name: "products-list",
  components: { ProductItem },
  props: {
    products: {
      type: [] as PropType<Array<IProduct>>,
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
