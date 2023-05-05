<template>
  <div class="settings">
    <BaseInput
      class="input"
      v-model="roi"
      :type="'text'"
      :placeholder="'Input roi'"
    />
    <BaseButton
      class="btn-update"
      :button-title="'Update'"
      :button-type="'button'"
      @click="submitSetting"
    ></BaseButton>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "settings",
  data() {
    return {
      roi: "" as string,
    };
  },
  methods: {
    async submitSetting() {
      await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/settings/profit`,
        {
          roi: this.roi,
        },
        {
          headers: {
            "X-User-Id": +localStorage.getItem("userID")!,
          },
        }
      );
    },
  },
  components: { BaseButton, BaseInput },
});
</script>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input {
  background-color: rgba(217, 217, 217, 1);
}
.input::placeholder {
  color: #000000;
}

.btn-update {
  margin-top: 10px;
}
</style>
