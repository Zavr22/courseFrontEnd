<template>
  <div class="nav">
    <div class="logo">
      <router-link to="/" class="logo__link">Insightly</router-link>
    </div>
    <nav class="menu">
      <ul class="menu__list">
        <router-link
          :to="{ name: 'commercial-offer' }"
          class="menu__item comm-offer-item item"
          active-class="menu__item_active"
        >
          <div class="item__content">
            <span class="comm-offer-item__label item__label"></span>
            <span class="item__text">Commercial Offer</span>
          </div>
          <div class="item__rect"></div>
        </router-link>
        <router-link
          :to="{ name: 'products' }"
          class="menu__item products-item item"
          active-class="menu__item_active"
          append
        >
          <div class="item__content">
            <span class="products-item__label item__label"></span>
            <span class="item__text">Products</span>
          </div>
          <div class="item__rect"></div>
        </router-link>
        <router-link
          to="/deals"
          class="menu__item deals-item item"
          active-class="menu__item_active"
        >
          <div class="item__content">
            <span class="deals-item__label item__label"></span>
            <span class="item__text">Deals</span>
          </div>
          <div class="item__rect"></div>
        </router-link>
        <router-link
          v-if="isDirector"
          to="/settings"
          class="menu__item settings-item item"
          active-class="menu__item_active"
        >
          <div class="item__content">
            <span class="settings-item__label item__label"></span>
            <span class="item__text">Settings</span>
          </div>
          <div class="item__rect"></div>
        </router-link>
      </ul>
    </nav>
    <div class="logout" @click="logout">
      <span class="logout__text">Logout</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "navigation",
  methods: {
    logout() {
      localStorage.removeItem("userID");
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    isDirector(): boolean {
      return localStorage.getItem("userID") === "1";
    },
  },
});
</script>

<style src="@/assets/styles/Navigation.css" scoped></style>
