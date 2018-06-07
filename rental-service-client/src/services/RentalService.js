import Api from '@/services/Api'

export default {
  fetchRentals () {
    return Api().get('rental')
  },
  addRental (param) {
    return Api().post('rental', param)
  },
  fetchLightShapers () {
    return Api().get('rental/lightshapers')
  },

  fetchProducts () {
    return Api().get('rental/products')
  },

  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
