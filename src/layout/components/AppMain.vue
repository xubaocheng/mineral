<template>
	<section class="app-main">
		<transition name="fade-transform" mode="out-in">
			<router-view :key="key" />
		</transition>
	</section>
</template>

<script>
export default {
	name: 'AppMain',
	computed: {
		key() {
			return this.$route.path
		}
	}
}
</script>

<style lang="scss">
.app-main{
  width: 100%;
  // background: yellow;
}
</style>
