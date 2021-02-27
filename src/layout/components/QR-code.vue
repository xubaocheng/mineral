<!-- 二维码 -->
<template>
	<div class="qr-code">
		<div class="qr-code-top">
			<i class="el-icon-question" />
			<p>问题反馈</p>
		</div>
		<div class="qr-code-bottom">
			<img src="../../assets/img/qr-code.png" alt="">
			<p>关注我们</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'QrCode',

	components: {},

	data() {
		return {
		}
	},

	computed: {},

	mounted() {},

	methods: {}
}

</script>
<style lang='scss' scoped>
.qr-code{
	width: 90px;
	height: 166px;
	padding: 4px;
	background: #bdbdbd;
	&-top{
		width: 100%;
		height: 60px;
		text-align: center;
		padding-top: 10px;
		background: #003b65;
		margin-bottom: 4px;
		i{
			font-size: 22px;
			color: #fff;
		}
		p{
			line-height: 30px;
			color: #fff;
			font-weight: bold;
		}
	}
	&-bottom{
		width: 100%;
		text-align: center;
		background: #fff;
		p{
			line-height: 24px;
			color: #8d8d8d;
			font-weight: bold;
		}
	}
}
</style>
