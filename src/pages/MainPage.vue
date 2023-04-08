<template>
  <div class="home">
    <div class="wrapper">
      <h1 class="home__title">{{ mainTitle }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home-page",
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

<style scoped></style>
