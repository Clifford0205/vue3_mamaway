import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state:{
        isBigMenuShow:false,
        BigMenuOpacity:false,
        cartMobileShow:false
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
        }
    },
})