<template>
	<div class="home-container">
		首页
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Home',
	computed: {
		...mapGetters([
			'name'
		])
	}
}
</script>

<style lang="scss" scoped>
.home {

}
</style>
