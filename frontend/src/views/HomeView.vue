<script setup>
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
const router = useRouter();

function goToExperience() {
  router.push("/experience");
}
</script>

<template>
  <div class="flex flex-col gap-5 get-it-centered ">
    <div class="m-auto">
      <img src="https://i.ibb.co/Wsb97z4/image.png" alt="logo" width="120" height="120" class="py-6" />
    </div>
    <h1 class="text-4xl">Welcome To Apillonium</h1>
    <Button @click="goToExperience" class="mt-5 pt-10 pb-10">Go to Experience</Button>
  </div>
</template>
<style>
.get-it-centered {
  margin-top: 25vh;
}
</style>
