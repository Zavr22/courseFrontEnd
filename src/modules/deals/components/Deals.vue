<template>
  <div class="wrapper">
    <template v-if="currentRoutePath === 'deals'">
      <h2 class="approved-amount">
        Number of approved deals: {{ approvedDealsAmount }}
      </h2>
      <div class="links">
        <RouterLink
          class="deal-link"
          v-for="deal in deals"
          :key="deal.id"
          :to="`/deals/${deal.id}`"
          >Deal #{{ deal.id }} ({{ deal.status }})</RouterLink
        >
      </div>
    </template>
    <RouterView v-else></RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface IDeal {
  id: number;
  status: string;
}

export default defineComponent({
  name: "deals",
  data() {
    return {
      deals: [] as Array<IDeal>,
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

      this.deals = result.data.data.map((element: any) => {
        return {
          id: element.id,
          status: element.status,
        } as IDeal;
      });
    },
  },
  computed: {
    approvedDealsAmount(): number {
      return this.deals.filter((deal: IDeal) => deal.status === "approved")
        .length;
    },
    currentRoutePath() {
      return this.$route.name;
    },
  },
});
</script>

<style scoped>
.wrapper {
  padding: 20px 10px;
  overflow: auto;
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
  width: max-content;
}

.approved-amount {
  margin-bottom: 20px;
  color: #ffffff;
  width: max-content;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
