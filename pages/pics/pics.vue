<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''" v-for="(item,index) in cates" :key="item.id">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData: []


			}
		},
		methods: {
			async getPicCate() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.cates = res.data.message
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index, id) {
				this.active = index
				// 获取右侧的数据
				const res = await this.$myRequest({
					url: '/api/getimages/' + id
				})
				this.secondData = res.data.message
			},
			previewImg(current){
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				// console.log(urls)
				uni.previewImage({
					current,
					urls
				})
				
			}
		},
		onLoad() {
			this.getPicCate()
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.pics {
		display: flex;
		height: 100%;
	}

	.pics .left {
		height: 100%;
		width: 200rpx;
		border-right: 1px solid #EEEEEE;
	}

	.pics view {
		height: 60px;
		line-height: 60px;
		color: #333;
		text-align: center;
		font-size: 30rpx;
		border-top: 1px solid #eee;
	}

	.pics .active {
		background-color: #b50e03;
		color: #FFFFFF
	}
	.right{
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
	}
	.right .item image{
		
		width: 520rpx;
		height: 520rpx;
		border-radius: 5px;
	}
	.right .item text{
		font-size: 30rpx;
		line-height: 60rpx;
	}
</style>
