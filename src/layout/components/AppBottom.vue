<!-- 公共底部 -->
<template>
	<div class="app-bottom">
		<div class="app-bottom-warpper">
			<div class="app-bottom-warpper-box">
				<span>友情链接: </span>
				<el-select v-model="value1" placeholder="请选择" size="mini" style="width:130px; margin-right:5px">
					<el-option
						v-for="item in options1"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						/>
				</el-select>
				<el-select v-model="value2" placeholder="请选择" size="mini" style="width:130px; margin-right:5px">
					<el-option
						v-for="item in options2"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						/>
				</el-select>
				<el-select v-model="value3" placeholder="请选择" size="mini" style="width:130px; margin-right:5px">
					<el-option
						v-for="item in options3"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						/>
				</el-select>
				<el-select v-model="value4" placeholder="请选择" size="mini" style="width:130px; margin-right:5px">
					<el-option
						v-for="item in options4"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						/>
				</el-select>
				<el-select v-model="value5" placeholder="请选择" size="mini" style="width:130px; margin-right:5px">
					<el-option
						v-for="item in options5"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						/>
				</el-select>
				<el-select v-model="value6" placeholder="请选择" size="mini" style="width:130px; margin-right:5px">
					<el-option
						v-for="item in options6"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						/>
				</el-select>
			</div>
			<div class="app-bottom-warpper-box">
				<div class="app-bottom-warpper-box-contact">
					<span>联系我们</span>
					<span><i class="el-icon-s-custom" /> 1234456789</span>
					<span><i class="el-icon-message" /> xxx@163.com</span>
				</div>
			</div>
			<div class="app-bottom-warpper-box">
				<div class="app-bottom-warpper-box-upper clearFix">
					<p class="app-bottom-warpper-box-upper-item left">
						<span>主办：</span>
						<strong>中国矿产地质志项目办公室</strong>
					</p>
					<p class="app-bottom-warpper-box-upper-item left">
						<span>技术支持：</span>
						<strong>中国地质科学院矿产资源研究所</strong>
					</p>
				</div>
				<p class="app-bottom-warpper-box-in">北京市西城区百万庄大街26号院</p>
				<p class="app-bottom-warpper-box-lower"><i class="el-icon-question" /> 京ICP备05055483</p>
				<div class="app-bottom-warpper-box-record">
					<img src="../../assets/img/record.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppBottom',

	components: {},

	data() {
		return {
			options1: [{
				value: 1,
				label: '自然资源部网站'
			}],
			value1: 1,
			options2: [{
				value: 1,
				label: '直属单位网站'
			}],
			value2: 1,
			options3: [{
				value: 1,
				label: '省地调院网站'
			}],
			value3: 1,
			options4: [{
				value: 1,
				label: '省地质环境监测总网站'
			}],
			value4: 1,
			options5: [{
				value: 1,
				label: '有关媒体网站'
			}],
			value5: 1,
			options6: [{
				value: 1,
				label: '其他链接'
			}],
			value6: 1
		}
	},

	computed: {},

	mounted() {},

	methods: {}
}

</script>
<style lang='scss' scoped>
.app-bottom{
	width: 100%;
	height: 270px;
	background: #254461;
	color: #fff;
	&-warpper{
		width: 980px;
		margin: 0 auto;
		padding-top: 30px;
		&-box{
			margin-bottom: 20px;
			position: relative;
			&-contact{
				width: 60%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
			}
			&-upper{
				width: 60%;
				margin: 0 auto;
				text-align: center;
				margin-bottom: 20px;
				p{
					padding: 0 20px;
				}
			}
			&-in{
				width: 60%;
				margin: 0 auto;
				text-align: center;
				margin-bottom: 20px;
			}
			&-lower{
				width: 60%;
				margin: 0 auto;
				text-align: center;
			}
			&-record{
				position: absolute;
				left: 15%;
				bottom: 25%;
			}
		}
	}
}
</style>
