import RentalService from '../services/RentalService'

export const getRentals = store => {
  RentalService.fetchRentals().then((result) => {
    let rentals = []
    console.log(result)
    result.data.forEach((data) => {
      rentals.push({
        title: data.user_name,
        start: data.rent_start,
        end: data.rent_end,
        data: {
          register: data.rent_register,
          user_id: data.user_id,
          user_phone: data.user_phone,
          items: data.items
        }
      })
    })
    store.commit('setAllEvents', rentals)
  })
}
export default function EventPlugin () {
  return store => {
    getRentals(store)
    RentalService.fetchLightShapers().then(result => {
      store.commit('setLightShapers', result.data)
    })
    RentalService.fetchBundles().then(result => {
      store.commit('setBundles', result.data)
    })
    RentalService.fetchProducts().then(result => {
      store.commit('setProducts', result.data)
    })
    store.subscribe(mutation => {
      if (mutation.type === 'refresh') {
        getRentals(store)
      }
    })
  }
}
