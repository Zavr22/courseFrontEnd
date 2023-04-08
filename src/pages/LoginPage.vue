<template>
  <div class="login">
    <div class="wrapper login__wrapper">
      <div class="login__background">
        <div class="app_info login__app_info">
          <h1 class="app_info__title">{{ appTitle }}</h1>
          <h2 class="app_info__subtitle">{{ appSubtitle }}</h2>
        </div>
      </div>
      <div class="login__content">
        <h3 class="login__title">{{ loginTitle }}</h3>
        <p class="login__subtitle">{{ loginSubtitle }}</p>
        <login-form class="login__form" @log-in="proceedToLogIn"></login-form>
        <p class="login__no_account">{{ noAccount }}</p>
        <router-link class="login__register" to="/registration">
          <span class="login_register__text">{{ registrationText }}</span>
          <span class="login_register__arrow"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/LoginForm.vue";
import IUserCredentials from "@/components/interfaces/IUserCredentials";

export default defineComponent({
  name: "login-page",
  components: {
    LoginForm,
  },
  data() {
    return {
      // TODO: erase this credentials
      defaultUserCredentials: {
        email: "test",
        password: "test",
        isRemember: false,
      } as IUserCredentials,
      appTitle: "Insightly" as String,
      appSubtitle: "CRM software" as String,
      noAccount: "Don't have an account yet?" as String,
      registrationText: "Registration" as String,
      loginTitle: "Hello!" as String,
      loginSubtitle: "Enter your email and password to log in" as String,
    };
  },
  methods: {
    async getUserData(
      userCredentials: IUserCredentials
    ): Promise<IUser | undefined> {
      if (
        userCredentials.email === this.defaultUserCredentials.email &&
        userCredentials.password === this.defaultUserCredentials.password
      ) {
        return { id: 1, isRemember: userCredentials.isRemember } as IUser;
      }
      return undefined;
    },
    async proceedToLogIn(userCredentials: IUserCredentials): Promise<void> {
      const user: IUser | undefined = await this.getUserData(userCredentials);
      if (user !== undefined) {
        this.saveUserToLocalStorage(user);
        this.$router.push("/");
      } else {
        console.log("wrong user");
      }
    },
    saveUserToLocalStorage(user: IUser): void {
      localStorage.setItem("userID", user.id.toString());
    },
  },
});
</script>

<style scoped>
@import "@/assets/styles/LoginPage.css";
</style>
