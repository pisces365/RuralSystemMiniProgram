<template>
	<view class="fui-wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">拥挤程度</block>
		</cu-custom>
		<view class="fui-page__hd">
			<view class="fui-page__title">拥挤程度</view>
			<view class="fui-page__desc">下面为医院当前的拥挤程度</view>
		</view>

		<view class="fui-page__bd">
			<picker @change="bindPickerChange" :range="array" class="picker_border">
				<view class="fui-section__title">请选择科室: {{type}}</view>
			</picker>
			<view class="fui-section__title">目前取号号码</view>
			<fui-input borderTop disabled></fui-input>
			<view class="fui-section__title">大约需要等待</view>
			<fui-input borderTop disabled></fui-input>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				array: ['--请选择--','儿科','妇科','耳鼻喉科','神经科','呼吸科','血液科','消化科','胸外科','心外科','关节科'],
				index: 0,
				type: '--请选择--'
			}
		},
		methods: {
//下拉框
			bindPickerChange: function(e) {		//改变的事件名
				this.index = e.target.value			//将数组改变索引赋给定义的index变量
				this.type=this.array[this.index]		//将array【改变索引】的值赋给定义的jg变量
			}
		}
	}
</script>

<style>
	.page {
		font-weight: normal;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-left__icon {
		padding-right: 24rpx;
	}
</style>
