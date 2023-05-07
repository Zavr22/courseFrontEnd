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
          <th>Focal distance</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="projector in projectors" :key="projector.id">
          <tr class="product__row">
            <td>{{ projector.name }}</td>
            <td>{{ projector.price }}</td>
            <td>{{ projector.quantity }}</td>
            <td>{{ projector.brightness }}</td>
            <td>{{ projector.contrast }}</td>
            <td>{{ projector.weight }}</td>
            <td>{{ projector.focal_distance }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IProjector from "@/modules/products/interfaces/IProjector";

export default defineComponent({
  name: "products-list",
  props: {
    projectors: {
      type: [] as PropType<Array<IProjector>>,
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
