<template>
  <div class="login">
    <div class="wrapper login__wrapper">
      <entry class="login__background"></entry>
      <div class="login__content">
        <h3 class="login__title">{{ loginTitle }}</h3>
        <p class="login__subtitle">{{ loginSubtitle }}</p>
        <login-form
          :isInvalidData="invalidData"
          class="login__form"
          @log-in="proceedToLogIn"
        ></login-form>
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
import axios from "axios";
import { defineComponent } from "vue";
import LoginForm from "@/modules/login/components/LoginForm.vue";
import IUserCredentials from "@/modules/login/interfaces/IUserCredentials";
import Entry from "@/components/EntryBackground.vue";

export default defineComponent({
  name: "login-page",
  components: {
    Entry,
    LoginForm,
  },
  data() {
    return {
      noAccount: "Don't have an account yet?" as String,
      registrationText: "Registration" as String,
      loginTitle: "Hello!" as String,
      loginSubtitle: "Enter your email and password to log in" as String,
      invalidData: false as boolean,
    };
  },
  methods: {
    async getUserData(
      userCredentials: IUserCredentials
    ): Promise<IUser | undefined> {
      try {
        console.log(process.env.VUE_APP_SERVER_URL);
        const { data, status } = await axios.post(
          `${process.env.VUE_APP_SERVER_URL}/auth/signIn`,
          // "http://localhost:8000/auth/signIn",
          {
            headers: {
              Accept: "application/json",
            },
            username: userCredentials.username,
            password: userCredentials.password,
          }
        );

        if (status !== 200) {
          return undefined;
        }

        return {
          id: data.id,
          isRemember: userCredentials.isRemember,
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
        } else {
          console.log("unexpected error: ", error);
        }
        return undefined;
      }
    },
    async proceedToLogIn(userCredentials: IUserCredentials): Promise<void> {
      const user: IUser | undefined = await this.getUserData(userCredentials);
      if (user !== undefined) {
        console.log("ok");
        this.saveUserToLocalStorage(user);

        this.$router.push("/");
      } else {
        this.invalidData = true;
        console.log("wrong user");
      }
    },
    saveUserToLocalStorage(user: IUser): void {
      localStorage.setItem("userID", user.id.toString());
    },
  },
});
</script>

<style src="@/assets/styles/LoginPage.css" scoped></style>
