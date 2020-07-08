import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cataloglist:[],
    navflag:true,   //  导航
    headcomponent:"header-top",  //头部
    isPopMask: false,    // 遮罩层
    isShow: false,  // Albumtype
  },
  mutations: {
    updatenavflag(state , flag){//同步更新  state表示数据源
        state.navflag = flag;
    },
    updatemaskflag(state , flag){
        state.isPopMask = flag;
    },
    updateAlbumtype(state,flag){
        state.isShow = flag
    }
  },
  actions: {},
  modules: {}
});
