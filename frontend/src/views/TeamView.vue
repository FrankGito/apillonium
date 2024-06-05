<script setup>
import { ref } from "vue";

const teamMembers = ref([
  {
    name: "Frank",
    role: "Developer",
    nftImage: "./FRANK_KONG.jpeg",
    social: {
      twitter: "https://twitter.com/alice",
      linkedin: "https://linkedin.com/in/alice",
    },
  },
  {
    name: "Ope",
    role: "Developer",
    nftImage: "./OPE_KONG.jpeg",
    social: {
      twitter: "https://twitter.com/bob",
      linkedin: "https://linkedin.com/in/bob",
    },
  },
]);
</script>

<template>
  <div class="flex flex-col gap-10 justify-center items-center min-h-screen">
    <h1 class="text-5xl mb-10">Meet Our Team</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="member.nftImage"
          alt="NFT Image"
          class="w-48 h-48 mb-6 rounded-full"
        />
        <h2 class="text-3xl mb-3">{{ member.name }}</h2>
        <p class="text-xl mb-5">{{ member.role }}</p>
        <!-- <div class="flex gap-6">
          <a
            v-if="member.social.twitter"
            :href="member.social.twitter"
            target="_blank"
            class="text-blue-500 text-xl"
            >Twitter</a
          >
          <a
            v-if="member.social.linkedin"
            :href="member.social.linkedin"
            target="_blank"
            class="text-blue-700 text-xl"
            >LinkedIn</a
          >
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  transition: color 0.3s;
}
a:hover {
  color: #ff6347; /* example hover color */
}
</style>
