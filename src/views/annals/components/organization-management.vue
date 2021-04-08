<!-- organization-management 组织管理-->
<template>
	<div class="organization-management">
		<div class="organization-management-tab clearFix">
			<span
				v-for="(item,index) in tabBtn"
				:key="`tabBtn_item_${index}`"
				class="left"
				:class="{active: index === currentIndex}"
				@click="toggleTab(index)"
				>{{ item.name }}</span>
		</div>
		<div class="organization-management-content">
			<div v-for="(item,index) in serverData" :key="`serverData_item_${index}`" class="organization-management-content-modular">
				<template v-if="index === 0">
					<h2>{{ item.heading }}</h2>
					<div class="organization-management-content-modular-main">
						<div v-for="(itemChild,i) in item.group" :key="`group_item_${i}`" class="organization-management-content-modular-main-item clearFix">
							<h3 class="left">{{ itemChild.title }} <i /></h3>
							<ul class="organization-management-content-modular-main-item-list left">
								<li v-for="(itemChildChild,j) in itemChild.list" :key="`list_item_${j}`" class="clearFix">
									<span class="left">{{ itemChildChild.name }} <i /></span>
									<strong class="left">{{ itemChildChild.synopsis }}</strong>
								</li>
							</ul>
						</div>
					</div>
				</template>
				<template v-if="index === 1">
					<h2>{{ item.heading }}</h2>
					<div class="organization-management-content-modular-main">
						<div v-for="(itemChild,i) in item.group" :key="`group_item_${i}`" class="organization-management-content-modular-main-item clearFix">
							<h3 class="left">{{ itemChild.title }} <i /></h3>
							<ul class="organization-management-content-modular-main-item-list left">
								<li v-for="(itemChildChild,j) in itemChild.list" :key="`list_item_${j}`" class="left">
									<span>{{ itemChildChild.name }} <i /></span>
								</li>
							</ul>
						</div>
					</div>
				</template>
				<template v-if="index === 2">
					<h2>{{ item.heading }}</h2>
					<div class="organization-management-content-modular-main">
						<p>{{ item.title }}</p>
					</div>
				</template>
				<template v-if="index === 3">
					<h2>{{ item.heading }}</h2>
					<div class="organization-management-content-modular-main">
						<div v-for="(itemChild,i) in item.group" :key="`group_item_${i}`" class="organization-management-content-modular-main-item clearFix">
							<h3 class="left">{{ itemChild.title }} <i /></h3>
							<ul class="organization-management-content-modular-main-item-list left">
								<li v-for="(itemChildChild,j) in itemChild.list" :key="`list_item_${j}`" class="left">
									<span>{{ itemChildChild.name }} <i /></span>
								</li>
							</ul>
						</div>
					</div>
				</template>
				<template v-if="index === 4">
					<h2>{{ item.heading }}</h2>
					<div class="organization-management-content-modular-main">
						<ul class="organization-management-content-modular-main-item-list special left">
							<li v-for="(itemChildChild,j) in item.list" :key="`list_item_${j}`" class="left">
								<span>{{ itemChildChild.name }} <i /></span>
							</li>
						</ul>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import { organization } from '@/api/annals'
export default {
	name: 'OrganizationManagement',

	components: {},

	data() {
		return {
			tabBtn: [
				{
					name: '第一届'
				},
				{
					name: '第二届'
				},
				{
					name: '第三届'
				}
			],
			currentIndex: 0,
			serverData: []
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
			organization(params).then(res => {
				console.log(res)
				this.serverData = res.data
			})
		},
		toggleTab(index) {
			this.currentIndex = index
			this.init()
		}
	}
}

</script>
<style lang='scss' scoped>
@import '~@/styles/home.scss';
.organization-management{
	width: 100%;
	&-tab{
		width: 100%;
		padding-left: 20px;
		span{
			padding: 8px 40px;
			background-color: #c6c4d2;
			font-size: 18px;
			color: #66685d;
			margin-right: 15px;
			cursor: pointer;
		}
		span.active{
			background-color: $main-tone-color;
			color: #fff;
		}
	}
	&-content{
		width: 100%;
		&-modular{
			width: 100%;
			padding-top:40px;
			h2{
				width: 100%;
				font-size: 22px;
				font-weight: bold;
				margin-bottom: 30px;
			}
			&-main{
				width: 100%;
				&-item{
					width: 100%;
					h3{
						width: 50px;
						margin-right: 20px;
						text-align: justify;
						font-size: 16px;
						i{
							display:inline-block;
							width:100%;
						}
					}
					&-list{
						width: 90%;
						li{
							color: #8d8d8d;
							span{
								width: 50px;
								display: inline-block;
								margin-right: 20px;
								text-align: justify;
								font-size: 16px;
								i{
									display:inline-block;
									width:100%;
								}
							}
							strong{
								font-size: 16px;
							}
						}
						&.special{
							padding-left: 40px;
						}
					}

				}
				p{
					font-size: 16px;
					color: #8d8d8d;
					text-indent: 4em;
				}
			}

		}
	}
}
</style>
