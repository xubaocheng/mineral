<template>
	<div class="home-container">
		<div class="home-container-carousel clearFix">
			<div class="home-container-carousel-left left">
				<el-carousel :interval="5000" height="360px" arrow="always">
					<el-carousel-item v-for="item in 5" :key="item">
						<img src="../../assets/img/test.png" alt="">
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="home-container-carousel-right right">
				<div class="home-container-carousel-right-imgBox">
					<img src="../../assets/img/test1.png" alt="">
					<p>中国矿产地质志 —— 典型矿床总述卷</p>
				</div>

				<div class="home-container-carousel-right-contentBox">
					<p>
						<span>主编:</span>
						<span>张XX</span>
					</p>
					<p>
						<span>出版日期:</span>
						<span>张XX</span>
					</p>
					<p>
						<span>内容提要:</span>
						<span>本书收录了中国辽宁省内的——萨达多按时是的撒大萨达十大</span>
					</p>
					<span class="home-container-carousel-right-contentBox-detailBtn">了解详情</span>
				</div>
			</div>
		</div>
		<div class="home-container-news">
			<div class="home-container-news-main clearFix">
				<div class="home-container-news-main-list left">
					<TitleCom />
					<Listcom />
				</div>
				<div class="home-container-news-main-recommend right">
					<SideModul :server-data="serverAnnalsData" background="#01274b" titletext="志书推荐" />
					<SideModul :server-data="serverNewsData" background="#c4880e" titletext="新闻推荐" />
				</div>
			</div>
		</div>
		<div class="home-container-typical">
			<div class="home-container-typical-main">
				<div class="home-container-typical-main-title clearFix">
					<em class="left" />
					<div class="home-container-typical-main-title-text left">
						<h2><span>典型</span><span class="active">矿床</span></h2>
						<p>Typical Deposit</p>
					</div>
					<em class="left" />
				</div>
				<div class="home-container-typical-main-list clearFix">
					<div v-for="(item,index) in typicalList" :key="`typicalList_item_${index}`" class="home-container-typical-main-list-item left">
						<h3>{{ item.name }}</h3>
						<p>{{ item.explain }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="home-container-topicOverview">
			<div class="home-container-topicOverview-main clearFix">
				<div class="home-container-topicOverview-main-chart left">
					sss
				</div>
				<div class="home-container-topicOverview-main-modul right">
					www
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import TitleCom from './components/Title'
import SideModul from './components/SideModul'
import Listcom from '_c/ListCom'
export default {
	name: 'Home',

	components: {
		TitleCom,
		Listcom,
		SideModul
	},

	data() {
		return {
			serverAnnalsData: [
				{
					value: '云南勐海勐往独居石沙矿床'
				},
				{
					value: '典型矿床地质志'
				},
				{
					value: '中国矿产地质志'
				},
				{
					value: '中国矿产地质志2019年'
				},
				{
					value: '华北矿产矿产概况总述卷'
				}
			],
			serverNewsData: [
				{
					value: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床'
				},
				{
					value: '地质志2019年工作会议召开地质志书2019年工作会议召开'
				},
				{
					value: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床'
				},
				{
					value: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床'
				},
				{
					value: '云南勐海勐往独居石沙矿床云南勐海勐往独居石沙矿床'
				}
			],
			typicalList: [
				{
					name: '珠宝玉石',
					explain: '矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明'
				}, {
					name: '矿产名称',
					explain: '矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明'
				}, {
					name: '矿产名称',
					explain: '矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明'
				}, {
					name: '矿产名称',
					explain: '矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明矿产简介说明'
				}
			]
		}
	},

	computed: {
		...mapGetters([
			'name'
		])
	},

	mounted() {},

	methods: {}
}
</script>

<style lang="scss" scoped>
.home {
	width: 100%;
	&-container{
		width: 100%;
		&-carousel{
			width: 1170px;
			margin: 0 auto;
			&-left{
				width: 850px;
				height: 100%;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			&-right{
				width: 320px;
				height: 100%;
				text-align: center;
				padding: 30px 40px;
				background: #ccc;
				&-imgBox{
					width: 100%;
					margin-bottom: 10px;
					img{
						display: block;
						width: 100px;
						height: 140px;
						margin: 0 auto;
						margin-bottom: 10px;
					}
					p{
						color: #fff;
					}
				}
				&-contentBox{
					width: 100%;
					p{
						line-height: 34px;
						color: #fff;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						word-break: break-all;
					}
					&-detailBtn{
						display: block;
						margin: 0 auto;
						width: 80px;
						height: 25px;
						background-color: #c4880e;
						color: #fff;
						font-size: 12px;
						line-height: 25px;
					}
				}
			}
		}
		&-news{
			width: 100%;
			background: #f3f3f3;
			&-main{
				width: 1170px;
				margin: 0 auto;
				padding-top: 50px;
				&-list{
					width: 820px;
				}
				&-recommend{
					width: 320px;
				}
			}

		}
		&-typical{
			width: 100%;
			padding-bottom: 60px;
			&-main{
				width: 1170px;
				margin: 0 auto;
				&-title{
					width: 500px;
					padding: 30px 0;
					margin: 0 auto;
					em{
						width: 125px;
						margin: 15px 0;
						height: 2px;
						background-color: #c4880e;
					}
					&-text{
						text-align: center;
						padding: 0 50px;
						h2{
							padding-bottom: 5px;
							span{
								font-size: 26px;
								font-weight: bold;
								color: #050505;
								&.active{
									color: #c4880c;
								}
							}
						}
						p{
							text-align: center;
							font-size: 16px;
							color: #828282;
						}
					}
				}
				&-list{
					width: 100%;
					&-item{
						width: 25%;
						height:220px;
						background: url('../../assets/img/test2.png') no-repeat;
						cursor: pointer;
						color: #fff;
						position: relative;
						transition:all 1s ease-out;
						h3{
							width: 100%;
							position: absolute;
							left: 0;
							bottom: 0;
							font-size: 28px;
							font-weight: bold;
							background-color: #0c243c;
							opacity: 0.7;
							text-align: center;
							line-height: 60px;
						}
						p{
							padding:0 35px;
							position: absolute;
							left: 0;
							top: 60px;
							line-height: 30px;
							font-weight: bold;
							display: none;
						}
						&:hover{
							transform:scale(1.2);
							z-index: 2;
							h3{
								top: 0;
							}
							p{
								display: block;
							}
						}
					}
				}
			}
		}
		&-topicOverview{
			width: 100%;
			background: #f3f3f3;
			&-main{
				width: 1170px;
				margin: 0 auto;
				padding: 50px 0;
				height: 660px;
				&-chart{
					width: 780px;
				}
				&-modul{
					width: 360px;
				}
			}
		}
	}
}
</style>
