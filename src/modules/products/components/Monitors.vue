<template>
  <div class="monitors">
    <h3 class="title">Title: Monitors</h3>
    <BaseCheckbox
      class="sort__checkbox"
      :value="sortByPriceTitle"
      @update:checkbox="
        (value) => {
          sortMonitors(value);
        }
      "
    ></BaseCheckbox>
    <ProductsList class="monitors-list" :products="monitors"></ProductsList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProduct from "@/modules/products/interfaces/IProduct";
import ProductsList from "@/modules/products/components/ProductsList.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";
import axios from "axios";

export default defineComponent({
  name: "product-monitors",
  components: { BaseCheckbox, ProductsList },
  data() {
    return {
      sortByPriceTitle: "Сортировать по возрастанию цены" as string,
      monitors: [] as Array<IProduct>,
    };
  },
  mounted() {
    this.getMonitors();
  },
  methods: {
    async getMonitors() {
      let data = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/prod/monitors`
      );
      console.log(data);
      this.monitors = data.data.data;
      this.sortDescendingOrder();
    },
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
.monitors {
  width: 100%;
}
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
