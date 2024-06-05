<script setup lang="ts">
import { SRGBColorSpace } from "three";
import { TresCanvas, } from "@tresjs/core";
import { OrbitControls, useTweakPane, useGLTF } from "@tresjs/cientos";
import { ref, watch } from 'vue'

const model = ref(null)
const { scene } = await useGLTF(
  './KingKong.glb',
  { draco: true }
);
model.value = scene

const props = defineProps({
  currentModel: String
})
async function reload() {
  const { scene } = await useGLTF(
    `./${props.currentModel}.glb`,
    { draco: true }
  );
  model.value = scene
  console.log(model.value)
}

watch(props, reload)


useTweakPane();
</script>

<template>
  <Suspense>
    <TresCanvas clear-color="rgb(251,166,80)" shadows alpha window-size power-preference="high-performance"
      :output-color-space="SRGBColorSpace">
      <TresPerspectiveCamera :position="[5, 5, 5]" :fov="75" :near="0.1" :far="1000" />
      <OrbitControls />
      <TresAmbientLight :color="0xffffff" :intensity="1" />
      <TresDirectionalLight :position="[0, 8, 4]" :intensity="2" cast-shadow />
      <Suspense>
        <primitive :object="model" />
      </Suspense>
    </TresCanvas>
  </Suspense>
</template>
