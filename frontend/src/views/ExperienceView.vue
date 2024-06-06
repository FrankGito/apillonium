<script setup>
import { onMounted, ref, shallowRef } from "vue";
import { useMeshy } from "../composables/useMeshy.ts";
import { useApillon } from "../composables/useApillon.ts";
import Experience from "./../components/Experience.vue";
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";

const currentModel = shallowRef('KingKong')
const count = ref(1)
const listMonkey = ref([
  "KingKong",
  "Chimpanzee",
  "Gorilla",
  "Primate",
  "Ape",
  "Baboon",
])
/**
"Mandrill",
"Orangutan",
"Macaque",
"Goliath",
"Sasquatch",
"Kong",
"Yeti",
"Gigantopithecus",
"Bonobo",
"Beast"
*/
const router = useRouter();

function goHome() {
  router.push("/");
}

function downloadModel() {
  console.log("Downloading model...");
}

function changeModelForward() {
  if (count.value < listMonkey.value.length - 1) {
    count.value = count.value + 1;
    currentModel.value = `${listMonkey.value[count.value]}`;
  } else {
    count.value = 0;
    currentModel.value = `${listMonkey.value[count.value]}`;
  }
}
function changeModelBackward() {
  if (count.value > 0) {
    count.value = count.value - 1;
    currentModel.value = `${listMonkey.value[count.value]}`;
  } else {
    count.value = listMonkey.value.length - 1;
    currentModel.value = `${listMonkey.value[count.value]}`;
  }
}
</script>
<template>
  <div class="z-50 fixed top-0 left-0 ml-5 mb-5 flex flex-col items-center">
    <a @click="goHome" class="cursor-pointer">
      <img src="https://i.ibb.co/Wsb97z4/image.png" alt="logo" width="50" height="50" class="py-6" />
    </a>
  </div>
  <div class="z-50 fixed top-0 right-0 mr-5 mt-5 flex flex-col items-center">
    {{ count }} / 10
  </div>
  <Suspense>
    <div>
      <Experience :currentModel />
    </div>
  </Suspense>
  <div class="z-50 fixed bottom-0 ml-5 mb-5 flex flex-col items-center">
    <div class="flex items-center">
      <div @click="changeModelBackward" class="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1472 1600">
          <path fill="black"
            d="M1472 736v128q0 53-32.5 90.5T1355 992H651l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37q-52 0-91-37L37 890Q0 853 0 800q0-52 37-91L688 59q38-38 91-38q52 0 90 38l75 74q38 38 38 91t-38 91L651 608h704q52 0 84.5 37.5T1472 736" />
        </svg>
      </div>
      <Button disabled class="ml-5 mr-5">Generate</Button>
      <div @click="changeModelForward" class="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1472 1600">
          <g transform="translate(1472 0) scale(-1 1)">
            <path fill="black"
              d="M1472 736v128q0 53-32.5 90.5T1355 992H651l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37q-52 0-91-37L37 890Q0 853 0 800q0-52 37-91L688 59q38-38 91-38q52 0 90 38l75 74q38 38 38 91t-38 91L651 608h704q52 0 84.5 37.5T1472 736" />
          </g>
        </svg>
      </div>
    </div>
    <!--<Button @click="downloadModel" class="ml-5 mt-5">Download Model</Button>-->
  </div>
</template>
