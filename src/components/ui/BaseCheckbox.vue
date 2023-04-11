<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      name="checkbox__input"
      id="checkbox__input"
      @change="onCheckboxChange"
    />
    <label class="checkbox__label" for="checkbox__input">{{ value }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "base-checkbox",
  emits: ["update:checkbox"],
  props: {
    value: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    onCheckboxChange(event: any) {
      // console.log(event.target.checked);
      this.$emit("update:checkbox", event.target.checked);
    },
  },
});
</script>

<style src="@/assets/styles/BaseCheckbox.css" scoped></style>
