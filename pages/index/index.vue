<!-- 首页 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">首页</block>
		</cu-custom>

		<add-tip :tip="tip" :duration="duration" />

		<!-- banner图 -->
		<view class="uni-padding-wrap" style="height: 360rpx;">
			<view class="page-section swiper" style="height: 360rpx;">
				<view class="page-section-spacing" style="height: 360rpx;">
					<swiper class="swiper" style="height: 360rpx;" circular="true" indicator-dots="true" autoplay="true"
						interval="3500" duration="600">
						<swiper-item class="swiper-list" style="height: 360rpx;" v-for="(item, index) in bannerList"
							:key="index">
							<view class="swiper-item uni-bg-red" style="height: 360rpx;">
								<image class="swiper-img" :src="item.imageUrl" style="height: 360rpx;" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<!-- 导航栏 -->
		<view class="cu-list grid solids-bottom col-4 no-border">
			<view class="cu-item" v-for="(item,index) in categories" :key="index"
				:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" @click="goCategorieslist"
				:data-mid="item.mid">
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">今日资讯</text>
				<text class="text-ABC text-blue">TodayNews</text>
			</view>
			<!-- <view class="action" @click="goNews">
				<text class="text-lg text-grey text-shadow">更多</text>
			</view> -->
		</view>

		<view class="skill-sequence-panel-content-wrapper">
			<!--左边虚化-->
			<view class="hide-content-box hide-content-box-left"></view>
			<!--右边虚化-->
			<view class="hide-content-box hide-content-box-right"></view>
			<scroll-view scroll-x="true" class="kite-classify-scroll">
				<view class="kite-classify-cell shadow" v-for="(item, index) in curriculum" :key="index">
					<view :class="'nav-li bg-index' + (index+1)">
						<view class="nav-name">{{item.name}}</view>
					</view>
					<view class="nav-content">{{item.content}}</view>
					<!-- <view @click="goVideo" class="nav-btn shadow" :class="'bg-index' + (index+1)">立即查看</view> -->
				</view>
			</scroll-view>
		</view>
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">老年大学</text>
				<text class="text-ABC text-blue">UniversityForTheAged</text>
			</view>
			<view class="action" @click="goProjectList">
				<text class="text-lg text-grey text-shadow">更多</text>
			</view>
		</view>

		<view class="cu-card case no-card">

			<view @click="goProject(item.courseId)" class="cu-item shadow" v-for="(item, index) in projectList"
				:key="index">
				<view class="image">
					<image :src="item.courseCover" mode="widthFix"></image>
					<!-- <view class="cu-tag bg-gradual-orange">可商用</view> -->
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.type}}</text></view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="margin-lr flex-sub">
							<view class="item-name text-grey text-lg">{{item.courseName}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{item.courseStartTime}}至{{item.courseEndTime}}
								<view class="text-gray text-sm">
									<text class=" margin-lr-xs"></text> {{item.courseFee}}
									<text class=" margin-lr-xs"></text> {{item.courseCategoryName}}
									<!-- <text class="cuIcon-subscription margin-lr-xs"></text> {{item.user[0].use}} -->
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view style="height: 140rpx;width: 1rpx;"></view>
	</view>
</template>

<script>
	import {
		selectAllCourses
	} from '@/apis/education_apis.js'
	import addTip from "../../components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip.vue"
	export default {
		components: {
			addTip
		},
		data() {
			return {
				tip: "点击「添加小程序」，下次访问更便捷",
				duration: 1,

				scrollTop: 0,
				old: {
					scrollTop: 0
				},

				bannerList: [{
						imageUrl: 'https://pic.imgdb.cn/item/61dbc6542ab3f51d9185da5c.png',
					},
					{
						imageUrl: 'https://pic.imgdb.cn/item/61dbc6542ab3f51d9185da65.png',
					},
					{
						imageUrl: 'https://pic.imgdb.cn/item/61dbc6542ab3f51d9185da72.png',
					}
				],
				categories: [{
					cuIcon: 'hotfill',
					color: 'red',
					mid: '1',
					name: '换届选举'
				}, {
					cuIcon: 'goodsnewfill',
					color: 'orange',
					mid: '2',
					name: '快递上门'
				}, {
					cuIcon: 'colorlens',
					color: 'yellow',
					mid: '3',
					name: '乡村医疗'
				}, {
					cuIcon: 'calendar',
					color: 'cyan',
					mid: '4',
					name: '维修服务'
				}],
				curriculum: [{
						name: '生态资讯',
						content: '稻蟹共生促发展 一天两用助增收...',
					},
					{
						name: '文化建设',
						content: '公开征集文化强国建议公告...',
					},
					{
						name: '乡村新闻',
						content: '以乡村全面振兴为基础助力农村现代化建设...',
					},
					{
						name: '脱贫攻坚',
						content: '专家解读脱贫攻坚战中央一号文件...',
					},
					{
						name: '健康指导',
						content: '老年人如何保持延年益寿，这三条知识一定要记牢...',
					},
				],
				projectList: []
			}
		},
		watch: {

		},
		onShow() {

		},
		mounted() {
			console.log(this.projectList)
			var data = {}
			var that = this;
			selectAllCourses(data).then((res) => {
				if (res.statusCode == "200") {
					console.log(res.data);
					for (var i = 0; i < 2; ++i) {
						var random = Math.floor(Math.random() * 5);
						that.projectList.push(res.data[random]);
					}
					uni.hideLoading();
				} else {
					uni.hideLoading();
					uni.showToast({
						title: '获取失败',
						duration: 2000,
						icon: 'error'
					});
				}
			})
		},
		methods: {
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goCategorieslist: function(e) {
				// console.log(e.currentTarget.dataset.mid)
				if (e.currentTarget.dataset.mid == 1) {
					uni.navigateTo({
						url: '/page_vote/vote_index/vote_index'
					})
				} else if (e.currentTarget.dataset.mid == 2) {
					uni.navigateTo({
						url: '/page_express/express_door_to_door/express_door_to_door'
					})
				} else if (e.currentTarget.dataset.mid == 3) {
					uni.navigateTo({
						url: '/page_cure/cure_index/cure_index'
					})
				} else if (e.currentTarget.dataset.mid == 4) {
					uni.navigateTo({
						url: '/page_repair/repair_index/repair_index'
					})
				}
			},
			goProjectList() {
				uni.navigateTo({
					url: '../me/course'
				})
			},
			goProject(courseId) {
				uni.navigateTo({
					url: '../video?courseId=' + courseId
				})
			},
			goVideo() {
				uni.navigateTo({
					url: '../video'
				})
			},
			goNews() {
				uni.navigateTo({
					url: '/pages/index/news'
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.swiper-box {
		flex: 1;
		height: 360rpx;
	}

	.swiper-item {
		height: 360rpx;
	}

	/*scroll-view外层*/
	.skill-sequence-panel-content-wrapper {
		position: relative;
		white-space: nowrap;
		padding: 10rpx 0 10rpx 10rpx;
	}

	/*左右渐变遮罩*/
	.hide-content-box {
		position: absolute;
		top: 0;
		height: 100%;
		width: 10px;
		z-index: 2;
	}

	.hide-content-box-left {
		left: 0;
		background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #f3f3f3 60%);
	}

	.hide-content-box-right {
		right: 0;
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #f3f3f3 60%);
	}

	.kite-classify-scroll {
		width: 100%;
		height: 280rpx;
		overflow: hidden;
		white-space: nowrap;
	}

	.kite-classify-cell {
		display: inline-block;
		width: 266rpx;
		height: 270rpx;
		margin-right: 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		overflow: hidden;
		box-shadow: 2px 2px 3px rgba(26, 26, 26, 0.2);
	}

	.nav-li {
		padding: 40rpx 30rpx;
		width: 100%;
		background-image: url(https://s1.ax1x.com/2020/06/27/NyU04x.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40rpx;
		height: 6rpx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100rpx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40rpx;
		opacity: 0.3;
	}

	.nav-content {
		width: 100%;
		padding: 15rpx;
		display: inline-block;
		overflow-wrap: break-word;
		white-space: normal;
	}

	.nav-btn {
		width: 200rpx;
		height: 60rpx;
		margin: 8rpx auto;
		text-align: center;
		line-height: 60rpx;
		border-radius: 10rpx;
	}

	.bg-index1 {
		background-color: #19CF8A;
		color: #fff;
	}

	.bg-index2 {
		background-color: #954FF6;
		color: #fff;
	}

	.bg-index3 {
		background-color: #5177EE;
		color: #fff;
	}

	.bg-index4 {
		background-color: #F49A02;
		color: #fff;
	}

	.bg-index5 {
		background-color: #FF4F94;
		color: #fff;
	}

	.bg-index6 {
		background-color: #7FD02B;
		color: #fff;
	}

	.item-name {
		margin-bottom: 15rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
