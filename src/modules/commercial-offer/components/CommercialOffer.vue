<template>
  <div class="offer">
    <div class="wrapper">
      <h2 class="title">Title: Commercial offer</h2>
      <CommercialOfferForm
        class="offer__form"
        @submit:pick-up="pickUpProducts"
      ></CommercialOfferForm>
      <template v-if="products.length !== 0">
        <h3 class="products-list__title">Products list</h3>
        <products-list
          :products="products"
          class="products__list"
        ></products-list>
        <div class="control-buttons">
          <button class="cancel-btn" @click="cancelOffer" type="button">
            Cancel
          </button>
          <button class="approve-btn" @click="approveOffer" type="button">
            Approve
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import ProductsList from "@/modules/commercial-offer/components/ProductsList.vue";
import CommercialOfferForm from "@/modules/commercial-offer/components/CommercialOfferForm.vue";
import IProductParams from "@/modules/commercial-offer/interfaces/IProductParams";
import IProductData from "@/modules/commercial-offer/interfaces/IProductData";

export default defineComponent({
  name: "commercial-offer",
  data() {
    return {
      products: [] as Array<IProductData>,
      commercialOfferId: -1 as number,
    };
  },
  components: { CommercialOfferForm, ProductsList },
  methods: {
    async approveOffer() {
      await axios.post(`${process.env.VUE_APP_SERVER_URL}/commO/confirm`, {
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": localStorage.getItem("userId"),
        },
        offerId: this.commercialOfferId,
      });
      this.$router.go(0);
    },
    cancelOffer() {
      this.$router.go(0);
    },
    async pickUpProducts(product: IProductParams) {
      const { data } = await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/prod/getPrE`,
        {
          headers: {
            Accept: "application/json",
          },
          "category-id": product.categoryId,
          quantity: product.quantity,
          brightness: product.brightness,
          contrast: product.contrast,
          weight: product.weight,
          extra_roi: product.extraRoi,
        }
      );

      this.commercialOfferId = data.commId;
      console.log(`[dbg] ${this.commercialOfferId}`);
      let totalId: number = 0;
      this.products = data.data.map((product: any) => {
        return {
          ...product,
          id: totalId++,
        };
      });
    },
  },
});
</script>

<style scoped>
.wrapper {
  padding: 10px 20px;
  height: 100vh;
}
.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
}
.offer__form {
  margin-top: 30px;
}
.products-list__title {
  margin-top: 20px;
  color: #ffffff;
}
.products__list {
  margin-top: 10px;
}
.control-buttons {
  margin-top: 20px;
  display: flex;
  gap: 50px;
}
</style>
