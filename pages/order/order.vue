<template>
	<view class="content">
		<!--导航栏-->
		<view class="navbar">
			<view
				v-for="(item, index) in navList" :key="index"
				class="nav-item"
				:class="{current: tabCurrentIndex === index}"
				@tap="tabClick(index)"
			>
				{{item.text}}
			</view>
		</view>
		<!--订单列表-->
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem, tabIndex) in navList" :key="tabIndex">
				<scroll-view
					class="list-scroll-content"
					scroll-y
					@scrolltolower="getMoreOrderList"
				>
					<!-- 空白页 -->
<!--					<empty v-if="orderList.length === 0" :info="'快去商城逛逛吧'"></empty>-->
					<!-- 订单列表 -->
					<view
						v-for="(item,index) in orderList" :key="index"
						class="order-item"
					>
						<view class="i-top b-b">
							<text class="time in1line">订单号：{{item.order_code}}</text>
							<!--<text class="time">{{item.created_at | time}}</text>-->
							<text class="state" v-if="parseInt(item.order_status, 10) !== 0">{{item.order_status | orderStatusFilter }}</text>
							<view class="example-body" v-else>
								<rf-count-down :show-day="false" :second="second(item.create_time)" @timeup="timeUp(item)" color="#FFFFFF" background-color="#fa436a" border-color="#fa436a" />
							</view>
						</view>

<!--						<scroll-view  v-if="item && item.product && item.product.length > 1"-->
<!--												 class="goods-box" scroll-x>-->
<!--							<view-->
<!--								v-for="(goodsItem, goodsIndex) in item.product"-->
<!--								:key="goodsIndex"-->
<!--								@tap="navTo(`/pages/product/product?id=${goodsItem.product_id}`)"-->
<!--								class="goods-item"-->
<!--							>-->
<!--								<image class="goods-img" :src="goodsItem.product_picture" mode="aspectFill"></image>-->
<!--								<text class="goods-title in2line">{{goodsItem.product_name}}</text>-->
<!--							</view>-->
<!--						</scroll-view>-->
<!--							v-if="item.product && item.product.length === 1"-->
						<view
							class="goods-box-single"
              @tap.stop="navTo(`/pages/product/product?id=${goodsItem.id}`)"
							v-for="(goodsItem, goodsIndex) in item.goods" :key="goodsIndex"
						>
							<image class="goods-img" :src="goodsItem.picture" mode="aspectFill"></image>
							<view class="right">
								<text class="title in2line">{{goodsItem.name}}</text>
								<text class="attr-box">{{goodsItem.sku_name || '无'}}</text>
								<text v-if="goodsItem.type == 2">
									<text class="point">{{goodsItem.price}}积分 </text>
									* {{goodsItem.number}}
								</text>
								<text class="" v-else>
									<text class="red">{{goodsItem.price}} </text>
									* {{goodsItem.number}}
								</text>
							</view>
						</view>

						<view class="price-box">
							共
							<text class="num">{{ item.count }}</text>
							件商品 实付款
							<text class="price">{{ item.pay }}</text>
						</view>
						<view class="action-box b-t">
							<!-- <button class="action-btn" v-if="item.order_status == 1" @tap="handleOrderOperation(item, 'close')">取消订单</button> -->
              <button class="action-btn" @tap="handleOrderOperation(item, 'detail')">订单详情</button>
							<!-- <button class="action-btn recom" v-if="item.order_status == 1" @tap="handlePayment(item)">立即支付</button>
						  <button class="action-btn recom" v-if="item.order_status == 4" @tap="handleOrderOperation(item, 'refund', 1)">申请退款</button>
						  <button class="action-btn" v-if="item.order_status == 4 || item.order_status == 12" @tap="handleOrderOperation(item, 'shipping')">查看物流</button>
              <button class="action-btn recom" v-if="item.order_status == 4" @tap="handleOrderOperation(item, 'refund', 3)">订单售后</button>
							<button class="action-btn recom" v-if="item.order_status == 4" @tap="handleOrderOperation(item, 'refund', 2)">申请退货</button> -->
              <button class="action-btn recom" v-if="item.order_status == 1 && item.is_customer != 0" @tap="handleOrderOperation(item, 'delivery')">确认收货*{{item.take_number}}</button>
						  <!-- <button class="action-btn recom" v-if="item.order_status == 4" @tap="handleOrderOperation(item, 'evaluation')">我要评价</button>
						  <button class="action-btn recom" v-if="item.order_status == -4" @tap="handleOrderOperation(item, 'delete')">删除订单</button> -->
            </view>
					</view>
					<rf-load-more :status="loadingType" v-if="orderList.length > 0"></rf-load-more>
          <empty :info="'暂无工单'" v-if="orderList.length === 0 && !loading"></empty>
				</scroll-view>
			</swiper-item>
		</swiper>
		<rf-loading v-if="loading"></rf-loading>
	</view>
</template>

<script>
	/**
	 * @des 订单管理
	 *
	 * @author stav stavyan@qq.com
	 * @date 2020-01-15 11:54
	 * @copyright 2019
	 */
	import rfLoadMore from '@/components/rf-load-more/rf-load-more.vue';
	import empty from "@/components/empty";
	import moment from '@/utils/moment';
  import {orderDelete, orderList, orderTakeDelivery} from "@/api/userInfo";
	import rfCountDown from '@/components/rf-count-down/rf-count-down.vue'
	import {orderClose} from "@/api/product";
	export default {
		components: {
			rfLoadMore,
			empty,
			rfCountDown
		},
		data() {
			return {
				tabCurrentIndex: 0,
				loadingType: 'more',
				navList: [
					{
						state: 0,
						text: '全部'
					},
					{
						state: 1,
						text: '待收货'
					},
					{
						state: 2,
						text: '消费订单'
					},
					{
						state: 3,
						text: '兑换订单'
					},
					{
						state: 4,
						text: '复购订单'
					}
				],
				orderList: [],
				page: 1,
				loading: true,
				userInfo:{},
				token:''
			};
		},
		computed: {
			// 计算倒计时时间
			second() {
				return function (val) {
					return Math.floor(5 * 24 * 60 * 60 - (new Date() / 1000 - val))
				}
			}
		},
		filters: {
	    // 时间格式化
			time(val) {
				return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss')
			},
			// 状态显示格式化
      orderStatusFilter (orderStatus) {
			  let status = null;
				const orderStatusList = [
					
					{key: 1, value: '待收货'},
					{key: 2, value: '已收货'},
					
				
				];
				orderStatusList.forEach(orderItem => {
					if (orderItem.key == orderStatus) {
						 status = orderItem.value
					}
				})
        return status;
      }
		},
		onShow(){
			// #ifdef H5
			this.page = 1;
			this.orderList.length = 0;
			this.initData();
			// #endif
		},
		onLoad(options){
			/**
			 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
			 * 替换onLoad下代码即可
			 */
			this.tabCurrentIndex = +options.state;
			// this.initData()
		},
		//下拉刷新
		onPullDownRefresh(){
			this.page = 1;
			this.orderList.length = 0;
			this.getOrderList('refresh');
		},
		//加载更多
		onReachBottom(){
			this.page ++;
			//this.getOrderList();
		},
		methods: {
			// 倒计时关闭订单
			timeUp(item) {
				this.handleOrderClose(item.id);
			},
			// 订单操作
      handleOrderOperation (item, type, refund_type) {
        switch (type) {
          case 'detail': // 订单详情
              this.navTo(`/pages/order/detail?id=${item.id}`);
            break;
          case 'evaluation': // 我要评价
              this.handleOrderEvaluation(item, 'evaluation');
            break;
          case 'close': // 取消订单
              this.handleOrderClose(item.id);
            break;
          case 'delete': // 删除订单
              this.handleOrderDelete(item.id);
            break;
          case 'shipping': // 查看物流
						this.navTo(`/pages/order/shipping?id=${item.id}`);
            break;
          case 'refund': // 退货/退款
						this.handleOrderEvaluation(item, 'refund', refund_type);
            break;
          case 'delivery': // 确认收货
            this.handleOrderTakeDelivery(item.id);
            break;
        }
      },
      handleOrderEvaluation(item, type, refund_type) {
        // if(item.product.length > 1) {
          uni.navigateTo({
            url: `/pages/order/orderItem?id=${item.id}`
          })
        // } else {
        // 	if (type === 'refund') {
				// 		uni.navigateTo({
				// 			url: `/pages/refund/refund?data=${JSON.stringify(item.product[0])}&refundType=${refund_type}`
				// 		})
				// 	} else {
				// 		uni.navigateTo({
				// 			url: `/pages/evaluation/evaluation?data=${JSON.stringify(item.product[0])}`
				// 		})
				// 	}
        // }
      },
			// 跳转页面
      navTo (url) {
        uni.navigateTo({
          url
        })
      },
			// 取消订单
			async handleOrderClose(id) {

				await this.$get(`${orderClose}`, {
					id,
				}).then(() => {
          this.page = 1;
          this.orderList.length = 0;
					this.getOrderList();
				})
			},
      // 删除已关闭订单
			async handleOrderDelete(id) {

				await this.$del(`${orderDelete}?id=${id}`, {}).then(() => {
					this.$api.msg('订单删除成功');
					setTimeout(() => {
						this.page = 1;
						this.orderList.length = 0;
						this.getOrderList();
					}, 500)
				})
			},
      // 确认收货
			async handleOrderTakeDelivery(id) {
		    this.loading = true;
				await this.$get(`${orderTakeDelivery}`, {
					id,
				}).then(() => {
		      this.loading = false;
          this.page = 1;
          this.orderList.length = 0;
					this.getOrderList();
					this.$api.msg('还能领取'+1+'次');
				}).catch(() => {
		      this.loading = false;
				})
			},
			// 订单支付
			async handlePayment(item) {
				uni.navigateTo({
					url: `/pages/money/pay?id=${item.id}`
				})
			},
			// 数据初始化
			initData () {
				console.log(new Date() / 1000)
				this.userInfo=uni.getStorageSync('userInfo')
				this.token=this.userInfo.id
				if(this.token){
					this.getOrderList();
				}else{
					uni.navigateTo({
						url: "/pages/public/login",
					})
				}
				
			},
			// 获取订单列表
			async getOrderList(type) {
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				const params = {};
				if ( navItem.state<3) {
					params.status = navItem.state;
				} else if(navItem.state==3){
					params.type=1
				}else if(navItem.state==4){
					params.type=2
				}else{
					
				}
					
				
				params.page = this.page;
				console.dir(params)
				await this.$get('http://localhost:8080/static/api/orderList.json', {
					...params
				}).then(r => {
					this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
					this.loadingType  = r.data.length === 10 ? 'more' : 'nomore';
					
					this.orderList=r.data
					
					//this.orderList = [ ...this.orderList, ...r.data ]
					console.log(this.orderList)
				}).catch(() => {
					this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
				});
			},
			// 监听swiper切换
			changeTab(e){
				this.page = 1;
				this.orderList.length = 0;
				this.tabCurrentIndex = e.target.current;
				this.loading = true;
				this.getOrderList();
			},
			//顶部tab点击
			tabClick(index){
				this.page = 1;
				this.orderList.length = 0;
				this.loading = true;
				this.tabCurrentIndex = index;
				console.log("点击头部tab:"+this.tabCurrentIndex)
			},
			//顶部tab点击
			getMoreOrderList(){
        this.page ++;
        this.getOrderList();
			}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
		height: 100%;
	}

	.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}

	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		display: flex;
		flex-direction: column;
		padding: 0 30upx;
		background: #fff;
		margin-top: 16upx;
		.i-top{
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right:30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;
			.time{
				flex: 1;
			}
			.state{
				color: $base-color;
			}
			.del-btn{
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;
				&:after{
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		/* 多条商品 */
		.goods-box{
			padding-top: 10upx;
			height: 220upx;
			.goods-item{
				overflow: hidden;
				height: 100%;
				width: 160upx;
				margin-right: 16upx;
				display: inline-block;
				.goods-img{
					display: block;
					width: 100%;
					height: 140upx;
				}
				.goods-title {
					font-size: $font-sm - 2upx;
					line-height: 32upx;
				}
			}
		}
		
		/* 单条商品 */
		.goods-box-single{
			display: flex;
			margin: 10upx 0;
			border-bottom: 1px solid rgba(0, 0, 0, .05);
			box-shadow: 0 1px 5px rgba(0, 0, 0, .02);
			 font: normal normal normal 14px/1 FontAwesome;
			.goods-img{
				display: block;
				width: 180upx;
				height: 140upx;
			}
			.red {
				color: $base-color;
				margin: 0 10upx 0 0;
				font-size: $font-sm;
				&:before{
					content: '\f1c0';
					font-size: $font-sm + 2upx;
					margin: 0 0 0 2upx;
				}
			}
			.point {
				color: $base-color;
				margin: 0 10upx 0 0;
				font-size: $font-sm + 2upx;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;
				.title{
					font-size: $font-sm;
					line-height: 32upx;
					height: 60upx;
					color: $font-color-dark;
				}
				.attr-box{
					font-size: $font-sm;
					color: $font-color-light;
				}
				.price{
					font-size: $font-sm;
					color: $font-color-dark;
				}
			}
		}

		.price-box{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 15upx 30upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.num{
				margin: 0 8upx;
				color: $font-color-dark;
			}
			.price{
				
				color: $base-color;
				
			}
		}
		
		.action-box{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}
		.action-btn{
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;
			border: 1px solid rgba(0, 0, 0, 0.05);
			&:after{
				border-radius: 100px;
			}
			&.recom{
				background: #fff9f9;
				color: $base-color;
				&:after{
					border-color: #f7bcc8;
				}
			}
		}
	}


	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}

	.load2 {
		transform: rotate(30deg)
	}

	.load3 {
		transform: rotate(60deg)
	}

	.load1 view:nth-child(1) {
		animation-delay: 0s
	}

	.load2 view:nth-child(1) {
		animation-delay: .13s
	}

	.load3 view:nth-child(1) {
		animation-delay: .26s
	}

	.load1 view:nth-child(2) {
		animation-delay: .39s
	}

	.load2 view:nth-child(2) {
		animation-delay: .52s
	}

	.load3 view:nth-child(2) {
		animation-delay: .65s
	}

	.load1 view:nth-child(3) {
		animation-delay: .78s
	}

	.load2 view:nth-child(3) {
		animation-delay: .91s
	}

	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}

	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}

	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}

	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1
		}

		100% {
			opacity: .2
		}
	}
</style>
