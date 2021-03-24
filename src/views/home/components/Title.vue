<!-- 标题 -->
<template>
	<div class="title clearFix">
		<div class="title-text left">
			<h2>
				<span>{{ title.name1 }}</span>
				<span class="active">{{ title.name2 }}/</span>
				<strong>{{ title.name3 }}</strong>
			</h2>
		</div>
		<div v-if="btnText.length<=2" class="title-btn right">
			<span
				v-for="(item,index) in btnText"
				:key="`btnText_item_${index}`"
				:class="{active: index === currentIndex}"
				@click="handlerListBtn(index)"
				>{{ item.name }}</span>
			<strong @click="handlerDetailBtn">MORE</strong>
		</div>
		<div v-else class="title-btn right other">
			<span
				v-for="(item,index) in btnText"
				:key="`btnText_item_${index}`"
				:class="{active: index === currentIndex}"
				@click="handlerListBtn(index)"
				>{{ item.name }}</span>
			<strong @click="handlerDetailBtn">MORE</strong>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TitleCom',

	components: {},

	props: {
		title: {
			type: Object,
			default: () => {
				return {
					name1: '新闻',
					name2: '资讯',
					name3: 'News and information'
				}
			}
		},
		btnText: {
			type: Array,
			default: () => [{ name: '新闻推荐', value: '' }, { name: '成果快讯', value: '' }]
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
		handlerListBtn(index) {
			this.currentIndex = index
			this.$emit('changeComponent', this.btnText[index])
		},
		handlerDetailBtn() {
			alert('Detail')
		}
	}
}

</script>
<style lang='scss' scoped>
.title{
	width: 100%;
	padding-bottom: 40px;
	&-text{
		span{
			font-size: 28px;
			font-weight: bold;
		}
		strong{
			color: #727272;
		}
		.active{
			color: #c3890c;
		}
	}
	&-btn{
		span{
			font-size: 16px;
			color: #727272;
			padding: 0 7px;
			cursor: pointer;
			position: relative;
		}
		span:nth-child(1):after {
			content: '';
			height: 16px;
			border-left: 3px solid #000;
			position: absolute;
			top: 3px;
			right: -2px;
		}
		.active{
			color:#1768aa;
		}
		strong{
			cursor: pointer;
			font-size: 16px;
			color: #fff;
			background-color: #c4880e;
			padding: 0px 5px;
		}
	}
	.other{
		span:nth-child(1):after {
			content: '';
			height: 16px;
			border-left: 3px solid #000;
			position: absolute;
			top: 3px;
			right: -2px;
		}
		span:nth-child(2):after {
			content: '';
			height: 16px;
			border-left: 3px solid #000;
			position: absolute;
			top: 3px;
			right: -2px;
		}
	}
}
</style>
