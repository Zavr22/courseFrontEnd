<template>
  <div>
    <form class="form">
      <input
        type="text"
        class="email"
        placeholder="Email"
      />
      <input
        type="password"
        class="password"
        placeholder="Password"
      />
      <router-link
        to="/restorePassword"
        class="forgot_password"
      >Forgot your password?
      </router-link>
      <div class="remember form__remember">
        <input
          class="remember__checkbox"
          type="checkbox"
          name="remember"
          id="remember"
        />
        <label
          class="remember__label"
          for="remember"
        >Remember me</label>
      </div>
      <button class="form__log_in log_in"><span class="log_in__text">Log in</span></button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
  @import "@/assets/styles/LoginForm.css";
</style>
