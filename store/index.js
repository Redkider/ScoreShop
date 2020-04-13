import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		handleCollect:{},
		cartItemList:{},
		cartNum:0,
	},
	mutations: {
		getcartNum(state,provider){
			uni.removeStorage({
				key: 'cartNum'
			})
			state.handleCollect=provider;
			uni.setStorage({
				key: 'cartNum',
				data:provider
			})
		},
		handle(state,provider){
			uni.removeStorage({
				key: 'handleCollect'
			})
			state.handleCollect=provider;
			uni.setStorage({
				key: 'handleCollect',
				data:provider
			})
		},
		addCartList(state,provider){
			uni.removeStorage({
				key: 'cartItemList'
			})
			state.handleCollect=provider;
			uni.setStorage({
				key: 'cartItemList',
				data:provider
			})
		},
		login(state, provider) {
			// uni.clearStorageSync();
			uni.removeStorage({
				key: 'userInfo'
			})
			uni.removeStorage({
				key: 'accessToken'
			})
			state.hasLogin = true;
			//state.userInfo = provider.member;
			state.userInfo = provider;
			uni.setStorage({//缓存用户登陆状态
			    key: 'user',
			    data: provider
			});
			uni.setStorage({//缓存用户登陆状态
			    key: 'loginTime',
			    data: new Date().getTime() / 1000
			});
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',
			    data: provider
			})
			uni.setStorage({//缓存用户登陆状态
			    key: 'accessToken',
			    data: provider.access_token
			})
			uni.setStorage({//缓存用户登陆状态
			    key: 'refreshToken',
			    data: provider.refresh_token
			})
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({
                key: 'userInfo'
            })
			uni.removeStorage({
                key: 'accessToken'
            })
		}
	},
	actions: {
	}
})

export default store
