<script setup lang="ts">
import { SRGBColorSpace } from "three";
import { TresCanvas, } from "@tresjs/core";
import { OrbitControls, useGLTF } from "@tresjs/cientos";
import { ref, watchEffect } from 'vue'

const model = ref(null)
const { scene } = await useGLTF(
  './KingKong.glb',
  { draco: true }
);
model.value = scene

const props = defineProps({
  currentModel: String
})

watchEffect(async () => {
  const path = `./${props.currentModel}.glb`
  const { scene } = await useGLTF(path, { draco: false });
  model.value = scene
})

</script>

<template>
  <Suspense>
    <TresCanvas clear-color="rgb(251,166,80)" window-size :output-color-space="SRGBColorSpace" render-mode="always">
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
