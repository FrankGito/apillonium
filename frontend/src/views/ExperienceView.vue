<script setup>
import Experience from "./../components/Experience.vue";
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";

const router = useRouter();

function goHome() {
  router.push("/");
}
</script>
<template>
  <Suspense>
    <div>
      <Experience />
    </div>
  </Suspense>
  <div class="z-50 fixed bottom-0 ml-5 mb-5 flex flex-col items-center">
    <div class="flex">
      <Button class="ml-5">Left</Button>
      <Button class="ml-5">Middle</Button>
      <Button class="ml-5">Right</Button>
    </div>
    <Button @click="goHome" class="ml-5 mt-5">HOME</Button>
  </div>
</template>
