<template>
  <div class="item">
    <p class="item__name">Name: {{ monitor.name }}</p>
    <p class="item__price">Price: {{ monitor.price }}</p>
    <p class="item__quantity">Quantity: {{ monitor.quantity }}</p>
    <p class="item__brightness">Brightness: {{ monitor.brightness }}</p>
    <p class="item__contrast">Contrast: {{ monitor.contrast }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IMonitor from "@/components/interfaces/IMonitor";

export default defineComponent({
  name: "monitor-item",
  props: {
    monitor: {
      type: Object as PropType<IMonitor>,
      required: true,
      default: {},
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
