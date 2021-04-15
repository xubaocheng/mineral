<!-- mineralProducts 书记天下矿产-->
<template>
	<div class="mineralProducts">
		<TabCom :tab-btn="tabBtn" @changeNameBtn="changeNameBtn" />
		<router-view />
	</div>
</template>

<script>
import TabCom from '_c/TabCom'
export default {
	name: 'MineralProducts',

	components: {
		TabCom
	},

	data() {
		return {
			tabBtn: [
				{
					label: '总志',
					index: 0,
					name: '/mineralProducts/mineralProductsIndex/general-records'
				},
				{
					label: '矿种志书',
					index: 1,
					name: '/mineralProducts/mineralProductsIndex/mineral-records'
				},
				{
					label: '省级志书',
					index: 2,
					name: '/mineralProducts/mineralProductsIndex/provincial-chronicles'
				},
				{
					label: '区带志书',
					index: 3,
					name: '/mineralProducts/mineralProductsIndex/local-records'
				},
				{
					label: '专题报告',
					index: 4,
					name: '/mineralProducts/mineralProductsIndex/special-report'
				},
				{
					label: '普及本',
					index: 5,
					name: '/mineralProducts/mineralProductsIndex/popular-edition'
				}
			]
		}
	},

	computed: {},

	mounted() {

	},

	methods: {
		changeNameBtn(name) {
			this.$router.push({ path: name })
		}
	}
}

</script>
<style lang='scss' scoped>
.mineralProducts{
	width: 1170px;
	margin: 0 auto;
	padding-top: 20px;
}
</style>
