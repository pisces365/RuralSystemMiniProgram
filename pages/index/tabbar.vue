<template>
	<view>
		<index v-if="PageCur=='index'"></index>
		<search v-if="PageCur=='search'"></search>
		<cases v-if="PageCur=='cases'"></cases>
		<news v-if="PageCur=='news'"></news>
		<me v-if="PageCur=='me'"></me>

		<view class="box">
			<view class="cu-bar tabbar bg-white shadow foot">
				<view class="action" @click="NavChange" data-cur="index">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='index'" src="http://p1362.bvimg.com/10465/ce800c4769ef81a9.png"></image>
						<image v-if="PageCur != 'index'" src="http://p1362.bvimg.com/10465/ec2758af980bb0b5.png"></image>
					</view>
					<view :class="PageCur=='index'?'color_main':'text-gray'">首页</view>
				</view>

				<view class="action" @click="NavChange" data-cur="cases">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='cases'" src="http://p1362.bvimg.com/10465/9adddd44c71242f1.png"></image>
						<image v-if="PageCur != 'cases'" src="http://p1362.bvimg.com/10465/09e4ddd38ecf9001.png"></image>
					</view>
					<view :class="PageCur=='search'?'color_main':'text-gray'">乡村中心</view>
				</view>

				<!-- <view @click="NavChange" class="action text-gray add-action" data-cur="cases">
					<image class="logo_btn" mode="widthFix" src="../../static/logo.png"></image>
					<view :class="PageCur=='cases'?'color_main':'text-gray'">组件模板</view>
				</view> -->

				<view class="action" @click="NavChange" data-cur="news">
					<view class='cuIcon-cu-image'>
						<!-- <view class="cu-tag badge">{{message}}</view> -->
						<image v-if="PageCur=='news'" src="http://p1362.bvimg.com/10465/17a643f87311641f.png"></image>
						<image v-if="PageCur != 'news'" src="http://p1362.bvimg.com/10465/adbbb92ea175e2e2.png"></image>
					</view>
					<view :class="PageCur=='news'?'color_main':'text-gray'">政策资讯</view>
				</view>

				<view class="action" @click="NavChange" data-cur="me">
					<view class='cuIcon-cu-image'>
						<!-- <view class="cu-tag badge"></view> --><!-- 红点 -->
						<image v-if="PageCur=='me'" src="http://p1362.bvimg.com/10465/6b2663e4762dc54a.png"></image>
						<image v-if="PageCur != 'me'" src="http://p1362.bvimg.com/10465/310af79eea9a485d.png"></image>
					</view>
					<view :class="PageCur=='me'?'color_main':'text-gray'">个人中心</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	import index from "./inedx.vue";	//首页
	import search from "./search.vue";	//技术视频
	import cases from "./main.vue";	//宅家学
	import news from "./news.vue";	//资讯
	import me from "./me.vue";	//个人中心
	export default {
		components: {
			index,
			search,
			cases,
			news,
			me
		},
		data() {
			return {
				PageCur: 'index',

				message: '2',
				openId:'',
				access_token:'',
				
				tip:"我是提示",
				duration:1

			};
		},
		created() {
			
		},
		// 分享小程序
		onShareAppMessage(res) {
			return {
				title: '学技术·做软件·找案例·寻合作，快来「7he丶Kevin」吧！',
			};
		},
		onLoad() {
			//获取退出时的tabbar记录
			// uni.getStorage({
			// 	key: 'PageCur',
			// 	success: function(res) {
			// 		that.PageCur = res.data;
			// 	},
			// 	fail: function(res) {}
			// });
		},
		methods: {
			NavChange: function(e) {
				console.log(e.currentTarget.dataset.cur)

				this.PageCur = e.currentTarget.dataset.cur;

				if (this.PageCur == 'index') {
					// document.title = '首页'
				} else if (this.PageCur == 'component') {
					// document.title = '积分商城'
				} else if (this.PageCur == 'cases') {
					// document.title = '宅家学'
				} else if (this.PageCur == 'news') {
					// document.title = '文章资讯'
				} else if (this.PageCur == 'me') {
					// document.title = '个人中心'
				}

				// uni.setStorage({
				// 	key: 'PageCur',
				// 	data: this.PageCur,
				// 	success: function() {
				// 		console.log('保存成功！');
				// 	}
				// });
			},
			NavChange_xd: function() {
				uni.navigateTo({
					url: 'publish',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style lang="scss">
	.box {
		margin: 20upx 0;
	}
	.box view.cu-bar {
		margin-top: 20upx;
	}
	
	.logo_btn{
		width: 38*2rpx;
		height: 38*2rpx;
		position: absolute;
		z-index: 2;
		border-radius: 50%;
		top: -40rpx;
		left: 0rpx;
		right: 0;
		margin: auto;
		padding: 0;
	}
	.cu-bar.tabbar .action.add-action {
	    padding-top: 56rpx !important;
	}
</style>
