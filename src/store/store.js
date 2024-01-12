import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import meeting from './modules/meeting';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      user,
      meeting,
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