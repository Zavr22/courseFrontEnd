<template>
  <div>
    <form class="form" @submit="sendUserCredentials">
      <input class="email" v-model="email" placeholder="Email" type="text" />
      <input
        class="password"
        v-model="password"
        placeholder="Password"
        type="password"
      />
      <router-link class="forgot_password" to="/restorePassword"
        >Forgot your password?
      </router-link>
      <div class="remember form__remember">
        <input
          class="remember__checkbox"
          v-model="isRemember"
          type="checkbox"
          name="remember"
          id="remember"
        />
        <label class="remember__label" for="remember">Remember me</label>
      </div>
      <button class="form__log_in log_in" type="submit">
        <span class="log_in__text">Log in</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IUserCredentials from "@/components/interfaces/IUserCredentials";

export default defineComponent({
  name: "login-form",
  data() {
    return {
      email: "" as String,
      password: "" as String,
      isRemember: false as Boolean,
    };
  },
  emits: ["log-in"],
  methods: {
    sendUserCredentials(event: Event) {
      event.preventDefault();
      const userCredentials: IUserCredentials = {
        email: this.email,
        password: this.password,
        isRemember: this.isRemember,
      };
      this.$emit("log-in", userCredentials);
    },
  },
});
</script>

<style scoped>
@import "@/assets/styles/LoginForm.css";
</style>
