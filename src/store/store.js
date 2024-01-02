


import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      user,
    },
    state(){
      return{            
              isLoading: true,
              userLogged: false
               };
    },
    actions:{
      changeIsLoading(context, payload){
        context.commit('setIsLoading', payload)
      }

    },
    mutations:{
      setIsLoading(state, payload){
        state.isLoading = payload;
      }
    },
    getters:{
      isLoading(state){
        return state.isLoading;
      }
    }
    
});