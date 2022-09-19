<template>
  <main>
    <AddNewUser @createUser="createNewUser" />
    <h1>{{ message }}</h1>
    <ListUsers :users="users" v-if="showUsers" />
    <button @click="noShowUsers">Hide the List of Users!</button>
  </main>
</template>

<script setup>
  import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
  import ListUsers from './ListUsers.vue'
  import AddNewUser from './AddNewUser.vue'
  import axios from 'axios'

  //----
  // DATA
  // ----
  const message = ref('List of Users:')
  const showUsers = ref(true)
  const users = ref([])

  // ----
  // Methods
  // ----
  const createNewUser = (user) => {
    // Check that all fields are filled in before adding the user
    if ((user.name !== '') && (user.username !== '') && (user.email !== '')) {
      let newUser = {
        id: users.value.length + 1,
        name: user.name,
        username: user.username,
        email: user.email
      }

      // Add the user to the local array of users
      users.value.push(newUser)
    }
  }

  const noShowUsers = () => {
    showUsers.value = !showUsers.value
  }

// ----------
// Lifecycle hooks
// ----------

onBeforeMount(() => {
  console.log('AppContent.vue: onBeforeMount() called!')
})

onMounted(() => {
  console.log('AppContent.vue: onMounted() called!')
})
onBeforeUnmount(() => {
  console.log('AppContent.vue: onBeforeUnmount() called!')
})
onUnmounted(() => {
  console.log('AppContent.vue: onUnmounted() called!')
})

onMounted(async () => {
  console.log('AppContent.vue: onMounted() called!')

  // GET request for user data
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // handle success
      console.log('Received response.data:')
      console.log(response.data)

      users.value = response.data

      console.log('Users array in success callback:')
      console.log(users.value)
    })
    .catch((error) => {
      // handle error
      console.log("Error in axios.get() call: " + error)
    })
    .finally((response) => {
      // always executed
      console.log('Finished!')
    })
})


</script>

<style scoped>
main {
  margin: 0 auto;
  max-width: 400px;
  padding: 1em;
}

button {
  background-color: #99D3Df;
  padding: 0.5em 2.5em;
  text-align: center;
  font-size: 1.2em;
  border-radius: 4px;
  border: 1px solid black;
  /* margin-top: 1rem;
  margin-bottom: 1rem; */
}

button:hover {
  background-color: #88BBD6;
  cursor: pointer;
}
</style>