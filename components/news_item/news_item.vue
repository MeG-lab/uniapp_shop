<template>
	<view>
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image :src="item.img_url" mode=""></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatData}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		// 过滤器
		filters: {
			formatData(data) {
				// console.log(data)
				const nData = new Date(data)
				const year = nData.getFullYear()
				const month = nData.getMonth().toString().padStart(2,0)
				const day = nData.getDay().toString().padStart(2,0)
				// console.log(year, month, day)
				return year + "-" + month + "-" + day
			}
		},
		methods:{
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style>
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #b50e03;
	}

	.news_item image {
		min-width: 200rpx;
		max-width: 200rpx;
		height: 150rpx;
	}

	.news_item .right {
		margin-left: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.news_item .right .tit {
		font-size: 30rpx;
	}

	.news_item .right .info {
		font-size: 24rpx;
	}

	.news_item .right .info text:nth-child(2) {
		margin-left: 30rpx;
	}
</style>
