<template>
  <div>
    <breadcrumb class="breadcrumb-container" />
    <app-main />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Breadcrumb,
    AppMain
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
