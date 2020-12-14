<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" v-for="item in goods " :key='item.id' @click="navigator(item.id)">
				<image :src="item.img_url" mode=""></image>
				<view class="price">
					<text class="one">￥{{item.sell_price}}</text>
					<text class="tow">￥{{item.market_price}}</text>
				</view>
				<view class="name">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['goods'],
		methods:{
			navigator(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style>
	.goods_list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 15rpx;
	}
	
	.goods_item {
		background: #fff;
		margin: 10rpx 0;
		padding: 15rpx;
		width: 355rpx;
		box-sizing: border-box;
	}
	
	.goods_item image {
		display: block;
		margin: 0 auto;
		width: 80%;
		height: 150px;
		margin: 0 auto;
	}
	
	.goods_item .price {
		color: #b50e03;
		font-size: 30rpx;
		margin: 20rpx 0 5rpx 0;
	}
	
	.goods_item .price .one {
		font-size: 38rpx;
	}
	
	.goods_item .price .tow {
		color: #ccc;
		font-size: 28rpx;
		margin-left: 17rpx;
		text-decoration: line-through;
	
	}
	
	.goods_item .name {
		font-size: 28rpx;
		line-height: 50rpx;
		padding-bottom: 15rpx;
		padding-top: 10rpx;
	}
	.goods_list{
		background-color: #eee;
	}
</style>
