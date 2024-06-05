<script setup>
/*FRANK SECTION*/
import { onMounted } from "vue";
import { useMeshy } from "../composables/useMeshy.ts";
import { useApillon } from "../composables/useApillon.ts";
onMounted(async () => {
  await useMeshy();
  await useApillon();
});

import Experience from "./../components/Experience.vue";
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";

const router = useRouter();

function goHome() {
  router.push("/");
}

function downloadModel() {
  console.log("Downloading model...");
}
</script>
<template>
  <div class="z-50 fixed top-0 left-4 ml-5 mb-5 flex flex-col items-center">
    <Button @click="goHome" class="ml-5 mt-5">HOME</Button>
  </div>
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
    <Button @click="downloadModel" class="ml-5 mt-5">Download Model</Button>
  </div>
</template>
