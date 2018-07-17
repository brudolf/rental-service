import Api from '@/services/Api'

let config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export default {
  fetchRentals () {
    return Api().get('/rental/')
  },
  addRental (param) {
    return Api().post('/rental/', param, config)
  },
  fetchLightShapers () {
    return Api().get('/lightshaper/')
  },
  fetchProducts () {
    return Api().get('/rental_product/')
  },
  fetchBundles () {
    return Api().get('/rental_bundle/')
  },
  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
