<template>
	<div>
		<AppTop />
		<AppSerch />
		<AppNav />
		<breadcrumb class="breadcrumb-container" />
		<app-main />
		<AppBottom />
	</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { AppTop, AppSerch, AppNav, AppMain, AppBottom } from './components'

export default {
	name: 'Layout',
	components: {
		Breadcrumb,
		AppTop,
		AppSerch,
		AppBottom,
		AppMain,
		AppNav
	},
	computed: {

	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>

</style>
