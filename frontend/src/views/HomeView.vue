<script setup>
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
const router = useRouter()

function goToExperience() {
  router.push('/experience')
}
</script>

<template>
  <Button @click="goToExperience" class="ml- mt-7">Go to Experience</Button>
</template>
