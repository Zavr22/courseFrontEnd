<template>
  <div class="videowalls">
    <h3 class="title">Video walls list</h3>
    <BaseCheckbox
      class="sort__checkbox"
      :value="sortByPriceTitle"
      @update:checkbox="
        (value) => {
          sortMonitors(value);
        }
      "
    ></BaseCheckbox>
    <VideoWallsList
      class="videowalls-list"
      :videowalls="videowalls"
    ></VideoWallsList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IVideowall from "@/modules/products/interfaces/IVideowall";
import VideoWallsList from "@/modules/products/components/VideoWallsList.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";
import axios from "axios";

export default defineComponent({
  name: "product-videowalls",
  components: { BaseCheckbox, VideoWallsList },
  data() {
    return {
      sortByPriceTitle: "Sort by ascending price" as string,
      videowalls: [] as Array<IVideowall>,
    };
  },
  mounted() {
    this.getMonitors();
  },
  methods: {
    async getMonitors() {
      let data = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/prod/videoW`
      );
      console.log(data);
      this.videowalls = data.data.data;
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
      this.videowalls.sort((a: IVideowall, b: IVideowall) => {
        return a.price - b.price;
      });
    },
    sortDescendingOrder() {
      this.videowalls.sort((a: IVideowall, b: IVideowall) => {
        return b.price - a.price;
      });
    },
  },
});
</script>

<style scoped>
.videowalls {
  width: 100%;
}
.videowalls-list {
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
