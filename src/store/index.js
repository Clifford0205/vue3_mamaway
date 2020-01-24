import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isBigMenuShow:false,
        BigMenuOpacity:false,
    },

    actions:{
       BigMenuShow(context,status){
            context.commit('BIG_MENU_SHOW',status);
        },
        BigMenuOpacity(context,status){
            context.commit('BIG_MENU_OPACITY',status);
        }

    },
    mutations:{
        BIG_MENU_SHOW(state,status){
            state.isBigMenuShow=status;
        },
        BIG_MENU_OPACITY(state,status){
            state.BigMenuOpacity=status;
        }
    }
})