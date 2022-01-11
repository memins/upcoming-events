<script>
import HelloWorld from '@/components/HelloWorld'
import { mapState } from 'vuex'

export default {
  name: 'About',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(['countAbout'])
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="This is a simple counter" tpye='countAbout' :count='countAbout' />
  </div>
</template>
