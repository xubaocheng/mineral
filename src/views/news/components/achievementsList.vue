<!-- news 成果快讯 -->
<template>
	<div class="achievementsList">
		<Listcom :list="list" />
		<el-pagination
			style="text-align:center; margin-bottom:10px;"
			background
			layout="prev, pager, next"
			prev-text="上一页"
			next-text="下一页"
			:total="100"
			/>
	</div>
</template>

<script>
import Listcom from '_c/ListCom'
export default {
	name: 'AchievementsList',

	components: {
		Listcom
	},

	data() {
		return {

			list: [
				{
					img: require('../../../assets/img/listImg.png'),
					title: '云南勐海勐往独居石沙矿床',
					content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
					source: '《中国矿产地质志》编委会',
					date: '2022-06-19'
				},
				{
					img: require('../../../assets/img/listImg.png'),
					title: '云南勐海勐往独居石沙矿床',
					content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
					source: '《中国矿产地质志》编委会',
					date: '2020-06-19'
				},
				{
					img: require('../../../assets/img/listImg.png'),
					title: '云南勐海勐往独居石沙矿床',
					content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
					source: '《中国矿产地质志》编委会',
					date: '2020-06-19'
				},
				{
					img: require('../../../assets/img/listImg.png'),
					title: '云南勐海勐往独居石沙矿床',
					content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
					source: '《中国矿产地质志》编委会',
					date: '2020-06-19'
				},
				{
					img: require('../../../assets/img/listImg.png'),
					title: '云南勐海勐往独居石沙矿床',
					content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
					source: '《中国矿产地质志》编委会',
					date: '2020-06-19'
				},
				{
					img: require('../../../assets/img/listImg.png'),
					title: '云南勐海勐往独居石沙矿床',
					content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
					source: '《中国矿产地质志》编委会',
					date: '2020-06-19'
				},
				{
					img: require('../../../assets/img/listImg.png'),
					title: '云南勐海勐往独居石沙矿床',
					content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
					source: '《中国矿产地质志》编委会',
					date: '2020-06-19'
				}
			]

		}
	},

	computed: {},

	mounted() {},

	methods: {

	}
}

</script>
<style lang='scss' scoped>
.achievementsList{
	width: 1170px;
	margin: 0 auto;
	padding-top: 20px;

}
</style>
