import Vue from 'vue'
import Vuex from 'vuex'
import downLoadEvents from '@/store/downLoadEvents'
Vue.use(Vuex)
const plugin = downLoadEvents()

export const store = new Vuex.Store({
  state: {
    events: [],
    items: [{
      type: '',
      product: '',
      quantity: ''
    }],
    lightshapers: [],
    products: []
  },
  plugins: [plugin],
  getters: {
    getEvents (state) {
      return state.events
    },
    getItems (state) {
      return state.items
    },
    getLightShapersList (state) {
      let s = []
      state.lightshapers.forEach(item =>
        s.push({
          'name': item.lightshaper_name,
          'value': item.lightshaper_name
        }))
      return s
    },
    getProductList (state) {
      let p = []
      state.products.forEach(item =>
        p.push({
          'name': item.product_name + ' (' + item.product_quantity + ')',
          'value': item.product_name
        })
      )
      return p
    }
  },
  mutations: {
    setAllEvents (state, val) {
      state.events = val
    },
    setLightShapers (state, val) {
      state.lightshapers = val
    },
    setProducts (state, val) {
      state.products = val
    },
    addItemsRow (state) {
      state.items.push({
        type: '',
        product: '',
        quantity: ''
      })
    }
  }
})
