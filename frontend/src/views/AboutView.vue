<script setup>
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
const router = useRouter();

function goToExperience() {
  router.push("/experience");
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen max-width-500">
    <pre class="mt-10">
      Hola :wave:,

      We are Ope and Frank. Nice to have you here.

      This is Apillonium.
      The Idea behind Apillonium is simple. Click generate, own a 3D Model.

      The User can generate a 3D Model via meshy.ai api call.
      By clicking generate the User automatically mints his 3D Model.

      Every Week there is a new Theme Happening. This Weeks is Monkey Week.
      Every Week only 10 Creatures can get minted. Next Week is Horse Week.

      After sucessfully finishing 7 rounds of week themes, we build an Explore Page.
      The Explore Page contains the give Theme and the created Collection.

      After suessfully implenting a joyful Explore Page. We will create a Buy Page.
      The Buy Page allows you to buy from the Creator.
      The Creator sells real world products based on the minted 3D Model.
      The owner get 10% of the sell. Every Sell is 50 Bucks.

      This is how Apillonium can be seen. As the existing of the repo indiciates,
      its in his current state a technical exploration of the Apillon SDK.

      Thank you for zapping in : )

      Cheers :partially_sunny:
    </pre>
    <Button @click="goToExperience" class="mb-auto">Go to Experience</Button>
  </div>
</template>
