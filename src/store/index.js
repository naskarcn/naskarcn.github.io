import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    themeLight: true,
    showLoader: true,
    statusData: {
        country: '',
        confirmed: 0,
        active: 0,
        recovered: 0,
        death: 0
    }
  },
  getters: {
    STATUSDATA: state => {
        return state.statusData
    },
    THEMELIGHT: state => {
        return state.themeLight
    },
    SHOWLOADER: state => {
        return state.showLoader
    }
  },
  mutations: {
    SET_STATSUDATA: ( state, payload ) => {
        state.statusData.country = payload.country
        state.statusData.confirmed = payload.confirmed
        state.statusData.recovered = payload.recovered
        state.statusData.death = payload.death
        state.statusData.active = payload.confirmed - ( payload.recovered + payload.death )
    },
    CHANGE_THEMELIGHT:  ( state ) => {
        return state.themeLight = !state.themeLight
    },
    SHOW_HIDE_LOADER: ( state ) => {
        return state.showLoader = !state.showLoader
    }
  },
  actions: {
    setStatusData: ( context, payload ) => {
        context.commit("SET_STATSUDATA", payload)
    },
    changeThemeMode: ( context ) => {
        context.commit("CHANGE_THEMELIGHT")
    }, 
    showHideLoader: ( context ) => {
        context.commit("SHOW_HIDE_LOADER")
    }
  }
})

export default store