<template>
  <div class="products">
    <div class="wrapper">
      <div v-if="currentRoutePath === 'products'" class="categories">
        <router-link class="categories__item" :to="{ name: 'product-monitors' }"
          >Monitors</router-link
        >
        <router-link
          class="categories__item"
          :to="{ name: 'product-projectors' }"
        >
          Projectors</router-link
        >
        <router-link
          class="categories__item"
          :to="{ name: 'product-videowalls' }"
        >
          Video walls</router-link
        >
        <router-link class="categories__item" :to="{ name: 'product-mounts' }">
          Mounts</router-link
        >
      </div>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "products",
  computed: {
    currentRoutePath() {
      return this.$route.name;
    },
  },
});
</script>

<style src="@/assets/styles/Products.css" scoped></style>
