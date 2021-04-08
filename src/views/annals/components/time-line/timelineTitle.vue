<template>
	<li class="timeline-title" :style="itemStyle">
		<div ref="others" class="timeline-circle timeline-title-circle" :class="slotClass" :style="circleStyle">
			<slot name="others" />
		</div>
		<span class="big-title">
			<slot name="a" />
		</span>
		<div>
			<slot name="b" />
		</div>
	</li>
</template>

<script>
import timelineItemBase from './timelineItemBase.vue'

export default {
	extends: timelineItemBase

}
</script>
<style scoped lang="scss">
	.big-title{
		position: absolute;
		left:-120px;
		top: 10px;
		span{
			font-size: 20px;
			font-weight: bold;
			color: #5f6769;
		}
	}

</style>
