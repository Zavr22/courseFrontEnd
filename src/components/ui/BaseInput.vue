<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script lang="ts">
import { placeholder } from "@babel/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "base-input",

  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<style scoped>
.base-input {
  padding: 12px 20px;
  height: 50px;
  background-color: rgba(217, 217, 217, 0.51);
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
}

.base-input::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;
}
</style>
