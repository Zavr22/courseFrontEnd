<template>
  <button class="button" :type="buttonType" @click="onClick">
    <span class="button__text">{{ buttonTitle }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "base-button",
  emits: ["click"],
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
    buttonType: {
      type: String,
      required: true,
    },
    buttonTitleColor: {
      type: String,
      required: false,
      default: "#ffffff",
    },
    buttonBackgroundColor: {
      type: String,
      required: false,
      default: "#2c4b85",
    },
  },
  methods: {
    onClick(event: Event) {
      if (this.buttonType !== "button") {
        return;
      }
      this.$emit("click");
    },
  },
});
</script>

<style scoped>
.button {
  background-color: v-bind(buttonBackgroundColor);
  padding: 14px 67px;
  width: max-content;
  border-radius: 2px;
  border: 0;
}

.button:hover {
  cursor: pointer;
}

.button__text {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  color: v-bind(buttonTitleColor);
}
</style>
