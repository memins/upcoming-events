import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_USERS: 'SET_USERS'
}

export default createStore({
  state: {
    countHome: 0,
    countAbout: 0,
  },
  mutations: {
    [Mutations.INCREMENT] (state, type) {
      type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT] (state, type) {
      type === 'countHome' ? state.countHome-- : state.countAbout--
    }
  },
  actions: {
    increment ({ commit }, type) {
      commit(Mutations.INCREMENT, type)
    },
    decrement ({ commit }, type) {
      commit(Mutations.DECREMENT, type)
    },
    async fetchUsers () {
      const request = await axios.get('/users')
      return request.data
    },
    async fetchUser ({ state }, userId) {
      const request = await axios.get(`/users/${userId}`)
      return request.data
    },
    async  newEvent ({ dispatch }, { title, userId, date }) {
      const request = await axios.post(`/users/${userId}/events`, {
        title, userId, date
      })

      return request.data
    }
  },
})
