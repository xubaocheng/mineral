<!-- annals 志书概况 -->
<template>
	<div class="annals">
		<div class="annals-tab">
			<span
				v-for="(item,index) in tabBtn"
				:key="`annals-tab_item_${index}`"
				class="annals-tab-btn"
				:class="{active: $route.fullPath === item.name}"
				@click="handlerBtnFn(index,item.name)"
				>{{ item.label }} <i :class="{triangle:$route.fullPath === item.name}" /> </span>
		</div>
		<router-view />
	</div>
</template>

<script>

export default {
	name: 'Annals',

	components: {},

	data() {
		return {
			tabBtn: [
				{
					label: '总叙',
					index: 0,
					name: '/annals/annalsIndex/general-introduction'
				},
				{
					label: '总主编',
					index: 1,
					name: '/annals/annalsIndex/editor-in-chief'
				},
				{
					label: '组织管理',
					index: 2,
					name: '/annals/annalsIndex/organization-management'
				},
				{
					label: '大事记',
					index: 3,
					name: '/annals/annalsIndex/memorabilia'
				},
				{
					label: '地质人物',
					index: 4,
					name: '/annals/annalsIndex/geological-figures'
				}
			],
			currentIndex: 0
		}
	},

	computed: {},

	mounted() {

	},

	methods: {
		handlerBtnFn(index, name) {
			this.currentIndex = index
			this.$router.push({ path: name })
		}
	}
}

</script>
<style lang='scss' scoped>
.annals{
	width: 1170px;
	margin: 0 auto;
	padding-top: 20px;
	&-tab{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #003b65;
		margin-bottom: 20px;
		span{
			position: relative;
			padding: 10px;
			font-size: 18px;
			color: #a9a9a9;
			cursor: pointer;
		}
		span:after {
			content: '';
			height: 16px;
			border-left: 2px solid #a9a9a9;
			position: absolute;
			top: 15px;
			right: -2px;
		}
		span:last-child:after {
			height: 0px;
		}
		span.active{
			color: #258cc6;
		}
		.triangle{
			position: absolute;
			left: 50%;
			top: 24px;
			transform: translateX(-60%);
			width: 0px;                 /*  宽高设置为0，很重要，否则达不到效果 */
			height: 0px;
			border: 15px solid #003b65;
			border-top-color: transparent;    /* 设置透明背景色 */
			border-left-color: transparent;
			border-right-color: transparent;
		}
	}
}
</style>
