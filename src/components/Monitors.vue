<template>
  <div class="monitors">
    <h3 class="title">Title: Monitors</h3>
    <base-checkbox
      :value="sortByPriceTitle"
      @update:checkbox="
        (value) => {
          if (value) {
            sortAscendingOrder();
          } else {
            sortDescendingOrder();
          }
        }
      "
    ></base-checkbox>
    <div class="list">
      <monitor-item
        v-for="monitor in monitors"
        :key="monitor.id"
        :monitor="monitor"
      ></monitor-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IMonitor from "@/components/interfaces/IMonitor";
import MonitorItem from "@/components/ui/MonitorItem.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";

export default defineComponent({
  name: "product-monitors",
  components: { BaseCheckbox, MonitorItem },
  data() {
    return {
      sortByPriceTitle: "Сортировать по возрастанию цены" as String,
      monitors: [] as Array<IMonitor>,
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
    ] as Array<IMonitor>;
    this.sortDescendingOrder();
  },
  methods: {
    sortAscendingOrder() {
      this.monitors.sort((a: IMonitor, b: IMonitor) => {
        return (a.price as number) - (b.price as number);
      });
    },
    sortDescendingOrder() {
      this.monitors.sort((a: IMonitor, b: IMonitor) => {
        return (b.price as number) - (a.price as number);
      });
    },
  },
});
</script>

<style scoped>
.list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
}
</style>
