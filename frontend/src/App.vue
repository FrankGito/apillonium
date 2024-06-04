<script setup lang="ts">
import Experience from './components/Experience.vue'
import { Button } from '@/components/ui/button'

</script>

<template>
  <div>
    <Button class="z-50 fixed mt-4 ml-4">Change Model</Button>
    <Suspense>
      <Experience />
    </Suspense>
  </div>
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
