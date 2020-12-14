<template>
	<view class="contact">
		<image class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBA-MfKIkpvAa6DCJSR875wbnBZuL_12uH3FlF9q6pyCWBaFDFH6jQH0EuGkpTR34kGlae2M0TUdou-CTXX-JjwAXmvaHVJC1Y3g&usqp=CAU&ec=45732301"
		 mode=""></image>
		<view class="info">
			<view @click="phone">联系电话：138-8888-8888(点击拨打)</view>
			<view>地址:江苏省扬州市</view>
		</view>
		<map :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 119.42855,
				latitude: 32.414333,
				scale: 16,
				markers: [{
					longitude: 119.42855,
					latitude: 32.414333,
					iconPath: '../../static/hmlogo.png',
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '13888888888'
				})
			}
		}
	}
</script>

<style>
	.contact .img {
		width: 750rpx;
		height: 320rpx;
	}

	.contact .info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;

	}

	.contact .info .view {
		line-height: 60rpx;
		border-bottom: 1px solid #eee;
	}

	map {
		width: 750rpx;
		height: 750rpx;
	}
</style>
