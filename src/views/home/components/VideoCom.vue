<!-- 视频 -->
<template>
	<div class="video-warpper">
		<video-player
			ref="videoPlayer"
			class="video-player vjs-custom-skin"
			:playsinline="true"
			:options="playerOptions"
			/>
	</div>
</template>

<script>
export default {
	name: 'VideoWarpper',

	components: {},

	data() {
		return {
			// 视频播放
			playerOptions: {
				playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
				autoplay: false, // 如果true,浏览器准备好时开始回放。
				muted: false, // 默认情况下将会消除任何音频。
				loop: false, // 导致视频一结束就重新开始。
				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
				language: 'zh-CN',
				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
				sources: [
					{
						type: '',
						src: 'http://vjs.zencdn.net/v/oceans.mp4' // url地址
						// src: "" //url地址
					}
				],
				poster: require('../../../assets/img/test.png'), // 你的封面地址
				// width: document.documentElement.clientWidth,
				notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
				controlBar: {
					timeDivider: true,
					durationDisplay: true,
					remainingTimeDisplay: false,
					fullscreenToggle: true // 全屏按钮
				}
			}
		}
	},

	computed: {},

	mounted() {
		// this.playerOptions['sources'][0]['src'] = '接口地址';
	},

	methods: {}
}
</script>
<style lang='scss'>
.video-warpper {
	width: 100%;
	.video-js {
		/* 给.video-js设置字体大小以统一各浏览器样式表现，因为video.js采用的是em单位 */
		font-size: 14px;
	}
	.video-js button {
		outline: none;
	}
	.video-js.vjs-fluid,
	.video-js.vjs-16-9,
	.video-js.vjs-4-3 {
		/* 视频占满容器高度 */
		height: 100%;
		background-color: #161616;
	}
	.vjs-poster {
		background-color: #161616;
	}
	.video-js .vjs-big-play-button {
		/* 中间大的播放按钮 */
		font-size: 2.5em;
		line-height: 2.3em;
		height: 2.5em;
		width: 2.5em;
		-webkit-border-radius: 2.5em;
		-moz-border-radius: 2.5em;
		border-radius: 2.5em;
		background-color: rgba(115, 133, 159, 0.5);
		border-width: 0.12em;
		margin-top: -1.25em;
		margin-left: -1.75em;
	}
	.video-js.vjs-paused .vjs-big-play-button {
		/* 视频暂停时显示播放按钮 */
		display: block;
	}
	.video-js.vjs-error .vjs-big-play-button {
		/* 视频加载出错时隐藏播放按钮 */
		display: none;
	}
	.vjs-loading-spinner {
		/* 加载圆圈 */
		font-size: 2.5em;
		width: 2em;
		height: 2em;
		border-radius: 1em;
		margin-top: -1em;
		margin-left: -1.5em;
	}
	.video-js .vjs-control-bar {
		/* 控制条默认显示 */
		display: flex;
	}
	.video-js .vjs-time-control {
		display: block;
	}
	.video-js .vjs-remaining-time {
		display: none;
	}

	.vjs-button > .vjs-icon-placeholder:before {
		/* 控制条所有图标，图标字体大小最好使用px单位，如果使用em，各浏览器表现可能会不大一样 */
		font-size: 22px;
		line-height: 1.9;
	}
	.video-js .vjs-playback-rate .vjs-playback-rate-value {
		line-height: 2.4;
		font-size: 18px;
	}
	/* 进度条背景色 */
	.video-js .vjs-play-progress {
		color: #ffb845;
		background-color: #ffb845;
	}
	.video-js .vjs-progress-control .vjs-mouse-display {
		background-color: #ffb845;
	}
	.vjs-mouse-display .vjs-time-tooltip {
		padding-bottom: 6px;
		background-color: #ffb845;
	}
	.video-js .vjs-play-progress .vjs-time-tooltip {
		display: none !important;
	}
}
</style>
