<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "app",
})
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", serif;
}

</style>