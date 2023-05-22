<template>
  <div class="entry_background">
    <div class="app_info login__app_info">
      <h1 class="app_info__title">{{ appTitle }}</h1>
      <h2 class="app_info__subtitle">{{ appSubtitle }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "entry",
  data() {
    return {
      appTitle: "Insightly" as String,
      appSubtitle: "SPQ software" as String,
    };
  },
});
</script>

<style src="@/assets/styles/EntryBackground.css" scoped></style>
