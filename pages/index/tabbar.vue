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
						<image v-if="PageCur=='index'" src="https://s4.ax1x.com/2022/01/10/7EVIeA.png"></image>
						<image v-if="PageCur != 'index'" src="https://s4.ax1x.com/2022/01/10/7EV4Ld.png"></image>
					</view>
					<view :class="PageCur=='index'?'color_main':'text-gray'">首页</view>
				</view>

				<view class="action" @click="NavChange" data-cur="cases">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='cases'" src="https://s4.ax1x.com/2022/01/10/7EVbJf.png"></image>
						<image v-if="PageCur != 'cases'" src="https://s4.ax1x.com/2022/01/10/7EVHFP.png"></image>
					</view>
					<view :class="PageCur=='search'?'color_main':'text-gray'">乡村中心</view>
				</view>

				<view class="action" @click="NavChange" data-cur="news">
					<view class='cuIcon-cu-image'>
						<!-- <view class="cu-tag badge">{{message}}</view> -->
						<image v-if="PageCur=='news'" src="https://s4.ax1x.com/2022/01/10/7EVTot.png"></image>
						<image v-if="PageCur != 'news'" src="https://s4.ax1x.com/2022/01/10/7EVfQe.png"></image>
					</view>
					<view :class="PageCur=='news'?'color_main':'text-gray'">政策资讯</view>
				</view>

				<view class="action" @click="NavChange" data-cur="me">
					<view class='cuIcon-cu-image'>
						<!-- <view class="cu-tag badge"></view> --><!-- 红点 -->
						<image v-if="PageCur=='me'" src="https://s4.ax1x.com/2022/01/10/7EVhsH.png"></image>
						<image v-if="PageCur != 'me'" src="https://s4.ax1x.com/2022/01/10/7EVodI.png"></image>
					</view>
					<view :class="PageCur=='me'?'color_main':'text-gray'">个人中心</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	import {
		selectUserByAccount
	} from '@/apis/user_apis.js'
	import index from "./index.vue";	//首页
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
			let that = this;
			//判断缓存中是否有用户数据，没有则获取
			if (!uni.getStorageSync('encryptedData')) {
				that.login(that);
			} else {
				console.log("已有缓存，直接进入");
				// uni.switchTab({
				// 	url: "../main_page/main_page"
				// });
			}
		},
		methods: {
			login (that) {
				uni.showModal({
					title: '温馨提示',
					content: '亲，授权微信登录后才能正常使用小程序功能',
					success(res) {
						if(res.confirm) {
							uni.getUserProfile({
									desc: '获取您的个人信息并创建账户',
									success: infoRes => {
										//调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）
										if (infoRes.errMsg === 'getUserProfile:ok') {
											// 获取到的当前数据存入缓存
											console.log('uni.getUserProfile', infoRes)
											uni.setStorageSync('encryptedData', infoRes
												.encryptedData);
											uni.setStorageSync('iv', infoRes.iv);
											uni.setStorageSync('rawData', infoRes.rawData);
											uni.setStorageSync('signature', infoRes
												.signature);
											uni.setStorageSync('userInfo', infoRes
												.userInfo);
											//微信用户登录接口
											wx.login({
												success: function(res) {
													// console.log(res);
													if (res.code) {
														//换取openid & session_key
														let appid = 'wxb1469c5d9dd147d9'
														let secret = 'f91f502cdf94ecf8ad64ff96222d63e6'
														let url =
															'https://api.weixin.qq.com/sns/jscode2session?appid=' +
															appid + '&secret=' +
															secret + '&js_code=JSCODE' +
															'&grant_type=authorization_code';
														wx.request({
															url: url,
															method: 'POST',
															data: {
																code: res.code
															}
														})
														var data = {
															account: infoRes.userInfo.nickName
														}
														selectUserByAccount(data).then((res) => {
															if (res.statusCode == "200") {
																console.log(res.data);
																uni.setStorageSync('userId', res.data);
																uni.showToast({
																	title: '登录成功',
																	icon: 'success'
																});
															}
														})
													} else {
														console.log('登录失败！' + res.errMsg)
													}
							
												},
												fail() {
													console.log('wxLogin失败');
												}
											})
							
										} else {
											uni.showToast({
												title: '用户取消授权',
												icon: 'error'
											});
										}
									},
									fail: err => {
										console.log('userInfo-err', JSON.stringify(err));
									}
								});
						} else if (res.cancel) {
							that.login(that);
						}
				  }
				})
			},
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
