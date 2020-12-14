<template>
	<view class="home">
		<swiper>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs " :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<good-list @goodsItemClick="goGoodsDetail" :goods="goods"></good-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/good-list.vue'
	export default {


		data() {
			return {
				swipers: [],
				goods: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '彗星超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/goods/goods'
					}
				]
			}
		},
		components: {
			"good-list": goodsList
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				console.log("獲取數據成功")
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message
			},
			// 获取热门商品列表数据
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
			},
			// 导航点击处理函数
			navItemClick(url) {
				// console.log(url)
				uni.navigateTo({
					url
				})
			},
			// 点击跳转到商品详情页面
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '../goods-detail/goods-detail?id=' + id
				})
			}
		}
	}
</script>

<style>
	.home swiper {
		width: 750rpx;
		height: 380rpx;

	}

	.home swiper image {
		height: 100%;
		width: 100%;
	}

	.nav {
		display: flex;
	}

	.nav .nav_item {
		width: 25%;
		text-align: center;
	}

	.nav .nav_item view {
		margin: 10px auto;
		width: 120rpx;
		height: 120rpx;
		background-color: #b50e03;
		border-radius: 60rpx;
		line-height: 120rpx;
		color: #FFFFFF;
		font-size: 50rpx;
	}

	.nav .nav_item .icon-tupian {
		font-size: 45rpx;
	}

	.nav .nav_item text {
		font-size: 30rpx;
	}

	.hot_goods {
		background: #eee;
		overflow: hidden;
		margin-top: 10px;
	}

	.hot_goods .tit {
		height: 50px;
		line-height: 50px;
		color: #b50e03;
		text-align: center;
		letter-spacing: 20px;
		background-color: #fff;
		margin: 7rpx 0;
	}
</style>
