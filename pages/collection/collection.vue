<template>
	<view class="collection">
		<view>
			<rf-swipe-action>
		    <rf-swipe-action-item
			    :options="options"
			    :info="item"
			    @action="bindClick"
			    class="uni-list-cell"
			    :key="index"
			    v-for="(item, index) in collectionList">
						<view class="uni-media-list" @tap="navTo(`/pages/product/product?id=${item.productId}`)">
							<image class="uni-media-list-logo"
										 mode="aspectFill"
										 @error="onImageError(index)"
										 :src=" item.product_img"></image>
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-top">{{  item.product_name }}</view>
								<view class="uni-media-list-text-bottom">
									<text class="price">{{  item.price }}</text>
									<text>{{ item.date | time }}</text>
								</view>
							</view>
						</view>
		    </rf-swipe-action-item>
			</rf-swipe-action>
			<rf-load-more :status="loadingType" v-if="collectionList.length > 0" />
		</view>
		<empty :info="'快去收藏一些商品吧~'"  v-if="collectionList.length === 0 && !loading"></empty>
	
		<!--加载动画-->
		<rf-loading v-if="loading"></rf-loading>
	</view>
</template>

<script>
/**
 * @des 我的收藏
 *
 * @author stav stavyan@qq.com
 * @date 2019-11-22 10:47
 * @copyright 2019
 */
import {collectList} from "@/api/userInfo";
import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import errorImg from '@/static/errorImage.jpg';
import {collectDel} from "@/api/basic";
import empty from "@/components/empty";
import moment from '@/utils/moment';
import rfSwipeAction from '@/components/rf-swipe-action/rf-swipe-action';
import rfSwipeActionItem from '@/components/rf-swipe-action-item/rf-swipe-action-item';
export default {
	components: {
		rfLoadMore,
		rfSwipeAction,
		rfSwipeActionItem,
		empty
	},
	data() {
		return {
			userInfo:{},
			collectionList: [],
			errorImg: errorImg,
			page: 1,
			loadingType: 'more',
			token: null,
			options: [
				{ text: '取消收藏', style: { backgroundColor: '#fa436a'}}
			],
			loading: true
		};
	},
	filters: {
		time(val) {
			return moment(val *1000).format('YYYY-MM-DD HH:mm:ss')
		}
	},
	onLoad () {
		this.initData();
	},
	onPageScroll(e){
	},
	//下拉刷新
	onPullDownRefresh(){
		this.page = 1;
		this.collectionList = [];
		this.loading = true;
		this.getCollectionList('refresh');
	},
	//加载更多
	onReachBottom(){
		this.page ++;
		this.getCollectionList();
	},
	methods:{
		async bindClick(e) {
			console.log(e)
			if (e.content.text === '取消收藏') {
				//await this.$del(`${collectDel}?id=${e.data.id}`, {
				await this.$del('http://localhost:8080/static/api/mobileLogin.json', {
					page: this.page
				}).then(() => {
					this.$api.msg('取消收藏成功');
					this.page = 1;
					this.collectionList.length = 0;
					this.getCollectionList();
				})
			}
		},
		// 数据初始化
		initData () {
			this.userInfo=uni.getStorageSync('userInfo');
			//this.token = uni.getStorageSync('accessToken') || undefined;
			this.token=this.userInfo.id;
			if (this.token) {
				this.getCollectionList();
			} else {

			}
		},
		// 获取收藏列表
		async getCollectionList(type) {
			
		//	await this.$get(`${collectList}`, {
			await this.$get('http://localhost:8080/static/api/handleCollect.json', {	
				page: this.page
			}).then(r => {
		    this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType  = r.data.length === 10 ? 'more' : 'nomore';
				this.collectionList = [ ...this.collectionList, ...r.data ];
				console.log("collectionList:"+this.collectionList)
				console.log("当前时间戳:"+new Date() / 1000)
			}).catch(() => {
		    this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
		onImageError (index) {
			this.collectionList[index].product_img = this.errorImg;
		},
		navTo(url) {
			uni.navigateTo({
				url
			})
		},
	}
}
</script>

<style lang='scss'>
page {
	background-color: $page-color-bg;
}
.uni-media-list-logo {
	width: 240upx;
	height: 180upx;
}

.uni-media-list-body {
	height: auto;
	justify-content: space-around;
}

.uni-media-list-text-top {
	height: 74upx;
	font-size: 28upx;
	overflow: hidden;
}

.uni-media-list-text-bottom {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.price{
	font-size: $font-base;
	color: $font-color-dark;
	&:before{
		content: '￥';
		font-size: $font-sm;
		margin: 0 2upx 0 8upx;
	}
}
</style>
