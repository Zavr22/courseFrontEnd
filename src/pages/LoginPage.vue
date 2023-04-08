<template>
  <div class="login">
    <div class="wrapper login__wrapper">
      <div class="login__background">
        <div class="app_info login__app_info">
          <h1 class="app_info__title">Insightly</h1>
          <h2 class="app_info__subtitle">CRM software</h2>
        </div>
      </div>
      <div class="login__content">
        <h3 class="login__title">{{ loginTitle }}</h3>
        <p class="login__subtitle">{{ loginSubtitle }}</p>
        <login-form></login-form>
        <p class="login__no_account">Don't have an account yet?</p>
        <router-link to="/register" class="login__register">
          <p class="login_register_text">Register</p>
          <svg class="login_register_arrow"></svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/LoginForm.vue";
export default defineComponent({
  name: "login-page",
  components: {
    LoginForm,
  },
  data() {
    return {
      loginTitle: "Hello!",
      loginSubtitle: "Enter your email and password to log in",
    };
  },
});
</script>

<style scoped>
@import "@/assets/styles/LoginPage.css";
</style>
