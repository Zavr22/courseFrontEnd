<template>
  <div class="monitors">
    <h3 class="title">Title: Monitors</h3>
    <base-checkbox
      class="sort__checkbox"
      :value="sortByPriceTitle"
      @update:checkbox="
        (value) => {
          sortMonitors(value);
        }
      "
    ></base-checkbox>
    <products-list class="monitors-list" :products="monitors"></products-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProduct from "@/components/interfaces/IProduct";
import ProductsList from "@/components/ProductsList.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";

export default defineComponent({
  name: "product-monitors",
  components: { BaseCheckbox, ProductsList },
  data() {
    return {
      sortByPriceTitle: "Сортировать по возрастанию цены" as string,
      monitors: [] as Array<IProduct>,
    };
  },
  created() {
    this.monitors = [
      {
        id: 1,
        name: "Monitor 1",
        categoryId: 1,
        quantity: 1,
        brightness: "ярко",
        contrast: "да",
        price: 5000,
      },
      {
        id: 2,
        name: "Monitor 2",
        categoryId: 1,
        quantity: 1,
        brightness: "ярко",
        contrast: "да",
        price: 7000,
      },
      {
        id: 3,
        name: "Monitor 3",
        categoryId: 1,
        quantity: 1,
        brightness: "ярко",
        contrast: "да",
        price: 3000,
      },
    ] as Array<IProduct>;
    this.sortDescendingOrder();
  },
  methods: {
    sortMonitors(value: boolean) {
      if (value) {
        this.sortAscendingOrder();
      } else {
        this.sortDescendingOrder();
      }
    },
    sortAscendingOrder() {
      this.monitors.sort((a: IProduct, b: IProduct) => {
        return a.price - b.price;
      });
    },
    sortDescendingOrder() {
      this.monitors.sort((a: IProduct, b: IProduct) => {
        return b.price - a.price;
      });
    },
  },
});
</script>

<style scoped>
.monitors-list {
  margin-top: 20px;
}
.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
}

.sort__checkbox {
  color: #ffffff;
}
</style>
