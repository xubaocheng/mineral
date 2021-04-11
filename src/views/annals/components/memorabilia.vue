<!-- memorabilia 大事记 -->
<template>
	<div class="memorabilia">
		<i
			class="el-icon-arrow-up icon-btn-style"
			:disabled="currentIndex === 0"
			:style="{cursor: currentIndex === 0 ? 'no-drop' : 'pointer', color:currentIndex === 0 ? '#d9f0ff' : '#0398ff'}"
			@click="handlerUp"
			/>
		<timeline timeline-theme="#e1e1e1">
			<template v-for="(item,index) in serverDataCutOut">
				<timeline-title :key="`timeline_item_${index}`" :font-color="item.mVisiable ? '#e5402d':'#029aff'">
					<i slot="others" class="el-icon-location-outline" @click="changeDisplay(index)" />
					<span slot="a">{{ item.year }}</span>
					<div slot="b" class="big-content">
						<h2>{{ item.title }}</h2>
						<p>{{ item.describe }}</p>
					</div>
				</timeline-title>
				<li v-show="item.mVisiable" :key="`timeline_item_li_${index}`">
					<timeline-item v-for="(itemChild,i) in item.list" :key="`itemList_itemChild_${i}`">
						<p class="list_title">{{ itemChild.date }}</p>
						<p class="append list_des">{{ itemChild.describe }}</p>
					</timeline-item>
				</li>
			</template>
		</timeline>
		<i
			class="el-icon-arrow-down icon-btn-style"
			:disabled="currentIndex >= serverData.length / 4 - 1"
			:style="{cursor: currentIndex >= serverData.length / 4 - 1 ? 'no-drop' : 'pointer', color:currentIndex >= serverData.length / 4 - 1 ? '#d9f0ff' : '#0398ff'}"
			@click="handlerDown"
			/>
	</div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from './time-line/index'
import { memorabilia } from '@/api/annals'
export default {
	name: 'Memorabilia',

	components: {
		Timeline,
		TimelineItem,
		TimelineTitle
	},

	data() {
		return {
			serverData: [],
			currentIndex: 0
			// serverDataCutOut: []
		}
	},

	computed: {
		serverDataCutOut: function() {
			return this.serverData.slice(this.currentIndex * 4, this.currentIndex * 4 + 4)
		}
	},

	mounted() {
		this.init()
	},

	methods: {
		init() {
			const params = {
				a: 1
			}
			memorabilia(params).then(res => {
				this.serverData = res.data
			})
		},
		changeDisplay(index) {
			this.serverDataCutOut[index].mVisiable = !this.serverDataCutOut[index].mVisiable
		},
		handlerUp() {
			if (this.currentIndex > 0) {
				this.currentIndex -= 1
			} else {
				this.$message({
					message: '已经是最新的了！',
					type: 'warning'
				})
			}
		},
		handlerDown() {
			if (this.currentIndex < this.serverData.length / 4 - 1) {
				this.currentIndex += 1
			} else {
				this.$message({
					message: '已经是最后的了！',
					type: 'warning'
				})
			}
		}

	}
}

</script>
<style lang='scss' scoped>
.memorabilia{
	width: 100%;
	padding-left: 100px;
	border-left: 2px solid #eee;
	border-right: 2px solid #eee;
	.icon-btn-style{
		font-size:40px; color:#0297fe; font-weight:bold; cursor: pointer;
	}
	.big-content{
		width: 100%;
		h2{
			font-size: 18px;
			font-weight: bold;
			line-height: 30px;
			color: #666666;
		}
		p{
			line-height: 30px;
			color: #a6a7a9;
		}
	}
	.list_title{
		font-size: 16px;
		font-weight: bold;
	}
	.list_des{
		color: #a6a7a9;
	}
}
</style>
