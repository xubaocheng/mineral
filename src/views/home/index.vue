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
					22
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import TitleCom from './components/Title'
import Listcom from '_c/ListCom'
export default {
	name: 'Home',

	components: {
		TitleCom,
		Listcom
	},

	data() {
		return {
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
	}
}
</style>
