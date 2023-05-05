<template>
  <div class="registration">
    <div class="wrapper registration__wrapper">
      <entry class="registration__background"></entry>
      <div class="registration__content">
        <h3 class="registration__title">{{ registrationTitle }}</h3>
        <p class="registration__subtitle">{{ registrationSubtitle }}</p>
        <registration-form
          class="registration__form"
          @register-user="registerNewUser"
        ></registration-form>
        <p class="registration__have_account">{{ haveAccount }}</p>
        <router-link class="registration_login" to="/login">
          <span class="registration_login__text">{{ loginText }}</span>
          <span class="registration_login__arrow"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Entry from "@/components/EntryBackground.vue";
import { defineComponent } from "vue";
import RegistrationForm from "@/modules/registration/components/RegistrationForm.vue";
import IUserRegistrationData from "@/modules/registration/interfaces/IUserRegistrationData";
import axios from "axios";

export default defineComponent({
  name: "registration-page",
  components: { RegistrationForm, Entry },
  data() {
    return {
      registrationTitle: "Hello!" as String,
      registrationSubtitle:
        "To register in the system, enter the data" as String,
      haveAccount: "Already have an account?" as String,
      loginText: "Log in" as String,
    };
  },
  methods: {
    async registerNewUser(userRegistrationData: IUserRegistrationData) {
      const { status } = await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/auth/signUp`,
        {
          name: userRegistrationData.fullName,
          username: userRegistrationData.username,
          password: userRegistrationData.password,
          role: 0,
        }
      );

      if (status === 200) {
        this.$router.push("/login");
      }
      return;
    },
  },
});
</script>

<style src="@/assets/styles/RegistrationPage.css" scoped></style>
