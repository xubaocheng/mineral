<!-- news 新闻资源 -->
<template>
	<div class="news">
		<TabCom :tab-btn="tabBtn" @changeNameBtn="changeNameBtn" />
		<router-view />
	</div>
</template>

<script>
import TabCom from '_c/TabCom'
export default {
	name: 'News',

	components: {
		TabCom
	},

	data() {
		return {
			tabBtn: [
				{
					label: '新闻资讯',
					index: 0,
					name: '/news/newsIndex/newsList'
				},
				{
					label: '成果快讯',
					index: 1,
					name: '/news/newsIndex/achievementsList'
				}
			]
		}
	},

	computed: {},

	mounted() {},

	methods: {
		changeNameBtn(name) {
			this.$router.push({ path: name })
		}
	}
}

</script>
<style lang='scss' scoped>
.news{
	width: 1170px;
	margin: 0 auto;
	padding-top: 20px;

}
</style>
