<template>
  <div>
    <AppTop />
    <AppSerch />
    <breadcrumb class="breadcrumb-container" />
    <app-main />
    <AppBottom />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { AppTop, AppSerch, AppMain, AppBottom } from './components'

export default {
  name: 'Layout',
  components: {
    Breadcrumb,
    AppTop,
    AppSerch,
    AppBottom,
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
