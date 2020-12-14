<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsList from '../../components/news_item/news_item.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},

		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newsList = res.data.message
			},
			goDetail(id) {
				uni.navigateTo({
					url: '../news-detail/news-detail?id='+id
				})
			}
		},
		components: {
			"news-item": newsList
		},
		onLoad() {
			this.getNews()
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
