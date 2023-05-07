<template>
  <div class="mounts">
    <h3 class="title">Title: Mounts</h3>
    <BaseCheckbox
      class="sort__checkbox"
      :value="sortByPriceTitle"
      @update:checkbox="
        (value) => {
          sortMounts(value);
        }
      "
    ></BaseCheckbox>
    <MountsList class="mounts-list" :mounts="mounts"></MountsList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IMount from "@/modules/products/interfaces/IMount";
import MountsList from "@/modules/products/components/MountsList.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";
import axios from "axios";

export default defineComponent({
  name: "product-mounts",
  components: { BaseCheckbox, MountsList },
  data() {
    return {
      sortByPriceTitle: "Сортировать по возрастанию цены" as string,
      mounts: [] as Array<IMount>,
    };
  },
  mounted() {
    this.getMounts();
  },
  methods: {
    async getMounts() {
      let data = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/prod/mounts`
      );
      console.log(data);
      this.mounts = data.data.data;
      this.sortDescendingOrder();
    },
    sortMounts(value: boolean) {
      if (value) {
        this.sortAscendingOrder();
      } else {
        this.sortDescendingOrder();
      }
    },
    sortAscendingOrder() {
      this.mounts.sort((a: IMount, b: IMount) => {
        return a.price - b.price;
      });
    },
    sortDescendingOrder() {
      this.mounts.sort((a: IMount, b: IMount) => {
        return b.price - a.price;
      });
    },
  },
});
</script>

<style scoped>
.mounts {
  width: 100%;
}
.mounts-list {
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
