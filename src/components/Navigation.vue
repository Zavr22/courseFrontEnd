<template>
  <div class="nav">
    <div class="logo">
      <router-link to="/" class="logo__link">Insightly</router-link>
    </div>
    <nav class="menu">
      <ul class="menu__list">
        <!--      TODO: realize commercial offer component-->
        <router-link
          to="/commercial-offer"
          class="menu__item"
          exact-active-class="menu__item_active"
          >Commercial Offer</router-link
        >
        <!--      TODO: realize products component-->
        <router-link
          to="/products"
          class="menu__item"
          exact-active-class="menu__item_active"
          >Products</router-link
        >
        <!--      TODO: realize deals component-->
        <router-link
          to="/deals"
          class="menu__item"
          exact-active-class="menu__item_active"
          >Deals</router-link
        >
        <!--      TODO: realize settings component-->
        <router-link
          to="/settings"
          class="menu__item"
          exact-active-class="menu__item_active"
          >Settings</router-link
        >
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

export default defineComponent({
  name: "navigation",
  computed: {
    currentRouteName(): RouteRecordName {
      return this.$route.name!;
    },
  },
});
</script>

<style src="@/assets/styles/Navigation.css" scoped></style>
