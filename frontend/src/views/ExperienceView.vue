<script setup>
import Experience from './../components/Experience.vue'
import { Button } from '@/components/ui/button'
</script>
<template>
  <Suspense>
    <Experience />
  </Suspense>
  <div class="z-50 fixed bottom-0 ml-5 mb-5">
    <Button class="ml-5">Left</Button>
    <Button class="ml-5">Middle</Button>
    <Button class="ml-5">Right</Button>
  </div>
</template>
