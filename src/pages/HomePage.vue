<template>
  <div class="home">
    <div class="wrapper home__wrapper">
      <navigation class="home__navigation"></navigation>
      <router-view class="home__content"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Navigation.vue";

export default defineComponent({
  name: "home-page",
  components: { Navigation },
  data() {
    return {
      mainTitle: "Main page",
    };
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.push("/login");
    }
  },
  computed: {
    userID(): string {
      return localStorage.userID === undefined ? "" : localStorage.userID;
    },
    isAuthenticated(): boolean {
      return this.userID !== "";
    },
  },
});
</script>

<style src="@/assets/styles/HomePage.css" scoped></style>
