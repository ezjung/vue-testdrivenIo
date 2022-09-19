<template>
  <header>
    <!-- <AppHeader title="Vue project - static" /> -->
    <!-- <AppHeader :title="'Vue project - static via binding'" /> -->
    <AppHeader :title="headerTitle" />
  </header>

  <main>
    <AppContent />
  </main>

  <footer>
    <app-footer>
      <template v-slot:message>Vue Project from TestDriven.io Course</template>
      <template #link><a href="https://testdriven.io">TestDriven.io</a></template>
    </app-footer>
  </footer>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue';
import AppContent from '@/components/AppContent.vue';
import AppFooter from '@/components/AppFooter.vue';

const headerTitle = ref('Vue project - reactive')

// ----------
// Lifecycle hooks
// ----------

onBeforeMount(() => {
  console.log('App.vue: onBeforeMount() called!')
})

onMounted(() => {
  console.log('App.vue: onMounted() called!')
})
onBeforeUnmount(() => {
  console.log('App.vue: onBeforeUnmount() called!')
})
onUnmounted(() => {
  console.log('App.vue: onUnmounted() called!')
})
</script>

<style scoped>

</style>
