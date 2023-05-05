<template>
  <TransitionGroup class="list" tag="div" name="list">
    <table class="products">
      <thead class="table__header">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Brightness</th>
          <th>Contrast</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="product in products" :key="product.id">
          <tr class="product__row">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.brightness }}</td>
            <td>{{ product.contrast }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProductItem from "@/modules/products/components/ProductItem.vue";
import IProduct from "@/modules/products/interfaces/IProduct";

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

.list-move {
  transition: all 0.5s ease;
}

.table {
  width: 100%;
}

.table__header {
  color: #ffffff;
}

.products,
.products th,
.products td {
  border: 3px solid #000000;
  border-collapse: collapse;
}

.products th,
.products td {
  padding: 10px;
}

.product__row > td {
  color: #ffffff;
}
</style>
