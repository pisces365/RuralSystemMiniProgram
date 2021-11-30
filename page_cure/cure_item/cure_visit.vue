<template>
	<view class="fui-wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">上门就诊</block>
		</cu-custom>
		<view class="fui-page__hd">
			<view class="fui-page__title">上门就诊预约</view>
			<view class="fui-page__desc">请填写自身的详细信息，完成上门就诊预约</view>
		</view>

		<view class="fui-page__bd">
			<picker @change="bindPickerChange" :range="array" class="picker_border">
				<view class="fui-section__title">请选择科室: {{type}}</view>
			</picker>
			<view class="fui-section__title">姓名</view>
			<fui-input borderTop placeholder="请输入姓名"></fui-input>
			<view class="fui-section__title">身份证号</view>
			<fui-input borderTop placeholder="请输入身份证号" maxlength="18"></fui-input>
			<view class="fui-section__title">手机号码</view>
			<fui-input :bottomLeft="0" placeholder="请输入手机号码" maxlength="11"></fui-input>
			<view class="fui-section__title">家庭地址</view>
			<fui-input borderTop placeholder="请输入家庭地址"></fui-input>
		</view>
		<view>
			<button class="blueBtn cu-btn bg-blue shadow lg">提交</button>
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
	page {
		font-weight: normal;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-left__icon {
		padding-right: 24rpx;
	}
	.blueBtn {
		width: 500rpx;
		margin: 50rpx auto;
		display: block;
		line-height: 80rpx;
	}
</style>
