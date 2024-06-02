<script setup lang="ts">
import Experience from './components/Experience.vue'
</script>

<template>
  <Suspense>
    <Experience />
  </Suspense>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
