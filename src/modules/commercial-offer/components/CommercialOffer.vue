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
          <BaseButton
            class="cancel-btn"
            @click="cancelOffer"
            :button-title="'Cancel'"
            :button-type="'button'"
            :button-title-color="'#000000'"
            :button-background-color="'rgba(217, 217, 217, 1)'"
          >
          </BaseButton>
          <BaseButton
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
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import ProductsList from "@/modules/commercial-offer/components/ProductsList.vue";
import CommercialOfferForm from "@/modules/commercial-offer/components/CommercialOfferForm.vue";
import IProductParams from "@/modules/commercial-offer/interfaces/IProductParams";
import IProductData from "@/modules/commercial-offer/interfaces/IProductData";
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
  name: "commercial-offer",
  data() {
    return {
      products: [] as Array<IProductData>,
      commercialOfferId: -1 as number,
    };
  },
  components: { CommercialOfferForm, ProductsList, BaseButton },
  methods: {
    async approveOffer() {
      console.log(localStorage.getItem("userID"));

      await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/commO/confirm`,
        {
          offerId: this.commercialOfferId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": localStorage.getItem("userID"),
          },
        }
      );

      this.$router.go(0);
    },
    cancelOffer() {
      this.$router.go(0);
    },
    async pickUpProducts(product: IProductParams) {
      const { data } = await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/prod/getPrE`,
        {
          "category-id": product.categoryId,
          quantity: product.quantity,
          brightness: product.brightness,
          contrast: product.contrast,
          weight: product.weight,
          extra_roi: product.extraRoi,
          focal_distance: product.focalDistance,
        }
      );

      this.commercialOfferId = data.commId;
      let totalId: number = 0;
      if (data.data === null) {
        return;
      }
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
