<template>
  <main>
    <AddNewUser @createUser="createNewUser" />
    <h1>{{ message }}</h1>
    <ListUsers :users="users" />
  </main>
</template>

<script setup>
  import { ref } from 'vue'
  import ListUsers from './ListUsers.vue'
  import AddNewUser from './AddNewUser.vue'
  //----
  // DATA
  // ----
  const message = ref('List of Users:')
  const users = ref([
    {
      id: 1,
      name: 'User #1',
      username: 'user_1',
      email: 'email1@gmail.com',
    },
    {
      id: 2,
      name: 'User #2',
      username: 'user_2',
      email: 'email2@gmail.com',
    },
    {
      id: 3,
      name: 'User #3',
      username: 'user_3',
      email: 'email3@gmail.com',
    },
  ])

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

  </script>

<style scoped>
main {
  margin: 0 auto;
  max-width: 400px;
  padding: 1em;
}
</style>