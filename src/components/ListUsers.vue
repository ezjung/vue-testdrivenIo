<template>
  <table>
      <!-- Table Header Row -->
      <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="user in users" v-bind:key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
      </tr>
  </table>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue'

defineProps({
    // message: {type: String, required: true},
    users: {type: Array, required: true}
})

// ----------
// Lifecycle hooks
// ----------

onBeforeMount(() => {
  console.log('ListUsers.vue: onBeforeMount() called!')
})

onMounted(() => {
  console.log('ListUsers.vue: onMounted() called!')
})
onBeforeUnmount(() => {
  console.log('ListUsers.vue: onBeforeUnmount() called!')
})
onUnmounted(() => {
  console.log('ListUsers.vue: onUnmounted() called!')
})

</script>

<style scoped>
table {
  margin-top: 0.5em;
  table-layout: fixed;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #88BBD6;
  padding: 0.8rem;
  overflow: hidden;
}

th {
  text-align: center;
  background-color: #88BBD6;
  color: black;
}

tr:nth-child(even) {
  background-color: #CDCDCDB0;
}

tr:nth-child(odd) {
  background-color: #CDCDCD40;
}
</style>