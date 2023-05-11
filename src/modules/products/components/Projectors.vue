<template>
  <div class="projectors">
    <h3 class="title">Projectors list</h3>
    <BaseCheckbox
      class="sort__checkbox"
      :value="sortByPriceTitle"
      @update:checkbox="
        (value) => {
          sortProjectors(value);
        }
      "
    ></BaseCheckbox>
    <ProjectorsList
      class="projectors-list"
      :projectors="projectors"
    ></ProjectorsList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProjector from "@/modules/products/interfaces/IProjector";
import ProjectorsList from "@/modules/products/components/ProjectorsList.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";
import axios from "axios";

export default defineComponent({
  name: "product-projectors",
  components: { BaseCheckbox, ProjectorsList },
  data() {
    return {
      sortByPriceTitle: "Sort by ascending price" as string,
      projectors: [] as Array<IProjector>,
    };
  },
  mounted() {
    this.getProjectors();
  },
  methods: {
    async getProjectors() {
      let data = await axios.get(`${process.env.VUE_APP_SERVER_URL}/prod/proj`);
      console.log(data);
      this.projectors = data.data.data;
      this.projectors = data.data.data.map((projector: any) => {
        return {
          ...projector,
          category_id: projector["category-id"],
          focal_distance: projector.focalDistance,
        } as IProjector;
      });
      this.sortDescendingOrder();
    },
    sortProjectors(value: boolean) {
      if (value) {
        this.sortAscendingOrder();
      } else {
        this.sortDescendingOrder();
      }
    },
    sortAscendingOrder() {
      this.projectors.sort((a: IProjector, b: IProjector) => {
        return a.price - b.price;
      });
    },
    sortDescendingOrder() {
      this.projectors.sort((a: IProjector, b: IProjector) => {
        return b.price - a.price;
      });
    },
  },
});
</script>

<style scoped>
.projectors {
  width: 100%;
}
.projectors-list {
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
