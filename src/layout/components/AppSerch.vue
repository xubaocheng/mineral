<!-- 公共搜索-->
<template>
	<div class="app-serch clearFix">
		<a href="javascript;;" class="left">
			<img src="../../assets/img/logo.png" alt="">
		</a>
		<div class="app-serch-warpper right">
			<el-input v-model="serchInput" placeholder="请输入内容" class="input-with-select">
				<el-select slot="prepend" v-model="select" placeholder="请选择">
					<el-option label="全部" value="1" />
					<el-option label="xxx" value="2" />
					<el-option label="xxxx" value="3" />
				</el-select>
				<el-button slot="append" icon="el-icon-search" class="btn-color" />
			</el-input>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppSerch',

	components: {},

	data() {
		return {
			serchInput: '',
			select: '1'
		}
	},

	computed: {},

	mounted() {},

	methods: {}
}

</script>
<style lang="scss">

.app-serch-warpper{
	.el-select .el-input {
		width: 130px;
	}
	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}
}
</style>
<style lang='scss' scoped>
@import '~@/styles/home.scss';
.app-serch{
    width: 1170px;
    margin: 0 auto;
    height: 100px;
	&-warpper{
		padding: 30px 0;
		.btn-color{
			background: $main-tone-color;
			color:#fff;
			font-size: 16px;
		}
	}
}
</style>
