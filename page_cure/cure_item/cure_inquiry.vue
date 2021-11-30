<template>
	<view class="components-home">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">留言</block>
		</cu-custom>
	  <view class="content compose-editor">
			 <textarea class="form-control" v-model="txt" placeholder="请留言..."></textarea>
	  </view>
		<button class="blueBtn cu-btn bg-blue shadow lg">留言</button>

	</view>
</template>

<script>
	export default {
	    data() {
	        return {}
	    },
	    methods: {
	        bindTextAreaBlur: function (e) {
	            console.log(e.detail.value)
	        }
	    }
	}
</script>

<style>
	.form-control{
		margin: 10% 2.5% 40upx;
		width:95%;
		padding:6px 12px;
		font-size:14px;
		color:#555;
		background-color:#fff;
		background-image: none;
		border:1px solid #ccc;
		border-radius:4px;
	}
	.button-style{
		margin: 2% 77% 40upx;
		width:20%;
	}
	.blueBtn {
		width: 500rpx;
		margin: 50rpx auto;
		display: block;
		line-height: 80rpx;
	}
</style>