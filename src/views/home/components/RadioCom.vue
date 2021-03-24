<!-- 音频列表 -->
<template>
	<div class="radio-warpper">
		<div class="radio-warpper-list">
			<div v-for="(item,index) in list" :key="`list_item_${index}`" class="radio-warpper-list-item">
				<p>{{ item.content }}</p>
				<div class="radio-warpper-list-item-cump clearFix">
					<span class="left">{{ item.author }}</span>
					<span class="left">{{ item.date }}</span>
					<span class="left">{{ item.time }}</span>
					<div class="radio-warpper-list-item-cump-btn right">
						<strong><i class="el-icon-picture-outline-round" />下载</strong>
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
	name: 'RadioWarpper',

	components: {},

	data() {
		return {
			list: [
				{
					content: '新华社北京12月3日电()由中国工商出版社主办的首届市场监管领域社会共治高峰论坛2日在北京举行。论坛发布了市场监管领域撒大声地撒大声地是滴是滴是滴',
					author: '张宏伟',
					date: '2019/03/22',
					time: '时长10分钟'
				},
				{
					content: '新华社北京12月3日电()由中国工商出版社主办的首届市场监管领域社会共治高峰论坛2日在北京举行。论坛发布了市场监管领域撒大声地撒大声地是滴是滴是滴',
					author: '张宏伟',
					date: '2019/03/22',
					time: '时长10分钟'
				},
				{
					content: '新华社北京12月3日电()由中国工商出版社主办的首届市场监管领域社会共治高峰论坛2日在北京举行。论坛发布了市场监管领域撒大声地撒大声地是滴是滴是滴',
					author: '张宏伟',
					date: '2019/03/22',
					time: '时长10分钟'
				},
				{
					content: '新华社北京12月3日电()由中国工商出版社主办的首届市场监管领域社会共治高峰论坛2日在北京举行。论坛发布了市场监管领域撒大声地撒大声地是滴是滴是滴',
					author: '张宏伟',
					date: '2019/03/22',
					time: '时长10分钟'
				},
				{
					content: '新华社北京12月3日电()由中国工商出版社主办的首届市场监管领域社会共治高峰论坛2日在北京举行。论坛发布了市场监管领域撒大声地撒大声地是滴是滴是滴',
					author: '张宏伟',
					date: '2019/03/22',
					time: '时长10分钟'
				}
			]
		}
	},

	computed: {},

	mounted() {},

	methods: {}
}

</script>
<style lang='scss' scoped>
.radio-warpper{
	width: 100%;
	&-list{
		width: 100%;
		&-item{
			width: 100%;
			border-bottom: 2px solid #ddd;
			margin-bottom: 10px;
			p{
				line-height: 30px;
				padding-bottom: 10px;
				cursor: pointer;
			}
			&-cump{
				padding-bottom: 10px;
				width: 100%;
				span{
					padding-right: 15px;
					color: #949494;
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
					strong:nth-child(2):after {
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
	}
}
</style>
