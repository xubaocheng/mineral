<!-- 矿种志书 mineral-records -->
<template>
	<div class="mineral-records">
		<div class="mineral-records-screen">
			<template v-for="(item,index) in checkBoxData">
				<div :key="`checkBoxData_item_icon_${item.open}_${index}`" class="icon-border">
					<i
						:key="`checkBoxData_item_${item.open}_${index}`"
						:class="[item.open ? 'el-icon-minus' :'el-icon-plus']"
						@click="openChild(index,null,item.open)"
						/>
				</div>
				<el-checkbox
					:key="`checkBoxData_item_${item.name}_${index}`"
					v-model="item.checked"
					@change="handleCheckAllChange1"
					>{{ item.name }}</el-checkbox>
			</template>
			<div style="margin: 15px 0;" />
			<template v-for="(item,index) in checkBoxData">
				<template v-if="item.open">
					<template v-for="(itemchild,i) in item.child">
						<div
							v-if="itemchild.child"
							:key="`itemchild_item_icon_${itemchild.name}_${itemchild.open}_${i}`"
							class="icon-border"
							>
							<i
								:key="`checkBoxData_item_${item.name}_${item.open}_${i}`"
								:class="[itemchild.open ? 'el-icon-minus' :'el-icon-plus']"
								@click="openChild(index,i,itemchild.open)"
								/>
						</div>
						<el-checkbox
							:key="`itemchild_${itemchild.name}_${i}`"
							v-model="itemchild.checked"
							:label="itemchild.name"
							>{{ itemchild.name }}</el-checkbox>
					</template>
					<div :key="`itemchild_item_three_${checkBoxData.name}_${index}`" style="margin: 15px 0;" />
					<template v-for="(itemchild,i) in item.child">
						<template v-if="itemchild.open">
							<el-checkbox
								v-for="(itemchildchild,j) in itemchild.child"
								:key="`itemchildchild_${itemchildchild.name}_${j}`"
								:label="itemchildchild.name"
								@change="handleCheckAllChange2"
								>{{ itemchildchild.name }}</el-checkbox>
						</template>
						<div :key="`itemchild_item_two_${itemchild.name}_${i}`" style="margin: 15px 0;" />
					</template>
				</template>
				<div :key="`checkBoxData_item_one_${index}`" style="margin: 15px 0;" />
			</template>
			<div style="text-align:center;">
				<el-button type="warning" size="small" round>确认</el-button>
			</div>
		</div>
		<div class="mineral-records-content">
			<el-row :gutter="20">
				<el-col v-for="(item,index) in serverData" :key="`serverData_${index}`" :span="8">
					<div class="mineral-records-content-item clearFix">
						<div class="mineral-records-content-item-img left">
							<img :src="item.img" alt="">
						</div>
						<div class="mineral-records-content-item-text right">
							<h3>{{ item.title }}</h3>
							<p>
								<span>主编：</span>
								<span>{{ item.author }}</span>
							</p>
							<p>
								<span>出版日期：</span>
								<span>{{ item.date }}</span>
							</p>
							<p>
								<span>内容提要：</span>
								<strong>{{ item.paragraph }}</strong>
							</p>
							<div style="text-align:right;">
								<el-button size="small" round>详情</el-button>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-pagination
				style="text-align:center; margin-bottom:10px;"
				background
				layout="prev, pager, next"
				prev-text="上一页"
				next-text="下一页"
				:total="100"
				/>
		</div>
	</div>
</template>

<script>
import { mineralProductsList } from '@/api/mineralProducts'
export default {
	name: 'MineralRecords',

	components: {},

	data() {
		return {
			checkBoxData: [
				{
					name: '能源矿产',
					checked: false,
					open: false,
					child: [
						{
							name: '油气',
							checked: false
						},
						{
							name: '煤',
							checked: false
						},
						{
							name: '煤层气',
							checked: false
						},
						{
							name: '铀',
							checked: false

						}
					]
				},
				{
					name: '金属矿产',
					checked: false,
					open: false,
					child: [
						{
							name: '铁'
						},
						{
							name: '锰'
						},
						{
							name: '钒钛铬'
						},
						{
							name: '铜'
						},
						{
							name: '铅锌'
						},
						{
							name: '铝土矿（铝）'
						},
						{
							name: '镁'
						},
						{
							name: '镍'
						},
						{
							name: '钨'
						},
						{
							name: '锡'
						},
						{
							name: '钼'
						},
						{
							name: '锑'
						},
						{
							name: '金'
						},
						{
							name: '银'
						},
						{
							name: '铂族金属'
						},
						{
							name: '锂铍铌钽'
						},
						{
							name: '铷锶锆铪铯'
						},
						{
							name: '稀土'
						},
						{
							name: '稀散'
						}, {
							name: '铁'
						}
					]
				},
				{
					name: '非金属矿产',
					checked: false,
					open: false,
					child: [
						{
							name: '建材非金属总卷',
							checked: false,
							open: false,
							child: [
								{
									name: '蓝晶石族'
								},
								{
									name: '石灰岩'
								},
								{
									name: '石英砂岩'
								},
								{
									name: '花岗岩'
								},
								{
									name: '大理岩'
								},
								{
									name: '石棉'
								},
								{
									name: '高岭土'
								},
								{
									name: '膨润土'
								},
								{
									name: '硅藻土'
								},
								{
									name: '滑石'
								},
								{
									name: '硅灰石'
								},
								{
									name: '石墨'
								}
							]
						},
						{
							name: '化工矿产总卷',
							checked: false,
							open: false,
							child: [
								{
									name: '钾盐'
								},
								{
									name: '钠盐'
								},
								{
									name: '磷'
								},
								{
									name: '硫'
								},
								{
									name: '硼'
								},
								{
									name: '萤石'
								},
								{
									name: '芒硝'
								},
								{
									name: '石膏'
								},
								{
									name: '重晶石'
								},
								{
									name: '化工灰岩/明矾石/天青石/雄黄/硝石/天然碱'
								}
							]
						},
						{
							name: '宝玉石卷',
							checked: false,
							open: false,
							child: [
								{
									name: '和田玉'
								}
							]
						}
					]
				}
			],
			serverData: []
		}
	},

	computed: {},

	created() {
		this.recursion(this.checkBoxData)
	},

	mounted() {
		this.init()
	},

	methods: {
		init() {
			const params = {
				a: 1
			}
			mineralProductsList(params).then(res => {
				this.serverData = res.data
				console.log(this.serverData)
			})
		},
		handleCheckAllChange1(val) {
			console.log(val)
			console.log(this.checkBoxData)
		},
		handleCheckAllChange2(val) {
			console.log(val)
		},
		handleCheckedCitiesChange(val) {
			console.log(val)
		},
		recursion(item) {
			for (let i = 0; i < item.length; i++) {
				item[i].checked = false
				if (item[i].child) {
					this.recursion(item[i].child)
				}
			}
		},
		openChild(index, i, open) {
			if (i !== null) {
				this.checkBoxData[index].child[i].open = !open
			} else {
				this.checkBoxData[index].open = !open
			}
		}
	}
}

</script>
<style lang='scss' scoped>
.mineral-records{
	width: 100%;
	&-screen{
		border-bottom: 1px solid #003b65;
		padding-bottom: 10px;
		margin-bottom: 20px;
		.icon-border{
			display: inline-block;
			margin-right: 5px;
			cursor: pointer;
			i{
				font-size: 12px;
			}
		}
	}
	&-content{
		width: 100%;
		&-item{
			width: 100%;
			height: 210px;
			padding: 25px 20px;
			border:1px solid #bcc7c3;
			margin-bottom: 20px;
			&-img{
				width: 120px;
				img{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			&-text{
				width: 200px;
				h3{
					font-weight: bold;
					font-size: 18px;
					line-height: 30px;
					color: #050505;
				}
				p{
					line-height: 25px;
					color: #acacac;
					span{
						display: inline-block;
					}
					strong{
						display: inline-block;
						width: 100%;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
	}
}
</style>
