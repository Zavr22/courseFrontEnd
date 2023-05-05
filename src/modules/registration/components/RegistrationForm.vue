<template>
  <div>
    <form class="form" @submit="onSubmit">
      <div class="inputs">
        <input
          type="text"
          class="full-name"
          v-model="fullName"
          placeholder="Full name"
        />
        <input
          type="text"
          class="job-title"
          v-model="jobTitle"
          placeholder="Job title"
        />
        <input
          type="text"
          class="username"
          v-model="username"
          placeholder="Username"
        />
        <input
          type="password"
          class="password"
          v-model="password"
          placeholder="Password"
        />
        <input
          type="password"
          class="password_confirmation"
          v-model="passwordConfirmation"
          placeholder="Confirm password"
        />
      </div>
      <BaseButton
        class="form__register"
        :button-title="'Register'"
        :button-type="'submit'"
      ></BaseButton>
      <!--      <button class="form__register register" type="submit">-->
      <!--        <span class="register__text">Register</span>-->
      <!--      </button>-->
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IUserRegistrationData from "@/modules/registration/interfaces/IUserRegistrationData";
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
  name: "registration-form",
  emits: ["register-user"],
  components: { BaseButton },
  data() {
    return {
      fullName: "" as string,
      jobTitle: "" as string,
      username: "" as string,
      password: "" as string,
      passwordConfirmation: "" as string,
    };
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault();

      if (this.password !== this.passwordConfirmation) {
        console.log("Passwords aren't equal");
        return;
      }
      this.sendUserData();
    },
    sendUserData() {
      const userRegistrationData: IUserRegistrationData = {
        fullName: this.fullName,
        jobTitle: this.jobTitle,
        username: this.username,
        password: this.password,
      };
      this.$emit("register-user", userRegistrationData);
    },
  },
});
</script>

<style src="@/assets/styles/RegistrationForm.css" scoped></style>
