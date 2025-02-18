<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import axiosClient from "../../axios";
import GuestLayout from "../GuestLayout.vue";

const data = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "", // Updated field name
});

async function submit() {
  try {
    await axiosClient.get("/sanctum/csrf-cookie");
    await axiosClient.post("/register", data.value);
  } catch (error) {
    console.error("Error during registration:", error);
  }
}
</script>

<template>
  <GuestLayout>
    <pre>{{ data }}</pre>
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
      Create new Account
    </h2>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900"
            >Full name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="name"
              v-model="data.name"
              id="name"
              autocomplete="name"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              v-model="data.email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password"
              v-model="data.password"
              id="password"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password_confirmation"
              class="block text-sm/6 font-medium text-gray-900"
              >Repeat Password</label
            >
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password_confirmation"
              v-model="data.password_confirmation"
              id="password_confirmation"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create an account
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?
        {{ " " }}
        <RouterLink
          :to="{ name: 'Login' }"
          class="font-semibold text-indigo-600 hover:text-indigo-500"
          >Login from here</RouterLink
        >
      </p>
    </div>
  </GuestLayout>
</template>

<style></style>
