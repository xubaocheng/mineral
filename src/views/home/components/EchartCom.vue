<!-- echart地图 -->
<template>
	<div ref="EchartsComp" class="EchartsComp" :style="{height: height + 'px'}" />
</template>

<script>
export default {
	name: 'EchartsComp',

	components: {},

	props: {
		option: {
			type: Object,
			default: () => ({})
		},
		height: {
			type: String,
			default: () => '400'
		}
	},

	data() {
		return {
			EchartsComp: ''
		}
	},
	computed: {},

	watch: {
		option() {
			this.init()
		}
	},

	mounted() {
		this.init()
	},

	methods: {
		init() {
			this.EchartsComp = this.$echarts.init(this.$refs.EchartsComp)
			this.EchartsComp.clear()
			this.EchartsComp.setOption(this.option)
		}
	}
}

</script>
<style lang='scss' scoped>
.EchartsComp{
	width: 100%;
}
</style>
