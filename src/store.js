import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'home'},
      { text: 'Speaker', to: '/speaker', icon: 'rounded_corner'},
      { text: 'Team', to: '/team', icon:'group'},
      { text: 'Agenda', to: '/agenda', icon: 'group'},
      // { text: 'Location', to: '/contact', icon:'person'},
     
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
