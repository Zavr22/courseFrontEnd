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
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="videowall in videowalls" :key="videowall.id">
          <tr class="product__row">
            <td>{{ videowall.name }}</td>
            <td>{{ videowall.price }}</td>
            <td>{{ videowall.quantity }}</td>
            <td>{{ videowall.brightness }}</td>
            <td>{{ videowall.contrast }}</td>
            <td>{{ videowall.weight }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IVideowall from "@/modules/products/interfaces/IVideowall";

export default defineComponent({
  name: "products-list",
  props: {
    videowalls: {
      type: [] as PropType<Array<IVideowall>>,
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
