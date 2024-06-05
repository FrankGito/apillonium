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
    <h1 class="text-4xl">About Apillonium</h1>
    <p>
      Apillonium is merging the innovative power of Apillon with 3D generated
      content on-chain.
    </p>
    <p>
      We're exploring new frontiers by integrating 3D content creation with the
      security and permanence of blockchain technology.
    </p>
    <p>
      Imagine a future where digital art and virtual assets are not just created
      but live forever on the blockchain, ensuring authenticity and ownership.
    </p>
    <p>
      Our project leverages Apillon to make this vision a reality, paving the
      way for a new era of digital interaction.
    </p>
    <Button @click="goToExperience">Go to Experience</Button>
  </div>
</template>
