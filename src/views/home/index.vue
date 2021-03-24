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
					<div class="home-container-topicOverview-main-chart-side" />
					<div class="home-container-topicOverview-main-chart-warpper">
						<div class="home-container-topicOverview-main-chart-warpper-title clearFix">
							<span
								v-for="(item,index) in mapBtn"
								:key="`mapBtn_item_${index}`"
								class="left"
								:class="{active: currrntIndex === index}"
								@click="handleMapBtn(index)"
								>{{ item.name }}</span>
						</div>
						<div class="home-container-topicOverview-main-chart--warpper-map">
							<EchartCom :option="mapOption" height="400" />
						</div>
					</div>
				</div>
				<div class="home-container-topicOverview-main-modul right">
					<div class="home-container-topicOverview-main-modul-top">
						<el-row>
							<el-col :span="12" class="home-container-topicOverview-main-modul-top-l">
								<h5>矿产名称</h5>
								<p>霍林郭勒矿</p>
								<p>满洲里矿</p>
								<p>牙克石矿</p>
								<p>额尔古纳矿</p>
								<p>乌兰浩特矿</p>
							</el-col>
							<el-col :span="12">
								<h6>矿产种类</h6>
								<p>地热</p>
								<p>金刚石</p>
								<p>二氧化碳气</p>
								<p>金</p>
								<p>稀土</p>
							</el-col>
						</el-row>
						<div class="home-container-topicOverview-main-modul-top-moreBtn">
							<span>更多>></span>
						</div>
					</div>
					<div class="home-container-topicOverview-main-modul-bottom">
						<div class="home-container-topicOverview-main-modul-bottom-title clearFix">
							<h4 class="left">相关图片</h4>
							<span class="right">更多>></span>
						</div>
						<div class="home-container-topicOverview-main-modul-bottom-content">
							<el-row :gutter="10">
								<el-col :span="12">
									<div class="home-container-topicOverview-main-modul-bottom-content-imgBox">
										<img src="../../assets/img/ks1.jpg" alt="">
										<div class="home-container-topicOverview-main-modul-bottom-content-imgBox-tip">火山岩大地构造图</div>
									</div>
								</el-col>
								<el-col :span="12">
									<div class="home-container-topicOverview-main-modul-bottom-content-imgBox">
										<img src="../../assets/img/ks2.jpg" alt="">
										<div class="home-container-topicOverview-main-modul-bottom-content-imgBox-tip">火山岩大地构造图</div>
									</div>
								</el-col>
								<el-col :span="12">
									<div class="home-container-topicOverview-main-modul-bottom-content-imgBox">
										<img src="../../assets/img/ks3.jpg" alt="">
										<div class="home-container-topicOverview-main-modul-bottom-content-imgBox-tip">火山岩大地构造图</div>
									</div>
								</el-col>
								<el-col :span="12">
									<div class="home-container-topicOverview-main-modul-bottom-content-imgBox">
										<img src="../../assets/img/ks4.jpg" alt="">
										<div class="home-container-topicOverview-main-modul-bottom-content-imgBox-tip">火山岩大地构造图</div>
									</div>
								</el-col>
							</el-row>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="home-container-vap">
			<div class="home-container-vap-main clearFix">
				<div class="home-container-vap-main-list left">
					<TitleCom :title="vapTitle" :btn-text="vapBtnText" @changeComponent="changeComponent" />
					<div class="home-container-vap-main-list-content">
						<component :is="comView" />
					</div>
				</div>
				<div class="home-container-vap-main-recommend right">
					<RecommendPic />
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
import EchartCom from './components/EchartCom'
import RecommendPic from './components/RecommendPic'
export default {
	name: 'Home',

	components: {
		TitleCom,
		Listcom,
		SideModul,
		EchartCom,
		VideoCom: () => { // 视频
			return import('./components/VideoCom')
		},
		RadioCom: () => { // 音频
			return import('./components/RadioCom')
		},
		PopularCom: () => { // 科普
			return import('./components/PopularCom')
		},
		RecommendPic
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
			],
			mapBtn: [
				{
					name: '新政区划',
					index: 0
				},
				{
					name: '成矿区带',
					index: 1
				},
				{
					name: '成矿系列',
					index: 2
				},
				{
					name: '矿种组',
					index: 3
				}
			],
			currrntIndex: 0,
			mapOption: {},
			vapTitle: {
				name1: '影音',
				name2: '推荐',
				name3: 'Video recommendation'
			},
			vapBtnText: [
				{
					name: '视频',
					value: 'VideoCom'
				},
				{
					name: '音频',
					value: 'RadioCom'
				},
				{
					name: '科普',
					value: 'PopularCom'
				}
			],
			comView: 'VideoCom'
		}
	},

	computed: {
		...mapGetters([
			'name'
		])
	},

	mounted() {
		this.initMap()
	},

	methods: {
		randomData(minNum, maxNum, decimalNum) {
			var max = 0; var min = 0
			minNum <= maxNum ? (min = minNum, max = maxNum) : (min = maxNum, max = minNum)
			if (decimalNum) {
				return (Math.random() * (max - min) + min) / 100
			} else {
				return Math.floor(Math.random() * (max - min + 1) + min)
			}
		},
		handleMapBtn(index) {
			this.currrntIndex = index
		},
		initMap() {
			// 绘制图表
			this.mapOption = {
				tooltip: {
					trigger: 'item',
					backgroundColor: 'rgba(103,134,163,.5)',
					formatter: function(params) {
						const str = '<div style="width:220px; height:140px; border-radius:5px; color:#fff; padding:5px 10px">' +
						'<div style="width:100%; font-size:18px; text-align: center; line-height:20px; padding-bottom:10px;margin-bottom:10px; border-bottom:1px solid #fff;">' + params.name + '</div>' +
						'<p style="line-height:24px;text-align: left;">矿种: ' + params.data.value + '种</p>' +
						'<p style="line-height:24px;text-align: left;">矿产地: 320个</p>' +
						'<p style="line-height:24px;text-align: left;">优势矿产: 铜、金刚石、水晶、铁</p>' +
						'</div>'
						return str
					}
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['']
				},
				selectedMode: 'single',
				series: [
					{
						name: '',
						type: 'map',
						mapType: 'china',
						// center: [115.97, 29.71],
						layoutCenter: ['80%', '100%'],
						// aspectScale: 0.8, // 长宽比
						itemStyle: {
							normal: {
								areaColor: '#c7d9f1',
								borderColor: 'rgba(0, 0, 0, 0.2)'
							},
							emphasis: {
								label: {
									show: false
								},
								areaColor: '#07315b',
								shadowOffsetX: 0,
								shadowOffsetY: 0,
								shadowBlur: 20,
								borderWidth: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},
						showLegendSymbol: false,
						label: {
							normal: {
								show: false
							}
						},
						data: [
							{ name: '北京', value: this.randomData(0, 100) },
							{ name: '天津', value: this.randomData(0, 100) },
							{ name: '上海', value: this.randomData(0, 100) },
							{ name: '重庆', value: this.randomData(0, 100) },
							{ name: '河北', value: this.randomData(0, 100) },
							{ name: '河南', value: this.randomData(0, 100) },
							{ name: '云南', value: this.randomData(0, 100) },
							{ name: '辽宁', value: this.randomData(0, 100) },
							{ name: '黑龙江', value: this.randomData(0, 100) },
							{ name: '湖南', value: this.randomData(0, 100) },
							{ name: '安徽', value: this.randomData(0, 100) },
							{ name: '山东', value: this.randomData(0, 100) },
							{ name: '新疆', value: this.randomData(0, 100) },
							{ name: '江苏', value: this.randomData(0, 100) },
							{ name: '浙江', value: this.randomData(0, 100) },
							{ name: '江西', value: this.randomData(0, 100) },
							{ name: '湖北', value: this.randomData(0, 100) },
							{ name: '广西', value: this.randomData(0, 100) },
							{ name: '甘肃', value: this.randomData(0, 100) },
							{ name: '山西', value: this.randomData(0, 100) },
							{ name: '内蒙古', value: this.randomData(0, 100) },
							{ name: '陕西', value: this.randomData(0, 100) },
							{ name: '吉林', value: this.randomData(0, 100) },
							{ name: '福建', value: this.randomData(0, 100) },
							{ name: '贵州', value: this.randomData(0, 100) },
							{ name: '广东', value: this.randomData(0, 100) },
							{ name: '青海', value: this.randomData(0, 100) },
							{ name: '西藏', value: this.randomData(0, 100) },
							{ name: '四川', value: this.randomData(0, 100) },
							{ name: '宁夏', value: this.randomData(0, 100) },
							{ name: '海南', value: this.randomData(0, 100) },
							{ name: '台湾', value: this.randomData(0, 100) },
							{ name: '香港', value: this.randomData(0, 100) },
							{ name: '澳门', value: this.randomData(0, 100) }
						]
					}
				]
			}
		},
		// 组件匹配
		changeComponent(data) {
			console.log(data)
			this.comView = data.value
		}
	}
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
			margin-bottom: 40px;
			&-main{
				width: 1170px;
				margin: 0 auto;
				padding: 50px 0;
				&-chart{
					width: 780px;
					position: relative;
					&-side{
						width: 45px;
						height: 185px;
						background: url('../../assets/img/gis.png') no-repeat;
						position: absolute;
					}
					&-warpper{
						width: 100%;
						padding: 0 30px;
						&-title{
							width: 400px;
							margin: 0 auto;
							span{
								margin-right: 10px;
								border-radius: 5px;
								color: #8e959b;
								padding: 10px;
								background-color: #c6c4d2;
								cursor: pointer;
								&.active{
									background-color: #063058;
									color: #fff;
								}
							}
						}
						&-map{

						}
					}
				}
				&-modul{
					width: 360px;
					background-color: #fff;
					&-top{
						padding-top: 20px;
						h5{
							line-height: 36px;
							background-color: #07315b;
							color: #fff;
							font-size: 15px;
							text-align: center;
						}
						h6{
							line-height: 36px;
							background-color: #c4880e;
							color: #fff;
							font-size: 15px;
							text-align: center;
						}
						p{
							line-height: 30px;
							text-align: center;
							border-bottom: 1px solid #f1f1f1;
						}
						&-l{
							p{
								border-right: 1px solid #f1f1f1;
							}
						}
						&-moreBtn{
							line-height: 40px;
							text-align: right;
							padding-right: 10px;
							span{
								cursor: pointer;
							}
						}

					}
					&-bottom{
						&-title{
							h4{
								padding-left: 60px;
							}
							span{
								padding-right: 10px;
							}
						}
						&-content{
							padding: 15px 25px;
							&-imgBox{
								margin-bottom: 10px;
								position: relative;
								cursor: pointer;
								&-tip{
									position: absolute;
									left: 0;
									top: 0;
									width: 100%;
									line-height: 100px;
									text-align: center;
									font-weight: bold;
									color: #fff;
									background-color: rgba(0,0,0,0.3);
									display: none;
								}
								&:hover{
									.home-container-topicOverview-main-modul-bottom-content-imgBox-tip{
										display: block;
									}
								}
							}

						}
					}
				}
			}
		}
		&-vap{
			width: 100%;
			padding-bottom: 60px;
			&-main{
				width: 1170px;
				margin: 0 auto;
				&-list{
					width: 820px;
				}
				&-recommend{
					width: 320px;
				}
			}
		}
	}
}
</style>
