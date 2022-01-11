<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserView',
  data () {
    return {
      isLoading: true,
      user: {},
      title: 'Event Title',
      date: '01/01/2023'
    }
  },
  async mounted () {
    await this.updateUser()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchUser', 'newEvent']),
    async addEventAndUpdate ({ title, userId, date }) {
      await this.newEvent({ title, userId, date })
      this.updateUser()
    },
    async updateUser () {
      this.user = await this.fetchUser(this.$route.params.userId)
    }
  }
}
</script>

<template>
  <div class="user">
    <p v-if="isLoading">Please wait...</p>
    <div v-else>
      <h1>User Detail</h1>
      <p>{{ user.name }}</p>

      <h2>Event History</h2>
      <div v-if="user.events.length">
        <ol>
          <li v-for="event in user.events" v-bind:key="event">
            {{ event.title }} on {{ event.date }}
          </li>
        </ol>
      </div>
      <p v-else>No events</p>
      <h2>Create new Event</h2>
      <p>Title</p>
      <input type="" name="" v-model="title">
      <p>Date</p>
      <input type="" name="" v-model="date">
      <br>
      <button @click="addEventAndUpdate({ title, userId: user._id, date })">Create new Event</button>
    </div>
  </div>
</template>
