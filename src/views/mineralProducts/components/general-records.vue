<!-- 总志 general-records -->
<template>
	<div class="general-records">
		<div class="general-records-screen">
			<el-checkbox v-model="checkAll1" @change="handleCheckAllChange1">矿产总志</el-checkbox>
			<el-checkbox v-model="checkAll2" @change="handleCheckAllChange2">规律总志</el-checkbox>
			<div style="margin: 15px 0;" />
			<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
				<el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
			</el-checkbox-group>
		</div>
	</div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
	name: 'GeneralRecords',

	components: {},

	data() {
		return {
			checkAll1: false,
			checkAll2: false,
			checkedCities: ['上海', '北京'],
			cities: cityOptions
		}
	},

	computed: {},

	mounted() {},

	methods: {
		handleCheckAllChange1(val) {
			this.checkedCities = val ? cityOptions : []
		},
		handleCheckAllChange2(val) {
			this.checkedCities = val ? cityOptions : []
		},
		handleCheckedCitiesChange(value) {
			const checkedCount = value.length
			this.checkAll1 = checkedCount === this.cities.length
		}
	}
}

</script>
<style lang='scss' scoped>
.general-records{
	width: 100%;
}
</style>
