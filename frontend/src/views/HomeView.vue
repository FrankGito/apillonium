<script setup>
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
const router = useRouter();

function goToExperience() {
  router.push("/experience");
}
</script>

<template>
  <div class="flex flex-col gap-5 justify-center items-center min-h-screen">
    <h1 class="text-4xl">Welcome To Apillonium</h1>
    <Button @click="goToExperience" class="ml- mt-7">Go to Experience</Button>
  </div>
</template>
