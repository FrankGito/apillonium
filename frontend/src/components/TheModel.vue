<script setup>
import { useGLTF } from '@tresjs/cientos';

const { scene: model } = await useGLTF(
  './king_kong_0602211853_refine.glb',
  { draco: true }
);
</script>

<template>
  <primitive :object="model" :scale="6" />
</template>
