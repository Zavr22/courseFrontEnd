<template>
  <div class="wrapper">
    <template v-if="currentRoutePath === 'deals'">
      <div class="links">
        <RouterLink
          class="deal-link"
          v-for="id in dealIDs"
          :key="id"
          :to="`/deals/${id}`"
          >Deal #{{ id }}</RouterLink
        >
      </div>
    </template>
    <RouterView v-else></RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "deals",
  data() {
    return {
      dealIDs: [] as Array<number>,
    };
  },
  mounted() {
    const userID: string | null = localStorage.getItem("userID");
    this.getDeals(userID === null ? -1 : +userID);
  },
  methods: {
    async getDeals(userID: number) {
      let result;
      if (userID !== 1) {
        result = await axios.get(
          `${process.env.VUE_APP_SERVER_URL}/commO/getAllForMng`,
          {
            headers: {
              "X-User-Id": userID,
            },
          }
        );
      } else {
        result = await axios.get(
          `${process.env.VUE_APP_SERVER_URL}/commO/commO`,
          {
            headers: {
              "X-User-Id": userID,
            },
          }
        );
      }

      this.dealIDs = result.data.data.map((element: any) => {
        return element.id;
      });
    },
  },
  computed: {
    currentRoutePath() {
      return this.$route.name;
    },
  },
});
</script>

<style scoped>
.wrapper {
  padding: 20px 10px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.list-move {
  transition: all 0.5s ease;
}

.deal-link {
  color: #ffffff;
  font-size: 24px;
}

.links {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
}
</style>
