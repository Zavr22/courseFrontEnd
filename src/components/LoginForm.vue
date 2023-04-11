<template>
  <div>
    <div v-if="isInvalidData" class="form__incorrect-cred">
      {{ invalidDataText }}
    </div>
    <form class="form" @submit="sendUserCredentials">
      <input
        class="username"
        v-model="username"
        placeholder="Username"
        type="text"
      />
      <input
        class="password"
        v-model="password"
        placeholder="Password"
        type="password"
      />
      <router-link class="forgot_password" to="/restorePassword"
        >Forgot your password?
      </router-link>
      <base-checkbox
        class="form__remember"
        :value="checkboxTitle"
        :checkbox="isRemember"
        @update:checkbox="
          (value: Boolean) => {
            isRemember = value;
          }
        "
      ></base-checkbox>
      <!--      <div class="remember form__remember">-->
      <!--        <input-->
      <!--          class="remember__checkbox"-->
      <!--          v-model="isRemember"-->
      <!--          type="checkbox"-->
      <!--          name="remember"-->
      <!--          id="remember"-->
      <!--        />-->
      <!--        <label class="remember__label" for="remember">Remember me</label>-->
      <!--      </div>-->
      <button class="form__log_in log_in" type="submit">
        <span class="log_in__text">Log in</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IUserCredentials from "@/components/interfaces/IUserCredentials";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";

export default defineComponent({
  name: "login-form",
  components: {
    BaseCheckbox,
  },
  data() {
    return {
      invalidDataText: "Invalid username and/or password" as String,
      username: "" as String,
      password: "" as String,
      isRemember: false as Boolean,
      checkboxTitle: "Remember me?" as String,
    };
  },
  emits: ["log-in"],
  props: {
    isInvalidData: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    sendUserCredentials(event: Event) {
      event.preventDefault();
      const userCredentials: IUserCredentials = {
        username: this.username,
        password: this.password,
        isRemember: this.isRemember,
      };
      this.$emit("log-in", userCredentials);
    },
  },
});
</script>

<style src="@/assets/styles/LoginForm.css" scoped></style>
