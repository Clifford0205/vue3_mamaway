import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state:{
        isBigMenuShow:false,
        BigMenuOpacity:false,
        cartMobileShow:false,
        userForMobile:false,
        isFilterBox:false,
        filterPageOpen:false
    },
    actions:{
        closeMenu(context,payload){
            context.commit('BIG_MENU_OPACITY',payload);
            setTimeout(function(){
            context.commit('BIG_MENU_SHOW',payload);
            },500)
        },
       BigMenuShow(context,payload){
            context.commit('BIG_MENU_SHOW',payload);
        },
        BigMenuOpacity(context,payload){
            context.commit('BIG_MENU_OPACITY',payload);
        },
        cartMobileShow(context,payload){
            context.commit('CART_MOBILE_SHOW',payload);
        },
        userForMobile(context,payload){
            context.commit('USER_FOR_MOBILE',payload);
        },
        isFilterBox(context,payload){
            context.commit('IS_FILTER_BOX',payload);
        },
        filterPageOpen(context,payload){
            context.commit('FILTER_PAGE_OPEN',payload);
        }
    },
    mutations:{
        BIG_MENU_SHOW(state,payload){
            state.isBigMenuShow=payload;
        },
        BIG_MENU_OPACITY(state,payload){
            state.BigMenuOpacity=payload;
        },
        CART_MOBILE_SHOW(state,payload){
            state.cartMobileShow=payload;
        },
        USER_FOR_MOBILE(state,payload){
            state.userForMobile=payload;
        },
        IS_FILTER_BOX(state,payload){
            state.isFilterBox=payload;
        },
        FILTER_PAGE_OPEN(state,payload){
            state.filterPageOpen=payload;
        }
    },
})