<!-- 资讯详情 -->
<template>
	<div class="detail">
		<div class="detail-title">
			<h3>{{ serverData.title }}</h3>
			<span class="detail-title-date">{{ serverData.date }}</span>
			<p class="detail-title-info">
				<span>来源：{{ serverData.source }}</span>
				<span>作者：{{ serverData.author }}</span>
				<span>字体大小：{{ serverData.fontSize }}</span>
				<span>浏览量：{{ serverData.pageviews }}</span>
			</p>
		</div>
		<div class="detail-content">
			<p v-for="(item,index) in serverData.paragraph" :key="`detail-content_paragraph_${index}`">{{ item }}</p>
			<div class="detail-content-img">
				<div v-for="(item,index) in serverData.img" :key="`detail-content_img_${index}`" class="detail-content-img-item">
					<img :src="item" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { detail } from '@/api/news'
export default {
	name: 'DetailPage',

	components: {},

	data() {
		return {
			serverData: {}
		}
	},

	computed: {},

	mounted() {
		this.init()
	},

	methods: {
		init() {
			const params = {
				a: 1
			}
			detail(params).then(res => {
				this.serverData = res.data
				console.log(this.serverData)
			})
		}
	}
}

</script>
<style lang='scss' scoped>
@import '~@/styles/home.scss';
.detail{
	width: 100%;
	&-title{
		width: 100%;
		text-align: center;
		border-bottom:1px solid $main-tone-color;
		h3{
			font-weight: bold;
			font-size: 18px;
			margin-bottom:20px;
		}
		&-date{
			display: block;
			font-size: 12px;
			margin-bottom: 20px;
		}
		&-info{
			padding-bottom: 30px;
			span{
				font-size: 12px;
				padding: 0 10px;
			}
		}
	}
	&-content{
		width: 100%;
		padding: 25px 20px;
		p{
			font-size: 16px;
			text-indent: 2em;
			line-height: 30px;
			margin-bottom: 30px;
		}
		&-img{
			display: flex;
			justify-content: space-around;
		}
	}
}
</style>
