<!-- 列表 -->
<template>
	<div class="list-com">
		<div v-for="(item,index) in list" :key="`list_item_index_${index}`" class="list-com-item clearFix">
			<div class="list-com-item-img left">
				<img :src="item.img" alt="">
			</div>
			<div class="list-com-item-text left">
				<h2>{{ item.title }}</h2>
				<p>{{ item.content }}</p>
				<div class="list-com-item-text-content clearFix">
					<span class="left">{{ item.source }}</span>
					<span class="left">{{ item.date }}</span>
					<div class="list-com-item-text-content-btn right">
						<strong class="active"> <i class="el-icon-picture-outline-round" /> 收藏</strong>
						<strong><i class="el-icon-picture-outline-round" />分享</strong>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ListCom',

	components: {},

	props: {
		list: {
			type: Array,
			default: () => {
				return [
					{
						img: require('../../assets/img/listImg.png'),
						title: '云南勐海勐往独居石沙矿床',
						content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
						source: '《中国矿产地质志》编委会',
						date: '2020-06-19'
					},
					{
						img: require('../../assets/img/listImg.png'),
						title: '云南勐海勐往独居石沙矿床',
						content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
						source: '《中国矿产地质志》编委会',
						date: '2020-06-19'
					},
					{
						img: require('../../assets/img/listImg.png'),
						title: '云南勐海勐往独居石沙矿床',
						content: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床',
						source: '《中国矿产地质志》编委会',
						date: '2020-06-19'
					}
				]
			}
		}

	},
	data() {
		return {
		}
	},

	computed: {},

	mounted() {},

	methods: {}
}

</script>
<style lang='scss' scoped>
.list-com{
	width: 100%;
	&-item{
		padding-bottom: 20px;
		border-bottom: 2px solid #bfbfbf;
		margin-bottom: 25px;
		&-img{
			img{
				width: 190px;
				height: 115px;
				display: block;
			}
		}
		&-text{
			width: calc(100% - 190px);
			padding-left: 20px;
			h2{
				font-size: 18px;
				font-weight: bold;
				padding-bottom: 20px;
			}
			p{
				font-size: 16px;
				color:#535353;
				padding-bottom: 30px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				word-break: break-all;
			}
			&-content{
				color: #909090;
				span{
					margin-right: 10px;
				}
				&-btn{
					strong{
						color: #727272;
						padding: 0 5px;
						cursor: pointer;
						position: relative;
					}
					strong:nth-child(1):after {
						content: '';
						height: 14px;
						border-left: 2px solid #000;
						position: absolute;
						top: 3px;
						right: -1px;
					}
					.active{
						color:#1768aa;
					}
				}
			}
		}
		&:last-child{
			border-bottom: none;
		}
	}
}
</style>
