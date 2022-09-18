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
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue';
import AppContent from '@/components/AppContent.vue';
import AppFooter from '@/components/AppFooter.vue';

const headerTitle = ref('Vue project - reactive')

</script>

<style scoped>

</style>
