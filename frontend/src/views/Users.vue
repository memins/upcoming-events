<script>
import { mapActions } from 'vuex'

export default {
  name: 'Users',
  data () {
    return {
      isLoading: true,
      users: []
    }
  },
  async mounted () {
    this.users = await this.fetchUsers()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template>
  <div class="home">
    <h1>Users</h1>
    <p v-if="isLoading">Please wait...</p>
    <div v-else>
      <p>There are {{users.length}} users.</p>

      <ol>
        <li v-for="user in users" v-bind:key="user">
          <a :href="`/users/${user._id}`">{{user.name}}</a>
        </li>
      </ol>
    </div>
  </div>
</template>
