import RentalService from '../services/RentalService'

export default function WebSocketPlugin (socket) {
  return store => {
    RentalService.fetchRentals().then((result) => {
      let rentals = []
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
    RentalService.fetchLightShapers().then(result => {
      store.commit('setLightShapers', result.data)
    })
    RentalService.fetchProducts().then(result => {
      store.commit('setProducts', result.data)
    })
  }
}
