<script setup>
import { ref } from '@vue/reactivity'
import AppHeader from '@/components/AppHeader.vue';
import AppContent from '@/components/AppContent.vue';
import AppFooter from '@/components/AppFooter.vue';

const headerTitle = ref('Vue project - reactive')

</script>

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
    <AppFooter />
  </footer>
</template>

<style scoped>

</style>
