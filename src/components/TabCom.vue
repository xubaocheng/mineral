<!-- 选项卡 tab -->
<template>
	<div class="tabCom">
		<div class="tabCom-tab">
			<span
				v-for="(item,index) in tabBtn"
				:key="`tabCom-tab_item_${index}`"
				class="tabCom-tab-btn"
				:class="{active: currentIndex === index}"
				@click="handlerBtnFn(index,item.name)"
				>{{ item.label }} <i :class="{triangle:currentIndex === index}" /> </span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabCom',

	components: {},

	props: {
		tabBtn: {
			type: Array,
			default: () => []
		}
	},

	data() {
		return {
			currentIndex: 0
		}
	},

	computed: {},

	mounted() {},

	methods: {
		handlerBtnFn(index, name) {
			this.currentIndex = index
		}
	}
}

</script>
<style lang='scss' scoped>
.tabCom{
	width: 100%;
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
