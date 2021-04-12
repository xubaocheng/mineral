<!-- 资讯详情 -->
<template>
	<div class="detail">111</div>
</template>

<script>
import { detail } from '@/api/news'
export default {
	name: 'DetailPage',

	components: {},

	data() {
		return {
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
			detail(params).then(res => {
				this.serverData = res.data
				console.log(this.serverData)
			})
		}
	}
}

</script>
<style lang='scss' scoped>
.detail{
	width: 100%;
}
</style>
