<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    type: String,
    count: Number
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  },
}
</script>

<template>
  <div class="hello">
    {{ msg }}
    <div class="count">
      {{ count }}
    </div>
    <button class="increment" @click="increment(type)">increment</button>
    <button class="decrement" @click="decrement(type)">decrement</button>
  </div>
</template>

<style scoped lang="scss"></style>
