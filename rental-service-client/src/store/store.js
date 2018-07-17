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
    products: [],
    bundles: []
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
          'id': item.id,
          'name': item.name,
          'value': item.price,
          'quantity': item.quantity
        }))
      return s
    },
    getProductList (state) {
      let p = []
      state.products.forEach(item =>
        p.push({
          'id': item.id,
          'name': item.name,
          'price': item.price,
          'quantity': item.quantity,
          'type': item.type
        })
      )
      return p
    },
    getBundles (state) {
      let b = []
      state.bundles.forEach(item =>
        b.push({
          'id': item.id,
          'name': item.name,
          'price': item.price,
          'items': item.items
        })
      )
      return b
    }
  },
  mutations: {
    setAllEvents (state, val) {
      state.events = val
    },
    setLightShapers (state, val) {
      state.lightshapers = val
    },
    setBundles (state, val) {
      state.bundles = val
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
