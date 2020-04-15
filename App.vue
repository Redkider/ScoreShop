<script>
	import Vue from 'vue'
	export default {
		 globalData: {  
		    data: {}  
		  },  
		onLaunch () {
			uni.getSystemInfo({
				success (e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			});
      if (!uni.getStorageSync('accessToken')) {
        uni.removeTabBarBadge({
          index: 2
        });
      } else {
          if(uni.getStorageSync('cartNum') == 0) {
            uni.removeTabBarBadge({
              index: 2
            });
          } else {
             uni.setTabBarBadge({
              index: 2,
              text: uni.getStorageSync('cartNum').toString()
            });
          }
      }
		},
		onHide () {
		},
		
	}
</script>

<style lang='scss'>
  /*@import "@/common/css/reset";*/
  /*@import "@/common/css/uni";*/
  @font-face {
    font-family: 'FontAwesome';
    src: url('/common/css/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0');
    src: url('/common/css/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('/common/css/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('/common/css/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('/common/css/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('/common/css/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  .price {
    
    
    font: normal normal normal 14px/1 FontAwesome;
  		
    &:before {
  		
      
  	  
     font-size: 22upx;
  	  content: '\f1c0';
  	  padding: 4upx;
  	 
    } 
	}
</style>
