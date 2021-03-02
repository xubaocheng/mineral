<!-- 侧边推荐模块 -->
<template>
	<div class="side-modul">
		<div class="side-modul-title clearFix" :style="{'background':background}">
			<h2 class="left"><i class="el-icon-search" />{{ titletext }}</h2>
			<span class="right">MORE</span>
		</div>
		<div class="side-modul-list">
			<ul>
				<li v-for="(item,index) in serverData" :key="`serverData_item_${index}`">
					<p :class="{active: currentIndex === index}">{{ item.value }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SideModul',

	components: {},

	props: {
		serverData: {
			type: Array,
			default: () => []
		},
		background: {
			type: String,
			default: () => ''
		},
		titletext: {
			type: String,
			default: () => ''
		}
	},
	data() {
		return {
			currentIndex: 2
		}
	},

	computed: {},

	mounted() {},

	methods: {}
}

</script>
<style lang='scss' scoped>
@import '~@/styles/home.scss';
.side-modul{
	width: 100%;
	&-title{
		width: 100%;
		line-height: 55px;
		padding: 0 10px;
		background-color: $main-tone-color;
		h2{
			font-size: 22px;
			font-weight: bold;
			color: #fff;
		}
		span{
			color: #fff;
			font-size: 18px;
		}
	}
	&-list{
		width: 100%;
		background-color: #fff;
		ul{
			li{
				width: 100%;
				p{

					line-height: 20px;
					padding: 5px 0;
					padding-left: 30px;
					cursor: pointer;
					&.active{
						background-color: #e6e9ee;
						color: #1966aa;
					}
				}
			}
		}

	}
}
</style>
