<template>
  <view class="my-account">
		<!--红包信息面板-->
    <view class="header">
      <view class="account">
        <view class="assets">
          <view>红包</view>
          <view class="money">
							{{ userInfo.redEnvelope || '0.00' }}
          </view>
        </view>
        <text @tap="navTo('/pages/user/deposit')" class="recharge" >提现</text>
      </view>
      <view class="cumulative">
        <view class="item">
          <view>累计提现</view>
          <view class="money">
							{{  userInfo.deposit_redEnvelope || '0.00' }}
          </view>
        </view>
        <view class="item">
          <view>累计使用</view>
          <view class="money">
							{{ userInfo.consume_redEnvelope || '0.00' }}
          </view>
        </view>
      </view>
      <view class="header-bg">
        <image src="/static/accountBg.png" mode="aspectFill"></image>
      </view>
    </view>
	  <!--导航-->
    <view class="nav">
      <view class="item" @tap="navTo('/pages/user/depositrecord')">
        <image src="/static/record1.png" />
        <text>使用记录</text>
      </view>
      <view class="item" @tap="navTo('/pages/user/depositrecords?state=2')">
        <image src="/static/record2.png" />
        <text>提现记录</text>
      </view>
     
      <view class="item" @tap="navTo('/pages/user/integral')">
        <image src="/static/record4.png" />
        <text>积分中心</text>
      </view>
    </view>
	  <!--广告-->
    <view class="advert">
        <!--<view-->
          <!--class="item"-->
        <!--&gt;-->
          <!--<view class="text">-->
            <!--<view class="name">签到领积分</view>-->
            <!--<text class="desc">赚积分抵现金</text>-->
          <!--</view>-->
          <!--<image src="/static/gift.png" mode="aspectFill" />-->
        <!--</view>-->
        <view
          class="item on"
          @tap="navTo('/pages/user/coupon-center')"
        >
          <view class="text">
            <view class="name">领取优惠券</view>
            <text class="desc">满减享优惠</text>
          </view>
          <div class="pictrue"><image src="/static/money.png" /></div>
        </view>
      </view>
    
	  <!--引导跳转组件-->
    <!--<Home></Home>-->
    
		<!--加载动画-->
		<rf-loading v-if="loading"></rf-loading>
  </view>
</template>

<script>
  /**
   * @des 用户账户中心
   *
   * @author stav stavyan@qq.com
   * @date 2020-01-10 15:17
   * @copyright 2019
   */
	import Home from '@/components/rf-back-home/rf-back-home';
  export default {
    components: {Home},
    data() {
      return {
        userInfo: {},
        loading: true
      }
    },
    onLoad() {
      this.initData();
    },
    methods: {
      // 初始化数据
      initData() {
        this.userInfo = uni.getStorageSync('userInfo') || undefined;
        this.loading = false;
      },
      navTo(url){
        uni.navigateTo({
          url
        })
      },
    }
  }
</script>
<style scoped lang="scss">
  page {
    background-color: $page-color-bg;
  }
  .my-account {
    padding: 32upx 20upx;
    width: 100%;
    .header {
      padding: 30upx;
      height: 320upx;
      background-image: linear-gradient(to right, #f33b2b 0, #f36053 40%);
      border-radius: 20upx;
      color: rgba(255, 255, 255, 0.6);
      font-size: $font-sm;
      position: relative;
      .account {
        width: calc(100% - 60upx);
        display: flex;
        position: absolute;
        z-index: 2;
        justify-content: space-between;
        .assets {
          .money {
            color: #fff;
            font-size: $font-lg + 10upx;
            margin: 0;
          }
        }
        .recharge {
          font-size: $font-base;
          width: 150upx;
          height: 54upx;
          line-height: 54upx;
          border-radius: $font-base;
          background-color: #fff9f8;
          text-align: center;
          color: $base-color;
          margin-top: 10upx;
        }
      }
      .cumulative {
        width: calc(100% - 240upx);
        position: absolute;
        bottom: 20upx;
        display: flex;
        justify-content: space-between;
        .money {
          color: #fff;
          font-size: $font-lg + 4upx;
          margin: 0;
        }
      }
      .header-bg {
        position: absolute;
        width: 100%;
        height: 320upx;
        z-index: 1;
        top: 0;
        image {
          width: 100%;
          height: 320upx
        }
      }
    }
    .nav{
      border-bottom:1px solid #f5f5f5;
      display: flex;
      .item{
        flex:1;
        margin: 20upx;
        font-size: $font-base - 4upx;
        display: inline-block;
        text-align:center;
        color:#999;
        image {
          display: block;
          width: 44upx;
          height: 44upx;
          margin: 10upx auto;
        }
      }
    }
    .advert{
      display: flex;
      .item{
        background-color:#fff6d1;
        flex: 1;
        border-radius: 24upx;
        padding: 10upx 0;
        margin: 20upx 10upx;
        color: #e44609;
        display: flex;
        justify-content: space-between;
        image {
          width: 78upx;
          height: 78upx;
          margin-right: 20upx;
        }
        .text {
          margin-left: 20upx;
          .name{
            font-size: $font-base;
            font-weight: bold;
            height: 40upx;
            color: #f33c2b;
          }
          .desc {
            font-size: $font-sm - 2upx;
          }
        }
      }
      .on{
          background-color:#fff3f3;
        }
    }
  }
</style>
