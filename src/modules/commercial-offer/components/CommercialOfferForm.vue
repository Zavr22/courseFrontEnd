<template>
  <form class="form" autocomplete="off">
    <div class="inputs">
      <select v-model="selectedProductTitle">
        <option
          v-for="product in products"
          :key="product.id"
          :name="product.title"
        >
          {{ product.title }}
        </option>
      </select>

      <template v-if="selectedProductTitle !== ''">
        <base-input
          v-model="selectedProduct.brightness"
          :type="'text'"
          :placeholder="'Яркость'"
          class="input"
        ></base-input>
        <base-input
          v-model="selectedProduct.contrast"
          :type="'text'"
          :placeholder="'Контраст'"
          class="input"
        ></base-input>
        <base-input
          v-model.number="selectedProduct.weight"
          :type="'text'"
          :placeholder="'Вес'"
          class="input"
        ></base-input>
        <base-input
          class="input"
          v-model.number="selectedProduct.quantity"
          :type="'text'"
          :placeholder="'Количество'"
        ></base-input>
        <base-input
          class="input"
          v-model.number="selectedProduct.extraRoi"
          :type="'text'"
          :placeholder="'Roi'"
        ></base-input>
      </template>
    </div>
    <button
      class="form__pick-up pick-up"
      v-if="selectedProductTitle !== ''"
      @click="onClick"
    >
      Подобрать
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProductParams from "@/modules/commercial-offer/interfaces/IProductParams";
import IProductCategoryData from "@/modules/commercial-offer/interfaces/IProductCategoryData";
import BaseInput from "@/components/ui/BaseInput.vue";

export default defineComponent({
  name: "commercial-offer-form",
  data() {
    return {
      selectedProduct: {} as IProductParams,
      products: [
        { id: 1, title: "Проекторы" },
        { id: 2, title: "Мониторы" },
        { id: 3, title: "Видеостены" },
      ] as Array<IProductCategoryData>,
      selectedProductTitle: "" as string,
    };
  },
  emits: ["submit:pick-up"],
  components: { BaseInput },
  methods: {
    onClick(event: Event) {
      event.preventDefault();
      this.selectedProduct.categoryId = this.products.find(
        (product: IProductCategoryData) =>
          product.title === this.selectedProductTitle
      )!.id;
      this.$emit("submit:pick-up", this.selectedProduct);
    },
  },
});
</script>

<style scoped>
.form__pick-up {
  margin-top: 20px;
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.input {
  background-color: rgba(217, 217, 217, 1);
}
.input::placeholder {
  color: #000000;
}
</style>
