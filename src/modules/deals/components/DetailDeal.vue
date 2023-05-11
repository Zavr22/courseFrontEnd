<template>
  <div class="wrapper">
    <h2 class="title">Deal: {{ dealID }}</h2>
    <p class="status">Status: {{ isApproved ? "approved" : "not approved" }}</p>
    <table class="products">
      <thead class="table__header">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="product in products" :key="product.id">
          <tr class="product__row">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <template v-if="userID === 1">
      <div class="control-buttons">
        <BaseButton
          v-if="isApproved"
          class="cancel-btn"
          @click="unapproveOffer"
          :button-title="'Unapprove'"
          :button-type="'button'"
          :button-title-color="'#000000'"
          :button-background-color="'rgba(217, 217, 217, 1)'"
        >
        </BaseButton>
        <BaseButton
          v-else
          class="approve-btn"
          @click="approveOffer"
          :button-title="'Approve'"
          :button-type="'button'"
          :button-title-color="'#000000'"
          :button-background-color="'rgba(217, 217, 217, 1)'"
        >
        </BaseButton>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import IDealProduct from "@/modules/deals/interfaces/IDealProduct";
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
  name: "deal-products",
  components: {
    BaseButton,
  },
  data() {
    return {
      products: [] as Array<IDealProduct>,
      isApproved: false,
    };
  },
  async mounted() {
    const userID: number = +localStorage.getItem("userID")!;
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

    const deal = result.data.data.find(
      (element: any) => element.id === this.dealID
    );

    this.isApproved = deal.status === "approved";

    const dealProducts = JSON.parse(deal.products);

    this.products = dealProducts.map((element: any) => {
      return {
        name: element.name,
        price: element.price,
      } as IDealProduct;
    });
  },
  methods: {
    async approveOffer() {
      await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/commO/confirm`,
        {
          offerId: this.dealID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": this.userID,
          },
        }
      );

      this.$router.go(0);
    },
    unapproveOffer() {
      console.log("unapprove");
      this.$router.go(0);
    },
  },
  computed: {
    dealID(): number {
      return +this.$route.params.id;
    },
    userID(): number {
      return +localStorage.getItem("userID")!;
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
  margin-top: 10px;
}

.list-move {
  transition: all 0.5s ease;
}

.products {
  margin-top: 10px;
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

.title {
  color: #ffffff;
}

.status {
  color: #ffffff;
  margin-top: 10px;
  font-size: 20px;
}

.control-buttons {
  margin-top: 20px;
  display: flex;
  gap: 50px;
}
</style>
