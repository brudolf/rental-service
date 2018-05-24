import Vue from 'vue'
import Vuex from 'vuex'
import downLoadEvents from '@/store/downLoadEvents'
Vue.use(Vuex)
const plugin = downLoadEvents()

export const store = new Vuex.Store({
  state: {
    events: [],
    items: [{
      zip: '',
      town: '',
      street: ''
    }]
  },
  plugins: [plugin],
  getters: {
    getEvents (state) {
      return state.events
    },
    getItems (state) {
      return state.items
    }
  },
  mutations: {
    setAllEvents (state, val) {
      state.events = val
    },
    addItemsRow (state) {
      state.items.push({
        zip: '',
        town: '',
        street: ''
      })
    }
  }
})
