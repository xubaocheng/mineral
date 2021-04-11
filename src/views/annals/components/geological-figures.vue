<!-- geological-figures -->
<template>
	<div class="geological-figures">
		<div class="geological-figures-list">
			<div
				v-for="(item,index) in serverData"
				:key="`serverData_item_${index}`"
				class="geological-figures-list-item clearFix"
				:style="{background:item.color}"
				>
				<div
					class="geological-figures-list-item-img"
					:class="{left:index%2 === 0, right:index%2 !== 0}"
					>
					<img :src="item.img" alt="">
				</div>
				<div
					class="geological-figures-list-item-text "
					:class="{right:index%2 === 0, left:index%2 !== 0}"
					:style="{textAlign:index%2 !== 0 ? 'right' : 'left'}"
					>
					<h3>{{ item.name }}</h3>
					<p>{{ item.major }} {{ item.date }}</p>
					<p>{{ item.university }}</p>
					<p>{{ item.evaluate }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { figures } from '@/api/annals'
export default {
	name: 'GeologicalFigures',

	components: {},

	data() {
		return {
			serverData: [],
			colorList: ['#f2f8f6', '#faf2f0', '#fdfad1', '#e6ecc8', '#f2f8f6', '#faf2f0']
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
			figures(params).then(res => {
				this.serverData = res.data
				this.serverData.forEach((item, index) => {
					item.img = require(`../../../assets/img/list/${item.img}`)
					item.color = this.colorList[index]
				})
			})
		}
	}
}

</script>
<style lang='scss' scoped>
.geological-figures{
	width: 100%;
	&-list{
		width: 100%;
		&-item{
			width: 100%;
			margin-bottom: 20px;
			&-img{
				width: 180px;
				height: 220px;
				img{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			&-text{
				width: calc(100% - 180px);
				padding: 10px;
				h3{
					font-weight: bold;
					font-size: 16px;
					margin-bottom: 10px;
				}
				p{
					line-height: 30px;
				}
			}
		}
	}
}
</style>
