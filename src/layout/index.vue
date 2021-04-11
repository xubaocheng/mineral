<template>
	<div class="container">
		<AppTop />
		<AppSerch />
		<AppNav />
		<div class="container-cump">
			<breadcrumb class="breadcrumb-container" />
		</div>
		<div class="container-warpper">
			<app-main />
			<div class="qr_code">
				<QRcode />
			</div>
		</div>
		<AppBottom />
	</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { AppTop, AppSerch, AppNav, AppMain, AppBottom, QRcode } from './components'

export default {
	name: 'Layout',
	components: {
		Breadcrumb,
		AppTop,
		AppSerch,
		AppBottom,
		AppMain,
		AppNav,
		QRcode
	},
	computed: {

	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	&-cump{
		// width: 1170px;
		background-color: #f2f2f2;
		padding: 10px 0;
	}
	&-warpper{
		// width: 1170px;
		// margin: 0 auto;
		position: relative;
		.qr_code{
			position: fixed;
			top: 460px;
			right: 150px;
		}
	}

}

</style>
